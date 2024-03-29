<script setup lang="ts">
const main = ref<HTMLElement | null>(null)
const fullPage = new FullPage()
const loader = ref<HTMLElement | null>(null)
const route = useRoute()
const active = ref<string>('home')

onMounted(() => {
  fullPage.init(main.value!)
  setTimeout(() => {
    main.value!.classList.remove('hidden')
    main.value!.classList.add('zoom-in')
    loader.value!.classList.add('hidden')
  })

  fullPage.on('scroll', (from, to) => {
    setTimeout(() => {
      if (route.hash !== to.id) {
        active.value = to.id
        window.history.replaceState(window.history.state, '', `#${to.id}`)
      }
    })
  })

  if (route.hash) {
    setTimeout(() => {
      fullPage.moveTo(route.hash)
    })
  }
})

watch(() => route.hash, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    fullPage.moveTo(newVal)
  }
})
</script>

<template>
  <span ref="loader">
    <SVG name="loading" class="absolute top-1/2 left-1/2 w-20 h-20 z-20"/>
  </span>
  <div class="wrapper">
    <header class="__header">
      <ClientOnly>
        <Nav :active="active" />
      </ClientOnly>
    </header>
    <main class="__main hidden" ref="main">
      <slot/>
    </main>
    <footer class="__footer">
      <Fov/>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
}

.__header {
  flex: none;
}

.__main {
  flex: 1;
}

.__footer {
  flex: none;
}

@keyframes zoom-in {
  0% {
    transform: scale(0.95);
    border-radius: 50px;
  }
  100% {
    transform: scale(1);
    border-radius: 0;
  }
}

.zoom-in {
  animation: zoom-in 0.5s ease-in-out;
}
</style>
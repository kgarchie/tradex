<script setup lang="ts">
const menu = ref<string | null>(null)
const fov = ref<HTMLElement | null>(null)

function toggleMenu(chosen: string, event: PointerEvent) {
  if (menu.value === chosen) {
    menu.value = null
  } else {
    menu.value = chosen
  }

  let container = event.target as HTMLElement
  if (container.tagName.toLowerCase() === 'img') {
    container = container.parentElement as HTMLElement
  }

  container.parentElement?.querySelector('.active')?.classList.remove('active')
  container.classList.add('active')

  if (menu.value !== 'message') {
    const onMouseLeave = () => {
      container.classList.remove('active')
      container.removeEventListener('mouseleave', onMouseLeave)
    }
    container.addEventListener('mouseleave', onMouseLeave)
  } else {
    const unclick = unClick(fov.value as HTMLElement, () => {
      menu.value = null
      container.classList.remove('active')
      unclick.remove()
    })
  }
}
</script>

<template>
  <nav
      class=" w-fit rounded shadow-lg bottom-12 bg-White fixed left-1/2 transform -translate-x-1/2 z-10 hover:opacity-100 cursor-pointer transition-opacity p-1"
      :class="{'opacity-70': menu === null }"
      ref="fov">
    <FovPopOver :menu="menu"
                class="bg-White p-4 rounded-lg shadow-lg z-10 absolute left-1/2 transform -translate-x-1/2 bottom-12"
                v-if="menu !== null"/>
    <div class="flex justify-between items-center w-fit h-fit">
      <div class="p-1 hover:bg-white rounded transition-colors" @click="toggleMenu('whatsapp', $event)"
           title="send us a whatsapp message">
        <SVG name="whatsapp" class="w-8 h-8"/>
      </div>
      <div class="p-1 hover:bg-white rounded transition-colors" @click="toggleMenu('phone', $event)" title="call us">
        <SVG name="phone" class="w-8 h-8"/>
      </div>
      <div class="p-1 hover:bg-white rounded transition-colors" @click="toggleMenu('mail', $event)"
           title="send us an email">
        <SVG name="mail" class="w-8 h-8"/>
      </div>
      <div class="p-1 hover:bg-white rounded transition-colors" @click="toggleMenu('message', $event)"
           title="send us a live message">
        <SVG name="message" class="w-8 h-8"/>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.active {
  background-color: white;
}
</style>
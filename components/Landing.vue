<script setup lang="ts">
onMounted(() => {
  const blobs = document.querySelectorAll('[data-name="blob"]') as NodeListOf<HTMLElement>

  blobs.forEach((blob: HTMLElement) => {
    const x = Math.random() * (window.innerWidth - 200)
    const y = Math.random() * (window.innerHeight - 200)
    const scale = Math.random() * 1.5
    const rotate = Math.random() * 360
    blob.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`
  })
})
</script>
<template>
  <NuxtImg src="/images/freight.webp" alt="Landing Page Image"
    class="absolute top-0 -z-10 w-full h-full object-cover" />
  <div class="w-full overflow-hidden">
    <div class="max-w-[1200px] h-[100vh] m-auto flex relative overflow-visible" id="main">
      <Banner style="margin-top: 30vh; height: fit-content; padding: 50px;" class="backdrop-blur ml-20">
        <h1 class="text-6xl font-bold text-white font-carter text-gradient drop-shadow-lg mb-2.5">Hello,</h1>
        <h2 class="text-white font-russo text-2xl drop-shadow-md ml-1 mb-0.5">We are Kenya Tradex.</h2>
        <p class="text-white drop-shadow backdrop-blur font-roboto">A customs agent in
          Kenya offering clearing and forwarding services
          in Mombasa. We also provide customs
          consultancy, import and export commission agents, shipping, transportation, warehousing and consolidation
          among
          other logistics services.
        </p>
        <div class="flex space gap-4 mt-4">
          <NuxtLink
            class="bg-white text-Black px-4 py-2 rounded-md text-lg font-semibold hover:bg-Blue hover:text-White transition-colors">
            Get Started
          </NuxtLink>
          <NuxtLink
            class="bg-white text-blue-500 px-4 py-2 rounded-md text-lg font-semibold hover:bg-White transition-colors">
            Learn More
          </NuxtLink>
        </div>
      </Banner>
      <SVG name="blob" class="w-72 absolute -z-10 opacity-30 blur-lg" v-for="i in 20" :id="`blob-${i}`"
        data-name="blob" />
    </div>
  </div>
  <SVG name="waves" style="filter: blur(2px);" />
</template>
<style scoped>
.text-gradient {
  background: linear-gradient(135deg, white 0%, #f6e000);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
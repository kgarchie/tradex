<template>
  <div class="max-w-[1200px] m-auto font-roboto grid w-full bg-transparent max-sm:exempt-scroll">
    <Banner class="services m-auto max-sm:max-h-[80vh] max-sm:exempt-scroll">
      <h1 class="text-6xl font-bold font-carter text-gradient drop-shadow-lg mb-2.5 max-sm:text-3xl">
        Services,</h1>
      <div class="flex sm:flex-wrap max-sm:overflow-x-scroll max-sm:exempt-scroll">
        <ServicesCard class="max-sm:exempt-scroll"/>
        <ServicesCard class="max-sm:exempt-scroll"/>
        <ServicesCard class="max-sm:exempt-scroll"/>
        <ServicesCard class="max-sm:exempt-scroll"/>
        <ServicesCard class="max-sm:exempt-scroll"/>
        <ServicesCard class="max-sm:exempt-scroll"/>
      </div>
    </Banner>
  </div>
  <ClientOnly>
    <SVG name="blue_blob"
         v-for="i in 20"
         class="w-72 absolute -z-10 opacity-30 blur-lg"
         :key="i"
         :style="{top: `${Math.random() * 100}vh`, left: `${Math.random() * 100}vw`, transform: `scale(${Math.random() * 1.5}) rotate(${Math.random() * 360}deg)`}"
         :id="`blob-${i}`"
    />
  </ClientOnly>
</template>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, white 0%, #f6e000);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.services {
  height: fit-content;
  padding: 50px;
  font-size: clamp(1rem, 1vw, 1.5rem);
  width: fit-content;
}

@media (max-width: 768px) {
  .services {
    padding: 2rem;
  }
}
</style>
<script setup lang="ts">
</script>
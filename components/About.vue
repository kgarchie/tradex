<script setup lang="ts">
</script>

<template>
  <div class="max-w-[1200px] m-auto text-white font-roboto isolate">
    <video autoplay muted loop ref="video"
           class="aspect-video w-full h-full m-auto absolute top-0 left-0 object-cover z-0 pointer-events-none">
      <source src="/videos/landBlue.mp4" type="video/mp4">
    </video>
    <ClientOnly>
      <SVG name="brown_blob"
           v-for="i in 20"
           class="w-72 absolute opacity-30 blur-lg"
           :key="i"
           :style="{top: `${Math.random() * 100}vh`, left: `${Math.random() * 100}vw`, transform: `scale(${Math.random() * 1.5}) rotate(${Math.random() * 360}deg)`}"
           :id="`blob-${i}`"
      />
    </ClientOnly>
    <Banner class="z-10 bg-Brown backdrop-blur-3xl rounded-lg bg-opacity-80 banner shadow-lg"
            variant="secondary">
      <h1 class="text-6xl font-bold text-white font-carter text-gradient drop-shadow-lg mb-2.5 max-sm:text-3xl">About,</h1>
      <div class="flex gap-8 max-sm:flex-col">
        <div class="w-full">
          <NuxtImg src="/images/site_woman.png" alt="A picture of a woman on a construction site"
                   class="rounded shadow-lg object-cover object-center w-full h-full"/>
        </div>
        <div class="w-full max-sm:exempt-scroll">
          <div class="max-sm:max-h-[25vh] max-sm:overflow-y-scroll max-sm:exempt-scroll">
            <p class="font-bold mb-1  max-sm:exempt-scroll">
              Kenya TradeX is a logistics company dully registered in Kenya with the Registrar of Companies under the
              Kenyan
              Companies Act Cap 486 – Laws of Kenya.
            </p>
            <p class="mb-1 max-sm:exempt-scroll">
              We offer global <span class="font-bold">logistics services</span> including but not limited to clearing and forwarding, transportation,
              import
              and export commission agents, consultancy services, warehousing, and consolidation. Our logistics services
              extend beyond Kenya’s boundaries to the wider East African Community.
            </p>
            <p class="mb-1 max-sm:exempt-scroll">
              Having been established in 2008, the company has grown over the years to command a section of Kenya’s as
              well
              as
              Ugandan Market through offering quality and professional logistics services. Our transport network runs
              across
              the
              East African region.
            </p>
            <p class="mb-1 max-sm:exempt-scroll">
              Based in <span class="font-bold">Mombasa, Kenya</span> next to East Africa’s biggest port, Kenya TradeX is placed strategically to provide
              all
              logistics-related services in freight movement and in a professional, fast and reliable manner. We also have
              offices in Nairobi and an Agency in Kampala, Uganda to support our customers’ needs.
            </p>
          </div>
        </div>
      </div>
    </Banner>
  </div>
</template>

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, white 0%, var(--blue));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.banner {
  height: fit-content;
  padding: 50px;
  font-size: clamp(1rem, 1vw, 1.5rem);
  width: fit-content;
}


@media (max-width: 768px) {
  .banner {
    padding: 2rem;
  }
}
</style>
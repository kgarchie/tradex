<template>
  <div class="max-w-[1200px] m-auto font-roboto grid w-full bg-transparent max-sm:exempt-scroll">
    <Banner class="services m-auto max-sm:max-h-[80vh] max-sm:exempt-scroll">
      <h1 class="text-6xl font-bold font-carter text-gradient drop-shadow-lg mb-2.5 max-sm:text-3xl">
        Services,</h1>
      <div class="flex sm:flex-wrap max-sm:overflow-x-scroll max-sm:exempt-scroll">
        <ServicesCard class="max-sm:exempt-scroll" svg="plane">
          <template v-slot:header>Clearing & Forwarding</template>
          <template v-slot:body>Our good relationship with leading shipping lines have enabled us come up with a
            facility and makes clearing and transportation of cargo as easy as abc</template>
        </ServicesCard>
        <ServicesCard class="max-sm:exempt-scroll" svg="advice">
          <template v-slot:header>
            Customs Consultancy
          </template>
          <template v-slot:body>
            Struggling with the East African Community Customs Law? Do you have issues with the KRA and don’t know where
            to begin?
          </template>
        </ServicesCard>
        <ServicesCard class="max-sm:exempt-scroll" svg="flight">
          <template v-slot:header>
            Air Freight
          </template>
          <template v-slot:body>
            We pride in uplifting our clients freight within 24 hrs to a maximum 48 hours after packing, subject to
            availability of all necessary documentation and availability of carrier space.
          </template>
        </ServicesCard>
        <ServicesCard class="max-sm:exempt-scroll" svg="water">
          <template v-slot:header>
            Sea Freight
          </template>
          <template v-slot:body>
            We pride in uplifting our clients freight within 24 hrs to a maximum 48 hours after packing, subject to
            availability of all necessary documentation and availability of carrier space.
          </template>
        </ServicesCard>
        <ServicesCard class="max-sm:exempt-scroll" svg="van">
          <template v-slot:header>
            Transportation
          </template>
          <template v-slot:body>
            We pride in our team of highly qualified driver and a fleet of over 15 trucks that meets high international
            safety standards. All our truck have GPRS tracking systems.
          </template>
        </ServicesCard>
        <ServicesCard class="max-sm:exempt-scroll" svg="smome">
          <template v-slot:header>
            Warehousing
          </template>
          <template v-slot:body>
            We have partnered with experts of warehousing in Mombasa to provide our clients who for some reason are not
            ready for cargo to be delivered with the best warehousing facility.
          </template>
        </ServicesCard>
      </div>
    </Banner>
  </div>
  <ClientOnly>
    <SVG name="blue_blob" v-for="i in 20" class="w-72 absolute -z-10 opacity-30 blur-lg" :key="i"
      :style="{ top: `${Math.random() * 100}vh`, left: `${Math.random() * 100}vw`, transform: `scale(${Math.random() * 1.5}) rotate(${Math.random() * 360}deg)` }"
      :id="`blob-${i}`" />
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
<script setup lang="ts">
const svgs = {
  waves: [
    `/svgs/waves/wave-1.svg`,
    `/svgs/waves/wave-2.svg`,
    `/svgs/waves/wave-3.svg`
  ],
  waves_light: [
    '/svgs/waves_light/wave-1.svg',
    '/svgs/waves_light/wave-2.svg',
    '/svgs/waves_light/wave-3.svg'
  ],
  blue_blob: `/svgs/blob.svg`,
  brown_blob: `/svgs/blob_dark.svg`,
  loading: `/svgs/loading.svg`,
  whatsapp: `/svgs/whatsapp-2.svg`,
  mail: `/svgs/gmail.svg`,
  phone: `/svgs/phone-3.svg`,
  message: `/svgs/message-3.svg`,
  close: `/svgs/close.svg`,
  rocket: '/svgs/rocket.svg',
  plane: '/svgs/plane.svg',
  consult: '/svgs/consult.svg',
  smome: '/svgs/smome.svg',
  flight: '/svgs/flight.svg',
  van: '/svgs/van.svg',
  water: '/svgs/water.svg',
  advice: '/svgs/advice.svg'
}

defineProps({
  name: {
    type: String as PropType<keyof typeof svgs>,
    required: true
  },
})
</script>

<template>
  <template v-if="name === 'waves'">
    <div id="waves">
      <img v-for="(wave, index) in svgs.waves" :key="index" :src="wave" alt="wave" class="wave"/>
    </div>
  </template>
  <template v-else-if="name === 'waves_light'">
    <div id="waves">
      <img v-for="(wave, index) in svgs.waves_light" :key="index" :src="wave" alt="wave" class="wave"/>
    </div>
  </template>
  <template v-else-if="name === 'blue_blob'">
    <div>
      <figure class="blob">
        <img :src="svgs.blue_blob" alt="blob"/>
        <figcaption>
          <slot/>
        </figcaption>
      </figure>
    </div>
  </template>
  <template v-else-if="name === 'brown_blob'">
    <div>
      <figure class="blob">
        <img :src="svgs.brown_blob" alt="blob"/>
        <figcaption>
          <slot/>
        </figcaption>
      </figure>
    </div>
  </template>
  <template v-else-if="name === 'loading'">
    <img :src="svgs.loading" alt="loading" class="loading"/>
  </template>
  <template v-else>
    <img :src="svgs[name]" :alt="name"/>
  </template>
</template>

<style scoped>
@keyframes wave {
  0% {
    left: 0;
  }

  5% {
    left: -2%;
  }

  10% {
    left: -5%;
  }

  15% {
    left: -8%;
  }

  20% {
    left: -10%;
  }

  25% {
    left: -12%;
  }

  30% {
    left: -15%;
  }

  35% {
    left: -17%;
  }

  40% {
    left: -20%;
  }

  45% {
    left: -24%;
  }

  50% {
    left: -25%;
  }

  55% {
    left: -24%;
  }

  60% {
    left: -20%;
  }

  65% {
    left: -17%;
  }

  70% {
    left: -15%;
  }

  75% {
    left: -12%;
  }

  80% {
    left: -10%;
  }

  85% {
    left: -8%;
  }

  90% {
    left: -5%;
  }

  95% {
    left: -2%;
  }

  100% {
    left: 0;
  }
}

#waves {
  position: absolute;
  width: 100%;
  height: 200px;
  overflow: hidden;
  bottom: 0;
}

.wave {
  transform: scaleX(1.5) scaleY(0.8) translateY(20%);
  position: absolute;
  bottom: 0;
}

.wave:nth-child(3) {
  animation: wave 8s linear infinite;
}

.wave:nth-child(2) {
  animation: wave 10s linear infinite;
  animation-delay: 1s;
}

.wave:nth-child(1) {
  animation: wave 12s linear infinite;
  animation-delay: 2s;
}

.blob {
  position: relative;
}

.blob figcaption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}


@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  animation: rotate 1s linear infinite;
  translate: -50% -50%;
}

</style>
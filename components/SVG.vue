<script setup lang="ts">
const svgs = {
  waves: [
    `<svg viewBox="-1 0 1440 146" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M-1 58.5C0 58.5 59 38.5 85 24.5C114.094 8.83379 136 2.99999 170 0.999988C204 -1.00001 250 11.5 307.5 44C378.967 84.3942 398.961 76.6926 480 73.6957C620.5 68.5 640.5 90 720 101C799.5 112 937.414 69.29 1016 73.6957C1096.4 83.6457 1124.5 105.696 1210 105.696C1295.5 105.696 1350.5 54.2458 1400.4 26.2458L1421 18.2458L1440 13.6957V145.196H1400.4C1359.6 145.196 1280.4 145.196 1200 145.196C1119.6 145.196 1040.4 145.196 960 145.196C879.6 145.196 800.4 145.196 720 145.196C639.6 145.196 560.4 145.196 480 145.196C399.6 145.196 320.4 145.196 240 145.196C159.6 145.196 80.4 145.196 39.6 145.196H0V58.5Z"
        fill="#1475DF" />
    </svg>`,
    `<svg viewBox="-1 0 1440 158" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M-1.499878 30.2856L35.2999 21.7883C68.8999 13.291 137.3 -3.70372 205.7 9.04229C275.3 21.7883 343.7 64.275 412.1 60.0263C480.5 55.7777 548.9 4.79362 617.3 0.544946C685.7 -3.70373 755.3 38.783 823.7 68.5237C892.1 98.2644 960.5 115.259 1028.9 106.762C1097.3 98.2644 1165.7 64.275 1235.3 47.2803C1303.7 30.2856 1372.1 30.2856 1405.7 30.2856H1440.5V157.746H1405.7C1372.1 157.746 1303.7 157.746 1235.3 157.746C1165.7 157.746 1097.3 157.746 1028.9 157.746C960.5 157.746 892.1 157.746 823.7 157.746C755.3 157.746 685.7 157.746 617.3 157.746C548.9 157.746 480.5 157.746 412.1 157.746C343.7 157.746 275.3 157.746 205.7 157.746C137.3 157.746 68.8999 157.746 35.2999 157.746H0.499878V30.2856Z"
        fill="#1475DF" fill-opacity="0.3" />
    </svg>`,
    `<svg viewBox="-1 0 1440 158" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M-1.499878 30.2856L35.2999 21.7883C68.8999 13.291 137.3 -3.70372 205.7 9.04229C275.3 21.7883 343.7 64.275 412.1 60.0263C480.5 55.7777 548.9 4.79362 617.3 0.544946C685.7 -3.70373 755.3 38.783 823.7 68.5237C892.1 98.2644 960.5 115.259 1028.9 106.762C1097.3 98.2644 1165.7 64.275 1235.3 47.2803C1303.7 30.2856 1372.1 30.2856 1405.7 30.2856H1440.5V157.746H1405.7C1372.1 157.746 1303.7 157.746 1235.3 157.746C1165.7 157.746 1097.3 157.746 1028.9 157.746C960.5 157.746 892.1 157.746 823.7 157.746C755.3 157.746 685.7 157.746 617.3 157.746C548.9 157.746 480.5 157.746 412.1 157.746C343.7 157.746 275.3 157.746 205.7 157.746C137.3 157.746 68.8999 157.746 35.2999 157.746H0.499878V30.2856Z"
        fill="#1475DF" fill-opacity="0.3" />
    </svg>`
  ],
  blob: `<svg width="658" height="648" viewBox="0 0 658 648" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M317.803 16.8826C368.716 23.7709 418.761 30.6618 465.014 54.5888C513.794 79.8222 559.31 112.242 591.968 158.708C627.067 208.648 658.562 266.536 657.992 329.163C657.424 391.636 620.306 445.18 588.883 497.699C558.68 548.179 528.439 602.144 478.577 629.032C429.648 655.417 372.401 647.821 317.803 643.88C266.12 640.15 216.897 627.95 169.009 606.687C115.552 582.952 53.7762 565.13 22.4921 512.763C-8.98858 460.068 1.09931 391.779 3.21289 329.163C5.26359 268.409 9.80895 207.711 34.632 153.109C60.4631 96.2899 93.9252 37.4442 147.564 11.6398C200.295 -13.7277 260.5 9.12991 317.803 16.8826Z" fill="#1774DE"/>
        </svg>`
}

defineProps({
  name: {
    type: String as PropType<'waves' | 'blob'>,
    required: true
  },
})

function toImg(svg: string) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
</script>

<template>
  <template v-if="name == 'waves'">
    <div id="waves">
      <img v-for="(wave, index) in svgs.waves" :key="index" :src="toImg(wave)" alt="wave" class="wave" />
    </div>
  </template>
  <template v-else-if="name == 'blob'">
    <figure>
      <div class="blob">
        <img :src="toImg(svgs.blob)" alt="blob" />
        <figcaption>
          <slot />
        </figcaption>
      </div>
    </figure>
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
    left: 0%;
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
</style>
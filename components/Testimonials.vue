<template>
  <Banner class="m-auto banner w-full" variant="secondary">
    <h1 class="text-6xl font-bold text-white font-carter text-gradient drop-shadow-lg mb-2.5 max-sm:text-3xl">
      Testimonials,</h1>
    <div class="w-full">
      <div id="testicontainer" class="flex w-full justify-center">
        <div class="left">
          <div class="person text-white" v-for="(testimonial, index) in testimonials" :key="index"
               @click="clicked = index" :class="{ 'bg-White color-black': testimonial === chosen }">
            <p class="ml-5">{{ testimonial.name }}</p>
            <NuxtImg :src="testimonial.img" :alt="testimonial.name"/>
          </div>
        </div>
        <div class="right">
          <Testimonial :quote="chosen.quote"
                       :name="chosen.name"
                       :company="chosen.company"
                       :img="chosen.img"
                       class="shadow-lg"
          />
        </div>
      </div>
    </div>
  </Banner>
</template>
<script setup>
import {h} from 'vue'

const clicked = ref(null)

const testimonials = [
  {
    quote: "Thank you for handling our containers since 2014 with no major issues at all. Happy to work you.",
    name: 'Robanne Traders',
    company: 'Robanne Traders',
    img: '/images/company.jpeg'
  },  {
    quote: 'A very professional Company that takes good care of her customers. Happy to clear our cars with you',
    name: 'Bhavin Motors',
    company: 'Bhavin Motors',
    img: '/images/bhavin.png'
  }, {
    quote: 'Honest, Efficient and Customer friendly Company. They will always deliver. Recommended',
    name: 'Mwalo Paper Distributions',
    company: 'Mwalo Paper Distributions',
    img: '/images/company.jpeg'
  }, {
    quote: 'Kenya Tradex is an effective & efficient Company. Always willing to go an extra mile for us, anytime. Keep it up!',
    name: 'Magari Deals',
    company: 'Magari Deals',
    img: '/images/magari.png'
  }
]

const Testimonial = defineComponent({
  props: {
    quote: String,
    name: String,
    company: String,
    img: String
  },
  setup(props) {
    return () => h('div', {class: 'bg-White rounded ml-5 smooth'}, [
      h('div', {class: 'max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 ml-10'}, [
        h('figure', {class: 'max-w-screen-md mx-auto'}, [
          h('svg', {
            class: 'h-12 text-gray-400', viewBox: '0 0 24 27', fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg'
          }, [
            h('path', {
              d: 'M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z',
              fill: 'currentColor'
            })
          ]),
          h('blockquote', {}, [
            h('p', {class: 'text-2xl font-medium text-gray-900'}, props.quote)
          ]),
          h('figcaption', {class: 'flex items-center mt-6 space-x-3'}, [
            h('img', {
              class: 'w-6 h-6 rounded-full',
              src: props.img,
              alt: 'profile picture'
            }),
            h('div', {class: 'flex items-center divide-x-2 divide-gray-500'}, [
              h('div', {class: 'pr-3 font-medium text-gray-900 capitalize'}, props.name),
              h('div', {class: 'pl-3 text-sm font light text-gray-500'}, props.company)
            ])
          ])
        ])
      ])
    ])
  }
})

const chosen = computed(() => {
  if (!clicked.value) return testimonials.at(0)
  return testimonials.at(clicked.value)
})
</script>
<style scoped>
.color-black{
  color: var(--black);
}

.text-gradient {
  background: linear-gradient(135deg, white 0%, var(--blue));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.left .person {
  width: 250px;
  height: 100px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 1rem;
  cursor: pointer;
  padding: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.left .person img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

.right {
  min-height: 355px;
  display: grid;
  place-items: center;
  margin-bottom: 5rem;
}

.smooth {
  transition: height 0.3s ease-in-out;
}

@media screen and (max-width: 768px) {
  #testicontainer {
    flex-direction: column;
  }

  .left {
    margin-bottom: 1.5rem;
    flex-direction: row;
  }
}

.banner {
  height: fit-content;
  padding: 50px;
  font-size: clamp(1rem, 1vw, 1.5rem);
  width: fit-content !important;
  max-width: 1200px;
}


@media (max-width: 768px) {
  .banner {
    padding: 2rem;
    max-width: 90vw;
  }
}
</style>
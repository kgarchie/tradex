<script setup lang="ts">
const props = defineProps({
  active: String
})

const isActive = computed(() => {
  return (route: string) => {
    return route === props.active
  }
})
</script>

<template>
  <nav
      class="flex w-full max-w-[1200px] justify-between items-center rounded shadow-lg mt-2 p-3 bg-White fixed left-1/2 transform -translate-x-1/2 z-20 max-sm:max-w-[98vw]">
    <div class="logo">
      <NuxtLink to="/#home" class="flex gap-2">
        <NuxtImg src="/images/logo.webp" alt="Logo" class="w-8 h-8"/>
        <NuxtImg src="/images/kenyatradex.png" alt="kenta tradex" class="h-8 max-sm:hidden"/>
      </NuxtLink>
    </div>
    <div class="nav-links flex gap-4 items-center last:mr-2">
      <NuxtLink
          to="/#home"
          :class="isActive('home') ? 'active' : ''">Home
      </NuxtLink>
      <NuxtLink to="/#about"
                :class="isActive('about') ? 'active' : ''">About
      </NuxtLink>
      <NuxtLink
          to="/#services"
          :class="isActive('services') ? 'active' : ''">Services
      </NuxtLink>
      <NuxtLink
          to="/#testimonials"
          :class="isActive('testimonials') ? 'active' : ''">Testimonials
      </NuxtLink>
      <NuxtLink
          to="/#contact"
          class="mr-2"
          :class="isActive('contact') ? 'active' : ''">Contact
      </NuxtLink>
      <!--      <NuxtLink class="button bg-Blue text-white hover:bg-blue-400 pb-2 shadow-lg" to="/quote">Get Quote</NuxtLink>-->
    </div>
    <button class="ham shadow-lg rounded">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
      </svg>
    </button>
  </nav>
</template>

<style scoped>
.ham {
  display: none;
  width: 30px;
  padding: 2px;
}

a.active {
  color: var(--blue);
}

@media screen and (max-width: 768px) {
  .ham {
    display: block;
  }

  .nav-links {
    position: absolute;
    flex-direction: column;
    top: -20rem;
    left: 50%;
    translate: -50% 0;
    background-color: var(--white);
    width: 90%;
    border-radius: 10px;
    padding: 2rem;
  }

  .nav-links.active {
    top: 4rem;
  }

  .button {
    position: absolute;
    top: -3.25rem;
    right: 2.5rem;
    padding: 0.25rem 0.5rem;
  }
}
</style>
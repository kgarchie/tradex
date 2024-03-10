<script setup lang="ts">

</script>

<template>
  <nav class="flex w-full max-w-[1200px] justify-between items-center rounded shadow-lg mt-4 p-3 bg-White fixed left-1/2 transform -translate-x-1/2 z-10">
    <div class="logo">
      <NuxtLink to="/" class="flex gap-2">
        <img src="/images/logo.webp" alt="Logo" class="w-8 h-8"/>
        <img src="/images/kenyatradex.png" alt="kenta tradex" class="h-8">
      </NuxtLink>
    </div>
    <div class="nav-links flex gap-4 items-center last:mr-2">
      <NuxtLink>Home</NuxtLink>
      <NuxtLink>About</NuxtLink>
      <NuxtLink>Services</NuxtLink>
      <NuxtLink>Contact</NuxtLink>
      <NuxtLink class="button bg-Blue text-white hover:bg-blue-400 pb-2 shadow-lg">Get Quote</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>

</style>
<script setup lang="ts">

import Nav from "~/components/Nav.vue";
</script>

<template>
  <header class="__header">
    <Nav/>
  </header>
  <main class="__main">
    <slot/>
  </main>
  <footer class="__footer"></footer>
</template>

<style>
#__nuxt {
  @apply flex flex-col min-h-screen;
}

.__header {
  @apply flex-none;
}

.__main {
  @apply flex-1;
}

.__footer {
  @apply flex-none;
}
</style>
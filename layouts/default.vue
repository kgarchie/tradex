<script setup lang="ts">
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
}

.__header {
  flex: none;
}

.__main {
  flex: 1;
}


.__footer {
  flex: none;
}
</style>
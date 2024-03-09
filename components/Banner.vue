<script setup lang="ts">
defineProps({
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary'
  },
})
</script>

<template>
  <div :class="variant" class="shadow">
    <slot/>
  </div>
</template>

<style scoped>
div {
  width: 30vw;
  height: 70vh;
}

.primary {
  background: linear-gradient(180deg, #1476DF 0%, #24495F 60%, rgba(48, 34, 23, 0.5) 100%);
  border-radius: 1rem;
  padding: 1rem;
}

.secondary {
  background: linear-gradient(180deg, #866850 0%, #866850 30.5%, rgba(111, 93, 77, 0.861007) 58.5%, rgba(89, 82, 75, 0.728234) 72%, rgba(19, 48, 67, 0.31) 100%);;
  border-radius: 1rem;
  padding: 1rem;
}
</style>
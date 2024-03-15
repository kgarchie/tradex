<script setup lang="ts">
defineProps({
  svg: String
})
</script>

<template>
  <div class="flex flex-col w-[350px] bg-White rounded m-2 shadow drop-shadow-lg max-sm:min-w-[350px]">
    <div class="header">
      <SVG :name="svg as any || 'rocket'" class="w-[30px]" />
      <span class="header-content">
        <slot name="header">
          Header Content.
        </slot>
      </span>
    </div>
    <div class="body">
      <slot name="body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt doloribus ex molestias mollitia nihil numquam
        placeat quo sequi ut voluptas?
      </slot>
    </div>
  </div>
</template>

<style scoped>
.header {
  border-bottom: 2px solid white;
  padding: 30px 30px 15px;
}

.header-content {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.8em;
}

.body {
  padding: 20px 30px 30px;
}
</style>
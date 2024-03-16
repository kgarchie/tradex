<script setup lang="ts">
defineProps({
  svg: String
})
</script>

<template>
  <div class="flex flex-col w-[350px] bg-White bg-opacity-70 rounded m-2 shadow drop-shadow-lg max-sm:min-w-[350px] card">
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

@media screen and (max-width: 1366px){
  .header {
    padding: 20px 20px 10px;
  }

  .body{
    padding: 15px 20px 20px;
    font-size: 1vw;
  }

  .header img{
    width: 20px;
  }
}

@media screen and (max-width: 768px){
  .body{
    font-size: 1rem;
  }
}

.card {
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 260px;
  flex-direction: column;
  position: relative;
}

.card:hover::before {
  opacity: 1;
}

.card::before,
.card::after {
  border-radius: inherit;
  content: "";
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity 500ms;
  width: 100%;
}

.card::before {
  background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.15),
      transparent 40%
  );
  background-blend-mode: overlay;
  z-index: 3;
}

.card::after {
  background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.15),
      transparent 40%
  );
  z-index: 1;
}

</style>
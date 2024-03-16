<script setup lang="ts">
const messages = ref(false)
const fov = ref<HTMLElement | null>(null)
const config = $config

function toggleMessages() {
  messages.value = !messages.value

  const unclick = unClick(fov.value, () => {
    messages.value = false
    unclick.remove()
  })
}

async function whatsapp() {
  await navigateTo({
    path: 'https://api.whatsapp.com/send',
    query: {
      phone: $config.public.contactWhatsappNumber,
      text: 'Hello, I would like to inquire about your services.'
    }
  }, {
    external: true,
    open: {
      target: '_blank',
      windowFeatures: {
        width: window.innerWidth / 2,
        height: window.innerHeight / 2,
        left: window.innerWidth / 4,
        top: window.innerHeight / 4
      }
    }
  })
}

</script>

<template>
  <nav
      class="w-fit rounded shadow-lg bg-White fixed left-1/2 transform -translate-x-1/2 z-10 hover:opacity-100 cursor-pointer transition-opacity p-1 backdrop-blur-lg"
      :class="{'opacity-80': messages }"
      style="bottom: 2vh"
      ref="fov">
    <KeepAlive>
      <FovPopOver :menu="messages"
                  @close="toggleMessages"
                  class="bg-White p-4 rounded-lg shadow-lg z-10 absolute left-1/2 transform -translate-x-1/2 bottom-12"
                  v-if="messages"/>
    </KeepAlive>
    <div class="flex justify-between items-center w-fit h-fit">
      <div class="p-1 hover:bg-white rounded transition-colors" @click="whatsapp"
           title="send us a whatsapp message">
        <SVG name="whatsapp" class="w-8 h-8"/>
      </div>
      <NuxtLink class="p-1 hover:bg-white rounded transition-colors"
                title="call us" :to="`tel:${config.public['contactCallNumber']}`">
        <SVG name="phone" class="w-8 h-8"/>
      </NuxtLink>
      <NuxtLink class="p-1 hover:bg-white rounded transition-colors"
                title="send us an email" :to="`mailto:${config.public['contactEmail']}`">
        <SVG name="mail" class="w-8 h-8"/>
      </NuxtLink>
      <div class="p-1 hover:bg-white rounded transition-colors"
           @click="toggleMessages"
           :class="{'active': messages}"
           title="send us a live message">
        <SVG name="message" class="w-8 h-8"/>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.active {
  background-color: white;
}
</style>

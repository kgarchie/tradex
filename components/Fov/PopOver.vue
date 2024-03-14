<script setup lang="ts">
const detailsSent = ref(false)
const props = defineProps({
  menu: {
    type: String as PropType<'message' | null>,
    required: false
  }
})

const details = reactive({
  name: '',
  contact: ''
})

if (localStorage.getItem('contactDetails')) {
  const storedDetails = JSON.parse(localStorage.getItem('contactDetails') as string)
  details.name = storedDetails.name
  details.contact = storedDetails.contact
  detailsSent.value = true
}

function clearDetails() {
  localStorage.removeItem('contactDetails')
  details.name = ''
  details.contact = ''
  detailsSent.value = false
}

function sendDetails() {
  localStorage.setItem('contactDetails', JSON.stringify(details))
  setTimeout(() => {
    detailsSent.value = true
  }, 1000)
}
</script>

<template>
  <template v-if="menu === 'message'">
    <div
        class="absolute bottom-12 left-0 bg-Brown p-4 rounded-lg shadow-lg z-10 w-96 max-w-[90vw] lg:w-[30rem] lg:max-w-[30rem] bg-opacity-80 backdrop-blur-md">
      <Transition>
        <KeepAlive>
          <div class="" v-if="!detailsSent">
            <div class="flex items-center">
              <span class="text-2xl font-bold">Message</span>
              <button @click="menu = null" class="ml-auto">
                <SVG name="close" class="w-8 h-8"/>
              </button>
            </div>
            <p class="text-Black my-2">Input your contact information to start a chat with us.</p>
            <form class="flex flex-col gap-2 mt-4" @submit.prevent="sendDetails">
              <label for="name"
                     class="text-Black font-semibold">Name</label>
              <input type="text" placeholder="Name" v-model="details.name" required
                     class="p-2 rounded border border-Blue focus:outline-Blue" autocomplete="name"/>
              <label for="contact"
                     class="text-Black font-semibold">Contact</label>
              <input type="text" placeholder="Contact" v-model="details.contact" required
                     class="p-2 rounded border border-Blue focus:outline-Blue" autocomplete="off"/>
              <button type="submit" class="bg-Blue text-white p-2 rounded-lg hover:bg-blue-400 mt-2">Send</button>
            </form>
            <small class="text-Black my-2">We will not share your contact information with anyone.</small>
          </div>
        </KeepAlive>
      </Transition>
      <Transition>
        <KeepAlive>
          <div class="aspect-square" v-if="detailsSent">
            <div class="flex items-center">
              <span class="text-2xl font-bold">Message</span>
              <button @click="menu = null" class="ml-auto">
                <SVG name="close" class="w-8 h-8"/>
              </button>
            </div>
            <p class="text-Black my-2">Thank you for reaching out to us. We will get back to you. <br> <span
                @click="clearDetails" class="font-bold">Clear Details?</span></p>
          </div>
        </KeepAlive>
      </Transition>
    </div>
  </template>
</template>

<style scoped>

</style>
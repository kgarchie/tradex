<script setup lang="ts">
import { h } from 'vue'
const detailsSent = ref(false)
const loading = ref(false)
const message = ref('')
const messages = ref<Array<{
  message: string,
  from: string,
  to: string
}>>([])

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
  loading.value = true
  setTimeout(() => {
    detailsSent.value = true
    loading.value = false
    messages.value.push({
      message: `Hello I am ${details.name} and this is how you can reach me later ${details.contact}`,
      from: `${details.contact}`,
      to: ''
    })
  }, 1000)
}

const Message = defineComponent({
  props: {
    message: {
      type: String,
      required: true
    },
    from: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  },
  setup(props) {
    function isSender() {
      return props.from === details.contact
    }

    return () => {
      return h('div', {
        class: 'p-2 rounded-lg bg-Blue text-white my-2 max-w-[80%] lg:max-w-[60%]',
        style: {
          alignSelf: isSender() ? 'flex-end' : 'flex-start'
        }
      }, props.message)
    }
  }
})

function sendMessage() {
  loading.value = true
  setTimeout(() => {
    messages.value.push({
      message: message.value,
      from: details.contact,
      to: ''
    })
    message.value = ''
    loading.value = false
  }, 1000)
}

</script>

<template>
  <div
    class="absolute bottom-12 left-0 bg-Brown p-4 rounded-lg shadow-lg z-10 w-96 max-w-[90vw] lg:w-[30rem] lg:max-w-[30rem] bg-opacity-95 backdrop-blur-md">
    <Transition>
      <KeepAlive>
        <div class="backdrop-blur-lg" v-if="!detailsSent">
          <div class="flex items-center">
            <span class="text-2xl font-bold">Message</span>
            <button @click="$emit('close')" class="ml-auto">
              <SVG name="close" class="w-8 h-8" />
            </button>
          </div>
          <p class="text-Black my-2">Input your contact information to start a chat with us.</p>
          <form class="flex flex-col gap-2 mt-4" @submit.prevent="sendDetails">
            <label for="name" class="text-Black font-semibold">Name</label>
            <input type="text" placeholder="Name" v-model="details.name" required
              class="p-2 rounded border border-Blue focus:outline-Blue" autocomplete="name" />
            <label for="contact" class="text-Black font-semibold">Contact</label>
            <input type="text" placeholder="Contact" v-model="details.contact" required
              class="p-2 rounded border border-Blue focus:outline-Blue" autocomplete="off" />
            <button type="submit"
              class="bg-Blue text-white p-2 rounded-lg hover:bg-blue-400 mt-2 relative min-h-10"><span>
                <SVG name="loading" v-if="loading"
                  class="w-8 h-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <span v-else>Send</span>
              </span></button>
          </form>
          <small class="text-Black my-2">We will not share your contact information with anyone.</small>
        </div>
      </KeepAlive>
    </Transition>
    <Transition>
      <KeepAlive>
        <div class="aspect-square backdrop-blur-lg" v-if="detailsSent">
          <div class="flex items-center">
            <span class="text-2xl font-bold">Message</span>
            <button @click="$emit('close')" class="ml-auto">
              <SVG name="close" class="w-8 h-8" />
            </button>
          </div>
          <div class="flex flex-col gap-2 mt-4 h-full">
            <div class="flex flex-col gap-2 overflow-y-auto">
              <Message v-for="message in messages" :key="message.message" :message="message.message"
                :from="message.from" :to="message.to" />
            </div>
            <form class="flex gap-2 mt-auto w-full justify-center" @submit.prevent="sendMessage">
              <div class="flex w-full justify-center items-center">
                <input type="text" placeholder="Type a message" v-model="message" required
                  class="p-2 rounded border border-Blue focus:outline-Blue w-full" />
                <button type="submit" class="rounded hover:bg-blue-400 mt-2 min-h-10 w-20 bg-white mb-2">
                  <span>
                    <SVG name="loading" v-if="loading"
                      class="w-8 h-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    <span>Send</span>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <span @click="clearDetails" class="font-bold">Clear Details?</span>
        </div>
      </KeepAlive>
    </Transition>
  </div>
</template>

<style scoped></style>
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image'
    ],
    css: [
        '~/assets/css/tailwind.css',
        '~/assets/scss/main.scss',
    ],
    runtimeConfig: {
        public: {
            contactCallNumber: '',
            contactEmail: '',
            contactWhatsappNumber: '',
        }
    }
})

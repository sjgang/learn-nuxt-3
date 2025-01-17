// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true,
  },
  modules: ['nuxt-quasar-ui', '@pinia/nuxt', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt',],
  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
  },
  imports: {
    presets: [
      {
        from: 'vue-i18n',
        imports: ['useI18n'],
      },
    ],
  },
  ssr:true,
  app: {
    head: {
      title: 'Vue & Nuxt 강의',
      meta: [{ name: 'description', content: '짐코딩 Vue & Nuxt 강의입니다.' }],
    },
  },  
});

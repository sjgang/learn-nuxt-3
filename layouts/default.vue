<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>Vue Master Course</q-toolbar-title>
        <nuxt-link v-slot="{navigate}" custom to="/">
          <q-btn stretch flat label="Home" no-caps @click="navigate"/>
        </nuxt-link>
        <q-separator dark vertical />
        <nuxt-link v-slot="{navigate}" custom to="/about">
          <q-btn stretch flat label="About" no-caps @click="navigate"/>
        </nuxt-link>
        <q-separator dark vertical />
        <q-btn stretch flat label="Youtube" no-caps @click="moveYoutube()"/>
        <q-separator dark vertical />
        <nuxt-link v-slot="{navigate}" custom to="/admin">
          <q-btn stretch flat label="Admin" no-caps @click="navigate"/>
        </nuxt-link>
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <slot></slot>>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

const moveYoutube = async () => {
await navigateTo('https://youtube.com/@gymcoding', {
  external : true,
  open : {target : '_blank'}
})
}
</script>

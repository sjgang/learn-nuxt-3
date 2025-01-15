<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">About</div>
      <p class="q-mt-sm text-grey-8">
        Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다.
      </p>
      <div class="column">
        <router-link to="/">RouterLink Home</router-link>
        <router-link to="https://youtube.com/@gymcoding">RouterLink Youtube</router-link>
        <br/>
        <nuxt-link to="/">NuxtLink Home</nuxt-link>
        <nuxt-link to="https://youtube.com/@gymcoding">NuxtLink Youtube</nuxt-link>
      </div>
    </div>
  </q-page>
</template>
<script lang="ts">
</script>
<script setup lang="ts"></script>

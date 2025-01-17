<template>
  <NuxtLayout>
    <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
const title = ref('Vue & Nuxt Mastery Class');
const description = ref('짐코딩과 함꼐 Vue3 기초부터 싷전, 활용! 그리고 Nuxt Framework까지 함께 배워봐요.');
useHead(
  {
    title,
    meta:[{name:'description', content:description}],
  }
)
useSeoMeta({
  title,
  description,
  ogTitle:title,
  ogDescription:description,
  ogType:'website',
  ogImage:'/img/og-image.png',
})
</script>

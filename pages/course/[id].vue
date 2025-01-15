<template>
  <q-page padding>
    <h2>Course</h2>
    <p>{{ $route.params }}</p>
  </q-page>
</template>
<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);
</script>
<style scoped></style>

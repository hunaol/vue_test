<script setup lang="ts">
import Nav from './Nav.vue'
</script>
<template>
  <div class="layout">
    <Nav></Nav>
    <slot></slot>
  </div>
</template>
<style scoped>
.layout {
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  background-color: pink;
}
</style>

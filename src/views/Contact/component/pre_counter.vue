<script lang="js" setup>
import { ref } from 'vue'
const count = ref(0)
const props = defineProps({
  msg: {
    type: Number,
    default: 0
  }
})
</script>
<template>
  <div>
    <h1>当前计数: {{ count }}</h1>
    <button @click="count++">增加</button>
  </div>
</template>
<style scoped></style>
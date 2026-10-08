<script lang="js" setup>
import { ref } from 'vue'

import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>
<template>
  <div>
    <h1>当前计数: {{ counterStore.count }}</h1>
    <button @click="counterStore.increment">增加</button>
    <!-- <h1>当前计数的两倍: {{ counterStore.doubleCount }}</h1> -->
  </div>
</template>
<style scoped></style>
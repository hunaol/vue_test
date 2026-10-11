<script setup lang="ts">
import { ListMsg } from '@/views/Home/composables/pushMsg'
const delMsg = (id: number) => {

}
const completeMsg = (id: number) => {

}
</script>
<template>
  <div>
    <div class="item_crad" v-for="item in ListMsg" :key="item.id">
      {{ item.msg }}
      <input type="checkbox">
    </div>
  </div>
</template>

<script lang="ts" setup>
import pushMsg from './composables/pushMsg'
import { msg } from './composables/pushMsg'
import todoItem from './component/todoItem.vue'
</script>
<template>
  <div>
    <!-- <h1>这是主页</h1>
    <router-view></router-view>
    <br> -->
    <input type="text" v-model="msg">
    <button @click="pushMsg">添加</button>
    <br>
    <br>
    <todoItem></todoItem>

  </div>
</template>
<style scoped></style>

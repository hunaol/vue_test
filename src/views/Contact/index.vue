<script lang="js" setup>
import counter from './component/counter.vue'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import pre_counter from './component/pre_counter.vue'
const counterStore = useCounterStore()
const isShow = ref(false)
const preCountShow = ref(false)
</script>
<template>
  <div>
    <h1>这是联系我们页</h1>
    <button @click="preCountShow = !preCountShow">切换显示</button>
    <pre_counter :msg="1000" v-if="preCountShow"></pre_counter>
    <br>
    <br>
    <br>
    <button @click="isShow = !isShow">切换显示</button>
    <counter v-if="isShow"></counter>
    <!-- <button @click="counterStore.increment">增加</button> -->
    <div class="box">
      123456
    </div>
  </div>
</template>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: purple;
  position: absolute;
  /* top: -100px; */
}
</style>
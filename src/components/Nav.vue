<script lang="js" setup>
</script>
<template>
  <ul>
    <li><router-link to="/">首页</router-link></li>
    <li><router-link to="/home/display">展示页</router-link></li>
    <li><router-link to="/contact">联系我们</router-link></li>
  </ul>
</template>
<style scoped>
ul {
  width: 100%;
  height: 50px;
  background-color: #ccc;
  display: flex;
  align-items: center;

  li {
    text-align: center;
    flex: 1;
  }

  a {
    font-size: 20px;
    display: block;
    width: 100%;
    text-align: center;
    line-height: 50px;
  }

  a:hover {
    background-color: #fff;
  }
}
</style>
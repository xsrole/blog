<script setup lang="ts" name="Layout">
import Header from "./Header.vue";
import Main from "./Main.vue";
</script>
<template>
  <div class="w-full flex items-center justify-center">
    <div class="md:w-full pl-4 pr-4 lg:w-5xl">
      <Header />
      <Main />
    </div>
  </div>
</template>
<style scoped lang="less"></style>

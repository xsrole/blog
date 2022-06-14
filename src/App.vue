<script setup lang="ts" name="App">
import Layout from "@/views/layout/index.vue";
import { subscribeStore } from "./store";
subscribeStore()
</script>
<template>
  <Layout />
</template>

<style lang="less"></style>

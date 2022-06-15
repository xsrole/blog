<script setup lang="ts">
import { NaiveProvider } from "@/components";
</script>
<template>
  <div class="w-full pl-3 pr-3 mt-3" md="max-w-1000px">
    <router-view v-slot="{ Component }">
      <naive-provider>
        <transition name="fade-transform" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </naive-provider>
    </router-view>
  </div>
</template>
<style scoped lang="less">
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-transform-enter-from {
  transform: scale(0.98);
  opacity: 0;
}

.fade-transform-leave-to {
  transform: scale(1);
  opacity: 0;
}
</style>

<script setup lang="ts">
import { useAppStore } from "@/store";
import { useRouter } from "vue-router";
import NotoV1SmilingFaceWithSunglasses from "~icons/noto-v1/smiling-face-with-sunglasses";
import NotoV1SleepyFace from "~icons/noto-v1/sleepy-face";
type Menu = {
  label: string;
  path: string;
};
type Props = {
  fixed?: boolean;
  menuData?: Menu[];
  back?: boolean;
};
const router = useRouter()
const appStore = useAppStore();
const props = withDefaults(defineProps<Props>(), {
  fixed: false,
  menuData: undefined,
  back: false,
});
</script>
<template>
  <div class="w-full h-15">
    <div
      class="w-full h-15 flex justify-center bg-gray-100 transition-colors"
      dark="bg-dark-400"
      :class="fixed ? 'fixed z-10 animate-fade-in animate-duration-300' : ''"
    >
      <div
        class="w-full h-15 flex items-center justify-start gap-5 pl-3 pr-3"
        md="max-w-1000px"
      >
        <div class="w-6 h-full flex items-center justify-center">
          <span
            class="w-1 h-5 bg-gray-300 rounded-xl"
            dark="bg-gray-500"
            v-if="!back"
          ></span>
          <i class="i-material-symbols-arrow-back-ios-new-rounded text-2xl cursor-pointer" dark="text-gray-300" v-if="back" @click="router.back()"></i>
        </div>
        <router-link
          v-for="(item, index) in menuData"
          :key="index"
          active-class="text-purple-600 dark:text-purple-800"
          class="text-xl font-normal no-underline text-gray-600 transition-colors"
          dark="text-gray-300"
          :to="item.path"
          >{{ item.label }}</router-link
        >
        <div
          class="flex items-center justify-center cursor-pointer ml-auto text-xl"
          @click="appStore.darkMode = !appStore.darkMode"
        >
          <NotoV1SmilingFaceWithSunglasses v-if="!appStore.darkMode" />
          <NotoV1SleepyFace v-if="appStore.darkMode" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>

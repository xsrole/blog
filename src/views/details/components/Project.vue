<script setup lang="ts" name="Project">
import RiLink from "~icons/ri/link";
type Props = {
  data?: Detalis.ProjectData;
};
const props = withDefaults(defineProps<Props>(), {
  data: undefined,
});
</script>
<template>
  <div class="w-full">
    <div class="relative w-full h-80 overflow-hidden rounded-lg md:h-100">
      <div class="absolute top-2 right-5 flex gap-3 items-center z-10">
        <a
          :href="data?.link"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center text-gray-800"
        >
          <i class="i-ri-link text-sm inline-block"></i>
          文档
        </a>
        <a
          :href="data?.storeLink"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center text-gray-800"
        >
          <i class="i-ri-github-fill text-sm inline-block"></i>
          仓库
        </a>
      </div>
      <img
        class="w-full h-full object-cover dark:brightness-75"
        :src="data?.cover"
        alt=""
      />
    </div>
    <h1 class="mt-6 font-normal text-3xl dark:text-gray-300">
      {{ data?.title }}
    </h1>
    <p class="dark:text-gray-500">{{ data?.description }}</p>
    <div class="w-full flex gap-3 mt-3 border-b border-gray-300 pb-3">
      <div class="w-10 h-10 overflow-hidden rounded-full">
        <img
          class="w-full h-full object-cover"
          :src="data?.auth.avatar"
          alt=""
        />
      </div>
      <div class="flex flex-col justify-center">
        <h3 class="font-normal text-sm dark:text-gray-300">
          {{ data?.auth.nickName }}
        </h3>
        <p class="font-normal text-xs dark:text-gray-500">
          {{ data?.auth.description }}
        </p>
      </div>
      <div class="ml-auto flex flex-col items-end justify-center">
        <p class="text-xs text-gray-500">最后更新</p>
        <p class="text-xs text-gray-500">{{ data?.updateAt }}</p>
      </div>
    </div>

    <div class="w-full min-h-100">
      <div class="" v-html="data?.content"></div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>

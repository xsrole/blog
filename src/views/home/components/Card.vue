<script setup lang="ts" name="Card">
import {NTooltip} from 'naive-ui'
type PropsData = {
  id:number,
  title: string;
  cover: string;
  content: string;
};
type Props = {
  title?: string;
  subTitle?:string,
  link?:string,
  data?: PropsData[];
  type?:string,
};

const props = withDefaults(defineProps<Props>(), {
  title: "",
  subTitle:'More',
  link:'/',
  data: undefined,
  type:'note'
});
</script>
<template>
  <div>
    <div class="w-full h-20 pt-5 pb-5 flex items-center gap-3">
      <div class="w-1.5 rounded-md h-full bg-gray-500 dark:bg-gray-300"></div>
      <h1 class="font-normal text-gray-700 mr-auto dark:text-gray-300">{{ title }}</h1>
      <router-link class="text-gray-500 dark:text-gray-300" :to="link">{{subTitle}}</router-link>
    </div>
    <div class="flex flex-wrap -m-2">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="w-full h-360px p-2 md:w-1/2"
      >
        <router-link :to="'/'+type+'/'+item.id"
          class="w-full h-260px rounded-md rounded-md overflow-hidden block"
        >
          <img class="w-full h-full object-cover" :src="item.cover" alt="" />
        </router-link>
        <n-tooltip trigger="hover" class="max-w-100">
           <template #trigger>
            <h2 class="font-medium truncate mt-1 dark:text-gray-300">{{ item.title }}</h2>
           </template>
           {{item.title}}
        </n-tooltip>
        <n-tooltip trigger="hover" class="max-w-100">
           <template #trigger>
            <p class="truncate overflow-ellipsis dark:text-gray-500">{{ item.content }}</p>
           </template>
           {{item.content}}
        </n-tooltip>
        
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>

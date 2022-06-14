<script setup lang="ts" name="Card">
type PropsData = {
  title: string;
  cover: string;
  content: string;
};
type Props = {
  title: string;
  data?: PropsData[];
};

const props = withDefaults(defineProps<Props>(), {
  title: "",
  data: undefined,
});
</script>
<template>
  <div>
    <h1 class="font-normal text-gray-700">{{ title }}</h1>
    <div class="flex flex-wrap -m-2">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="w-full h-360px p-2 md:w-1/2"
      >
        <div
          class="w-full h-260px bg-gray-200 rounded-md rounded-md overflow-hidden"
        >
          <img class="w-full h-full object-cover" :src="item.cover" alt="" />
        </div>
        <h2 class="font-medium truncate mt-1">{{ item.title }}</h2>
        <p class="truncate overflow-ellipsis">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>

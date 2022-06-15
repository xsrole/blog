<script setup lang="ts" name="MainTitle">
type Props = {
  title: string;
  subTitle: string;
};
const props = withDefaults(defineProps<Props>(), {
  title: "",
  subTitle: "",
});
</script>
<template>
  <div class="w-full">
    <div
      class="min-w-4/5 w-4/5 h-14 bg-gray-300 rounded-r-full rounded-l-2xl pl-3 flex items-center gap-3 dark:bg-gray-500"
    >
      <span class="inline-block w-1 h-3/5 rounded-full bg-gray-700 dark:bg-gray-300"></span>
      <div class="flex items-baseline gap-2">
        <h1 class="font-normal m-0 dark:text-gray-300">{{ title }}</h1>
        <h3 class="font-light m-0 dark:text-gray-300">{{ subTitle }}</h3>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>

<script setup lang="ts">
type Menu = {
  label:string,
  path:string
}
type Props = {
  fixed: boolean;
  menuData:Menu[]
};
const props = withDefaults(defineProps<Props>(), {
  fixed: false,
  menuData:undefined
});

</script>
<template>
  <div class="w-full h-15">
    <div
      class="w-full h-15 flex justify-center bg-light-100 "
      :class="fixed ? 'fixed z-10 animate-fade-in animate-duration-300' : ''"
    >
      <div
        class="w-full h-15 flex items-center justify-start gap-5 pl-3 pr-3  md:max-w-1000px"
      >
        <div class="w-1 h-5 bg-gray-500 rounded-xl"></div>
        <router-link
          v-for="(item, index) in menuData"
          :key="index"
          active-class="text-purple-600"
          class="text-xl font-normal no-underline text-gray-600 transition-colors"
          :to="item.path"
          >{{ item.label }}</router-link
        >
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>

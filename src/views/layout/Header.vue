<script setup lang="ts">
const Menu = [
  {
    label: "Home",
    path: "/home",
  },
  {
    label: "Project",
    path: "/project",
  },
  {
    label: "Note",
    path: "/note",
  },
  {
    label: "About",
    path: "/about",
  },
];
</script>
<template>
  <div class="w-full h-15 flex items-center justify-start gap-5">
    <router-link
      v-for="(item, index) in Menu"
      :key="index"
      active-class="text-red-300"
      class="text-xl font-normal no-underline text-gray-600 transition-colors"
      :to="item.path"
      >{{ item.label }}</router-link
    >
  </div>
</template>
<style scoped lang="less"></style>

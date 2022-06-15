<script setup lang="ts" name="Layout">
import { onMounted, ref,computed } from "vue";
import { useScroll } from "@vueuse/core";
import { useAppStore } from "@/store";
import { useRoute } from "vue-router";
import Header from "./Header.vue";
import Main from "./Main.vue";
import Footer from './Foote.vue'
const appStore = useAppStore();
const route = useRoute()
const el = ref<HTMLElement | null>(null);
const { y } = useScroll(el);
function onScroll() {
  window.addEventListener("scroll", (e) => {
    appStore.headerFixed = window.scrollY > 80 ? true : false;
  });
}
onMounted(() => {
  onScroll();
});
type Menu = {
  label: string;
  path: string;
};
const menuData = ref<Menu[]>([
  {
    label: "Home",
    path: "/home",
  },
  {
    label: "Note",
    path: "/note",
  },
  {
    label: "Project",
    path: "/project",
  },

  {
    label: "About",
    path: "/about",
  },
]);
const headerBack = computed(()=>{
  return route.name ==='Details'?true:false
})


</script>
<template>
  <div class="w-full flex flex-col items-center justify-center bg-white transition-colors" dark="bg-dark-800" ref="el">
    <Header :fixed="appStore.headerFixed" :menu-data="menuData" :back="headerBack" />
    <Main />
    <Footer/>
  </div>
</template>
<style scoped lang="less"></style>

<script setup lang="ts" name="Layout">
import { onMounted, ref } from 'vue';
import { useScroll } from '@vueuse/core'
import { useAppStore } from '@/store';
import Header from "./Header.vue";
import Main from "./Main.vue";
const appStore = useAppStore()
const el = ref<HTMLElement | null>(null)
const {y} = useScroll(el)
function onScroll(){
  window.addEventListener('scroll',(e)=>{
    appStore.headerFixed = window.scrollY>80?true:false
  })
}
onMounted(()=>{
  onScroll()
})

</script>
<template>
  <div class="w-full flex flex-col items-center justify-center" ref="el">
    <Header :fixed="appStore.headerFixed" />
    <div class="w-full pl-3 pr-3 mt-3 md:max-w-1000px ">
      <Main />
    </div>
  </div>
</template>
<style scoped lang="less"></style>

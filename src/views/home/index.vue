<script setup lang="ts" name="Home">
import { ref } from 'vue';
import {getNoteData} from '@/api'
import Swiper from './components/Swiper.vue';
import Card from './components/Card.vue'
interface HomeNoteData{
  id:number,
  cover:string,
  title:string,
  content:string
}
const homeNoteData = ref<HomeNoteData[]>()

getNoteData().then(res=>{
  homeNoteData.value = res.data
  console.log(res.data);
  
})

</script>
<template>
  <div class="w-full h-full">
    <Swiper/>
    <Card title="Note" link="/note" type="note" :data="homeNoteData"/>
    <Card title="Project" link="/project" type="project" :data="homeNoteData"/>
  </div>
</template>
<style scoped lang="less"></style>

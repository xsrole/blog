<script setup lang="ts" name="Home">
import 'swiper/css';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import {getNoteData} from '@/api'
import Card from './components/Card.vue'
interface HomeNoteData{
  cover:string,
  title:string,
  content:string
}
const homeNoteData = ref<HomeNoteData[]>()

getNoteData().then(res=>{
  homeNoteData.value = res.data
})
function onSwiper(swiper){
  console.log(swiper);
}
function onSlideChange(){
  console.log('slide change');
}
</script>
<template>
  <div class="w-full h-full">
    <div class="w-full h-400px rounded-xl overflow-hidden">
      <swiper
        :slides-per-view="1"
        :space-between="10"
        :autoplay="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="w-full h-400px bg-gray-200 rounded-xl overflow-hidden">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="w-full h-400px bg-gray-200 rounded-xl overflow-hidden">
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <Card title="Note" :data="homeNoteData"/>
    <Card title="Project" :data="homeNoteData"/>
  </div>
</template>
<style scoped lang="less"></style>

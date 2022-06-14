<script setup lang="ts" name="Swiper">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function onSwiper(swiper) {
  console.log(swiper);
}
function onSlideChange() {
  console.log("slide change");
}
const swiperData = ref([
  {

  }
])
</script>
<template>
  <div class="w-full h-400px rounded-xl overflow-hidden">
    <swiper
      :modules="[Pagination,Autoplay]"
      :pagination="{ clickable: true }"
      :slides-per-view="1"
      :space-between="10"
      :autoplay="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in 3" :key="index">
        <div
          class="w-full h-400px bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center"
        >
        <h1>{{index}}</h1>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped lang="less"></style>

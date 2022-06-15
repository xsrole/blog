<script setup lang="ts" name="NoteList">
type Props = {
  data?: Detalis.CommonData[];
};
const props = withDefaults(defineProps<Props>(), {
  data: undefined,
});
</script>
<template>
  <div class="w-full mt-5">
    <div
      class="w-full mt-3 pb-3"
      md="flex gap-5"
      v-for="(item, index) in data"
      :key="index"
    >
      <router-link :to="'/note/'+item.id" class="block w-full h-50 rounded-xl overflow-hidden flex-shrink-0" md="w-80">
        <img class="w-full h-full object-cover" dark="brightness-75" v-lazy-load="item.cover" alt="" />
      </router-link>
      <div class="flex-shrink-1">
        <div
          class="w-full flex items-center gap-2 mt-2 border-b border-gray-300 pb-2"
        >
          <div class="w-10 h-10 rounded-full overflow-hidden">
            <img
              class="w-full h-full object-cover"
              :src="item.auth.avatar"
              alt=""
            />
          </div>
          <div class="flex flex-col">
            <h3 class="font-normal text-sm" dark="text-gray-300">{{ item.auth.nickName }}</h3>
            <p class="font-normal text-xs" dark="text-gray-500">{{ item.auth.description }}</p>
          </div>
          <span class="font-normal text-xs ml-auto" dark="text-gray-500">{{ item.updateAt }}</span>
        </div>
        <h2
          class="font-normal text-xl mt-3 clamp2 md:text-3xl"
          dark="text-gray-300"
        >
          {{ item.title }}
        </h2>
        <p class="font-normal text-sm mt-2 clamp2" dark="text-gray-500">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.clamp2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

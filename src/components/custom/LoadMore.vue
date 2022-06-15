<script setup lang="ts" name="LoadMore">
import { computed, onMounted, ref,watch } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import EosIconsBubbleLoading from "~icons/eos-icons/bubble-loading";
enum State {
  LoadMore = "load-more",
  Loading = "loading",
  NoMore = "no-more",
}
type Props = {
  state?: `${State}`;
  autoLoad?: boolean;
};
type Emits = {
  (event: "on-click"): void;
  (event: "on-visible"): void;
};
const props = withDefaults(defineProps<Props>(), {
  state: "load-more",
  autoLoad: false,
});
const emit = defineEmits<Emits>();
const stateMsg = computed(() => {
  let msg: string = "";
  if (props.state === State.LoadMore) return (msg = "加载更多");
  if (props.state === State.Loading) return (msg = "加载中...");
  if (props.state === State.NoMore) return (msg = "没有更多了");
});
const isLoading = computed(()=>{
  if(props.state === State.Loading) return true
  return false
})
const target = ref(null);
const targetIsVisible = ref(false);

function onClick() {
  if (props.state === State.LoadMore) emit("on-click");
}
onMounted(() => {
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      emit('on-visible')
      targetIsVisible.value = isIntersecting;
    }
  );
});
</script>
<template>
  <div class="w-full mt-3 mb-3 flex items-center justify-center">
    <div
      ref="target"
      class="flex items-center justify-center gap-2"
      @click="onClick"
    >
      <EosIconsBubbleLoading v-if="isLoading" dark="text-gray-300"/>
      <span class="text-base" dark="text-gray-300">{{ stateMsg }}</span>
    </div>
  </div>
</template>
<style scoped lang="less"></style>

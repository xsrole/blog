
<script setup lang='ts' name="Note">
import { ref } from 'vue';
import MainTitle from '@/components/custom/MainTitle.vue';
import NoteList from './components/NoteList.vue'
import LoadMore from '@/components/custom/LoadMore.vue';
import { getNoteData } from '@/api';
const noteData = ref<Detalis.CommonData[]>()
getNoteData().then(res=>{
    noteData.value = res.data
})
const loadState:any = ref('load-more')
function onVisible(){
    console.log(1);  
}
function onClick(){
    loadState.value = 'loading'
    setTimeout(() => {
        loadState.value = 'load-more'
    }, 2000);
}
</script>
<template>
<div class="w-full min-h-200">
    <main-title title="Note" sub-title="笔记"/>
    <note-list :data="noteData"/>
    <load-more :state="loadState" @on-click="onClick"/>
</div>
</template>
<style scoped lang='less'>

</style>
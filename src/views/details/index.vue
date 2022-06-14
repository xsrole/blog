
<script setup lang='ts' name="Details">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getDetails } from '@/api';
import Project from './components/Project.vue';
const route = useRoute()
console.log(route.params);

const projectData = ref<Detalis.ProjectData>()
getDetails().then((res:any)=>{
    projectData.value = res.data
})
</script>
<template>
<div class="w-full">
    <Project :data="projectData"/>
</div>
</template>
<style scoped lang='less'>

</style>
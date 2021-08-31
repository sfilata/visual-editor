<script setup>
import { provide, ref } from 'vue';
import Marterial from '@/components/Materials.vue';
import Editor from '@/components/Editor.vue';
import dsls from '@/materials/index';

const editor = ref(null);
const renderComponents = ref([]);
provide('renderComponents', renderComponents);
const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const index = e.dataTransfer.getData('index');

  if (index !== undefined && index !== null) {
    const component = deepClone(dsls[index]);
    console.log('component', component);
    const rect = editor.value.getBoundingClientRect();
    component.style.top = e.clientY - rect.y;
    component.style.left = e.clientX - rect.x;
    component.id = Math.random().toString(16).slice(5);
    renderComponents.value = [...renderComponents.value, component];
    console.log('pushing the component into renderComponents store', component);
  }
};

const handleDragOver = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
};
</script>

<template>
  <el-container class="flex-col h-screen">
    <el-header class="border-b border-b-gray-300" height="64px">Tool bar</el-header>
    <el-container class="flex-1">
      <el-aside width="200px">
        <Marterial></Marterial>
      </el-aside>
      <el-main class="bg-gray-100">
        <div class="w-full h-full relative center" ref="editor" @drop="handleDrop" @dragover="handleDragOver">
          <Editor></Editor>
        </div>
      </el-main>
      <el-aside width="250px">Right</el-aside>
    </el-container>
  </el-container>
</template>

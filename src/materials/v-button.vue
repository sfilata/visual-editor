<template>
  <el-button>
    <slot>按钮</slot>
  </el-button>
</template>

<script setup>
const props = defineProps({
  element: Object
});
</script>

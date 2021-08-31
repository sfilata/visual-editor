<template>
  <div class="container" @dragstart="handleDragStart">
    <div draggable="true" class="item" v-for="(item, index) in dsls" :key="index" :data-index="index">
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup>
import dsls from '@/materials/index';

const handleDragStart = (e) => {
  // 通知中间的画布组件，当前拖动的是哪个组件，方便画布渲染对应的组件
  // 通过下标来找到对应的dsl, 这里通过 dataTransfer.setData 去传递数据
  // 这不是唯一的方式，还可以用状态管理，也不一定必须使用下标，如果是key-value结构的话, key值结构也可以
  console.log('drag start');
  e.dataTransfer.setData('index', e.target.dataset.index);
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;

  .item {
    width: 45%;
    border: 1px solid #ddd;
    cursor: grab;
    margin-bottom: 10px;
    text-align: center;
    padding: 2px 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active {
      cursor: grabbing;
    }
  }
}
</style>

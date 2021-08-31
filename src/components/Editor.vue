<template>
  <sharp
    v-for="(item, index) in components"
    :key="index"
    :style="formateUnitOfStyle(item.style)"
    :originStyle="item.style"
  >
    <component :is="item.is" :id="item.id" :element="item"></component>
  </sharp>
</template>

<script setup>
// 云凤蝶
// 分层思想，分别有若干层。每一层都有单一的职责。这样有助于Editor指责划分
import { inject } from 'vue';

import Sharp from './editors/Sharp.vue';
const components = inject('renderComponents');

const formateUnitOfStyle = (style = {}) => {
  let styl = {};
  const needUnitOfStyle = ['width', 'height', 'top', 'left'];
  for (const [k, v] of Object.entries(style)) {
    if (typeof v === 'number' && ~needUnitOfStyle.indexOf(k)) {
      styl[k] = v + 'px';
    } else {
      styl[k] = v;
    }
  }
  return styl;
};
</script>

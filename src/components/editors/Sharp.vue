<template>
  <div class="sharp" @mousedown="handleMouseDown">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  originStyle: Object
});
const throttle = (fn, delay = 50) => {
  let timer = null;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;

      fn(...args);
    }, delay);
  };
};

const handleMouseDown = (e) => {
  e.stopPropagation();
  e.preventDefault();

  const startX = e.clientX;
  const startY = e.clientY;

  const pos = props.originStyle;

  const startTop = Number(pos.top);
  const startLeft = Number(pos.left);

  const move = throttle((me) => {
    const curX = me.clientX;
    const curY = me.clientY;
    pos.top = curY - startY + startTop;
    pos.left = curX - startX + startLeft;
  });

  const up = () => {
    document.removeEventListener('mousemove', move);
    document.removeEventListener('mouseup', up);
  };
  document.addEventListener('mousemove', move);
  document.addEventListener('mouseup', up);
};
</script>

<style lang="scss" scoped>
.sharp {
  position: absolute;

  &:hover {
    cursor: move;
  }
}
</style>

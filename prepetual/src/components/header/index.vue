<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "myHeader",
};
</script>

<style lang="less" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  background: red;
  width: 100%;
  z-index: 1;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  color: #ffffff;
}
</style>
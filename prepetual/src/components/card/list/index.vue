<template>
  <div class="day-list">
    <listItem title="当前年月" :content="data['year-month']"></listItem>
    <listItem title="今年属相" :content="data.animalsYear"></listItem>
    <listItem title="农历年份" :content="data.lunarYear"></listItem>
    <listItem title="适宜事件" :content="data.suit"></listItem>
    <listItem title="避免事件" :content="data.avoid"></listItem>
  </div>
</template>

<script>
import listItem from "./item";
export default {
  name: "List",
  props: {
    data: Object,
  },
  components: {
    listItem,
  },
};
</script>

<style lang="less" scoped>
 .day-list {
    padding: .15rem;
    box-sizing: border-box;
  }
</style>
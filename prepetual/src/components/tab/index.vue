<template>
  <div class="tab">
    <div class="tab-item" v-for="(item,index) of getTimeList" :key="index">
      <myIcon :iconText="item.icontext" :path="item.path">{{item.tabText}}</myIcon>
    </div>
  </div>
</template>

<script>
import myIcon from "./icon";
import getTimeList from "@/data";
import { reactive } from "vue";
export default {
  components: {
    myIcon,
  },
  name: "Tab",
  setup(props) {
    const list = reactive({ getTimeList });
    return {
      ...list,
    };
  },
};
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.44rem;
  border-top: 1px solid #ddd;
  background-color: #fff;

  .tab-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;
  }
}
</style>
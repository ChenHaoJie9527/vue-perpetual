<template>
  <div class="search-wrap">
    <input
      type="text"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :value="inputValue"
      @input="searchData($event)"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "searchBar",
  props: ["placeholder", "maxlength"],
  setup() {
    const searchData = (el) => {};
    const value = ref("");
    return {
      value,
      searchData,
    };
  },
};
</script>
<style lang="less" scoped>
.search-wrap {
    position: fixed;
    top: .44rem;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .38rem;
    padding: .03rem .1rem;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    background-color: #fff;

    input {
      width: 100%;
      height: 100%;
      font-size: .14rem;
      border: 1px solid #ddd;
      text-indent: .1rem;
      border-radius: .03rem;

      &:focus {
        border-color: #ed4040;
        box-shadow: 0 0 .02rem #ed4040;
        transition: all .3s;
      }
    }
  }
</style>

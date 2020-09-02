<template>
  <div class="container">
    <errorTips></errorTips>
    <div v-if="!errorCode">
      <card-list :data="yearData" />
    </div>
  </div>
</template>

<script>
import getData from "@/services";
import { onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import errorTips from "@/components/errorTips";
import { getNowData } from "@/libs/utils";
import CardList from "@/components/yearPage/list";
export default {
  name: "Year",
  components: {
    errorTips,
    CardList,
  },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store, "year", getNowData("year"));
    });
    watch(
      () => {
        return state.yearData;
      },
      () => {
        store.commit("setErrorCode", 0);
      }
    );
    return {
      errorCode: computed(() => state.errorCode),
      yearData: computed(() => state.yearData),
    };
  },
};
</script>

<style lang="less" scoped>
</style>
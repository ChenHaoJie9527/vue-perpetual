<template>
  <div class="container">
    <errorTips></errorTips>
    <div v-if="!errorCode">
      <DayCard :data="dayData"></DayCard>
      <DayList :data="dayData"></DayList>
    </div>
  </div>
</template>

<script>
import getData from "@/services";
import { onMounted, computed, watch } from "vue";
import DayCard from "@/components/card";
import { useStore } from "vuex";
import DayList from "@/components/card/list";
import errorTips from "@/components/errorTips";
export default {
  name: "Day",
  components: {
    DayCard,
    DayList,
    errorTips,
  },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store, "day", "2020-8-23");
    });
    watch(
      () => {
        return state.dayData;
      },
      () => {
        store.commit("setErrorCode", 0);
      }
    );
    return {
      dayData: computed(() => state.dayData),
      errorCode: computed(() => {
        state.errorCode;
      }),
    };
  },
};
</script>

<style lang="less" scoped>
</style>
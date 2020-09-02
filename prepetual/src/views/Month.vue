<template>
  <div class="container">
    <errorTips></errorTips>
    <div v-if="!errorCode">
      <CarList :data="monthData"></CarList>
    </div>
  </div>
</template>

<script>
import getData from "@/services";
import { onMounted, computed, watch } from "vue";
import { useStore } from "vuex";
import errorTips from "@/components/errorTips";
import { getNowData } from "@/libs/utils";
import CarList from "@/components/monthPage/list";
export default {
  name: "Month",
  components: {
    errorTips,
    CarList
  },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store, "month", getNowData("month"));
    });
    watch(()=>{
      return state.monthData;
    },()=>{
      store.commit('setErrorCode', 0)
    })
    return {
      errorCode: computed(() => {
        state.errorCode;
      }),
      monthData:  computed(() => state.monthData),
    };
  },
};
</script>

<style lang="less" scoped>
</style>
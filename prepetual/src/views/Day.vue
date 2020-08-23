<template>
  <div class="container">
    <DayCard></DayCard>
  </div>
</template>

<script>
import getData from "@/services";
import { onMounted } from "vue";
import DayCard from "@/components/card";
import { useStore } from "vuex";
export default {
  name: "Day",
  components: {
    DayCard,
  },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store, "day", "2020-8-23");
    });
  },
};
</script>

<style lang="less" scoped>
</style>
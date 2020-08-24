<template>
  <div class="container">Year page</div>
</template>

<script>
import getData from "@/services";
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "Year",
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store, "year", "2020");
    });
  },
};
</script>

<style lang="less" scoped>
</style>
<template>
  <div class="container">Month page</div>
</template>

<script>
import getData from "@/services";
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "Month",
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store, "month", "2020-9");
    });
  },
};
</script>

<style lang="less" scoped>
</style>
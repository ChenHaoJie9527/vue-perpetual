<template>
  <div class="container">Year page</div>
</template>

<script>
import getData from "@/services";
import { onMounted } from "vue";
export default {
  name: "Year",
  setup() {
    onMounted(() => {
      getData("year", "2020");
    });
  },
};
</script>

<style lang="less" scoped>
</style>
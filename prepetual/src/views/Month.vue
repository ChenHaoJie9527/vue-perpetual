<template>
  <div class="container">Month page</div>
</template>

<script>
import getData from "@/services";
import { onMounted } from "vue";
export default {
  name: "Month",
  setup() {
    onMounted(() => {
      getData("month", "2020-9");
    });
  },
};
</script>

<style lang="less" scoped>
</style>
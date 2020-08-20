<template>
  <div class="container">Day page</div>
</template>

<script>
import getData from "@/services";
import { onMounted } from "vue";
export default {
  name: "Day",
  setup() {
    onMounted(() => {
      getData("day", "2020-8-20");
    });
  },
};
</script>

<style lang="less" scoped>
</style>
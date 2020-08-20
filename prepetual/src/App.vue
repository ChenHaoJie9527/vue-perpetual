<template>
  <div id="app">
    <myHeader>{{headerTitle}}</myHeader>
    <router-view />
    <myTab></myTab>
  </div>
</template>
<script>
import myHeader from "./components/header";
import { useStore } from "vuex";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";
import myTab from "./components/tab";
export default {
  name: "APP",
  components: {
    myHeader,
    myTab,
  },
  setup() {
    const store = useStore(),
      state = store.state,
      router = useRouter();
    router.push("/");
    // 监听路由
    watch(
      () => {
        return router.currentRoute.value.name;
      },
      (val) => {
        store.commit("setHeaderTitle",val)
      }
    );
    return computed(() => state).value;
  },
};
</script>


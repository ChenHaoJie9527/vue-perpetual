<template>
  <div id="app">
    <myHeader>{{headerTitle}}</myHeader>
    <searchInput :placeholder="placeholder" :maxlength="maxlength"></searchInput>
    <!-- 缓存组件数据 -->
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <myTab></myTab>
  </div>
</template>
<script>
import myHeader from "./components/header";
import { useStore } from "vuex";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";
import myTab from "./components/tab";
import searchInput from "./components/search";
export default {
  name: "APP",
  components: {
    myHeader,
    myTab,
    searchInput,
  },
  setup() {
    const store = useStore(),
      state = store.state,
      router = useRouter();
    // router.push("/");
    // 监听路由
    watch(
      () => {
        return router.currentRoute.value.name;
      },
      (val) => {
        store.commit("setHeaderTitle", val);
        store.commit("setMaxlength", val);
        store.commit("setPlaceholder", val);
      }
    );
    return computed(() => state).value;
  },
};
</script>


import Vuex from 'vuex'
import state from "./state";
import mutations from "./mutations"
import getters from "./getters";
export default Vuex.createStore({
  state,
  mutations,
  getters
});

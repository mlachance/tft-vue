import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import characters from "./modules/characters"

export default new Vuex.Store({
  modules: {
    characters
  }
});

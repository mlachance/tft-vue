import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import armor from "./modules/armor";
import characters from "./modules/characters";
import weapons from "./modules/weapons";

export default new Vuex.Store({
  modules: {
    armor,
    characters,
    weapons
  }
});

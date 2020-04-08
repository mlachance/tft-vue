import WeaponService from "../../services/WeaponService";

const namespaced = true;

const emptyItem = {
  uid: "",
  name: "",
  damage: "",
  st: 0,
  cost: 0,
  weight: 0,
  notes: ""
};

const state = {
  items: [],
  defaultItem: emptyItem
};

const getters = {
  getWeaponList: state => {
    return state.items;
  },
  getItem: state => (uid) => {
    if (uid) {
      return state.items.find(item => item.uid === uid);
    }
    return state.defaultItem;
  }
};

const mutations = {
  setItems(state, data) {
    state.items = data;
  }
};

const actions = {
  loadItems({ commit }) {
    return new Promise(resolve => {
      WeaponService.getWeapons().then(response => {
        commit("setItems", response.data.data);
        resolve();
      });
    });
  }
};

export default {
  namespaced,
  defaultState: emptyItem,
  state,
  getters,
  mutations,
  actions
};

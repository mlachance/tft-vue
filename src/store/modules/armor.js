import ArmorService from "../../services/ArmorService";

const namespaced = true;

const emptyItem = {
  uid: "",
  name: "",
  hits_stopped: 0,
  dx_penalty: "",
  cost: 0,
  weight: 0,
  is_shield: false,
  notes: ""
};

const state = {
  items: [],
  defaultItem: emptyItem
};

const getters = {
  getArmorList: state => {
    return state.items.filter(item => !item.is_shield);
  },
  getShieldList: state => {
    return state.items.filter(item => item.is_shield);
  },
  getItem: state => uid => {
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
      ArmorService.getArmorList().then(response => {
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

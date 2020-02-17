import CharacterService from "../../services/CharacterService";

const namespaced = true;

const state = {
  characters: [
    {
      name: "",
      st: null,
      dx: null,
      iq: null,
      ma: null,
      weapon: "",
      armor: ""
    }
  ],
  index: 0
};

const getters = {
  getCharacters: state => {
    return state.characters;
  },
  getCharacter: state => {
    return state.characters[state.index];
  }
};

const mutations = {
  setCharacters(state, payload) {
    state.characters = payload;
  },
  setCharacter(state, payload) {
    if (payload.index) {
      state.characters[payload.index] = payload.data;
    }
  }
};

const actions = {
  loadCharacters({ commit }) {
    CharacterService.getCharacters().then(response => {
      commit("setCharacters", response.data.data);
    });
  },
  saveCharacter(payload) {
    // todo: send either POST for a new character or PUT for an edit
  }
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
};

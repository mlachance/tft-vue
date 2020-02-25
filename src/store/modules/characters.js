import CharacterService from "../../services/CharacterService";

const namespaced = true;

const defaultState = {
  character: {
    name: "",
    st: null,
    dx: null,
    iq: null,
    ma: null,
    weapon: "",
    armor: ""
  },
  index: -1
};

const state = {
  emptyChar: defaultState.char,
  characters: [],
  index: defaultState.index
};

const getters = {
  getCharacters: state => {
    return state.characters;
  },
  getCharacter: state => {
    if (state.index < 0) {
      return state.emptyChar;
    }
    return state.characters[state.index];
  }
};

const mutations = {
  setIndex(state, value) {
    // noinspection EqualityComparisonWithCoercionJS
    state.index = state.characters.findIndex(element => element.id == value);
  },
  setCharacters(state, payload) {
    state.characters = payload;
  }
};

const actions = {
  loadCharacters({ commit }) {
    return new Promise(resolve => {
      CharacterService.getCharacters().then(response => {
        commit("setCharacters", response.data.data);
        resolve();
      });
    });
  },
  saveCharacter() {
    // todo: send either POST for a new character or PUT for an edit
  }
};

export default {
  namespaced,
  defaultState,
  state,
  getters,
  mutations,
  actions
};

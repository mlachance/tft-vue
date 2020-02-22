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
  index: 0
};

const state = {
  characters: [],
  index: defaultState.index
};

const getters = {
  getCharacters: state => {
    return state.characters;
  },
  getCharacter: state => defaultState => {
    if (state.index === -1) {
      return defaultState.character;
    }
    return state.characters[state.index];
  }
};

const mutations = {
  setIndex(state, value) {
    debugger;
    const testCondition = element => element.id === value;
    state.index = state.characters.findIndex(testCondition);
  },
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

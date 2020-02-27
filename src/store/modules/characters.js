import CharacterService from "../../services/CharacterService";

const namespaced = true;

const emptyCharacter = {
    name: "",
    st: null,
    dx: null,
    iq: null,
    ma: null,
    weapon: "",
    armor: ""
};

const state = {
  newCharacter: emptyCharacter,
  characters: [],
  index: -1
};

const getters = {
  getCharacters: state => {
    return state.characters;
  },
  getCharacter: state => {
    if (state.index < 0) {
      return state.newCharacter;
    }
    return state.characters[state.index];
  },
  getNewCharacter: state => {
    return state.newCharacter;
  }
};

const mutations = {
  setIndex(state, value) {
    state.index = state.characters.findIndex(
      element => element.id + "" === value + ""
    );
  },
  setCharacters(state, data) {
    state.characters = data;
  },
  updateSingleValue(state, data) {
    state.character[state.index][data.attribute] = data.value;
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
  saveCharacter({ getters }) {
    const serviceAction = data.id ? "PUT" : "POST";
    return new Promise(resolve => {
      CharacterService.setCharacter({
        action: serviceAction,
        data: data
      }).then(() => resolve());
    });
  }
};

export default {
  namespaced,
  defaultState: emptyCharacter,
  state,
  getters,
  mutations,
  actions
};

import CharacterService from "../../services/CharacterService";

const namespaced = true;

const emptyCharacter = {
  name: "",
  st: 0,
  dx: 0,
  iq: 0,
  ma: 0,
  weapon: "",
  armor: ""
};

const state = {
  newCharacter: emptyCharacter,
  characterInEdit: emptyCharacter,
  characters: [],
  index: -1
};

const getters = {
  getCharacters: state => {
    return state.characters;
  },
  getCharacter: state => {
    return state.characterInEdit;
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
  setCharacter(state, data) {
    state.characterInEdit = data;
  },
  setEdit(state) {
    console.info("Index is " + state.index);
    let source = emptyCharacter;
    if (state.index !== -1) {
      source = state.characters[state.index];
    }
    state.characterInEdit = JSON.parse(JSON.stringify(source));
  },
  updateSingleValue(state, data) {
    console.log(data);
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
  saveCharacter({ dispatch }, data) {
    const serviceAction = data.id ? "PUT" : "POST";
    return new Promise(resolve => {
      CharacterService.setCharacter({
        action: serviceAction,
        data: data
      }).then(response => {
        console.log(response);
        dispatch("loadCharacters");
        resolve();
      });
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

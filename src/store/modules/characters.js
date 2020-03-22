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
    console.log("Index is " + state.index);
    state.characterInEdit = this._.cloneDeep(state.characters[state.index]);
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
  saveCharacter({}, data) {
    debugger;
    const serviceAction = data.id ? "PUT" : "POST";
    return new Promise(resolve => {
      CharacterService.setCharacter({
        action: serviceAction,
        data: data
      }).then(response => {
        console.log(response);
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

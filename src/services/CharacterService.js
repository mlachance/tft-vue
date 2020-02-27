import api from "./Api";

export default {
  getCharacters() {
    return api().get("/characters");
  },
  getCharacter(index) {
    return api().get(`/characters/${index}`);
  },
  setCharacter(params = { action: "get", data: null }) {
    if (params.data.id) {
      return api().put(`/characters/${params.data.id}`, params.data);
    } else {
      return api().post("/characters", params.data);
    }
  }
};

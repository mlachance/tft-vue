import api from "./Api";

export default {
  getCharacters() {
    return api().get("/characters")
  },
  getCharacter(index) {
    return api().get(`/characters/${index}`)
  }
}
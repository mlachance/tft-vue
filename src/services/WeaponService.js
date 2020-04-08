import api from "./Api";

export default {
  getWeapons() {
    return api().get("/weapons");
  },
  getWeapon(index) {
    return api().get(`/weapons/${index}`);
  },
  setWeapon(params = { action: "get", data: null }) {
    if (params.data.id) {
      return api().put(`/weapons/${params.data.id}`, params.data);
    } else {
      return api().post("/weapons", params.data);
    }
  }
};

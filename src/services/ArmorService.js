import api from "./Api";

export default {
  getArmorList() {
    return api().get("/armor");
  },
  getArmor(index) {
    return api().get(`/armor/${index}`);
  },
  setArmor(params = { action: "get", data: null }) {
    if (params.data.id) {
      return api().put(`/armor/${params.data.id}`, params.data);
    } else {
      return api().post("/armor", params.data);
    }
  }
};

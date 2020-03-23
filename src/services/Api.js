import Axios from "axios";

export default () => {
  return Axios.create({
    baseURL: "/api",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};

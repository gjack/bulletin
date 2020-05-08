import axios from "axios";
import { AsyncStorage } from "react-native";
// using url from ngrok free version
// will need to update every 8 hours
const instance = axios.create({
  baseURL: "http://0f8a6507.ngrok.io/v1",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;

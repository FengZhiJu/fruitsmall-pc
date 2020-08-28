import axios from "axios";

export default function(config) {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:3000/api",
    // baseURL: "http://39.101.173.169/api",
  });
  //两种方法都可设置请求携带cookie
  instance.defaults.withCredentials = true;
  // axios.defaults.withCredentials = true;
  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      throw err;
    }
  );
  return instance(config);
}

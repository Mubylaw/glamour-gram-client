import axios from "axios";

export function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function apiCall(method, path, data, config) {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](`${baseUrl}${path}`, data, config)
      .then((res) => {
        return resolve(res.data);
      })
      .catch((err) => {
        return reject(err.response.data.error);
      });
  });
}

export const baseUrl = "http://16.171.219.122:5000";
// export const baseUrl = "https://glamor-gram-server.onrender.com";
// export const baseUrl = "http://localhost:5000";

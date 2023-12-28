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

// export const baseUrl = "https://d2cnobs543chsz.cloudfront.net";
// export const baseUrl = "http://3.249.117.39:5000";
// export const baseUrl = "https://glamor-gram-server.onrender.com";
export const baseUrl = "http://localhost:5000";

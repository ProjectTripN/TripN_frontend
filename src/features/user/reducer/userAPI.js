import axios from "axios";

const SERVER = "http://localhost:8080";

const headers = {
  "Content-type": "application/json",
  Authorization: "JWT fefege..", // 일종의 토큰 블라블라로 바꿔준다
};

const join = (x) =>
  axios.post(`${SERVER}/users/join`, JSON.stringify(x), { headers });
const login = (x) =>
  axios.post(`${SERVER}/users/login/login`, JSON.stringify(x), { headers });
const mbti = (x) =>
  axios.put(`${SERVER}/users/mbti`, JSON.stringify(x), { headers });
const listModify = (x) =>
  axios.put(`${SERVER}/users/update`, JSON.stringify(x), { headers });
const list = (x) =>
  axios.post(`${SERVER}/users/userSearch`, JSON.stringify(x), { headers });
const forgotPassword = (x) =>
  axios.post(`${SERVER}/mail/sendmail`, JSON.stringify(x), { headers });
//   const exist = x => axios.get(`${SERVER}/users/exist/${x}`)
//   const detail = x => axios.get(`${SERVER}/users/${x.userId}`)
//   const list = x => axios.get(`${SERVER}/users/list/${x}`)
//   const modify = x => axios.put(`${SERVER}/users`, JSON.stringify(x),{headers})
//   const remove = x => axios.delete(`${SERVER}/users/${x}`,JSON.stringify(x),{headers})

export default {
  join,
  login,
  mbti,
  listModify,
  list,
  forgotPassword,
};

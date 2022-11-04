import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDc4M2RiODMzNjE2Mjg2Yzg2NjU2OSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NjcwMjYyNjYsImV4cCI6MTY2NzI4NTQ2Nn0.n8Ep-kTyQt8Jwv0_BEyu_RhdrFdUT1tRVfhCEzhCETY"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.api-ninjas.com/v1",
  headers: {
    "X-Api-Key": "HoICMbHVZha8gX313XHxmw==Zfwq9nyLzTw42iTY",
    Accept: "image/jpg",
  },
  responseType: "blob",
});

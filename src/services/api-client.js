import axios from "axios";

export default axios.create({
  baseURL: "https://api.api-ninjas.com/v1",
  headers: {
    "X-Api-Key": "5H3FhIVZ7FoUwPqkBVik3KrdakbLhmm8oueSf2RO",
    Accept: "image/jpg",
  },
  responseType: "blob",
});

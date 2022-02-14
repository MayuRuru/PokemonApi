import apiServer from "./globalapi";
import axios from "axios";

export async function getAllPoke() {
  return axios.get(apiServer).then((response) => response.data);
}
console.log(response);

export async function getPokeById(id) {
  return axios.get(apiServer + id).then((response) => response.data);
}

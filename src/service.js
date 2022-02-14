import apiServer from "./globalapi";
import axios from "axios";

export async function getAllPoke() {
  return axios.get(apiServer).then((res) => res.data);
}

export async function getPokeById(id) {
  return axios.get(apiServer + id).then((res) => res.data);
}

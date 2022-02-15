import globalApi from "./Global";
import axios from "axios";

export async function getAllPoke() {
  return axios.get(globalApi).then((res) => res.results);
}
console.log(res);

/*
export async function getPokeById(id) {
  return axios.get(globalApi + id).then((response) => response.data);
}
*/

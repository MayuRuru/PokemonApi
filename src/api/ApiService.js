import axios from "axios";

export async function getAllPoke(url) {
  return axios.get(url).then((res) => res.data);
}

export async function getPokeDetail(url) {
  return axios.get(url).then((res) => {
    return res.data;
  });
}

/*
export async function getPokeById(id) {
  return axios.get(globalApi + id).then((response) => response.data);
}
*/

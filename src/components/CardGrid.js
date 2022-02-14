import { Card } from "./Card";
//import { getAllPoke } from "../service";
import { useState, useEffect } from "react";
import axios from "axios";
//import { apiService } from "../Globalapi";

export const CardGrid = () => {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/1/")
      .then((response) => setPokes(response.data));
  }, []);

  return (
    <section>
      {pokes.data.forEach((poke) => (
        <Card poke={pokes} key={poke.id} image={poke.url} />
      ))}
    </section>
  );
};

/*
 useEffect(() => {
    getAllPoke().then((response) => setPokes(response));
  }, [setPokes]);

*/

import { Card } from "./Card";
//import { getAllPoke } from "../service";
import { useState, useEffect } from "react";
import axios from "axios";
//import { apiService } from "../Globalapi";

export const CardGrid = () => {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokes(res.data.result.map((poke) => poke.name));
    });
  }, []);

  return (
    <section>
      <Card poke={pokes} />
    </section>
  );
};

/*
 useEffect(() => {
    getAllPoke().then((response) => setPokes(response));
  }, [setPokes]);

{pokes.forEach((poke) => (
        <Card poke={pokes} key={poke.id} image={poke.url} />
      ))}

*/

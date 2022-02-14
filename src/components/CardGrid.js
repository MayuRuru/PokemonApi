import { Card } from "./Card";
//import { getAllPoke } from "../service";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiService } from "../Globalapi";

export const CardGrid = () => {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    axios({ apiService }).then((response) => setPokes(response.data));
  }, [setPokes]);

  return (
    <ul>
      {pokes.map((poke) => (
        <Card poke={poke} key={poke.id} image={poke.url} />
      ))}
    </ul>
  );
};

/*
 useEffect(() => {
    getAllPoke().then((response) => setPokes(response));
  }, [setPokes]);

*/

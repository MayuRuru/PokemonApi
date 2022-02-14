import { Card } from "./Card";
import { getAllPoke } from "../service";
import { useState, useEffect } from "react";

export const CardGrid = () => {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    getAllPoke().then((response) => setPokes(response));
  }, []);

  return console.log(response);
  /*
    <ul>
      {pokes.map((poke) => (
        <Card poke={poke} key={poke.id} image={poke.url} />
      ))}
    </ul>
    
  );*/
};

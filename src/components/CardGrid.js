import { Card } from "./Card";
import { useState, useEffect } from "react";
import { getAllPoke } from "../api/ApiService";

export const CardGrid = () => {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    getAllPoke().then((res) => setPokes(res.results));
  }, []);

  return (
    <section>
      {pokes.map((poke) => (
        <Card poke={poke} key={poke.index} />
      ))}
    </section>
  );
};

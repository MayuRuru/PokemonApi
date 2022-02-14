import React, { useState, useEffect } from "react";
import { getAllPoke } from "../service";
import { Card } from "./Card";

export const CardGrid = () => {
  const [pokes, setPokes] = useState([]);
  useEffect(() => {
    getAllPoke().then((response) => setPokes(response));
  }, []);

  return (
    <h1>
      {pokes.map((poke) => (
        <Card poke={poke} key={poke.id} />
      ))}
    </h1>
  );
};

import React, { useState, useEffect } from "react";
import { getAllPoke } from "../service";
import { Card } from "./Card";

export const CardGrid = (props) => {
  return (
    <ul>
      {props.pokes.map((poke) => (
        <Card poke={poke} key={poke.id} image={poke.url} />
      ))}
    </ul>
  );
};

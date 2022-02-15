import axios from "axios";
import { useState, useEffect } from "react";

export function Card(props) {
  const [pokeImg, setPokeImg] = useState([]);

  useEffect(() => {
    axios
      .get(props.poke.url)
      .then((res) =>
        setPokeImg(res.data.sprites.other.dream_world.front_default)
      );
  });

  return (
    <div>
      <h1>{props.poke.name}</h1>
      <img src={pokeImg} />
    </div>
  );
}

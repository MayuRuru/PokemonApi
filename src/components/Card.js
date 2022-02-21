import axios from "axios";
import { useState, useEffect } from "react";
import { getPokeDetail } from "../api/ApiService";

export function Card(props) {
  const [pokeName, setPokeName] = useState("");
  const [pokeImg, setPokeImg] = useState("");

  useEffect(() => {
    getPokeDetail(props.pokes.url).then((pokedata) => {
      setPokeImg(
        pokedata.sprites.front_female ?? pokedata.sprites.back_default
      );
      setPokeName(pokedata.name);
    });
  }, [props]);

  return (
    <div>
      <h1>{pokeName}</h1>
      <img src={pokeImg} alt={pokeName} />
    </div>
  );
}

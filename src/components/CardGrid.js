import { Card } from "./Card";
import { useState, useEffect } from "react";
import { getAllPoke } from "../api/ApiService";

export const CardGrid = () => {
  const [pokes, setPokes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    //setPokes(res.data.results.map((poke) => poke.name));
    getAllPoke().then((res) => setPokes(res.results));
  }, []);

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  return (
    <section>
      {pokes.map((poke) => (
        <Card pokes={poke} key={poke.index} />
      ))}
    </section>
  );
};

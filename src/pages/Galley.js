import { CardGrid } from "./components/CardGrid";
import { getAllPoke } from "./service";
import { useState, useEffect } from "react";

function Gallery() {
  const [pokes, setPokes] = useState([]);
  useEffect(() => {
    getAllPoke().then((response) => setPokes(response));
  }, []);

  return (
    <div className="App">
      <h1>POKEMON LIST</h1>
      <CardGrid />
    </div>
  );
}

export default Gallery;

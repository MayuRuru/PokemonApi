import Card from "../components/Card";

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke, key, name, image) => (
        <Card key={poke} name={poke.name} />
      ))}
    </div>
  );
}

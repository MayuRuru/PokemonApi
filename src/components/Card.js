export function Card(props) {
  return (
    <div>
      <div>name: {props.poke.name}</div>
      <div>
        <img src={props.poke.image} />
      </div>
    </div>
  );
}

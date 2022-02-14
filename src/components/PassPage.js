export default function PassPage({ goNext, goPrevious }) {
  return (
    <div>
      <button onClick={goPrevious}>Previous</button>
      <button onClick={goNext}>Next</button>
    </div>
  );
}

//{goPrevious &&}
//{goNext &&}

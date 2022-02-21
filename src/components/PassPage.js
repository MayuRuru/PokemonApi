export default function PassPage({ previousPage, nextPage, setActualPage }) {
  function goNext() {
    console.log("NEXT", nextPage);

    setActualPage(nextPage);
  }

  function goPrevious() {
    console.log("PREVIOUS", previousPage);
    setActualPage(previousPage);
  }

  return (
    <div>
      <button onClick={previousPage ? goPrevious : null}>Previous</button>
      <button onClick={nextPage ? goNext : null}>Next</button>
    </div>
  );
}

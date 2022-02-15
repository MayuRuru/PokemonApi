import { useState, useEffect } from "react";
import axios from "axios";
import globalApi from "../api/Global";

export default function PassPage() {
  //const [loading, setLoading] = useState(true);

  const [actualPage, setActualPage] = useState(globalApi);
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();

  useEffect(() => {
    //setLoading(false);
    axios.get(globalApi).then((res) => {
      setNextPage(res.data.next);
      setPreviousPage(res.data.previous);
    });
  }, [actualPage]);

  function goNext() {
    setActualPage(nextPage);
  }

  function goPrevious() {
    setActualPage(previousPage);
  }

  //if (loading) return "Loading...";

  return (
    <div>
      <button onClick={goPrevious ? goPrevious : null}>Previous</button>
      <button onClick={goNext ? goNext : null}>Next</button>
    </div>
  );
}

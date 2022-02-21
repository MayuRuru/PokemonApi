import FIRST_PAGE from "../api/Global";
import { useState, useEffect } from "react";
import { getAllPoke } from "../api/ApiService";

export const useGrid = () => {
  const [pokes, setPokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualPage, setActualPage] = useState(FIRST_PAGE);
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();

  useEffect(() => {
    setLoading(true);

    getAllPoke(actualPage).then((res) => {
      setPokes(res.results);
      setNextPage(res.next);
      setPreviousPage(res.previous);
      setLoading(false);
    });
  }, [actualPage]);

  return {
    pokes,
    loading,
    actualPage,
    nextPage,
    previousPage,
    methods: {
      setActualPage,
    },
  };
};

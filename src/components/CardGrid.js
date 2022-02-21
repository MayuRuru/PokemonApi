import { Card } from "./Card";
import PassPage from "./PassPage";
import { useGrid } from "../hooks/useGrid";

export const CardGrid = () => {
  const {
    loading,
    nextPage,
    pokes,
    previousPage,
    methods: { setActualPage },
  } = useGrid();

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  return (
    <>
      <PassPage
        nextPage={nextPage}
        previousPage={previousPage}
        setActualPage={setActualPage}
      />
      <ul className="grid">
        {pokes.map((poke) => (
          <Card pokes={poke} key={poke.name} />
        ))}
      </ul>
    </>
  );
};

// export const CardGrid = () => {
//   const [pokes, setPokes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [actualPage, setActualPage] = useState(FIRST_PAGE);
//   const [nextPage, setNextPage] = useState();
//   const [previousPage, setPreviousPage] = useState();

//   useEffect(() => {
//     setLoading(true);

//     getAllPoke(actualPage).then((res) => {
//       setPokes(res.results);
//       setNextPage(res.next);
//       setPreviousPage(res.previous);
//       setLoading(false);
//     });
//   }, [actualPage]);

//   if (loading)
//     return (
//       <section>
//         <p>Loading...</p>
//       </section>
//     );

//   return (
//     <section>
//       <PassPage
//         nextPage={nextPage}
//         previousPage={previousPage}
//         setActualPage={setActualPage}
//       />
//       {pokes.map((poke) => (
//         <Card pokes={poke} key={poke.name} />
//       ))}
//     </section>
//   );
// };

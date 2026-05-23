import { useState, useEffect } from "react";

const KEY = "412fff02";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController(); // this controller will be used to abort the fetch request if the component unmounts or if the query changes before the fetch is completed, preventing potential memory leaks and ensuring that we don't update state on an unmounted component.

      async function fetchMovies() {
        // callback?.(); // this will call the callback function passed as an argument to useMovies, allowing the parent component to perform any necessary actions (like closing a movie details view) before fetching new movies based on the updated query.
        try {
          setIsLoading(true);
          setError(""); // reset error before new fetch
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal },
          );

          if (!res.ok) throw new Error("Something went wrong fetching movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      //   handleCloseMovie();
      fetchMovies();
      return function () {
        controller.abort(); // this will abort the fetch request if the component unmounts or if the query changes before the fetch is completed, preventing potential memory leaks and ensuring that we don't update state on an unmounted component.
      };
    },
    [query],
  );

  return { isLoading, error, movies };
}

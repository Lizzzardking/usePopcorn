import { useEffect } from "react";

export function useKey(key, action) {
  // this useEffect will run every time the selectedId changes, which means every time a new movie is selected, the movie details will be fetched and displayed
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [key, action],
  );
}

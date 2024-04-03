import { useState, useEffect } from "react";

//we chnage the [watched, setWatched] to value and setValue to make it global
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  //we use this effect for the localstorage,we place in the add move watched into as the dependency
  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}

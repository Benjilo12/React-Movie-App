import { useEffect } from "react";

export function useKey(key, action) {
  //keypress using Escape key with useEffect
  //DOM is a side effect so we use useEffect
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
    [action, key]
  );
}

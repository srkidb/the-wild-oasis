import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      //when creating a modal window and we want to close the modal with click outside the modal window
      //every click before opening the modal window will be outside the modal window and the modal window
      //will not be opened. so we have to add third argument in addEventListener "true" to listen for clicks outside the modal window
      //that will be attached when the modal window is opened
      document.addEventListener("click", handleClick, listenCapturing);

      return () => {
        document.removeEventListener("click", handleClick, listenCapturing);
      };
    },
    [handler, listenCapturing]
  );

  return ref;
}

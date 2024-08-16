import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

/*
TODO:

-- create new booking
-- edit booking
-- check in and check out times
-- set different price for every day
-- restaurant -- add an restaurant where guest can make bill, and pay it on checkout
-- check out page where we can generate pdf and email it to the user
-- clear the local storage after closeing the tab 

*/

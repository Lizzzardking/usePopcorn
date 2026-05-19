import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Poor", "Fair", "Good", "Very Good", "Amazing"]}
    />
    <StarRating maxRating={10} defaultRating={5} />
    <StarRating maxRating={10} color="teal" size="4" className="test" /> */}
  </React.StrictMode>,
);

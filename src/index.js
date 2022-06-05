import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Gallery from "./Gallery";

function MyApp() {
  return (
    <div>
      <h1>Gallery</h1>
      <Gallery />
    </div>
  );
}
document.getElementById("app");
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <div>
    <MyApp />
  </div>
);

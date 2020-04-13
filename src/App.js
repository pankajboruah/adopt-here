import React from "react";
import { render } from "react-dom";
import pet from "./pet";

const App = () => {
  return React.createElement(
    "div",
    { id: "container" },
    React.createElement("h1", { id: "title" }, "Adopt Here"),
    React.createElement(pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Habanese"
    }),
    React.createElement(pet, {
      name: "Chester",
      animal: "Cat",
      breed: "Mixed"
    }),
    React.createElement(pet, { name: "Apple", animal: "Dog", breed: "Husky" })
  );
};
render(React.createElement(App), document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
// import Pet from "./pet";
const App = () => {
	return (
		<div id="container">
			<h1 id="title">Adopt Here!</h1>
			<SearchParams />
		</div>
	);
};
render(<App />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
// import Pet from "./pet";
const App = () => {
	return (
		<div id="container">
			<header>
				<Link to="/">Adopt Here</Link>
			</header>
			<Router>
				<SearchParams path="/" />
				<Details path="/details/:id" />
			</Router>
		</div>
	);
};
render(<App />, document.getElementById("root"));

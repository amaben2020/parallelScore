import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App2 from "./App2";
import FindAndReserve from "./components/FindAndReserve";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={App} />
				<Route path="/findandreserve" component={App2} />

				{/* <App /> */}
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();

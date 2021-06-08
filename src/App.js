import { BrowserRouter, Switch } from "react-router-dom";
import Cards2 from "./components/Card2";
import FlippingCards from "./components/FlippingCards";
import FooterWithHeaders from "./components/FooterWithHeaders";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "./Sass/App.scss";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<div className="App">
					<NavBar />
					<Hero />
					<FlippingCards />
					<Cards2 />
					<FooterWithHeaders />
				</div>
			</Switch>
		</BrowserRouter>
	);
}

export default App;

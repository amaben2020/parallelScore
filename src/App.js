import { BrowserRouter } from "react-router-dom";
import FlippingCards from "./components/FlippingCards";
import FooterWithHeaders from "./components/FooterWithHeaders";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import NavBar from "./components/NavBar";
import "./Sass/App.scss";

function App({ isOpen, toggleButton }) {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				{/* <Hero /> */}
				<Hero2 />
				<FlippingCards />
				<FooterWithHeaders />
			</div>
		</BrowserRouter>
	);
}

export default App;

import { BrowserRouter } from "react-router-dom";
import Cards2 from "./components/Card2";
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
				<Cards2 />
				<FooterWithHeaders />
			</div>
		</BrowserRouter>
	);
}

export default App;

import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init({ duration: 1000, once: false });
	}, []);

	return (
		<div className="overflow-hidden">
			<Navbar />
			<Home />
			<Footer />
		</div>
	);
}

export default App;

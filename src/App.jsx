import Home from "./pages/Home/Home";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App ()
{
	return (
		<div className="overflow-hidden">
			<Navbar />
			<Home />
			<Footer />
		</div>
	);
}

export default App;

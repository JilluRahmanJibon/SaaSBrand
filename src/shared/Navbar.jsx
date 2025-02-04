import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
	const [scrolling, setScrolling] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolling(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<motion.nav
			className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
				scrolling ? "bg-white shadow-md text-gray-900" : "text-white"
			}`}
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}>
			<div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
				<div className="text-2xl font-bold">
					<a href="/">SaaSBrand</a>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-6">
					<Link
						to="features"
						smooth={true}
						duration={500}
						className="hover:text-blue-300 transition cursor-pointer">
						Features
					</Link>
					<Link
						to="pricing"
						smooth={true}
						duration={500}
						className="hover:text-blue-300 transition cursor-pointer">
						Pricing
					</Link>
					<Link
						to="testimonials"
						smooth={true}
						duration={500}
						className="hover:text-blue-300 transition cursor-pointer">
						Testimonials
					</Link>
					<Link
						to="contact"
						smooth={true}
						duration={500}
						className="hover:text-blue-300 transition cursor-pointer">
						Contact
					</Link>
					<Link
						to="contact"
						smooth={true}
						duration={500}
						className={`hidden cursor-pointer md:block px-5 py-2 bg-blue-600 rounded-xl shadow-md hover:bg-yellow-500 transition ${
							scrolling
								? "text-white bg-gradient-to-r from-green-400  "
								: "bg-gradient-to-r from-green-400 to-yellow-500"
						}`}>
						Get Started
					</Link>
				</div>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden flex items-center">
					<button
						onClick={handleMenuToggle}
						className="text-white focus:outline-none">
						{menuOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{menuOpen && (
				<div className="md:hidden flex flex-col space-y-4 bg-white p-6 shadow-md">
					<Link
						to="features"
						smooth={true}
						duration={500}
						className="text-gray-700 hover:text-blue-600">
						Features
					</Link>
					<Link
						to="pricing"
						smooth={true}
						duration={500}
						className="text-gray-700 hover:text-blue-600">
						Pricing
					</Link>
					<Link
						to="testimonials"
						smooth={true}
						duration={500}
						className="text-gray-700 hover:text-blue-600">
						Testimonials
					</Link>
					<Link
						to="contact"
						smooth={true}
						duration={500}
						className="text-gray-700 hover:text-blue-600">
						Contact
					</Link>

					{/* Get Started Button in Mobile Menu */}
					<button className="px-5 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition mt-4">
						Get Started
					</button>
				</div>
			)}
		</motion.nav>
	);
};

export default Navbar;

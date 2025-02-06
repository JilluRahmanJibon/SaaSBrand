import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero() {
	return (
		<div className="min-h-screen bg-gradient-to-r from-teal-500 via-purple-600 to-blue-500">
			<header className="h-screen flex items-center justify-center text-center px-6">
				<div>
					<motion.h1
						className="text-5xl font-extrabold text-white leading-tight"
						initial={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.2 }}>
						Elevate Your Business with{" "}
						<span className="text-yellow-400">Our SaaS Solution</span>
					</motion.h1>
					<p className="mt-6 text-lg text-white opacity-80 max-w-2xl mx-auto">
						Experience seamless workflow, automation, and performance-driven
						results. Unlock your potential with the best SaaS platform.
					</p>
					<Link to="contact" smooth={true} duration={500}>
						<motion.button
							className="cursor-pointer mt-8 px-8 py-4 bg-gradient-to-r from-green-400 to-yellow-500 text-white rounded-xl shadow-xl hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105"
							whileHover={{ scale: 1.05 }}>
							Get Started
						</motion.button>
					</Link>
				</div>
			</header>
		</div>
	);
}

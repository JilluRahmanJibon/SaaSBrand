import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer className="footer bg-gray-800 text-white py-16">
			<div className="container mx-auto text-center">
				<motion.div
					className="footer-links mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<ul className="flex justify-center space-x-10">
						<li>
							<a
								href="#home"
								className="text-lg hover:text-teal-400 transition duration-300">
								Home
							</a>
						</li>
						<li>
							<a
								href="#features"
								className="text-lg hover:text-teal-400 transition duration-300">
								Features
							</a>
						</li>
						<li>
							<a
								href="#pricing"
								className="text-lg hover:text-teal-400 transition duration-300">
								Pricing
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="text-lg hover:text-teal-400 transition duration-300">
								Contact
							</a>
						</li>
						<li>
							<a
								href="#about"
								className="text-lg hover:text-teal-400 transition duration-300">
								About
							</a>
						</li>
					</ul>
				</motion.div>

				<motion.div
					className="social-icons mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.3 }}>
					<ul className="flex justify-center space-x-6">
						<li>
							<a
								href="https://web.facebook.com/developer.JillurRahmanJibon"
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl hover:text-teal-400 transition duration-300">
								<i className="fab fa-facebook-f"></i>
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl hover:text-teal-400 transition duration-300">
								<i className="fab fa-twitter"></i>
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl hover:text-teal-400 transition duration-300">
								<i className="fab fa-instagram"></i>
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/jillurahmanjibon/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-2xl hover:text-teal-400 transition duration-300">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</li>
					</ul>
				</motion.div>

				<motion.div
					className="copyright text-sm text-gray-400"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.6 }}>
					<p>
						&copy; {new Date().getFullYear()} SaaSBrand. All rights reserved.
					</p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;

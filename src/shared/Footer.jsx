import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-16">
			<div className="container mx-auto px-6 text-center">
				{/* Navigation Links */}
				<motion.div
					className="footer-links mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<ul className="flex flex-wrap justify-center space-x-6 md:space-x-10">
						{[
							{ name: "Features", to: "features" },
							{ name: "Pricing", to: "pricing" },
							{ name: "Contact", to: "contact" },
							{ name: "About", to: "about" },
						].map((link, index) => (
							<li key={index}>
								<Link
									to={link.to}
									smooth={true}
									duration={500}
									className="text-lg hover:text-teal-400 transition duration-300 cursor-pointer">
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</motion.div>

				{/* Social Icons */}
				<motion.div
					className="social-icons mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.3 }}>
					<ul className="flex justify-center space-x-6 text-2xl">
						{[
							{
								icon: "fab fa-facebook-f",
								url: "https://web.facebook.com/developer.JillurRahmanJibon",
							},
							{ icon: "fab fa-twitter", url: "https://twitter.com" },
							{ icon: "fab fa-instagram", url: "https://www.instagram.com" },
							{
								icon: "fab fa-linkedin-in",
								url: "https://www.linkedin.com/in/jillurahmanjibon/",
							},
						].map((social, index) => (
							<li key={index}>
								<a
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-teal-400 transition duration-300">
									<i className={social.icon}></i>
								</a>
							</li>
						))}
					</ul>
				</motion.div>

				{/* Copyright */}
				<motion.div
					className="text-sm text-gray-400"
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

import { motion } from "framer-motion";

const CTASection = () => {
	return (
		<section className="cta-section py-20   text-center relative">
			<div className="absolute inset-0 opacity-40"></div>{" "}
			{/* Dark overlay */}
			<div className="container mx-auto relative z-10">
				<motion.h2
					className="text-5xl font-extrabold mb-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Ready to Get Started?
				</motion.h2>
				<motion.p
					className="text-xl mb-12 font-light"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.3 }}>
					Join thousands of businesses using our solution to grow and streamline
					their operations. Sign up today and get started with a free trial.
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.6 }}>
					<a
						href="#signup"
						className="px-10 py-4 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
						Start Free Trial
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default CTASection;

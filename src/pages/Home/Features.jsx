import { motion } from "framer-motion";

const features = [
	{
		title: "Feature One",
		description: "Description of the first feature of your SaaS product.",
		icon: "🚀",
	},
	{
		title: "Feature Two",
		description: "Description of the second feature of your SaaS product.",
		icon: "📊",
	},
	{
		title: "Feature Three",
		description: "Description of the third feature of your SaaS product.",
		icon: "⚡",
	},
];

const Features = () => {
	return (
		<section id="features" className="features-section py-20 bg-gray-50">
			<div className="container mx-auto text-center px-6">
				<motion.h2
					className="text-4xl font-extrabold mb-12 text-gray-900"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Key Features
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className="feature-item p-8 bg-white text-gray-800 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.3 }}>
							<div className="icon text-5xl mb-6">{feature.icon}</div>
							<motion.h3
								className="text-2xl font-semibold mb-6"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.3 }}>
								{feature.title}
							</motion.h3>
							<p className="text-gray-600">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const pricingPlans = [
	{
		title: "Basic Plan",
		price: "$19/month",
		features: ["1 User", "Basic Features", "Email Support"],
		buttonText: "Start Free Trial",
	},
	{
		title: "Pro Plan",
		price: "$49/month",
		features: ["Up to 5 Users", "Advanced Features", "Priority Support"],
		buttonText: "Get Started",
	},
	{
		title: "Enterprise Plan",
		price: "$99/month",
		features: ["Unlimited Users", "All Features", "24/7 Support"],
		buttonText: "Contact Us",
	},
];

const Pricing = () => {
	return (
		<section id="pricing" className="pricing-section   py-20 bg-gray-50">
			<div className="container mx-auto text-center">
				<motion.h2
					className="text-4xl font-extrabold mb-12 text-gray-900"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Pricing Plans
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{pricingPlans.map((plan, index) => (
						<motion.div
							key={index}
							className="pricing-plan p-8  bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.3 }}>
							<motion.h3
								className="text-3xl font-bold mb-4"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.3 }}>
								{plan.title}
							</motion.h3>
							<p className="text-4xl font-extrabold mb-4">{plan.price}</p>
							<ul className="text-gray-200 mb-6">
								{plan.features.map((feature, idx) => (
									<li key={idx} className="mb-2">
										{feature}
									</li>
								))}
							</ul>
							<Link to={plan.buttonText} smooth={true} duration={500}>
								<motion.button
									className="px-6 py-2 bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg hover:bg-yellow-600 transition"
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.2 }}>
									{plan.buttonText}
								</motion.button>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;

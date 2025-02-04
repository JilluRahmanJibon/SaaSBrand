import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
	{
		question: "What is your product?",
		answer:
			"Our product is a SaaS solution that helps businesses streamline their operations, improve productivity, and grow faster.",
	},
	{
		question: "How can I sign up?",
		answer:
			'You can sign up by clicking the "Start Free Trial" button on our website and filling in the registration form.',
	},
	{
		question: "Is there a free trial?",
		answer: "Yes! We offer a 14-day free trial with no credit card required.",
	},
	{
		question: "Can I cancel my subscription?",
		answer:
			"Yes, you can cancel your subscription at any time directly from your account settings page.",
	},
	{
		question: "Is there customer support?",
		answer:
			"Absolutely! Our support team is available 24/7 to assist you with any issues or questions you may have.",
	},
];

const FAQSection = () => {
	const [expandedIndex, setExpandedIndex] = useState(null);

	const toggleAnswer = index => {
		if (expandedIndex === index) {
			setExpandedIndex(null); // Close the answer if it's already open
		} else {
			setExpandedIndex(index); // Open the clicked answer
		}
	};

	return (
		<section className="faq-section py-20 bg-gradient-to-r from-teal-500 to-blue-500 ">
			<div className="container mx-auto text-center">
				<motion.h2
					className="text-4xl font-extrabold text-white mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Frequently Asked Questions
				</motion.h2>

				<div className="max-w-2xl mx-auto space-y-6">
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className="faq-item"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}>
							<div
								className="faq-question cursor-pointer text-xl font-semibold p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
								onClick={() => toggleAnswer(index)}>
								<motion.h3
									className="flex justify-between items-center"
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.2 }}>
									{faq.question}
									<span className="ml-2 text-primary text-2xl">
										{expandedIndex === index ? "-" : "+"}
									</span>
								</motion.h3>
							</div>

							{expandedIndex === index && (
								<motion.div
									className="faq-answer mt-4 text-lg text-gray-700 p-6 bg-white rounded-lg shadow-lg"
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									transition={{ duration: 0.5 }}>
									{faq.answer}
								</motion.div>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQSection;

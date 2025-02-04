import { motion } from "framer-motion";

const testimonials = [
	{
		name: "John Doe",
		title: "CEO, Example Corp.",
		quote:
			"This product has completely transformed the way our team collaborates. It's intuitive and easy to use!",
		image: "https://randomuser.me/api/portraits/men/1.jpg",
	},
	{
		name: "Jane Smith",
		title: "Founder, StartupX",
		quote:
			"An amazing tool that has simplified our processes and boosted productivity. Highly recommended!",
		image: "https://randomuser.me/api/portraits/women/2.jpg",
	},
	{
		name: "Sam Johnson",
		title: "Lead Developer, TechWorks",
		quote:
			"A game-changer for our workflow. It integrates seamlessly with our existing tools. Absolutely love it!",
		image: "https://randomuser.me/api/portraits/men/3.jpg",
	},
];

const Testimonial = () => {
	return (
		<section id="testimonials" className="testimonial-section py-20 bg-gray-50">
			<div className="container mx-auto text-center">
				<motion.h2
					className="text-4xl font-extrabold mb-12 text-gray-900"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					What Our Clients Say
				</motion.h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							className="testimonial-item p-8 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.3 }}>
							<motion.p
								className="text-lg italic text-gray-700 mb-6"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.8, delay: 0.3 }}>
								&ldquo;{testimonial.quote}&rdquo;
							</motion.p>
							<div className="flex items-center justify-center">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-md mr-4"
								/>
								<div>
									<h3 className="text-xl font-semibold text-gray-800">
										{testimonial.name}
									</h3>
									<p className="text-gray-600">{testimonial.title}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonial;

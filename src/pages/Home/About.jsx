import { motion } from "framer-motion";

const About = () => {
	return (
		<section id="about" className="about-section py-20 bg-gradient-to-r from-teal-500 to-blue-500 text-white">
			<div className="container mx-auto text-center px-6">
				<motion.h2
					className="text-4xl font-extrabold mb-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					About Us
				</motion.h2>
				<motion.p
					className="text-lg text-gray-200 mb-12"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.3 }}>
					We are a passionate team dedicated to creating the best SaaS solutions
					that help businesses grow, streamline workflows, and improve
					productivity.
				</motion.p>
				<div className="flex justify-center items-center gap-12">
					<motion.div
						className="team-member p-8 bg-white rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}>
						<img
							src="https://randomuser.me/api/portraits/men/1.jpg"
							alt="Team Member 1"
							className="w-32 h-32 rounded-full mb-4 mx-auto border-4 border-indigo-500 shadow-lg"
						/>
						<h3 className="text-xl font-semibold mb-2">John Doe</h3>
						<p className="text-gray-600">CEO & Founder</p>
					</motion.div>

					<motion.div
						className="team-member p-8 bg-white rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.7 }}>
						<img
							src="https://randomuser.me/api/portraits/women/2.jpg"
							alt="Team Member 2"
							className="w-32 h-32 rounded-full mb-4 mx-auto border-4 border-indigo-500 shadow-lg"
						/>
						<h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
						<p className="text-gray-600">Co-Founder & CTO</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;

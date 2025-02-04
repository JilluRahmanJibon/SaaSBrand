import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [formStatus, setFormStatus] = useState("");

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		// Simulate form submission (replace with actual form handling logic)
		setFormStatus("Submitting...");
		setTimeout(() => {
			setFormStatus(
				"Thank you for your message! We will get back to you shortly."
			);
		}, 2000);
	};

	return (
		<section id="contact" className="contact-section py-20  ">
			<div className="container mx-auto text-center">
				<motion.h2
					className="text-3xl font-extrabold mb-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					Get in Touch
				</motion.h2>

				<motion.p
					className="text-lg mb-10 font-light"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.3 }}>
					Have any questions? We’d love to hear from you. Drop us a message!
				</motion.p>

				<motion.div
					className="contact-form max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="Your Name"
								className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
								required
							/>
						</div>
						<div className="mb-4">
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Your Email"
								className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
								required
							/>
						</div>
						<div className="mb-6">
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Your Message"
								rows="4"
								className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
								required
							/>
						</div>
						<motion.button
							type="submit"
							className="w-full bg-gradient-to-r from-green-400 to-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition duration-300"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2 }}>
							Send Message
						</motion.button>
					</form>

					{formStatus && (
						<motion.div
							className="mt-4 text-lg font-semibold text-green-500"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.8 }}>
							{formStatus}
						</motion.div>
					)}
				</motion.div>

				<motion.div
					className="contact-info mt-8 text-lg font-light"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}>
					<p className="mb-2">
						<strong>Email:</strong> jillurahmanjibon@gmail.com
					</p>
					<p>
						<strong>Phone:</strong> +88 01910 924868
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;

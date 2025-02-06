import About from "./About";
import Contact from "./Contact";
import CTASection from "./CTASection";
import FAQSection from "./FAQSection";
import Features from "./Features";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";

const Home = () => {
	return (
		<div>
			<div data-aos="fade-up">
				<Hero />
			</div>
			<div data-aos="fade-right">
				<Features />
			</div>
			<div data-aos="fade-left">
				<Pricing />
			</div>
			<div data-aos="zoom-in">
				<Testimonial />
			</div>
			<div data-aos="fade-up">
				<About />
			</div>
			<div data-aos="flip-up">
				<CTASection />
			</div>
			<div data-aos="fade-up">
				<FAQSection />
			</div>
			<div data-aos="fade-up">
				<Contact />
			</div>
		</div>
	);
};

export default Home;

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
      <Hero />
      <Features />
      <Pricing />
      <Testimonial />
      <About />
      <CTASection />
      <FAQSection />
      <Contact />
      
		</div>
	);
};

export default Home;

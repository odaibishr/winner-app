import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import WhyChooseUsSection from "../components/WhyChooseUsSection";

const Home = () => {
	return (
		<div className="relative w-full bg-black">
			<HeroSection />
			<WhyChooseUsSection />
			<Footer />
		</div>
	);
};

export default Home;

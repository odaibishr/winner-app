import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import WinnerCTASection from "../components/WinnerCTASection";

const Home = () => {
	return (
		<div className="relative w-full bg-black">
			<HeroSection />
			<WhyChooseUsSection />
			<WinnerCTASection />
			<Footer />
		</div>
	);
};

export default Home;

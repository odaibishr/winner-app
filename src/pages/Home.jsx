import React from "react";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import WinnerCTASection from "../components/WinnerCTASection";
import SectionHeader from "../components/SectionHeader";
import PrimaryButton from "../components/PrimaryButton";

const Home = () => {
	return (
		<div className="relative w-full bg-black">
			<HeroSection />
			<WhyChooseUsSection />
			<WinnerCTASection />
			<section className="md:py-20 py-20 flex flex-col justify-center items-center gap-4">
				<SectionHeader
					title="ابدأ رحلتك مع Winner اليوم"
					description="انضم إلى مجتمعنا النشط واستمتع بتجربة تواصل اجتماعي لا مثيل لها"
				/>
				<PrimaryButton
					title="تحميل التطبيق"
					icon="/download.svg"
					link="/download"
				/>
				<PrimaryButton
					title="تواصـــل معنـــا"
					icon="/light-connect.svg"
					link="/contact"
				/>
			</section>
			<Footer />
		</div>
	);
};

export default Home;

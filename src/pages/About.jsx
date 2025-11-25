import React from "react";
import VisionMissionSection from "../components/VisionMissionSection";
import FeaturesSection from "../components/FeaturesSection";
import OurValuesSection from "../components/OurValuesSection";
import SectionHeader from "../components/SectionHeader";
import PrimaryButton from "../components/PrimaryButton";

const About = () => {
	return (
		<main className="bg-black pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 min-h-screen">
			<section className="pb-16 md:pb-20 border border-b-white md:shadow-2xl shadow-lg shadow-white/50">
				<div className="container mx-auto flex flex-col gap-4 px-4">
					<span className="text-white font-bold text-6xl sm:text-7xl md:text-[200px] lg:text-[250px] leading-none md:leading-1">
						قصة
					</span>

					<span className="text-primary font-extrabold text-7xl sm:text-8xl md:text-[300px] lg:text-[400px] leading-none md:-translate-y-10 lg:-translate-y-10">
						Winner
					</span>

					<div className="w-full flex justify-center text-center">
						<p className="text-white text-base sm:text-lg md:text-2xl lg:text-2xl leading-relaxed md:w-3/4 lg:w-2/3">
							بدأت رحلتنا برؤية بسيطة: إنشاء منصة تواصل اجتماعي تجمع بين
							الأصدقاء والعائلة في بيئة آمنة وممتعة، مع ميزات فريدة تجعل التواصل
							أكثر تعبيراً وإبداعاً.
						</p>
					</div>
				</div>
			</section>
			<VisionMissionSection />
			<FeaturesSection />
			<OurValuesSection />
			{/* join section */}
			<section className="container md:py-20 py-20 flex flex-col justify-center items-center gap-4">
				<SectionHeader
					title="انضم إلى عائلة Winner"
					description="كن جزءاً من مجتمعنا النشط واستمتع بتجربة تواصل اجتماعي فريدة"
				/>
				<PrimaryButton title="تحميل التطبيق" link="/download" />
			</section>
		</main>
	);
};

export default About;

import CapabilitySections from "../components/CapabilitySections";
import DetailedFeaturesSection from "../components/DetailedFeaturesSection";
import TechnicalSpecificationsSection from "../components/TechnicalSpecificationsSection";
import SectionHeader from "../components/SectionHeader.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";

const Features = () => {
	return (
		<main className="bg-black pt-32 md:pt-40 lg:pt-48 min-h-screen">
			{/* Features Hero section */}
			<section className="pb-16 md:pb-20 section-border">
				<div className="container text-center md:text-start flex flex-col gap-4 px-4">
					<span className="text-white font-bold text-6xl sm:text-7xl md:text-[100px] lg:text-[170px] leading-none md:leading-1">
						مميزات
					</span>

					<span className="text-primary font-extrabold text-7xl sm:text-8xl md:text-[200px] lg:text-[350px] leading-none ">
						Winner
					</span>

					<span className="text-white font-bold text-3xl sm:text-4xl md:text-[60px] lg:text-[100px] leading-none md:-translate-y- 15">
						المتقدمة
					</span>

					<div className="w-full flex justify-center text-center">
						<p className="text-white text-base sm:text-lg md:text-2xl lg:text-2xl leading-relaxed md:w-3/4 lg:w-2/3">
							اكتشف جميع الميزات التي تجعل Winner التطبيق الأفضل للتواصل
							الاجتماعي
						</p>
					</div>
				</div>
			</section>
			<CapabilitySections />
			<DetailedFeaturesSection />
			<TechnicalSpecificationsSection />
            <section className="container flex flex-col items-center justify-center gap-4 py-16 md:py-20">
                <SectionHeader
                    title="جرب جميع الميزات الآن"
                    description="حمّل التطبيق واستمتع بتجربة تواصل اجتماعي فريدة مع جميع هذه الميزات المتقدمة"
                />
                <PrimaryButton
                    title="تحميل التطبيق"
                    icon="/download.svg"
                    link="/download"
                />
            </section>
		</main>
	);
};

export default Features;

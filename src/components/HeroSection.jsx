import React from "react";
import StatsSection from "./StatsSection";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton.jsx";

const HeroSection = () => {
	return (
		<section className="relative w-full min-h-screen flex flex-col pt-40 md:pt-28 pb-20 md:pb-10 overflow-hidden">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url('./background-image.jpg')` }}
			></div>

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-linear-to-bl -start-200 from-secondary to-[#000000] opacity-90"></div>

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
				<div className="text-center">
					<span className="text-primary md:text-5xl text-2xl font-medium">
						يااااهووو!
					</span>
					<span className="text-white md:text-5xl text-2xl font-medium">
						{" "}
						نورت موقعنا..!
					</span>
				</div>

				<div className="text-center text-white md:text-2xl text-lg md:w-[50%] w-full mt-7 leading-relaxed">
					تطبيق التواصل الاجتماعي الأول في المنطقة. تواصل مع الأصدقاء، أرسل
					الهدايا الافتراضية، وانضم إلى غرف المحادثة التفاعلية.
				</div>

				<div className="mt-8 flex md:flex-row flex-col items-center md:gap-5 gap-3">
					<PrimaryButton
						title="تحميل التطبيق"
						icon="/download.svg"
						link="/download"
					/>

					<OutlineButton title="اعرف المزيد" link="/about" icon='/more-down.svg'/>
				</div>
				{/* Stats Inside Background */}
				<div className="relative z-10 md:mt-20 mt-5">
					<StatsSection />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<div className="relative min-h-screen w-full flex items-center justify-center">
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url('./background-image.jpg')` }}
			></div>

			{/* Linear Gradient Overlay */}
			<div className="absolute inset-0 bg-linear-to-l from-[#9E7900]/70 to-[#000000]/70"></div>

			<div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh)] container">
				<div className="text-center justify-start">
					<span className="text-primary md:text-5xl text-2xl font-medium">
						يااااهووو!
					</span>
					<span className="text-white md:text-5xl text-2xl font-medium">
						{" "}
						نورت موقعنا..!
					</span>
				</div>

				<div className="text-center justify-start text-white md:text-2xl text-lg md:w-[70%] w-full mt-7 leading-relaxed">
					تطبيق التواصل الاجتماعي الأول في المنطقة. تواصل مع الأصدقاء، أرسل
					الهدايا الافتراضية، وانضم إلى غرف المحادثة التفاعلية.
				</div>

				<div className="mt-8 flex md:flex-row flex-col items-center md:gap-5 gap-3">
					<Link
						to="/download"
						className="md:w-60 w-48 h-12 rounded-[100px] bg-primary-300/20 backdrop-blur-2xl  md:icon-text-hover flex items-center justify-center gap-2 [box-shadow:inset_-15px_15px_15px_rgba(255,255,255,0.20),inset_15px_-15px_15px_rgba(193,166,78,0.20)]"
					>
						<img src="./download.svg" alt="download" className="w-5 h-5" />
						<span className="text-white md:text-lg text-sm">تحميل التطبيق</span>
					</Link>

					<Link
						to="/about"
						className="md:w-60 w-48 h-12 rounded-full bg-[#6B6758] md:icon-text-hover icon-text-hover flex items-center justify-center gap-2"
					>
						<img className="w-6 h-6" src="./more-down.svg" alt="more-down" />
						<span className="text-white md:text-lg text-sm">اعرف المزيد</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;

import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<div className="relative min-h-screen w-full">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url('./background-image.jpg')` }}
			></div>

			{/* Linear Gradient Overlay */}
			<div className="absolute inset-0 bg-linear-to-l from-[#9E7900]/50 to-[#000000]/70"></div>

			{/* Content */}
			<div className="relative z-10 container py-4">
				<Navbar />
				{/* Hero Section */}

				<div className="flex flex-col items-center justify-center h-[calc(100vh-12rem)]">
					<div className="text-center justify-start">
						<span class="text-primary md:text-5xl text-2xl font-medium">يااااهووو!</span>
						<span class="text-white md:text-5xl text-2xl font-medium"> نورت موقعنا..!</span>
					</div>
					<div className="text-center justify-start text-white md:text-2xl text-lg w-[70%] mt-7 leading-relaxed">
						تطبيق التواصل الاجتماعي الأول في المنطقة. تواصل مع الأصدقاء، أرسل
						الهدايا الافتراضية، وانضم إلى غرف المحادثة التفاعلية.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

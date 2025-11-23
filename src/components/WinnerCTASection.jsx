import React from "react";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

const WinnerCTASection = () => {
	return (
		<section className="container my-10">
			<SectionHeader
				title="حمّل التطبيق الآن"
				description="انضم إلى ملايين المستخدمين واستمتع بتجربة تواصل اجتماعي فريدة ومميزة"
			/>
			<div className="md:mt-0 mt-6 flex flex-col md:flex-row items-center justify-between gap-16">
				<div className="md:order-1 order-2 flex flex-col justify-center items-end gap-4 md:w-[50%]">
					<Link
						to="/download"
						className="border-2 border-primary rounded-full w-[300px] py-2 md:py-3 px-4 md:px-6 flex items-center justify-center gap-2 group hover:scale-95 hover:bg-primary transition-all duration-300 ease-in-out"
					>
						<img
							src="./google-play.svg"
							alt="download"
							className="w-6 h-6 group-hover:invert"
						/>
						<span className="group-hover:text-black text-white text-lg md:text-2xl">
							حمل على Google Play
						</span>
					</Link>
					<Link
						to="/download"
						className="border-2 border-primary rounded-full w-[300px] py-2 md:py-3 px-4 md:px-6 flex items-center justify-center gap-2 group hover:scale-95 hover:bg-primary transition-all duration-300 ease-in-out"
					>
						<img
							src="./apple-play.svg"
							alt="download"
							className="w-8 h-8 group-hover:invert"
						/>
						<span className="group-hover:text-black text-white text-lg md:text-2xl">
							حمل على App Store
						</span>
					</Link>
				</div>
				<div className="md:order-2 order-1 flex justify-start items-center md:w-[50%] cursor-pointer md:hover:scale-120 md:hover:-translate-x-10 transition-all duration-300 ease-in-out">
					<img src="./code-download.png" alt="winner" />
				</div>
			</div>
		</section>
	);
};

export default WinnerCTASection;

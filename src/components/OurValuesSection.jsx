import React from "react";
import SectionHeader from "./SectionHeader";
import FeaturedCard from "./FeaturedCard";
import { ourValuesData } from "../utils/constant";

const OurValuesSection = () => {
	return (
		<section className="md:py-20 py-16 border border-b-white md:shadow-2xl shadow-lg shadow-white/50">
			<div className="container">
				<SectionHeader
					title="قيمنا"
					description="المبادئ التي نؤمن بها ونعمل من خلالها"
				/>
			</div>
			<div className="w-full mt-10 bg-primary/50 overflow-visible">
				<div className="container">
					<div className="flex justify-center">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-10 py-10 md:py-0">
							{ourValuesData.slice(0, 3).map((item, index) => (
								<div key={index} className="md:-translate-y-12">
									<FeaturedCard {...item} />
								</div>
							))}
							{ourValuesData.slice(3, 6).map((item, index) => (
								<div key={index} className="md:translate-y-12">
									<FeaturedCard {...item} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurValuesSection;

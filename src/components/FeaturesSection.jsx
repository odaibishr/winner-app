import React from "react";
import SectionHeader from "./SectionHeader";
import FeaturedCard from "./FeaturedCard";
import { featuresCardData } from "../utils/constant";

const FeaturesSection = () => {
	return (
		<section className="md:py-20 py-16 ">
			<SectionHeader
				title="ما يميز Winner"
				description="انضم إلى مجتمعنا النشط واستمتع بتجربة تواصل اجتماعي لا مثيل لها"
			/>

			<div className="py-10  bg-primary/50">
				<div className="container grid sm:grid-cols-2 items-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-6">
					{featuresCardData.map((feature) => (
						<FeaturedCard key={feature.id} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;

import React from "react";
import SectionHeader from "./SectionHeader";
import { technicalSpecificationsData } from "../utils/constant";

const TechnicalSpecificationsSection = () => {
	return (
		<section className="py-16 md:py-20 section-border">
			<SectionHeader
				title="المواصفات التقنية"
				description="تقنيات متقدمة لتجربة استخدام مثالية"
			/>

			<div className="py-10  bg-primary/50">
				<div className="container grid sm:grid-cols-2 items-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-6">
					{technicalSpecificationsData.map((feature) => (
						<FeaturedCard key={feature.id} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
};

export default TechnicalSpecificationsSection;

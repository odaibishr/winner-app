import React from "react";
import SectionHeader from "./SectionHeader";
import FeaturedCard from "./FeaturedCard";

const WhyChooseUsSection = () => {
	return (
		<section className="md:mb-50 my-10">
			<div className="container">
				<SectionHeader
					title="لماذا Winner؟"
					description="اكتشف الميزات التي تجعل Winner التطبيق الأفضل للتواصل الاجتماعي"
				/>
			</div>
			<div className="w-full mt-10 bg-primary/50 overflow-visible">
				<div className="container">
					<div className="flex justify-center">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-10 py-10 md:py-0">
							{Array.from({ length: 3 }).map((_, index) => (
								<div key={index} className="md:-translate-y-12">
									<FeaturedCard />
								</div>
							))}
							{Array.from({ length: 3 }).map((_, index) => (
								<div key={index} className="md:translate-y-12">
									<FeaturedCard />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUsSection;

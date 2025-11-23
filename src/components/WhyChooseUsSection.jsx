import React from "react";
import SectionHeader from "./SectionHeader";
import FeaturedCard from "./FeaturedCard";

const WhyChooseUsSection = () => {
	return (
		<section className="mb-50">
			<SectionHeader
				title="لماذا Winner؟"
				description="اكتشف الميزات التي تجعل Winner التطبيق الأفضل للتواصل الاجتماعي"
			/>
			<div className="w-full h-[600px] mt-10 bg-primary/50 overflow-visible">
				<div className="container">
					<div className="flex justify-center">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-10">
							{/* الصف العلوي - خارج للأعلى */}
							<div className="-translate-y-12">
								<FeaturedCard />
							</div>
							<div className="-translate-y-12">
								<FeaturedCard />
							</div>
							<div className="-translate-y-12">
								<FeaturedCard />
							</div>

							{/* الصف السفلي - خارج للأسفل */}
							<div className="translate-y-12">
								<FeaturedCard />
							</div>
							<div className="translate-y-12">
								<FeaturedCard />
							</div>
							<div className="translate-y-12">
								<FeaturedCard />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUsSection;

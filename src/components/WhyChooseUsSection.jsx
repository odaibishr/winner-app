import React from "react";
import SectionHeader from "./SectionHeader";

const WhyChooseUsSection = () => {
	return (
		<section>
				<SectionHeader
					title="لماذا Winner؟"
					description="اكتشف الميزات التي تجعل Winner التطبيق الأفضل للتواصل الاجتماعي"
				/>
			<div className="w-full h-[calc(100vh-200px)] bg-primary/50" />
		</section>
	);
};

export default WhyChooseUsSection;

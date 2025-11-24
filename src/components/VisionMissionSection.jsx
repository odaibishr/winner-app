import React from "react";
import HorizontailInfoCard from "./HorizontailInfoCard";

const VisionMissionSection = () => {
	return (
		<section className="md:py-20 py-16 container flex flex-col md:gap-20 gap-16">
			<HorizontailInfoCard
				index={0}
				image="/vision-image.png"
				title="رؤيـــتـنـــا"
				text="أن نكون المنصة الرائدة للتواصل الاجتماعي في المنطقة العربية، نربط بين الثقافات ونقرب المسافات بتقنيات مبتكرة وتجربة استخدام استثنائية."
			/>
			<HorizontailInfoCard
				index={1}
				image="/mission-image.png"
				title="مهــمتــنــــا"
				text="تطوير تطبيق تواصل اجتماعي يجمع بين السهولة والأمان والمتعة، مع ميزات فريدة مثل نظام الهدايا والغرف التفاعلية لتعزيز التواصل الإنساني."
			/>
		</section>
	);
};

export default VisionMissionSection;

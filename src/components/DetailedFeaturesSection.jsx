import { detailedFeaturesData } from "../utils/constant";
import SectionHeader from "./SectionHeader";
import HorizontailInfoCard from "./HorizontailInfoCard";

const DetailedFeaturesSection = () => {
	return (
		<section className="py-16 md:py-20 section-border">
			<SectionHeader
				title="ميزات مفصلة"
				description="تعرف على كل ميزة بالتفصيل"
            />
            <div className="container flex flex-col gap-12">
                    {detailedFeaturesData.map((feature) => (
                        <HorizontailInfoCard key={feature.id} index={feature.id} {...feature} isDetailed={true} />
                    ))}
            </div>
		</section>
	);
};

export default DetailedFeaturesSection;

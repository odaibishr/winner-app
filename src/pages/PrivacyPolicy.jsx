import SectionHeader from "../components/SectionHeader";
import ContentSection from "../components/ContentSection";

const PrivacyPolicy = () => {
	return (
		<div className="relative min-h-screen w-full bg-gradient pt-30 md:pt-28 pb-20 md:pb-10 overflow-hidden">
			<section className="px-10">
				<SectionHeader
					title="سياسة الخصوصية"
					description="نحن ملتزمون بحماية خصوصيتك وبيانتك الشخصية"
				/>
            </section>
            <section className="container mt-13">
                <ContentSection />
            </section>
		</div>
	);
};

export default PrivacyPolicy;

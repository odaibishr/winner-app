import SectionHeader from "../components/SectionHeader";
import ContentSection from "../components/ContentSection";
import ContactSection from "../components/ContactSection";
import { privacyPolicyItems } from "../data/constant.js";

const PrivacyPolicy = () => {
	return (
		<div className="relative min-h-screen w-full bg-black pt-30 md:pt-28 overflow-hidden">
			<section className="w-full">
				<SectionHeader
					title="سياسة الخصوصية"
					description="نحن ملتزمون بحماية خصوصيتك وبيانتك الشخصية"
				/>
			</section>
			<section className="container mt-13">
				<ContentSection data={privacyPolicyItems} />
			</section>
			<section className="container mt-13">
				<ContactSection />
			</section>
		</div>
	);
};

export default PrivacyPolicy;

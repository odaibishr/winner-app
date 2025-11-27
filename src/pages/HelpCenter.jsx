import SectionHeader from "../components/SectionHeader.jsx";
import ContactSupportWaysSection from "../components/ContactSupportWaysSection.jsx";
import FAQsSection from "../components/FAQsSection.jsx";
import { faqs2Items } from "../data/constant.js";

const HelpCenter = () => {
	return (
		<main className="bg-black pt-32 md:pt-40 lg:pt-48 min-h-screen">
			<div className="py-10 border-2 border-b-secondary/40 container">
				<SectionHeader
					title="مركز المساعدة"
					description="نحن هنا لمساعدتك! احصل على الدعم الفني والإجابات على جميع استفساراتك"
				/>
			</div>
			<ContactSupportWaysSection />
			<div className="py-10 section-border">
				<FAQsSection items={faqs2Items} />
			</div>
		</main>
	);
};

export default HelpCenter;

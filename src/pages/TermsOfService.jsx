import SectionHeader from "../components/SectionHeader";
import ContentSection from "../components/ContentSection";
import ContactSection from "../components/ContactSection";
import { termsOfServiceItems } from "../data/constant.js";
import Footer from "../components/Footer";

const TermsOfService = () => {
	return (
		<div className="relative min-h-screen w-full bg-black pt-30 md:pt-28 overflow-hidden">
			<section className="px-10">
				<SectionHeader
					title="شروط الخدمة"
					description="القواعد والأحكام التي تحكم استخدام تطبيق Winner"
				/>
			</section>
			<section className="container mt-13">
				<ContentSection data={termsOfServiceItems} />
			</section>
			<section className="container mt-13">
				<ContactSection />
			</section>
			<Footer />
		</div>
	);
};

export default TermsOfService;

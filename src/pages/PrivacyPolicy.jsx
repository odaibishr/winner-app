import SectionHeader from "../components/SectionHeader";
import ContentSection from "../components/ContentSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

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
				<ContentSection />
			</section>
			<section className="container mt-13">
				<ContactSection />
			</section>

			<Footer />
		</div>
	);
};

export default PrivacyPolicy;

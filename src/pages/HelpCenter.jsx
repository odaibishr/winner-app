import SectionHeader from "../components/SectionHeader.jsx";
import ContactSupportWaysSection from "../components/ContactSupportWaysSection.jsx";
import FAQsSection from "../components/FAQsSection.jsx";
import { faqs2Items } from "../data/constant.js";
import SupportWorkingHours from "../components/SupportWorkingHours.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import OutlineButton from "../components/OutlineButton.jsx";

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
			<SupportWorkingHours />
			<section className="container flex flex-col items-center justify-center gap-4 py-16 md:py-20">
				<SectionHeader
					title="لم تجد ما تبحث عنه؟"
					description="تواصل مع فريق الدعم الفني وسنساعدك في حل أي مشكلة"
				/>
				<PrimaryButton
					title="تواصـــل معنـــا"
					icon="/light-connect.svg"
					link="/contact"
				/>
				<OutlineButton
					title="واتســـــــــــــاب"
					icon="/baseline-whatsapp.svg"
					link="https://wa.me/966501234567"
				/>
			</section>
		</main>
	);
};

export default HelpCenter;

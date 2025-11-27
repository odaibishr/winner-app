import SectionHeader from "./SectionHeader.jsx";
import SupportContactCard from "./SupportContactCard.jsx";
import { contaactSupportWaysData } from "../data/constant";

const ContactSupportWaysSection = () => {
	return (
		<section className="py-10 md:pt-20 md:pb-40 section-border">
			<SectionHeader
				title="طرق التواصل مع الدعم"
				description="اختر الطريقة الأنسب للحصول على المساعدة"
			/>

			<div className="relative py-10 mt-10 bg-primary/50 w-full md:h-[220px] flex justify-center items-center">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 rounded-4xl md:h-[350px]">
					{contaactSupportWaysData.map((contact) => (
						<SupportContactCard key={contact.id} contact={contact} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ContactSupportWaysSection;

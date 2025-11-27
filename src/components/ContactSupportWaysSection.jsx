import SectionHeader from "./SectionHeader.jsx";
import SupportContactCard from "./SupportContactCard.jsx";

const ContactSupportWaysSection = () => {
    return (
        <section className="py-10 md:py-20 section-border">
            <SectionHeader title="طرق التواصل مع الدعم" description="اختر الطريقة الأنسب للحصول على المساعدة" />

            <div className="relative mt-10 bg-primary/50 w-full h-[220px] flex justify-center items-center">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 rounded-4xl container h-[290px] shadow-lg rounded-md">

                    <SupportContactCard />
                    <SupportContactCard />
                    <SupportContactCard />

                </div>

            </div>
        </section>
    );
}

export default ContactSupportWaysSection;
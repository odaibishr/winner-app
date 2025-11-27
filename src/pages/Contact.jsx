import SectionHeader from "../components/SectionHeader.jsx";
import FormSection from "../components/FormSection.jsx";
import FAQsSection from "../components/FAQsSection.jsx";

const Contact = () => {
    return (
        <main className="bg-black pt-32 md:pt-40 lg:pt-48 min-h-screen">
            <div className="py-10 border-2 border-b-secondary/40 container">
                <SectionHeader
                    title="تواصــل معنــا"
                    description="نحن هنا للإجابة على استفساراتك ومساعدتك. لا تتردد في التواصل معنا"
                />
            </div>
            <FormSection />
            <FAQsSection />
        </main>
    );
}

export default Contact;
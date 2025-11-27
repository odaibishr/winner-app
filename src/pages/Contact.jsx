import SectionHeader from "../components/SectionHeader.jsx";
import ContactForm from "../components/ContactForm.jsx";

const Contact = () => {
    return (
        <main className="bg-black pt-32 md:pt-40 lg:pt-48 min-h-screen">
            <div className="py-10 border-2 border-b-secondary/40 container">
                <SectionHeader
                    title="تواصــل معنــا"
                    description="نحن هنا للإجابة على استفساراتك ومساعدتك. لا تتردد في التواصل معنا"
                />
            </div>
            <div className="w-full h-screen bg-white">
                <ContactForm />
            </div>
        </main>
    );
}

export default Contact;
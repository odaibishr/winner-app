import SectionHeader from "../components/SectionHeader.jsx";

const HelpCenter = () => {
    return (
        <main className="bg-black bg-black pt-32 md:pt-40 lg:pt-48 min-h-screen">
            <div className="py-10 border-2 border-b-secondary/40 container">
                <SectionHeader
                    title="مركز المساعدة"
                    description="نحن هنا لمساعدتك! احصل على الدعم الفني والإجابات على جميع استفساراتك"
                />
            </div>
        </main>
    );
}

export default HelpCenter;
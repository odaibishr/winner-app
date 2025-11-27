import SectionHeader from "./SectionHeader.jsx";
import {
    AccordionProvider,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./ui/accordion.jsx";
import {faqsItems} from "../data/constant.js";



const FAQsSection = () => {
    return (
        <section className="py-10 md:py-20 container">
            <SectionHeader title="الأسئلة الشائعة؟؟" description="إجابات سريعة على الأسئلة الأكثر شيوعاً" />

           <AccordionProvider type="single" collapsible>
               {
                   faqsItems.map((item) => (
                       <AccordionItem key={item.index} value={`item-${item.id+1}`} className="mb-4">
                           <AccordionTrigger className="flex items-center">
                               <span className="text-secondary text-xl md:text-2xl">{item.title}</span>
                           </AccordionTrigger>
                           <AccordionContent className="text-lg">
                               {item.answer}
                           </AccordionContent>
                       </AccordionItem>
                   ))
               }
           </AccordionProvider>

        </section>
    );
}

export default FAQsSection;
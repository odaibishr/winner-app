import SectionHeader from "./SectionHeader.jsx";
import {
    AccordionProvider,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "./ui/accordion.jsx";
import {ChevronLeft} from "lucide-react";



const FAQsSection = () => {
    return (
        <section className="py-10 md:py-20 container">
            <SectionHeader title="الأسئلة الشائعة؟؟" description="إجابات سريعة على الأسئلة الأكثر شيوعاً" />

           <AccordionProvider type="single" collapsible>
               <AccordionItem value='item-1'>
                   <AccordionTrigger className="flex ">
                       <ChevronLeft />
                       <span className="text-2xl">
                           العنصر الأول
                       </span>
                   </AccordionTrigger>

                   <AccordionContent>
                       هذا هو محتوى العنصر الأول.
                   </AccordionContent>
               </AccordionItem>
           </AccordionProvider>
        </section>
    );
}

export default FAQsSection;
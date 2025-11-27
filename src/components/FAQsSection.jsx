import SectionHeader from "./SectionHeader.jsx";
import {
	AccordionProvider,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "./ui/accordion.jsx";

const FAQsSection = ({ items }) => {
	return (
		<section className="py-10 md:py-20 container">
			<SectionHeader
				title="الأسئلة الشائعة؟؟"
				description="إجابات سريعة على الأسئلة الأكثر شيوعاً"
			/>

			<AccordionProvider type="single" collapsible>
				{items.map((item) => (
					<AccordionItem
						key={item.index}
						value={`item-${item.id + 1}`}
						className="mb-4"
					>
						<AccordionTrigger className="flex items-center cursor-pointer">
							<span className="text-secondary text-xl md:text-2xl">
								{item.title}
							</span>
						</AccordionTrigger>
						<AccordionContent className="text-lg">
							{item.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</AccordionProvider>
		</section>
	);
};

export default FAQsSection;

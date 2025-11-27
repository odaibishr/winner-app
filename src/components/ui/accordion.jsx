import * as Accordion from "@radix-ui/react-accordion";
import { cn } from '/src/lib/utils.js'
import { ChevronLeft } from "lucide-react";

const AccordionProvider = ({ children, className, ...props }) => (
    <Accordion.Root className={cn('space-y-2', className)} {...props}>
        {children}
    </Accordion.Root>
);

const AccordionItem = ({ children, className, ...props }) => (
    <Accordion.Item className={cn('border border-gray-200 bg-white rounded-2xl overflow-hidden', className)} {...props}>
        {children}
    </Accordion.Item>
);


const AccordionTrigger = ({ children, className }) => {
    return (
        <Accordion.Header className="flex">
            <Accordion.Trigger
                className={cn(
                    'group flex flex-1 items-center justify-between w-full py-3 px-4 transition-all hover:bg-gray-50',
                    className
                )}
            >
                <span className="font-medium text-gray-900">{children}</span>
                <ChevronLeft
                    className="h-5 w-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:-rotate-90"
                    aria-hidden
                />
            </Accordion.Trigger>
        </Accordion.Header>
    );
}

const AccordionContent = ({ children, className }) => {
    return (
        <Accordion.Content
            className={cn(
                'overflow-hidden text-sm',
                'data-[state=closed]:animate-accordion-up',
                'data-[state=open]:animate-accordion-down',
                className
            )}
        >
            <div className="px-4 pb-4 pt-0 text-gray-500">
                {children}
            </div>
        </Accordion.Content>
    );
}

export {
    AccordionProvider,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
}
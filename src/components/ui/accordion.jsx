import { Accordion } from "radix-ui";
import { cn } from '/src/lib/utils.js';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionProvider = ({
                               children,
                               className,
                               type = 'single',
                               collapsible = true,
                               value,
                               onValueChange
                           }) => {
    return (
        <Accordion.Root
            type={type}
            collapsible={collapsible}
            value={value}
            onValueChange={onValueChange}
            className={cn('space-y-2', className)}
        >
            {children}
        </Accordion.Root>
    )
}

const AccordionItem = ({
                           value,
                           children,
                           className,
                       }) => {
    return (
        <Accordion.Item
            value={value}
            className={cn(
                'border border-gray-200 bg-white rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md',
                className
            )}
        >
            {children}
        </Accordion.Item>
    );
}

const AccordionTrigger = ({
                              children,
                              className
                          }) => {
    return (
        <Accordion.Header>
            <Accordion.Trigger
                className={cn(
                    'w-full py-3 px-4 text-left font-medium cursor-pointer rounded-xl transition-all duration-300 hover:bg-gray-100 data-[state=open]:bg-gray-200',
                    className
                )}
            >
                {children}
            </Accordion.Trigger>
        </Accordion.Header>
    );
}

const AccordionContent = ({
                              children,
                              className
                          }) => {
    const MotionDiv = motion.div;
    return (
        <Accordion.Content asChild>
            <AnimatePresence initial={false}>
                <MotionDiv
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }} // easing smooth
                    className={cn(
                        'px-4 py-3 text-gray-600 overflow-hidden',
                        className
                    )}
                >
                    {children}
                </MotionDiv>
            </AnimatePresence>
        </Accordion.Content>
    );
}

export {
    AccordionProvider,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
}

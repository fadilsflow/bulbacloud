// components/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  value: string;
  question: string;
  answer: string;
}

interface FAQProps {
  faqItems: FAQItem[];
  title?: string;
  description?: string;
}

export default function FAQ({ faqItems, title, description }: FAQProps) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="space-y-6">
        {title && (
          <div className="text-center mb-10">
            <h1 className="text-3xl  tracking-tight md:text-4xl">{title}</h1>
            {description && (
              <p className="mt-4 text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

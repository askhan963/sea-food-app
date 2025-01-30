"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQs() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-primary text-center text-3xl font-bold">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="text-neutral-dark">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Where do you source your seafood from?
              </AccordionTrigger>
              <AccordionContent>
                We source our seafood directly from **trusted local fisheries**
                that follow sustainable fishing practices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do you offer home delivery?</AccordionTrigger>
              <AccordionContent>
                Yes! We deliver fresh seafood **right to your doorstep** with
                guaranteed freshness.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is your seafood wild-caught or farm-raised?
              </AccordionTrigger>
              <AccordionContent>
                We offer a mix of **wild-caught** and **responsibly
                farm-raised** seafood to cater to different preferences.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

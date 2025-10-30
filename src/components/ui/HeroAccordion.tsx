"use client";

import React from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";

export interface AccordionItemData {
  key: string;
  title: string;
  content: string;
}

interface HeroAccordionProps {
  items: AccordionItemData[];
}

export default function HeroAccordion({ items }: HeroAccordionProps) {
  return (
    <Accordion variant="bordered">
      {items.map((item) => (
        <AccordionItem
          key={item.key}
          aria-label={item.title}
          title={item.title}
          className="text-gray-700"
        >
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

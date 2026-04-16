import type { Metadata } from "next";
import React from "react";
import LoremGenerator from "@/components/generator/LoremGenerator";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Lorem Ipsum Generator — Placeholder Text Online",
    description: "Generate Lorem Ipsum placeholder text — words, sentences, or paragraphs. Perfect for mockups, wireframes, and design prototypes. Free and instant.",
    alternates: { canonical: "/generator/lorem" },
};

export default function Lorem() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="Lorem Generator"
                description="Generate placeholder text for your projects"
            />
            <div className="col-span-12 space-y-6 xl:col-span-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 md:p-6">
                    <LoremGenerator/>
                </div>
            </div>
        </div>
    );
}
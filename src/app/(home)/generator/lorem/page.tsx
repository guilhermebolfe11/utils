import type { Metadata } from "next";
import React from "react";
import LoremGenerator from "@/components/generator/LoremGenerator";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Utils | Lorem Generator",
    description: "Generate placeholder text, words, sentences, and paragraphs",
};

export default function Lorem() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="Lorem Generator"
                description="Generate placeholder text for your projects"
            />
            <div className="col-span-12 space-y-6 xl:col-span-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <LoremGenerator/>
                </div>
            </div>
        </div>
    );
}
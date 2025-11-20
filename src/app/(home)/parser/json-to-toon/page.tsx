import type { Metadata } from "next";
import React from "react";
import JsonToonParser from "@/components/parsers/JsonToonParser";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Utils | JSON x TOON Parser",
    description: "Convert JSON x TOON",
};

export default function JsonToToon() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="JSON x TOON Parser"
                description="Convert JSON x TOON format"
            />
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <JsonToonParser />
                </div>
            </div>
        </div>
    );
}
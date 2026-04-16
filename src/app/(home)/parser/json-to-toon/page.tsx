import type { Metadata } from "next";
import React from "react";
import JsonToonParser from "@/components/parsers/JsonToonParser";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "JSON to TOON Converter — Convert JSON ↔ TOON Online",
    description: "Convert JSON to TOON format and TOON back to JSON instantly. Free online bidirectional converter. All processing happens in your browser.",
    alternates: { canonical: "/parser/json-to-toon" },
};

export default function JsonToToon() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="JSON x TOON Parser"
                description="Convert JSON x TOON format"
            />
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 md:p-6">
                    <JsonToonParser />
                </div>
            </div>
        </div>
    );
}
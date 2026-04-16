import type { Metadata } from "next";
import React from "react";
import JsonFormatter from "@/components/formatter/JsonFormatter";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "JSON Formatter & Validator — Pretty Print JSON Online",
    description: "Format, beautify, and validate JSON data online for free. Paste your JSON, get instant pretty-printed output with syntax error detection. No data leaves your browser.",
    alternates: { canonical: "/formatter/json" },
};

export default function Json() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="JSON Formatter"
                description="Format and validate your JSON data with syntax highlighting"
            />
            <div className="col-span-12 space-y-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 md:p-6">
                    <JsonFormatter/>
                </div>
            </div>
        </div>
    );
}
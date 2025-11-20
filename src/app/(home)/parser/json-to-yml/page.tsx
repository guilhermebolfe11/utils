import type { Metadata } from "next";
import React from "react";
import JsonYmlParser from "@/components/parsers/JsonYmlParser";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Utils | JSON x YML Parser",
    description: "Convert JSON x YAML format instantly",
};

export default function JsonToYml() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="JSON x YML Parser"
                description="Convert JSON x YAML format"
            />
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <JsonYmlParser/>
                </div>
            </div>
        </div>
    );
}
import type { Metadata } from "next";
import React from "react";
import PersonGenerator from "@/components/generator/PersonGenerator";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Utils | Person Generator",
    description: "Generate fake person data including names and job titles",
};

export default function Person() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="Person Generator"
                description="Generate realistic person information"
            />
            <div className="col-span-12 space-y-6 xl:col-span-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <PersonGenerator/>
                </div>
            </div>
        </div>
    );
}
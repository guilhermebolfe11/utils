import type { Metadata } from "next";
import React from "react";
import PersonGenerator from "@/components/generator/PersonGenerator";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Fake Person Generator — Random Names, Emails & Job Titles",
    description: "Generate realistic fake person data including names, email addresses, and job titles. Ideal for testing, development, and prototyping. Free online tool.",
    alternates: { canonical: "/generator/person" },
};

export default function Person() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="Person Generator"
                description="Generate realistic person information"
            />
            <div className="col-span-12 space-y-6 xl:col-span-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 md:p-6">
                    <PersonGenerator/>
                </div>
            </div>
        </div>
    );
}
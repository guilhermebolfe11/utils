import type { Metadata } from "next";
import React from "react";
import CompanyGenerator from "@/components/generator/CompanyGenerator";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Fake Company Generator — Names, Buzzwords & Catch Phrases",
    description: "Generate realistic fake company names, industry buzzwords, and catch phrases for testing and prototyping. Free browser-based tool.",
    alternates: { canonical: "/generator/company" },
};

export default function Company() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="Company Generator"
                description="Generate company information and slogans"
            />
            <div className="col-span-12 space-y-6 xl:col-span-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 md:p-6">
                    <CompanyGenerator/>
                </div>
            </div>
        </div>
    );
}
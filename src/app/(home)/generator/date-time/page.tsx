import type { Metadata } from "next";
import React from "react";
import DateTimeGenerator from "@/components/generator/DateTimeGenerator";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Utils | DateTime Generator",
    description: "Generate and format current date and time in multiple formats",
};

export default function DateTime() {
    const date = new Date();
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="DateTime Generator"
                description="Generate date and time in various formats"
            />
            <div className="col-span-12 space-y-6 xl:col-span-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Current Date & Time
                    </span>
                    <DateTimeGenerator date={date}/>
                </div>
            </div>
        </div>
    );
}
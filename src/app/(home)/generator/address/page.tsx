import type { Metadata } from "next";
import React from "react";
import AddressGenerator from "@/components/generator/AddressGenerator";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Utils | Address Generator",
    description: "Generate fake addresses, cities, countries, and zip codes",
};

export default function Address() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="Address Generator"
                description="Generate location and address data"
            />
            <div className="col-span-12 space-y-6 xl:col-span-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <AddressGenerator/>
                </div>
            </div>
        </div>
    );
}
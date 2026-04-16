import type { Metadata } from "next";
import React from "react";
import UUIDGenerator from "@/components/generator/UUIDGenerator";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "UUID Generator — Generate v1 & v4 UUIDs Online",
    description: "Generate RFC 4122 compliant UUID v1 and v4 instantly. Copy unique identifiers for databases, APIs, and testing. Free, fast, runs in your browser.",
    alternates: { canonical: "/generator/uuid" },
};

export default function Uuid() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="UUID Generator"
                description="Generate unique identifiers (UUID v1 and v4)"
            />
            <div className="col-span-12 space-y-6 xl:col-span-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 md:p-6">
                    <UUIDGenerator/>
                </div>
            </div>
        </div>
    );
}
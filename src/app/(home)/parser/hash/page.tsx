import type { Metadata } from "next";
import React from "react";
import HashParser from "@/components/parsers/HashParser";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Utils | Hash Generator (MD5/SHA)",
    description: "Generate MD5, SHA-1, SHA-256, SHA-384, and SHA-512 hashes",
};

export default function HashGenerator() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="Hash Generator"
                description="Generate MD5 and SHA hashes from your text"
            />
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <HashParser />
                </div>
            </div>
        </div>
    );
}


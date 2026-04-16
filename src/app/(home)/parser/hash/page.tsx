import type { Metadata } from "next";
import React from "react";
import HashParser from "@/components/parsers/HashParser";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Hash Generator — SHA-1, SHA-256, SHA-384 & SHA-512 Online",
    description: "Generate secure cryptographic hashes with SHA-1, SHA-256, SHA-384, and SHA-512. Uses the Web Crypto API — your data never leaves the browser.",
    alternates: { canonical: "/parser/hash" },
};

export default function HashGenerator() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="Hash Generator"
                description="Generate MD5 and SHA hashes from your text"
            />
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 md:p-6">
                    <HashParser />
                </div>
            </div>
        </div>
    );
}


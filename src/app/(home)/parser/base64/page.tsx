import type { Metadata } from "next";
import React from "react";
import Base64Parser from "@/components/parsers/Base64Parser";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Base64 Encoder & Decoder — Convert Text to Base64 Online",
    description: "Encode text to Base64 or decode Base64 back to text instantly. Supports Unicode characters. Free online tool, no data sent to any server.",
    alternates: { canonical: "/parser/base64" },
};

export default function Base64() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="Base64 Encoder/Decoder"
                description="Convert text to Base64 and decode Base64 to text"
            />
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 md:p-6">
                    <Base64Parser/>
                </div>
            </div>
        </div>
    );
}


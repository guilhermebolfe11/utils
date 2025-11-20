import type { Metadata } from "next";
import React from "react";
import Base64Parser from "@/components/parsers/Base64Parser";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Utils | Base64 Parser",
    description: "Encode and decode Base64 strings instantly",
};

export default function Base64() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="Base64 Encoder/Decoder"
                description="Convert text to Base64 and decode Base64 to text"
            />
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <Base64Parser toBase64={true}/>
                </div>
            </div>
        </div>
    );
}


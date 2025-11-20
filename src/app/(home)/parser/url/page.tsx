import type { Metadata } from "next";
import React from "react";
import UrlParser from "@/components/parsers/UrlParser";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Utils | URL Encoder/Decoder",
    description: "Encode and decode URL strings instantly",
};

export default function UrlEncodeDecode() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="URL Encoder/Decoder"
                description="Encode text for URLs and decode URL-encoded strings"
            />
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <UrlParser toEncode={true}/>
                </div>
            </div>
        </div>
    );
}


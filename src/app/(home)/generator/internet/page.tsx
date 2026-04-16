import type { Metadata } from "next";
import React from "react";
import InternetGenerator from "@/components/generator/InternetGenerator";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Internet Data Generator — Emails, URLs, IPs & Passwords",
    description: "Generate fake emails, URLs, IP addresses, usernames, and passwords for testing and development. All data created locally in your browser.",
    alternates: { canonical: "/generator/internet" },
};

export default function Internet() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="Internet Generator"
                description="Generate internet-related data and credentials"
            />
            <div className="col-span-12 space-y-6 xl:col-span-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 md:p-6">
                    <InternetGenerator/>
                </div>
            </div>
        </div>
    );
}
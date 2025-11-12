import type { Metadata } from "next";
import React from "react";
import UUIDGenerator from "@/components/generator/UUIDGenerator";

export const metadata: Metadata = {
    title:
        "Utils | UUID Gnerator",
    description: "Utils to SWE",
};

export default function Uuid() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 space-y-6 xl:col-span-7">
                <div className="grid gap-12 sm:grid-cols-2 md:gap-6">
                    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                        <span className="text-2xl text-gray-500 dark:text-gray-400">
                            UUID Generator
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-span-12 space-y-6 xl:col-span-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <UUIDGenerator/>
                </div>
            </div>
        </div>
    );
}

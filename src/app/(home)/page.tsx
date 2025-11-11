import type { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
    title:
        "Utils | Home",
    description: "Utils to SWE",
};

export default function Home() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 space-y-6 xl:col-span-7">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Home
                </span>
            </div>
        </div>
    );
}

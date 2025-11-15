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
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-white/[0.03]">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Welcome to Utils
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Your one-stop solution for all your software engineering utility needs.
                    </p>

                    {/* Grid de cards com as ferramentas mais usadas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Cards das ferramentas populares */}
                    </div>
                </div>
            </div>
        </div>
    );
}
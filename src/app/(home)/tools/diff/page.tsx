import React from "react";
import DiffEditor from "@/components/common/DiffEditor";
import type {Metadata} from "next";
import ToolPageHeader from "@/components/common/ToolPageHeader";

export const metadata: Metadata = {
    title: "Utils | Diff Viewer",
    description: "Compare and highlight differences between two text inputs",
};

export default function DiffPage() {
    return (
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            <ToolPageHeader
                title="Diff Viewer"
                description="Compare text differences with side-by-side view"
            />
            <div className="col-span-12 space-y-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                    <DiffEditor/>
                </div>
            </div>
        </div>
    );
}
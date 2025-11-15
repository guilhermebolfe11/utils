import React from "react";
import FavoriteButton from "@/components/common/FavoriteButton";

interface ToolPageHeaderProps {
    title: string;
    description?: string;
}

export default function ToolPageHeader({ title, description }: ToolPageHeaderProps) {
    return (
        <div className="col-span-12 space-y-6 xl:col-span-7">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                            {title}
                        </h1>
                        {description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {description}
                            </p>
                        )}
                    </div>
                    <FavoriteButton />
                </div>
            </div>
        </div>
    );
}
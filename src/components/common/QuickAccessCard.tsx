import Link from "next/link";
import React from "react";

interface QuickAccessCardProps {
    name: string;
    path: string;
    icon: React.ReactNode;
    description?: string;
}

export default function QuickAccessCard({ name, path, icon, description }: QuickAccessCardProps) {
    return (
        <Link
            href={path}
            className="group relative rounded-xl border border-gray-200 bg-white p-6 hover:border-primary-300 hover:shadow-lg transition-all dark:border-gray-800 dark:bg-white/[0.03] dark:hover:border-primary-700"
        >
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 text-gray-500 dark:text-gray-400 items-center justify-center rounded-lg bg-primary-50 text-2xl text-primary-600 group-hover:bg-primary-100 transition-colors dark:bg-primary-900/20 dark:text-primary-400 dark:group-hover:bg-primary-900/30">
                    {icon}
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {name}
                    </h3>
                    {description && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}
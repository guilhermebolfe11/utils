import Link from "next/link";
import React from "react";

interface CategoryCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    tools: { name: string; path: string }[];
    count: number;
}

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        text: "text-blue-600 dark:text-blue-400"
    },
    purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        text: "text-purple-600 dark:text-purple-400"
    },
    green: {
        bg: "bg-success-50 dark:bg-success-900/20",
        border: "border-success-200 dark:border-success-800",
        text: "text-success-600 dark:text-success-400"
    },
    orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
        text: "text-orange-600 dark:text-orange-400"
    }
};

export default function CategoryCard({ title, description, icon, color, tools, count }: CategoryCardProps) {
    const colors = colorClasses[color] || colorClasses.blue;
    const firstTool = tools[0];

    return (
        <Link
            href={firstTool?.path || "/"}
            className={`group rounded-xl border ${colors.border} ${colors.bg} p-6 hover:shadow-lg transition-all`}
        >
            <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.text} mb-4`}>
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {description}
            </p>
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {count} {count === 1 ? "tool" : "tools"}
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:underline">
                    Explore →
                </span>
            </div>
        </Link>
    );
}
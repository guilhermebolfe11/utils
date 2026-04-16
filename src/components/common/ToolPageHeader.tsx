import React from "react";
import FavoriteButton from "@/components/common/FavoriteButton";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://utils.dev";

interface ToolPageHeaderProps {
    title: string;
    description?: string;
}

export default function ToolPageHeader({ title, description }: ToolPageHeaderProps) {
    return (
        <div className="col-span-12 space-y-6 xl:col-span-7">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500 dark:text-gray-400">
                <ol className="flex items-center gap-1.5" itemScope itemType="https://schema.org/BreadcrumbList">
                    <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <Link href="/" itemProp="item" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            <span itemProp="name">Home</span>
                        </Link>
                        <meta itemProp="position" content="1" />
                    </li>
                    <li className="text-gray-300 dark:text-gray-600">/</li>
                    <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <span itemProp="name" className="text-gray-900 dark:text-white font-medium">{title}</span>
                        <meta itemProp="position" content="2" />
                    </li>
                </ol>
            </nav>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/3 md:p-6">
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
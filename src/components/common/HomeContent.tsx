"use client";

import React from "react";
import { MdFormatAlignCenter } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { BiTransfer } from "react-icons/bi";
import { VscDiff } from "react-icons/vsc";
import { IoTimeOutline, IoStarOutline, IoRocketOutline, IoShieldCheckmarkOutline, IoCodeSlashOutline } from "react-icons/io5";
import Link from "next/link";
import { useFavorites } from "@/hooks/useFavorites";
import QuickAccessCard from "./QuickAccessCard";
import FeatureCard from "./FeatureCard";
import CategoryCard from "./CategoryCard";
import PrivacyBanner from "@/components/common/PrivacyBanner";

export default function HomeContent() {
    const { favorites, isLoaded } = useFavorites();

    const categories = [
        {
            title: "Formatters",
            description: "Format and validate your data",
            icon: <MdFormatAlignCenter className="text-4xl" />,
            color: "blue",
            tools: [
                { name: "JSON Formatter", path: "/formatter/json" },
            ],
            count: 1
        },
        {
            title: "Generators",
            description: "Generate fake data quickly",
            icon: <GiPerspectiveDiceSixFacesRandom className="text-4xl" />,
            color: "purple",
            tools: [
                { name: "UUID", path: "/generator/uuid" },
                { name: "DateTime", path: "/generator/date-time" },
                { name: "Lorem Ipsum", path: "/generator/lorem" },
                { name: "Person", path: "/generator/person" },
                { name: "Company", path: "/generator/company" },
                { name: "Address", path: "/generator/address" },
                { name: "Internet", path: "/generator/internet" },
            ],
            count: 7
        },
        {
            title: "Parsers",
            description: "Convert between formats",
            icon: <BiTransfer className="text-4xl" />,
            color: "green",
            tools: [
                { name: "JSON to YML", path: "/parser/json-to-yml" },
                { name: "YML to JSON", path: "/parser/yml-to-json" },
                { name: "JSON to TOON", path: "/parser/json-to-toon" },
                { name: "TOON to JSON", path: "/parser/toon-to-json" },
            ],
            count: 4
        },
        {
            title: "Tools",
            description: "Useful utilities",
            icon: <VscDiff className="text-4xl" />,
            color: "orange",
            tools: [
                { name: "Diff Viewer", path: "/tools/diff" },
            ],
            count: 1
        },
    ];

    const features = [
        {
            icon: <IoShieldCheckmarkOutline className="text-3xl" />,
            title: "100% Private",
            description: "All data is processed locally in your browser. Nothing is sent to external servers."
        },
        {
            icon: <IoRocketOutline className="text-3xl" />,
            title: "Lightning Fast",
            description: "No internet connection or server processing required. Instant results."
        },
        {
            icon: <IoTimeOutline className="text-3xl" />,
            title: "Always Available",
            description: "Works offline and is always ready to use, anytime, anywhere."
        },
    ];

    const popularTools = [
        { name: "JSON Formatter", path: "/formatter/json", icon: <MdFormatAlignCenter />, description: "Format and validate JSON" },
        { name: "UUID Generator", path: "/generator/uuid", icon: <GiPerspectiveDiceSixFacesRandom />, description: "Generate unique IDs" },
        { name: "Lorem Generator", path: "/generator/lorem", icon: <GiPerspectiveDiceSixFacesRandom />, description: "Generate placeholder text" },
        { name: "Diff Viewer", path: "/tools/diff", icon: <VscDiff />, description: "Compare text differences" },
    ];

    return (
        <>
        <PrivacyBanner />
        <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Hero Section */}
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 dark:border-gray-800 p-8 md:p-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-6">
                            <IoCodeSlashOutline className="text-primary-600 dark:text-primary-400" />
                            <span>Essential Tools for Software Engineers</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Software Engineers Utilities
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 mt-2">
                                Made Simple
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            Format, generate, convert, and validate your data quickly and securely.
                            Everything processed locally in your browser.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/formatter/json"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors font-medium shadow-lg hover:shadow-xl"
                            >
                                Get Started
                                <IoRocketOutline className="text-xl" />
                            </Link>
                            <button
                                onClick={() => {
                                    const event = new KeyboardEvent('keydown', {
                                        key: 'k',
                                        ctrlKey: true,
                                        bubbles: true
                                    });
                                    document.dispatchEvent(event);
                                }}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                            >
                                Search Tools
                                <kbd className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded">
                                    Ctrl+K
                                </kbd>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Favorites Section */}
            {isLoaded && favorites.length > 0 && (
                <div className="col-span-12">
                    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
                        <div className="flex items-center gap-2 mb-6">
                            <IoStarOutline className="text-2xl text-warning-500" />
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                Your Favorites
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {favorites.slice(0, 8).map((path) => {
                                const tool = popularTools.find(t => t.path === path) ||
                                    { name: path.split('/').pop() || '', path, icon: <MdFormatAlignCenter />, description: "" };
                                return (
                                    <QuickAccessCard
                                        key={path}
                                        name={tool.name}
                                        path={tool.path}
                                        icon={tool.icon}
                                        description={tool.description}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Popular Tools */}
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                            Popular Tools
                        </h2>
                        <Link
                            href="/formatter/json"
                            className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
                        >
                            View all →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {popularTools.map((tool) => (
                            <QuickAccessCard
                                key={tool.path}
                                name={tool.name}
                                path={tool.path}
                                icon={tool.icon}
                                description={tool.description}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="col-span-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Browse by Category
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((category) => (
                        <CategoryCard key={category.title} {...category} />
                    ))}
                </div>
            </div>

            {/* Features */}
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                        Why Choose Utils?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <FeatureCard key={feature.title} {...feature} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="col-span-12">
                <div className="rounded-2xl border border-gray-200 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 dark:border-gray-800 p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-gray-500 dark:text-gray-400 mb-2">
                                14+
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                Tools Available
                            </div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-gray-500 dark:text-gray-400 mb-2">
                                100%
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                Local Processing
                            </div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-gray-500 dark:text-gray-400 mb-2">
                                0ms
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 font-medium">
                                Server Latency
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
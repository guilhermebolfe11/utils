"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoHomeSharp, IoArrowBack, IoSearchOutline } from "react-icons/io5";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Illustration */}
                <div className="mb-8">
                    <h1 className="text-[150px] md:text-[200px] font-bold text-gray-200 dark:text-gray-800 leading-none">
                        404
                    </h1>
                </div>

                {/* Message */}
                <div className="mb-8">
                    <h2 className="text-title-md md:text-title-lg font-bold text-gray-900 dark:text-white mb-4">
                        Page not found
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                        Sorry, we couldn't find the page you were looking for.
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-500">
                        The page may have been moved, deleted, or never existed.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200 font-medium"
                    >
                        <IoArrowBack className="w-5 h-5" />
                        Back
                    </button>

                    <Link
                        href="/"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
                    >
                        <IoHomeSharp className="w-5 h-5" />
                        Home
                    </Link>
                </div>

                {/* Additional Help */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                        <IoSearchOutline className="w-5 h-5" />
                        <p className="text-sm">
                            Use search or navigate through the menu to find what you need
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


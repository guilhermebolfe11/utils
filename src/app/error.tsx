"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
            <div className="text-center p-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Something went wrong
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                    An unexpected error occurred. Please try again.
                </p>
                <button
                    onClick={reset}
                    className="rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}

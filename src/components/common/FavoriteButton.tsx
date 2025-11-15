"use client";

import { useFavorites } from "@/hooks/useFavorites";
import { IoStarOutline, IoStar } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function FavoriteButton() {
    const pathname = usePathname();
    const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
    const [isAnimating, setIsAnimating] = useState(false);

    if (!isLoaded) {
        return (
            <div className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 animate-pulse">
                <div className="h-5 w-5 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <span className="hidden sm:inline w-20 h-4 bg-gray-300 dark:bg-gray-600 rounded"></span>
            </div>
        );
    }

    const favorited = isFavorite(pathname);

    const handleToggle = () => {
        setIsAnimating(true);
        toggleFavorite(pathname);
        setTimeout(() => setIsAnimating(false), 300);
    };

    return (
        <button
            onClick={handleToggle}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                favorited
                    ? "bg-warning-50 text-warning-600 hover:bg-warning-100 dark:bg-warning-900/20 dark:text-warning-400 dark:hover:bg-warning-900/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            } ${isAnimating ? "scale-95" : "scale-100"}`}
            aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
            {favorited ? (
                <>
                    <IoStar className={`h-5 w-5 ${isAnimating ? "animate-bounce" : ""}`} />
                    <span className="hidden sm:inline">Started</span>
                </>
            ) : (
                <>
                    <IoStarOutline className="h-5 w-5" />
                    <span className="hidden sm:inline">Star</span>
                </>
            )}
        </button>
    );
}
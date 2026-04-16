"use client";
import { useState, useEffect, useCallback } from "react";

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Ensure we are on the client side
        if (typeof window === 'undefined') return;

        try {
            const stored = localStorage.getItem("favorites");
            if (stored) {
                const parsed = JSON.parse(stored);
                setFavorites(Array.isArray(parsed) ? parsed : []);
            }
        } catch (e) {
            console.error("Error loading favorites:", e);
            setFavorites([]);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    const toggleFavorite = useCallback((path: string) => {
        setFavorites(prev => {
            const updated = prev.includes(path)
                ? prev.filter(f => f !== path)
                : [...prev, path];

            try {
                localStorage.setItem("favorites", JSON.stringify(updated));
            } catch (e) {
                console.error("Error saving favorites:", e);
            }

            return updated;
        });
    }, []);

    const isFavorite = useCallback((path: string) => {
        return favorites.includes(path);
    }, [favorites]);

    const clearFavorites = useCallback(() => {
        setFavorites([]);
        localStorage.removeItem("favorites");
    }, []);

    return { favorites, toggleFavorite, isFavorite, isLoaded, clearFavorites };
}
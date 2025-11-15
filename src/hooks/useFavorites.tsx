"use client";
import { useState, useEffect, useCallback } from "react";

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Garantir que estamos no cliente
        if (typeof window === 'undefined') return;

        try {
            const stored = localStorage.getItem("favorites");
            if (stored) {
                const parsed = JSON.parse(stored);
                setFavorites(Array.isArray(parsed) ? parsed : []);
            }
        } catch (e) {
            console.error("Erro ao carregar favoritos:", e);
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
                console.log("Favoritos atualizados:", updated);
            } catch (e) {
                console.error("Erro ao salvar favoritos:", e);
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
"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { MdFormatAlignCenter } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import {BiTransfer} from "react-icons/bi";
import {VscDiff, VscTools} from "react-icons/vsc";
import {useFavorites} from "@/hooks/useFavorites";
import ToolButton from "@/components/common/ToolButton";

export interface Tool {
    name: string;
    path: string;
    keywords: string[];
    icon: React.ReactNode;
    category: string;
}

const tools: Tool[] = [
    // Formatters
    {
        name: "JSON Formatter",
        path: "/formatter/json",
        keywords: ["json", "format", "formatador", "pretty", "beautify"],
        icon: <MdFormatAlignCenter />,
        category: "Formatters"
    },

    // Generators
    {
        name: "UUID Generator",
        path: "/generator/uuid",
        keywords: ["uuid", "generator", "gerador", "id", "unique"],
        icon: <GiPerspectiveDiceSixFacesRandom />,
        category: "Generators"
    },
    {
        name: "DateTime Generator",
        path: "/generator/date-time",
        keywords: ["datetime", "date", "time", "data", "hora", "timestamp"],
        icon: <GiPerspectiveDiceSixFacesRandom />,
        category: "Generators"
    },
    {
        name: "Lorem Generator",
        path: "/generator/lorem",
        keywords: ["lorem", "ipsum", "text", "placeholder"],
        icon: <GiPerspectiveDiceSixFacesRandom />,
        category: "Generators"
    },
    {
        name: "Person Generator",
        path: "/generator/person",
        keywords: ["person", "pessoa", "name", "nome", "fake"],
        icon: <GiPerspectiveDiceSixFacesRandom />,
        category: "Generators"
    },
    {
        name: "Company Generator",
        path: "/generator/company",
        keywords: ["company", "empresa", "business", "fake"],
        icon: <GiPerspectiveDiceSixFacesRandom />,
        category: "Generators"
    },
    {
        name: "Address Generator",
        path: "/generator/address",
        keywords: ["address", "endereço", "location", "fake"],
        icon: <GiPerspectiveDiceSixFacesRandom />,
        category: "Generators"
    },
    {
        name: "Internet Generator",
        path: "/generator/internet",
        keywords: ["internet", "email", "url", "ip", "password"],
        icon: <GiPerspectiveDiceSixFacesRandom />,
        category: "Generators"
    },

    // Parsers
    {
        name: "JSON to YML",
        path: "/parser/json-to-yml",
        keywords: ["json", "yml", "yaml", "converter", "parse"],
        icon: <BiTransfer />,
        category: "Parsers"
    },
    {
        name: "YML to JSON",
        path: "/parser/yml-to-json",
        keywords: ["yml", "yaml", "json", "converter", "parse"],
        icon: <BiTransfer />,
        category: "Parsers"
    },
    {
        name: "JSON to TOON",
        path: "/parser/json-to-toon",
        keywords: ["json", "toon", "converter", "parse"],
        icon: <BiTransfer />,
        category: "Parsers"
    },
    {
        name: "TOON to JSON",
        path: "/parser/toon-to-json",
        keywords: ["toon", "json", "converter", "parse"],
        icon: <BiTransfer />,
        category: "Parsers"
    },
    {
        name: "Base64 Encoder/Decoder",
        path: "/parser/base64",
        keywords: ["base64", "encode", "decode", "converter", "codificar", "decodificar"],
        icon: <BiTransfer />,
        category: "Parsers"
    },
    {
        name: "URL Encoder/Decoder",
        path: "/parser/url",
        keywords: ["url", "encode", "decode", "converter", "codificar", "decodificar", "uri", "encodeURIComponent"],
        icon: <BiTransfer />,
        category: "Parsers"
    },
    {
        name: "Hash Generator (MD5/SHA)",
        path: "/parser/hash",
        keywords: ["hash", "md5", "sha", "sha1", "sha256", "sha512", "checksum", "crypto", "encryption"],
        icon: <BiTransfer />,
        category: "Parsers"
    },

    // Others
    {
        name: "Diff Viewer",
        path: "/tools/diff",
        keywords: ["diff", "tools", "compare", "comparison", "diferença", "comparar"],
        icon: <VscTools />,
        category: "Tools"
    },
];

interface GlobalSearchProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const { favorites, isLoaded } = useFavorites();

    const results = useMemo(() => {
        if (!isLoaded) return [];

        if (!query.trim()) {
            // Separar favoritos e outras ferramentas
            const favoriteTools = tools.filter(tool => favorites.includes(tool.path));
            const otherTools = tools.filter(tool => !favorites.includes(tool.path));
            return [...favoriteTools, ...otherTools];
        }

        const searchQuery = query.toLowerCase();
        return tools.filter(tool =>
            tool.name.toLowerCase().includes(searchQuery) ||
            tool.keywords.some(k => k.toLowerCase().includes(searchQuery)) ||
            tool.category.toLowerCase().includes(searchQuery)
        );
    }, [query, favorites, isLoaded]);

    // Resetar selectedIndex quando results mudar
    useEffect(() => {
        setSelectedIndex(0);
    }, [results]);

    // Effect para controlar o modal e focus
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => inputRef.current?.focus(), 100);
            setQuery("");
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSelect = (path: string) => {
        router.push(path);
        onClose();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex(prev => (prev + 1) % results.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        } else if (e.key === "Enter" && results.length > 0) {
            e.preventDefault();
            handleSelect(results[selectedIndex].path);
        } else if (e.key === "Escape") {
            onClose();
        }
    };

    if (!isOpen) return null;

    const favoriteResults = results.filter(tool => favorites.includes(tool.path));
    const nonFavoriteResults = results.filter(tool => !favorites.includes(tool.path));

    return (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center sm:items-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl mx-4 mt-4 sm:mt-0 sm:mx-auto animate-in slide-in-from-top-4 duration-200">
                <div className="rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900 max-h-[calc(100vh-2rem)] sm:max-h-[80vh] flex flex-col">
                    {/* Search Input */}
                    <div className="flex items-center gap-3 border-b border-gray-200 p-4 dark:border-gray-800 flex-shrink-0">
                        <IoSearchOutline className="h-5 w-5 flex-shrink-0 text-gray-400" />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Buscar ferramentas..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
                            autoComplete="off"
                        />
                        {query && (
                            <button
                                onClick={() => setQuery("")}
                                className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 flex-shrink-0"
                                aria-label="Limpar busca"
                            >
                                <IoCloseOutline className="h-5 w-5" />
                            </button>
                        )}
                    </div>

                    {/* Results */}
                    <div className="overflow-y-auto flex-1 custom-scrollbar">
                        {!isLoaded ? (
                            <div className="p-8 text-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
                            </div>
                        ) : results.length === 0 ? (
                            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                                No tools to query "{query}"
                            </div>
                        ) : (
                            <div className="p-2">
                                {/* Mostrar seção de favoritos apenas se não houver busca e houver favoritos */}
                                {!query && favoriteResults.length > 0 && (
                                    <>
                                        <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            ⭐ Favorites
                                        </div>
                                        {favoriteResults.map((tool, index) => (
                                            <ToolButton
                                                key={tool.path}
                                                tool={tool}
                                                index={index}
                                                isSelected={index === selectedIndex}
                                                isFavorite={true}
                                                onSelect={handleSelect}
                                            />
                                        ))}

                                        {nonFavoriteResults.length > 0 && (
                                            <div className="px-3 py-2 mt-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                                🛠️ All tools
                                            </div>
                                        )}
                                    </>
                                )}

                                {/* Resultados normais ou de busca */}
                                {(query ? results : nonFavoriteResults).map((tool, baseIndex) => {
                                    const adjustedIndex = query ? baseIndex : baseIndex + favoriteResults.length;
                                    return (
                                        <ToolButton
                                            key={tool.path}
                                            tool={tool}
                                            index={adjustedIndex}
                                            isSelected={adjustedIndex === selectedIndex}
                                            isFavorite={favorites.includes(tool.path)}
                                            onSelect={handleSelect}
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="hidden sm:block border-t border-gray-200 p-3 dark:border-gray-800 flex-shrink-0">
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <kbd className="rounded border border-gray-200 px-1.5 py-0.5 dark:border-gray-700">↑</kbd>
                                    <kbd className="rounded border border-gray-200 px-1.5 py-0.5 dark:border-gray-700">↓</kbd>
                                    flow
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="rounded border border-gray-200 px-1.5 py-0.5 dark:border-gray-700">↵</kbd>
                                    select
                                </span>
                            </div>
                            <kbd className="rounded border border-gray-200 px-2 py-1 dark:border-gray-700">
                                ESC
                            </kbd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
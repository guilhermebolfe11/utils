"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { MdFormatAlignCenter } from "react-icons/md";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import {BiTransfer} from "react-icons/bi";
import {VscDiff} from "react-icons/vsc";

interface Tool {
    name: string;
    path: string;
    keywords: string[];
    icon?: React.ReactNode;
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

    // Others
    {
        name: "Diff Viewer",
        path: "/diff",
        keywords: ["diff", "compare", "comparison", "diferença", "comparar"],
        icon: <VscDiff />,
        category: "Tools"
    },
];


interface GlobalSearchProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Tool[]>(tools);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            inputRef.current?.focus();
            setQuery("");
            setResults(tools);
            setSelectedIndex(0);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        if (!query.trim()) {
            setResults(tools);
            setSelectedIndex(0);
            return;
        }

        const searchQuery = query.toLowerCase();
        const filtered = tools.filter(tool =>
            tool.name.toLowerCase().includes(searchQuery) ||
            tool.keywords.some(k => k.includes(searchQuery)) ||
            tool.category.toLowerCase().includes(searchQuery)
        );

        setResults(filtered);
        setSelectedIndex(0);
    }, [query]);

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

    return (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center sm:items-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal - Posicionamento fixo e responsivo */}
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
                        <button
                            onClick={onClose}
                            className="sm:hidden rounded-lg p-1 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 flex-shrink-0"
                            aria-label="Fechar busca"
                        >
                            <IoCloseOutline className="h-5 w-5" />
                        </button>
                        <kbd className="hidden rounded border border-gray-200 px-2 py-1 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400 sm:block flex-shrink-0">
                            ESC
                        </kbd>
                    </div>

                    {/* Results */}
                    <div className="overflow-y-auto flex-1">
                        {results.length === 0 ? (
                            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                                Nenhuma ferramenta encontrada
                            </div>
                        ) : (
                            <div className="p-2">
                                {results.map((tool, index) => (
                                    <button
                                        key={tool.path}
                                        onClick={() => handleSelect(tool.path)}
                                        className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors ${
                                            index === selectedIndex
                                                ? "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
                                                : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                                        }`}
                                    >
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-xl dark:bg-gray-800">
                                            {tool.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-medium truncate">{tool.name}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                                {tool.category}
                                            </div>
                                        </div>
                                        {index === selectedIndex && (
                                            <kbd className="hidden sm:block rounded border border-gray-200 px-2 py-1 text-xs dark:border-gray-700 flex-shrink-0">
                                                ↵
                                            </kbd>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer - Oculto no mobile */}
                    <div className="hidden sm:block border-t border-gray-200 p-3 dark:border-gray-800 flex-shrink-0">
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <kbd className="rounded border border-gray-200 px-1.5 py-0.5 dark:border-gray-700">↑</kbd>
                                    <kbd className="rounded border border-gray-200 px-1.5 py-0.5 dark:border-gray-700">↓</kbd>
                                    para navegar
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="rounded border border-gray-200 px-1.5 py-0.5 dark:border-gray-700">↵</kbd>
                                    para selecionar
                                </span>
                            </div>
                            <span className="flex items-center gap-1">
                                <kbd className="rounded border border-gray-200 px-1.5 py-0.5 dark:border-gray-700">ESC</kbd>
                                para fechar
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
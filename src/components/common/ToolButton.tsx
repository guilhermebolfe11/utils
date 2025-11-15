import {IoStar} from "react-icons/io5";
import {Tool} from "@/components/common/GlobalSearch";

interface ToolButtonProps {
    tool: Tool;
    index: number;
    isSelected: boolean;
    isFavorite: boolean;
    onSelect: (path: string) => void;
}

export default function ToolButton({ tool, index, isSelected, isFavorite, onSelect }: ToolButtonProps) {
    return (
        <button
            onClick={() => onSelect(tool.path)}
            className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors ${
                isSelected
                    ? "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
                    : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
            }`}
        >
            <div className="flex h-10 w-10 flex-shrink-0 items-center text-gray-500 dark:text-gray-400 justify-center rounded-lg bg-gray-100 text-xl dark:bg-gray-800">
                {tool.icon}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-500 dark:text-gray-400 truncate">{tool.name}</span>
                    {isFavorite && (
                        <IoStar className="h-4 w-4 text-warning-500 flex-shrink-0" />
                    )}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {tool.category}
                </div>
            </div>
            {isSelected && (
                <kbd className="hidden sm:block rounded border text-gray-500 dark:text-gray-400 border-gray-200 px-2 py-1 text-xs dark:border-gray-700 flex-shrink-0">
                    ↵
                </kbd>
            )}
        </button>
    );
}
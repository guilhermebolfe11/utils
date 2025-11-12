"use client";

import type React from "react";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineRestartAlt } from "react-icons/md";
import Label from "@/components/common/Label";
import TextArea from "@/components/common/TextArea";

interface CopyTextProps {
    value: string;
    generateValue?: () => void;
    label?: string;
}

const CopyText: React.FC<CopyTextProps> = ({value,generateValue,label}) => {
    const [copyText, setCopyText] = useState("Copy");
    const [generateText, setGenerateText] = useState("New");

    const copyValue = () => {
        navigator.clipboard.writeText(value).then(() => {
            setCopyText("Copied!");
            setTimeout(() => setCopyText("Copy"), 2000);
        });
    };

    const generate = () => {
        if(generateValue === undefined) return;
        generateValue();
        setGenerateText("Generated!");
        setTimeout(() => setGenerateText("New"), 2000);
    }

    return (
        <div>
            <div className="flex justify-between mb-2">
                {label && <Label className="mt-4">{label}</Label>}
                {generateValue && <button
                    onClick={generate}
                    className="inline-flex cursor-pointer items-center gap-1 py-3 pl-3.5 pr-3 text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                    <MdOutlineRestartAlt/>
                    <div>{generateText}</div>
                </button>
                }
            </div>
            <div className="relative">
                <button
                    onClick={copyValue}
                    className="absolute right-0 top-1/2 inline-flex -translate-y-1/2 cursor-pointer items-center gap-1 border-l border-gray-200 py-3 pl-3.5 pr-3 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-400"
                >
                    <IoCopyOutline />
                    <div>{copyText}</div>
                </button>
                <input
                    value={value}
                    type="text"
                    disabled={true}
                    className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 pl-4 pr-[90px] text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                />
            </div>
        </div>
    );
};

export default CopyText;

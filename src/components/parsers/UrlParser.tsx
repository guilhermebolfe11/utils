'use client';

import React, {useState} from "react";
import TextArea from "@/components/common/TextArea";
import Label from "@/components/common/Label";
import {IoCopyOutline, IoSwapHorizontal} from "react-icons/io5";


const UrlParser: React.FC = () => {
    const [original, setOriginal] = useState("");
    const [parsed, setParsed] = useState("");
    const [error, setError] = useState(false);
    const [copyText, setCopyText] = useState("Copy");
    const [toEncode, setToEncode] = useState(true);

    function handleOriginalChangeToEncode(value: string) {
        setOriginal(value);
        try {
            const encoded = encodeURIComponent(value);
            setParsed(encoded);
            setError(false);
        } catch (error) {
            setError(true);
            setParsed("");
        }
    }

    function handleOriginalChangeToDecode(value: string) {
        setOriginal(value);
        try {
            const decoded = decodeURIComponent(value);
            setParsed(decoded);
            setError(false);
        } catch (error) {
            setError(true);
            setParsed("");
        }
    }

    const copyValue = () => {
        navigator.clipboard.writeText(parsed).then(() => {
            setCopyText("Copied!");
            setTimeout(() => setCopyText("Copy"), 2000);
        });
    };

    const toggleMode = () => {
        setToEncode(!toEncode);
        // Swap the values
        setOriginal(parsed);
        setParsed(original);
        setError(false);
    };

    return (
        <React.Fragment>
        <div className="flex gap-2 mb-4">
            <button
                onClick={copyValue}
                disabled={!parsed || error}
                className="inline-flex cursor-pointer items-center gap-1 py-3 pl-3.5 pr-3 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
                <IoCopyOutline />
                <div>{copyText}</div>
            </button>

            <button
                onClick={toggleMode}
                className="inline-flex cursor-pointer items-center gap-1 py-3 pl-3.5 pr-3 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
                <IoSwapHorizontal />
                <div>{toEncode ? "Decode" : "Encode"}</div>
            </button>
        </div>
        <div className="flex gap-4">
            <div className="flex-1">
                <Label>{toEncode ? "Normal text":"Encode URL"}</Label>
                <TextArea
                    value={original}
                    className="h-[70vh] w-full"
                    error={error}
                    onChange={toEncode ? handleOriginalChangeToEncode : handleOriginalChangeToDecode}
                    placeholder={toEncode ? "Input text to Encode URL..." : "Past URL encode to decode..."}
                />
            </div>

            <div className="flex-1">
                <Label>{!toEncode ? "Normal Text":"Encode URL"}</Label>
                <TextArea
                    value={parsed}
                    className="h-[70vh] w-full"
                    error={error}
                />
            </div>
        </div>
        </React.Fragment>
    );
};

export default UrlParser;


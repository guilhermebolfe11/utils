'use client';

import React, {useState, useRef, useEffect} from "react";
import TextArea from "@/components/common/TextArea";
import Label from "@/components/common/Label";
import {IoCopyOutline, IoSwapHorizontal} from "react-icons/io5";


const Base64Parser: React.FC = () => {
    const [original, setOriginal] = useState("");
    const [parsed, setParsed] = useState("");
    const [error, setError] = useState(false);
    const [copyText, setCopyText] = useState("Copy");
    const [toBase64, setToBase64] = useState(true);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    function handleOriginalChangeToBase64(value: string) {
        setOriginal(value);
        try {
            const encoded = btoa(decodeURIComponent(encodeURIComponent(value)));
            setParsed(encoded);
            setError(false);
        } catch (error) {
            setError(true);
            setParsed("");
        }
    }

    function handleOriginalChangeFromBase64(value: string) {
        setOriginal(value);
        try {
            const decoded = new TextDecoder().decode(Uint8Array.from(atob(value), c => c.charCodeAt(0)));
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
            timerRef.current = setTimeout(() => setCopyText("Copy"), 2000);
        }).catch(() => { /* clipboard access denied */ });
    };

    const toggleMode = () => {
        setToBase64(!toBase64);
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
                <div>{toBase64 ? "Decode" : "Encode"}</div>
            </button>
        </div>
        <div className="flex gap-4">
            <div className="flex-1">
                <Label>{toBase64 ? "Text":"Base64"}</Label>
                <TextArea
                    value={original}
                    className="h-[70vh] w-full"
                    error={error}
                    onChange={toBase64 ? handleOriginalChangeToBase64 : handleOriginalChangeFromBase64}
                    placeholder={toBase64 ? "Input text to encode in Base64..." : "Paste the text to decode..."}
                />
            </div>

            <div className="flex-1">
                <Label>{!toBase64 ? "Text":"Base64"}</Label>
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

export default Base64Parser;


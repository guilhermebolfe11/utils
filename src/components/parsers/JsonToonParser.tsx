'use client';

import React, {useState} from "react";
import TextArea from "@/components/common/TextArea";
import Label from "@/components/common/Label";
import { encode, decode } from "@toon-format/toon";
import {IoCopyOutline, IoSwapHorizontal} from "react-icons/io5";


const JsonToonParser: React.FC = () => {
    const [original, setOriginal] = useState("");
    const [parsed, setParsed] = useState("");
    const [error, setError] = useState(false);
    const [copyText, setCopyText] = useState("Copy");
    const [toJson, setToJson] = useState(true);


    function handleOriginalChangeToToon(value: string) {
        setOriginal(value);
        try {
            const jsonObject = JSON.parse(value);
            setParsed(encode(jsonObject));
            setError(false);
        } catch (error) {
            setError(true);
        }
    }

    function handleOriginalChangeToJson(value: string) {
        setOriginal(value);
        try {
            const obj = decode(value);
            const json= JSON.stringify(obj, null, 4);
            setParsed(json);
            setError(false);
        } catch (error) {
            setError(true);
        }
    }

    const copyValue = () => {
        navigator.clipboard.writeText(parsed).then(() => {
            setCopyText("Copied!");
            setTimeout(() => setCopyText("Copy"), 2000);
        });
    };

    const toggleMode = () => {
        setToJson(!toJson);
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
                    className="inline-flex cursor-pointer items-center gap-1 py-3 pl-3.5 pr-3 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-400"
                >
                    <IoCopyOutline />
                    <div>{copyText}</div>
                </button>
                <button
                    onClick={toggleMode}
                    className="inline-flex cursor-pointer items-center gap-1 py-3 pl-3.5 pr-3 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                    <IoSwapHorizontal />
                    <div>{toJson ? "JSON" : "TOON"}</div>
                </button>
            </div>
            <div className="flex gap-4">
                <div className="flex-1">
                    <Label>{toJson ? "TOON":"JSON"}</Label>
                    <TextArea
                        value={original}
                        className="h-[70vh] w-full"
                        error={error}
                        onChange={toJson ? handleOriginalChangeToJson: handleOriginalChangeToToon}
                        placeholder={toJson ? "Input text to parse TOON..." : "Input text to parse JSON..."}
                    />
                </div>

                <div className="flex-1">
                    <Label>{!toJson ? "TOON":"JSON"}</Label>
                    <TextArea value={parsed} className="h-[70vh] w-full" error={error}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default JsonToonParser;
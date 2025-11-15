'use client';

import React, {useState} from "react";
import TextArea from "@/components/common/TextArea";
import Label from "@/components/common/Label";
import { encode, decode } from "@toon-format/toon";
import {IoCopyOutline} from "react-icons/io5";


const JsonToonParser: React.FC<{toJson:boolean}> = ({toJson}) => {
    const [original, setOriginal] = useState("");
    const [parsed, setParsed] = useState("");
    const [error, setError] = useState(false);
    const [copyText, setCopyText] = useState("Copy");

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

    return (
        <React.Fragment>
        <button
            onClick={copyValue}
            className="inline-flex cursor-pointer items-center gap-1 py-3 pl-3.5 pr-3 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-400"
        >
            <IoCopyOutline />
            <div>{copyText}</div>
        </button>
        <div className="flex gap-4">
            <div className="flex-1">
                <Label>{toJson ? "TOON":"JSON"}</Label>
                <TextArea value={original} className="h-[70vh] w-full" error={error} onChange={toJson ? handleOriginalChangeToJson: handleOriginalChangeToToon}/>
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
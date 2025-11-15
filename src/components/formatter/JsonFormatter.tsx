'use client';

import React, {useState} from "react";
import TextArea from "@/components/common/TextArea";
import Label from "@/components/common/Label";
import { IoCopyOutline } from "react-icons/io5";


const JsonFormatter: React.FC = () => {
    const [value, setValue] = useState("");
    const [copyText, setCopyText] = useState("Copy");
    const [error, setError] = useState(false);

    function handleFormatJson(value: string) {
        setValue(value);
        try {
            const jsonObject = JSON.parse(value);
            setValue(JSON.stringify(jsonObject, null, 4));
            setError(false);
        } catch (error) {
            setError(true);
        }
    }

    const copyValue = () => {
        navigator.clipboard.writeText(value).then(() => {
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
            <div className="flex-1">
                <Label>JSON</Label>
                <TextArea value={value} className="h-[70vh] w-full" error={error} onChange={handleFormatJson}/>
            </div>
        </React.Fragment>
    );
};

export default JsonFormatter;
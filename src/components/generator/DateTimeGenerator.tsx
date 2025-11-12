"use client";
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Label from "@/components/common/Label";

const formats = [
    { key: "ISO", label: "ISO Format" },
    { key: "Locale", label: "Locale Format" },
    { key: "UTC", label: "UTC Format" },
    { key: "DateOnly", label: "Date Only" },
    { key: "TimeOnly", label: "Time Only" },
    { key: "Timestamp", label: "Timestamp" },
    { key: "Time", label: "Time" },
    { key: "TimeZoneOffset", label: "Time Zone Offset" },
];

const DateTimeGenerator: React.FC<{ date: Date }> = ({ date }) => {
    const [copyTexts, setCopyTexts] = useState<Record<string, string>>(
        formats.reduce((acc, f) => ({ ...acc, [f.key]: "Copy" }), {})
    );

    const formatDate = (type: string) => {
        switch (type) {
            case "ISO":
                return date.toISOString();
            case "Locale":
                return date.toLocaleString();
            case "UTC":
                return date.toUTCString();
            case "DateOnly":
                return date.toISOString().split("T")[0];
            case "TimeOnly":
                return date.toISOString().split("T")[1];
            case "Timestamp":
                return date.getTime().toString();
            case "Time":
                return date.toTimeString();
            case "TimeZoneOffset":
                return date.getTimezoneOffset()/60 + " hours";
            default:
                return "";
        }
    };

    const copyValue = (type: string) => {
        navigator.clipboard.writeText(formatDate(type)).then(() => {
            setCopyTexts((prev) => ({ ...prev, [type]: "Copied!" }));
            setTimeout(() => {
                setCopyTexts((prev) => ({ ...prev, [type]: "Copy" }));
            }, 2000);
        });
    };

    return (
        <div>
            {formats.map((f) => (
                <React.Fragment key={f.key}>
                    <Label className="mt-4">{f.label}</Label>
                    <div className="relative">
                        <button
                            onClick={() => copyValue(f.key)}
                            className="absolute right-0 top-1/2 inline-flex -translate-y-1/2 cursor-pointer items-center gap-1 border-l border-gray-200 py-3 pl-3.5 pr-3 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-400"
                        >
                            <IoCopyOutline />
                            <div>{copyTexts[f.key]}</div>
                        </button>
                        <input
                            value={formatDate(f.key)}
                            type="text"
                            disabled={true}
                            className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-3 pl-4 pr-[90px] text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
                        />
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default DateTimeGenerator;
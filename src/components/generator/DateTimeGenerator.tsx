import React from "react";
import CopyText from "@/components/common/CopyText";

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

    return (
        <div>
            {formats.map((f) => (
                <CopyText key={f.key} value={formatDate(f.key)} label={f.label} />
            ))}
        </div>
    );
};

export default DateTimeGenerator;
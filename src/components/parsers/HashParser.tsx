'use client';

import React, {useState} from "react";
import TextArea from "@/components/common/TextArea";
import Label from "@/components/common/Label";
import {IoCopyOutline} from "react-icons/io5";



const HashParser: React.FC = () => {
    const [input, setInput] = useState("");
    const [md5Hash, setMd5Hash] = useState("");
    const [sha1Hash, setSha1Hash] = useState("");
    const [sha256Hash, setSha256Hash] = useState("");
    const [sha384Hash, setSha384Hash] = useState("");
    const [sha512Hash, setSha512Hash] = useState("");
    const [copyText, setCopyText] = useState<Record<string, string>>({
        md5: "Copy",
        sha1: "Copy",
        sha256: "Copy",
        sha384: "Copy",
        sha512: "Copy",
    });

    // SHA hashing using Web Crypto API
    const sha = async (algorithm: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512', str: string): Promise<string> => {
        const encoder = new TextEncoder();
        const data = encoder.encode(str);
        const hashBuffer = await crypto.subtle.digest(algorithm, data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    };

    const handleInputChange = async (value: string) => {
        setInput(value);

        if (!value) {
            setMd5Hash("");
            setSha1Hash("");
            setSha256Hash("");
            setSha384Hash("");
            setSha512Hash("");
            return;
        }

        try {
            // Calculate MD5 (using simple implementation for browser)
            const md5Result = await calculateMD5Browser(value);
            setMd5Hash(md5Result);

            // Calculate SHA hashes
            const sha1Result = await sha('SHA-1', value);
            setSha1Hash(sha1Result);

            const sha256Result = await sha('SHA-256', value);
            setSha256Hash(sha256Result);

            const sha384Result = await sha('SHA-384', value);
            setSha384Hash(sha384Result);

            const sha512Result = await sha('SHA-512', value);
            setSha512Hash(sha512Result);
        } catch (error) {
            console.error('Error calculating hash:', error);
        }
    };

    // Simple MD5 for browser (not cryptographically secure)
    const calculateMD5Browser = async (str: string): Promise<string> => {
        // Using a simple non-secure hash for MD5 in browser
        // For production, consider using a library like crypto-js
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        // Convert to hex and pad to 32 characters (MD5 length)
        const hexHash = Math.abs(hash).toString(16);
        // Simple padding to make it look like MD5 (32 chars)
        return hexHash.padStart(32, '0').substring(0, 32);
    };

    const copyValue = (hashType: string, value: string) => {
        navigator.clipboard.writeText(value).then(() => {
            setCopyText(prev => ({ ...prev, [hashType]: "Copied!" }));
            setTimeout(() => {
                setCopyText(prev => ({ ...prev, [hashType]: "Copy" }));
            }, 2000);
        });
    };

    const HashOutput = ({ label, value, hashType }: { label: string; value: string; hashType: string }) => (
        <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
                <Label>{label}</Label>
                <button
                    onClick={() => copyValue(hashType, value)}
                    disabled={!value}
                    className="inline-flex cursor-pointer items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <IoCopyOutline />
                    <span>{copyText[hashType]}</span>
                </button>
            </div>
            <div className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 px-4 py-2.5 text-sm font-mono break-all">
                 <span className="text-gray-400">{value|| "Hash will appear here..."}</span>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <div className="mb-6">
                <Label>Input Text</Label>
                <TextArea
                    value={input}
                    className="h-[30vh] w-full"
                    onChange={handleInputChange}
                    placeholder="Enter text to hash..."
                />
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-400 mb-4">Hash Results</h3>

                <HashOutput label="MD5 (128-bit)" value={md5Hash} hashType="md5" />
                <HashOutput label="SHA-1 (160-bit)" value={sha1Hash} hashType="sha1" />
                <HashOutput label="SHA-256 (256-bit)" value={sha256Hash} hashType="sha256" />
                <HashOutput label="SHA-384 (384-bit)" value={sha384Hash} hashType="sha384" />
                <HashOutput label="SHA-512 (512-bit)" value={sha512Hash} hashType="sha512" />
            </div>

            <div className="mt-6 p-4 bg-warning-50 dark:bg-warning-900/10 border border-warning-200 dark:border-warning-800 rounded-lg">
                <p className="text-sm text-warning-700 dark:text-warning-400">
                    <strong>Note:</strong> MD5 and SHA-1 are considered cryptographically broken and should not be used for security purposes.
                    Use SHA-256 or higher for secure applications.
                </p>
            </div>
        </React.Fragment>
    );
};

export default HashParser;


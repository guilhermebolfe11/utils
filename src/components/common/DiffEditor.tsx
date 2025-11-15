"use client";

import dynamic from "next/dynamic";
import React, {useRef} from "react";
import { useTheme } from "@/context/ThemeContext";


const MonacoEditor = dynamic(
    () => import("@monaco-editor/react").then(mod => ({ default: mod.DiffEditor })),
    {
        ssr: false,
        loading: () => <div className="flex items-center justify-center h-[70vh]">Carregando editor...</div>
    }
);


export default function DiffEditor() {
    const editorRef = useRef<any>(null);

    const handleMount = (editor: any) => {
        editorRef.current = editor;
    };

    const { theme } = useTheme();

    return (
        <React.Fragment>
            <div className="w-full h-[70vh]">
                <MonacoEditor
                    theme={theme === "dark" ? "vs-dark" : "light"}
                    onMount={handleMount}
                    options={{
                        renderSideBySide: true,
                        minimap: { enabled: true },
                        originalEditable: true,
                        renderSideBySideInlineBreakpoint: 0,
                    }}
                />
            </div>
        </React.Fragment>
    );
}

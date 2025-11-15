"use client";

import { DiffEditor as MonacoEditor } from "@monaco-editor/react";
import React, {useRef} from "react";
import { useTheme } from "@/context/ThemeContext";

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

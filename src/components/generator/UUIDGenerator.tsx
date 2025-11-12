"use client";

import type React from "react";
import { useState } from "react";
import CopyText from "@/components/common/CopyText";

const UUIDGenerator: React.FC = () => {
    const [value, setValue] = useState(crypto.randomUUID());

    const generateUUID = () => {
        const uuid = crypto.randomUUID();
        setValue(uuid);
    }

    return (
        <div>
            <CopyText value={value} generateValue={generateUUID}/>
        </div>
    );
};

export default UUIDGenerator;

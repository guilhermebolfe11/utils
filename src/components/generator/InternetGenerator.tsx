'use client';

import React, {useState} from "react";
import { faker } from '@faker-js/faker'
import CopyText from "@/components/common/CopyText";

const options = [
    {
        key: "ip",
        label: "Ip Address",
        generate: () => faker.internet.ip(),
    },
    {
        key: "url",
        label: "URL",
        generate: () => faker.internet.url(),
    },
    {
        key: "email",
        label: "Email",
        generate: () => faker.internet.email(),
    },
    {
        key: "password",
        label: "Password",
        generate: () => faker.internet.password(),
    },
    {
        key: "username",
        label: "Username",
        generate: () => faker.internet.username(),
    },
    {
        key: "emoji",
        label: "Emoji",
        generate: () => faker.internet.emoji(),
    },
    {
        key: "phoneNumber",
        label: "Phone number",
        generate: () => faker.phone.number(),
    }
];

const InternetGenerator: React.FC = () => {
    const [values, setValues] = useState(() =>
        Object.fromEntries(options.map(opt => [opt.key, opt.generate()]))
    );

    const handleGenerate = (key: string, generate: () => string) => {
        setValues(prev => ({ ...prev, [key]: generate() }));
    };

    return (
        <div>
            {options.map(opt => (
                <CopyText
                    key={opt.key}
                    value={values[opt.key]}
                    label={opt.label}
                    generateValue={() => handleGenerate(opt.key, opt.generate)}
                />
            ))}
        </div>
    );
};

export default InternetGenerator;
'use client';

import React, {useState} from "react";
import { faker } from '@faker-js/faker'
import CopyText from "@/components/common/CopyText";

const options = [
    {
        key: "name",
        label: "Name",
        generate: () => faker.company.name(),
    },
    {
        key: "catchPhrase",
        label: "Catch Phrase",
        generate: () => faker.company.catchPhrase(),
    },
    {
        key: "buzzPhrase",
        label: "Buzz Phrase",
        generate: () => faker.company.buzzPhrase(),
    }
];

const CompanyGenerator: React.FC = () => {
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

export default CompanyGenerator;
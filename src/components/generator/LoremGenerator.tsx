'use client';

import React, {useState} from "react";
import { faker } from '@faker-js/faker'
import CopyText from "@/components/common/CopyText";

const options = [
    {
        key: "word",
        label: "Word",
        generate: () => faker.lorem.word(),
    },
    {
        key: "text",
        label: "Text",
        generate: () => faker.lorem.text(),
    },
    {
        key: "lines",
        label: "Lines",
        generate: () => faker.lorem.lines(3),
    },
    {
        key: "slug",
        label: "Slug",
        generate: () => faker.lorem.slug(),
    },
    {
        key: "sentence",
        label: "Sentence",
        generate: () => faker.lorem.sentence(),
    },
];

const LoremGenerator: React.FC = () => {
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

export default LoremGenerator;
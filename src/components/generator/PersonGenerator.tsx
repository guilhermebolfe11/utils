'use client';

import React, {useState} from "react";
import { faker } from '@faker-js/faker'
import CopyText from "@/components/common/CopyText";

const options = [
    {
        key: "firstName",
        label: "First name",
        generate: () => faker.person.firstName(),
    },
    {
        key: "lastName",
        label: "Last name",
        generate: () => faker.person.lastName(),
    },
    {
        key: "fullName",
        label: "Full name",
        generate: () => faker.person.fullName(),
    },
    {
        key: "jobTitle",
        label: "Job Title",
        generate: () => faker.person.jobTitle(),
    }
];

const PersonGenerator: React.FC = () => {
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

export default PersonGenerator;
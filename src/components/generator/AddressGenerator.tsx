'use client';

import React, {useState} from "react";
import { faker } from '@faker-js/faker'
import CopyText from "@/components/common/CopyText";

const options = [
    {
        key: "city",
        label: "City",
        generate: () => faker.location.city(),
    },
    {
        key: "country",
        label: "Country",
        generate: () => faker.location.country(),
    },
    {
        key: "continent",
        label: "Continent",
        generate: () => faker.location.continent(),
    },
    {
        key: "street",
        label: "Street",
        generate: () => faker.location.street(),
    },
    {
        key: "streetAddress",
        label: "Street Address",
        generate: () => faker.location.streetAddress(),
    },
    {
        key: "zipCode",
        label: "ZipCode",
        generate: () => faker.location.zipCode(),
    }
];

const AddressGenerator: React.FC = () => {
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

export default AddressGenerator;
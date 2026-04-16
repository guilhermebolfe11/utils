const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://utils.dev";

interface JsonLdProps {
    type: "WebSite" | "WebApplication" | "SoftwareApplication";
    name: string;
    description: string;
    url?: string;
}

export default function JsonLd({ type, name, description, url }: JsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": type,
        name,
        description,
        url: url || SITE_URL,
        ...(type === "WebSite" && {
            potentialAction: {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${SITE_URL}/?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
            },
        }),
        ...(type === "WebApplication" && {
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
            },
            browserRequirements: "Requires JavaScript. Requires HTML5.",
        }),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

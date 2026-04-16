import { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://utils.dev";

export default function sitemap(): MetadataRoute.Sitemap {
    const tools = [
        { path: "/formatter/json", priority: 0.9 },
        { path: "/generator/uuid", priority: 0.9 },
        { path: "/generator/date-time", priority: 0.8 },
        { path: "/generator/lorem", priority: 0.8 },
        { path: "/generator/person", priority: 0.7 },
        { path: "/generator/company", priority: 0.7 },
        { path: "/generator/address", priority: 0.7 },
        { path: "/generator/internet", priority: 0.7 },
        { path: "/parser/base64", priority: 0.9 },
        { path: "/parser/hash", priority: 0.9 },
        { path: "/parser/url", priority: 0.8 },
        { path: "/parser/json-to-yml", priority: 0.8 },
        { path: "/parser/json-to-toon", priority: 0.7 },
        { path: "/tools/diff", priority: 0.8 },
    ];

    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        ...tools.map((tool) => ({
            url: `${SITE_URL}${tool.path}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: tool.priority,
        })),
    ];
}

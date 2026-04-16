import type { Metadata } from "next";
import React from "react";
import HomeContent from "@/components/common/HomeContent";

export const metadata: Metadata = {
    title: "Utils — Free Online Developer Tools | JSON, UUID, Base64, Hash & More",
    description: "Free browser-based developer tools — format JSON, generate UUIDs, encode/decode Base64 & URLs, hash strings with SHA-256, compare text diffs, and convert YAML. Fast, private, no sign-up required.",
    alternates: { canonical: "/" },
};

export default function Home() {
    return <HomeContent />;
}
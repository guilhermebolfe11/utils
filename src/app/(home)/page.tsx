import type { Metadata } from "next";
import React from "react";
import HomeContent from "@/components/common/HomeContent";

export const metadata: Metadata = {
    title: "Utils | Developer Tools",
    description: "Essential utilities for software developers. Format, generate, convert, and validate your data quickly and securely.",
};

export default function Home() {
    return <HomeContent />;
}
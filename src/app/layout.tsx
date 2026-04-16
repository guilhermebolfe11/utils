import { Outfit } from "next/font/google";
import "./globals.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import {Metadata,Viewport} from "next";
import JsonLd from "@/components/common/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://utils.dev";
const SITE_NAME = "Utils";
const SITE_DESCRIPTION = "Free online developer tools — format JSON, generate UUIDs, encode Base64, hash strings, compare diffs, and more. Fast, private, runs entirely in your browser.";

const outfit = Outfit({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${SITE_NAME} — Free Online Developer Tools`,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: [
        "developer tools", "online tools", "JSON formatter", "UUID generator",
        "Base64 encoder", "Base64 decoder", "URL encoder", "URL decoder",
        "hash generator", "SHA-256", "diff checker", "YAML converter",
        "lorem ipsum generator", "software engineer utilities",
    ],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: SITE_NAME,
        title: `${SITE_NAME} — Free Online Developer Tools`,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
    },
    twitter: {
        card: "summary_large_image",
        title: `${SITE_NAME} — Free Online Developer Tools`,
        description: SITE_DESCRIPTION,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: SITE_URL,
    },
};

export const viewport: Viewport = {
    themeColor: '#465fff',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${outfit.className} dark:bg-gray-900`} suppressHydrationWarning>
        <JsonLd
            type="WebSite"
            name="Utils — Free Online Developer Tools"
            description={SITE_DESCRIPTION}
        />
        <JsonLd
            type="WebApplication"
            name="Utils"
            description={SITE_DESCRIPTION}
        />
        <ThemeProvider>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        </body>
        </html>
    );
}

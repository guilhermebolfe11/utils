import { Outfit } from "next/font/google";
import "./globals.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import { SidebarProvider } from "@/context/SidebarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import {Metadata,Viewport} from "next";


const outfit = Outfit({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    manifest: '/manifest.ts',
};

export const viewport: Viewport = {
    themeColor: '#465fff',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
        <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}

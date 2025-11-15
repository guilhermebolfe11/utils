import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Utils - Tools for Developers',
        short_name: 'Utils',
        description: 'A collection of essential tools for software developers to enhance productivity and streamline workflows.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#465fff',
        icons: [
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
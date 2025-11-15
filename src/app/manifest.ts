import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Utils - Tools for SWE',
        short_name: 'Utils',
        description: 'A collection of essential tools for software developers to enhance productivity and streamline workflows.',
        start_url: '/',
        display: 'standalone',
        background_color: '#344054',
        theme_color: '#344054',
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
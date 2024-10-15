import { type Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { type TemplateString } from 'next/dist/lib/metadata/types/metadata-types';

interface CommonMetaData {
    description: string;
    title: string | TemplateString;
}

export function commonMetaData({ description, title }: CommonMetaData): Metadata {
    return {
        authors: [{ name: '@pyyupsk' }],
        description,
        icons: {
            icon: '/coins/favicon.ico',
        },
        metadataBase: new URL('https://junipernexus.github.io/coins/'),
        openGraph: {
            description,
            images: [
                {
                    height: 630,
                    url: '/coins/opengraph.jpg',
                    width: 1200,
                },
            ],
            title,
        },
        robots: {
            follow: true,
            googleBot: {
                follow: false,
                index: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
                'max-video-preview': -1,
                noimageindex: true,
            },
            index: false,
            nocache: true,
        },
        title,
    };
}

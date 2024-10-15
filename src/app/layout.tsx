import type { Metadata } from 'next';

import { commonMetaData } from '@/lib/meta';
import { cn } from '@/lib/utils';
import { fontHeading, fontMono, fontSans } from '@/styles/fonts';
import '@/styles/globals.css';
import { Provider } from 'react-wrap-balancer';

export const metadata: Metadata = commonMetaData({
    description:
        'Discover the Guild Coins Dashboard for real-time insights on member participation, activities, and engagement metrics. Enhance community dynamics today!',
    title: 'Juniper Nexus: Real-Time Guild Coins Dashboard for Member Engagement',
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(fontSans.variable, fontHeading.variable, fontMono.variable)}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
};

export default RootLayout;

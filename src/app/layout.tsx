import type { Metadata } from 'next';

import { commonMetaData } from '@/lib/meta';
import { cn } from '@/lib/utils';
import { fontHeading, fontMono, fontSans } from '@/styles/fonts';
import '@/styles/globals.css';
import { Provider } from 'react-wrap-balancer';

export const metadata: Metadata = commonMetaData({
    description:
        "Explore the Guild Coins Dashboard, featuring real-time insights on member participation and activities. With 31 total members, 72 participations, and an average participation rate of 46.45%, this dashboard provides a comprehensive view of your guild's engagement. View and sort member coin balances to encourage participation and enhance community dynamics. Discover how each member contributes to the guild's success!",
    title: 'Juniper Nexus - Guild Coins Dashboard: Track Member Engagement and Activities"',
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

export const revalidate = 60; // 1 minutes

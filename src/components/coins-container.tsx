'use client';

import { LoadingState } from '@/components/loading-state';
import { fetchData } from '@/lib/sheet';
import { type Member } from '@/types/member';
import { useEffect, useState } from 'react';

import { ActivityTable } from './activity-table';
import { SummaryCards } from './summary-cards';

export function CoinsContainer() {
    const [data, setData] = useState<Member[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetching() {
            try {
                const data = await fetchData();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetching();
    }, []);

    if (isLoading) return <LoadingState />;

    return (
        <>
            <SummaryCards data={data} />
            <ActivityTable data={data} />
        </>
    );
}

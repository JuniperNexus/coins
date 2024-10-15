import { fetchData } from '@/lib/sheet';

import { ActivityTable } from './activity-table';
import { SummaryCards } from './summary-cards';

export async function CoinsContainer() {
    const data = await fetchData();

    return (
        <>
            <SummaryCards data={data} />
            <ActivityTable data={data} />
        </>
    );
}

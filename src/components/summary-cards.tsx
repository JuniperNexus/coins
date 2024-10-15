import { calculateSummary } from '@/lib/calculations';
import { type Member } from '@/types/member';

import { SummaryCard } from './summary-card';

export function SummaryCards({ data }: { data: Member[] }) {
    const { averageParticipationRate, totalActivities, totalMembers, totalParticipations } =
        calculateSummary(data);

    return (
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SummaryCard title="Total Members" value={totalMembers} />
            <SummaryCard title="Total Activities" value={totalActivities} />
            <SummaryCard title="Total Participations" value={totalParticipations} />
            <SummaryCard
                title="Average Participation Rate"
                value={`${averageParticipationRate}%`}
            />
        </div>
    );
}

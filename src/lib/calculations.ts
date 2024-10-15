import { activities } from '@/constants/activities';
import { type Member } from '@/types/member';

export function calculateSummary(data: Member[]) {
    const totalMembers = data.length;
    const totalActivities = activities.length;
    const totalParticipations = activities.reduce((acc, activity) => {
        return acc + data.filter((member) => member[activity] !== null).length;
    }, 0);
    const averageParticipationRate = (
        (totalParticipations / (totalMembers * totalActivities)) *
        100
    ).toFixed(2);

    return {
        averageParticipationRate,
        totalActivities,
        totalMembers,
        totalParticipations,
    };
}

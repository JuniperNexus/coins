import { type Member } from '@/types/member';

export function sortAndFilterData(
    data: Member[],
    sortColumn: string,
    sortDirection: 'asc' | 'desc',
    filter: string,
) {
    return data
        .filter(
            (member) =>
                member.Name.toLowerCase().includes(filter.toLowerCase()) ||
                member.Username.toLowerCase().includes(filter.toLowerCase()),
        )
        .sort((a, b) => {
            if (!sortColumn) return 0;
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];
            if (aValue === null) return 1;
            if (bValue === null) return -1;
            if (
                aValue !== undefined &&
                aValue !== null &&
                bValue !== undefined &&
                bValue !== null
            ) {
                if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
                if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            }
            return 0;
        });
}

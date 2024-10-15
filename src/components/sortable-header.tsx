import { SortAsc, SortDesc } from 'lucide-react';

import { Button } from './ui/button';
import { TableHead } from './ui/table';

export function SortableHeader({
    column,
    currentSort,
    direction,
    onSort,
}: {
    column: string;
    currentSort: string;
    direction: 'asc' | 'desc';
    onSort: (_column: string) => void;
}) {
    return (
        <TableHead>
            <Button className="font-bold" onClick={() => onSort(column)} variant="ghost">
                {column}
                {currentSort === column &&
                    (direction === 'asc' ? (
                        <SortAsc className="ml-2 size-4" />
                    ) : (
                        <SortDesc className="ml-2 size-4" />
                    ))}
            </Button>
        </TableHead>
    );
}

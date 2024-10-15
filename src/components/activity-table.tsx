'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { activities } from '@/constants/activities';
import { sortAndFilterData } from '@/lib/dataManipulation';
import { type Member } from '@/types/member';
import { ChevronLeft, ChevronRight, RefreshCw, Search } from 'lucide-react';
import { useState } from 'react';

import { SortableHeader } from './sortable-header';
import { Button } from './ui/button';

const PAGE_SIZE = 10;

export function ActivityTable({ data }: { data: Member[] }) {
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const handleSort = (column: string) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
        setCurrentPage(1); // Reset to first page on sort
    };

    const handleReset = () => {
        setSortColumn('');
        setSortDirection('asc');
        setFilter('');
        setCurrentPage(1); // Reset to first page on reset
    };

    const sortedAndFilteredData = sortAndFilterData(data, sortColumn, sortDirection, filter);

    // Calculate total pages
    const totalPages = Math.ceil(sortedAndFilteredData.length / PAGE_SIZE);

    // Get the current page of data
    const paginatedData = sortedAndFilteredData.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE,
    );

    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Member Coins Table</CardTitle>
                <CardDescription>View and sort guild member coins</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="mb-4 flex items-center justify-between space-x-4">
                    <div className="relative w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="size-4 text-muted-foreground" />
                        </div>
                        <Input
                            className="max-w-none pl-10 sm:max-w-sm"
                            onChange={(e) => setFilter(e.target.value)}
                            placeholder="Filter by name or username"
                            value={filter}
                        />
                    </div>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={handleReset} size="icon" variant="ghost">
                                    <RefreshCw className="size-4" />
                                    <span className="sr-only"></span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="left">
                                <p>Reset the filter and sort</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <SortableHeader
                                    column="Name"
                                    currentSort={sortColumn}
                                    direction={sortDirection}
                                    onSort={handleSort}
                                />
                                <SortableHeader
                                    column="Username"
                                    currentSort={sortColumn}
                                    direction={sortDirection}
                                    onSort={handleSort}
                                />
                                {activities.map((activity) => (
                                    <SortableHeader
                                        column={activity}
                                        currentSort={sortColumn}
                                        direction={sortDirection}
                                        key={activity}
                                        onSort={handleSort}
                                    />
                                ))}
                                <SortableHeader
                                    column="Total"
                                    currentSort={sortColumn}
                                    direction={sortDirection}
                                    onSort={handleSort}
                                />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedData.map((member) => (
                                <TableRow key={member['Discord ID']}>
                                    <TableCell className="font-medium">{member.Name}</TableCell>
                                    <TableCell>{member.Username}</TableCell>
                                    {activities.map((activity) => (
                                        <TableCell className="text-right" key={activity}>
                                            {member[activity] !== null ? (
                                                <Badge variant="secondary">
                                                    {member[activity]}
                                                </Badge>
                                            ) : (
                                                '-'
                                            )}
                                        </TableCell>
                                    ))}
                                    <TableCell className="text-right">
                                        {member.Total !== null ? (
                                            <Badge variant="secondary">{member.Total}</Badge>
                                        ) : (
                                            '-'
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                {/* Pagination Controls */}
                <div className="mt-4 flex items-center justify-between space-x-4">
                    <Button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        size="icon"
                    >
                        <ChevronLeft className="size-4" />
                        <span className="sr-only">Previous</span>
                    </Button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        size="icon"
                    >
                        <span className="sr-only">Next</span>
                        <ChevronRight className="size-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

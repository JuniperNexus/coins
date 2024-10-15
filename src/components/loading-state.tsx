'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { activities } from '@/constants/activities';

import { SortableHeader } from './sortable-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Table, TableBody, TableCell, TableHeader, TableRow } from './ui/table';

export function LoadingState() {
    return (
        <>
            {/* Metric Cards */}
            <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <Skeleton className="h-5 w-1/4" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-8 w-full" />
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Member Coins Table */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Member Coins Table</CardTitle>
                    <CardDescription>View and sort guild member coins</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mb-4 flex items-center justify-between space-x-4">
                        <Skeleton className="h-10 w-full max-w-sm" />
                        <Skeleton className="h-8 w-20" />
                    </div>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <SortableHeader
                                        column="Name"
                                        currentSort=""
                                        direction="asc"
                                        onSort={() => {}}
                                    />
                                    <SortableHeader
                                        column="Username"
                                        currentSort=""
                                        direction="asc"
                                        onSort={() => {}}
                                    />
                                    {/* Assuming activities is an array you can map over */}
                                    {activities.map((activity) => (
                                        <SortableHeader
                                            column={activity}
                                            currentSort=""
                                            direction="asc"
                                            key={activity}
                                            onSort={() => {}}
                                        />
                                    ))}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {/* Placeholder for loading skeleton rows */}
                                {[...Array(10)].map((_, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Skeleton className="h-6 w-24" />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className="h-6 w-32" />
                                        </TableCell>
                                        {activities.map((activity) => (
                                            <TableCell className="text-right" key={activity}>
                                                <Skeleton className="h-6 w-16" />
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </>
    );
}

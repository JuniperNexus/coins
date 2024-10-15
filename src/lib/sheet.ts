import { env } from '@/env';
import { type Member } from '@/types/member';
import { SpreadORM } from 'spreadorm';

const orm = new SpreadORM<Member>(env.NEXT_PUBLIC_SHEETS_SPREAD);

export async function fetchData(): Promise<Member[]> {
    try {
        return await orm.findMany();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

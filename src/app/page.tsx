import { CoinsContainer } from '@/components/coins-container';

export default function Page() {
    return (
        <div className="container py-20 text-foreground">
            <h1 className="mb-8 text-4xl font-bold">Coins Dashboard</h1>
            <CoinsContainer />
            <div className="mt-8 text-center text-sm text-foreground/50">
                &copy; {new Date().getFullYear()} All rights reserved, Juniper Nexus.
            </div>
        </div>
    );
}

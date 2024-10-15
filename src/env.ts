import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    client: {
        NEXT_PUBLIC_SHEETS_SPREAD: z.string(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_SHEETS_SPREAD: process.env.NEXT_PUBLIC_SHEETS_SPREAD,
        NODE_ENV: process.env.NODE_ENV,
    },
    server: {
        NODE_ENV: z.enum(['development', 'test', 'production']),
    },
});

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        SHEET_ID: process.env.SHEET_ID,
    },
    server: {
        NODE_ENV: z.enum(['development', 'test', 'production']),
        SHEET_ID: z.string(),
    },
});

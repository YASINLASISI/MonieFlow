import { config } from 'dotenv';
config();

import '@/ai/flows/suggest-gigs-based-on-skills.ts';
import '@/ai/flows/generate-proposal-from-gig-details.ts';
import '@/ai/flows/summarize-financial-data.ts';
// Vercel Web Analytics
// This module initializes Vercel Analytics for the site
import { inject } from './js/analytics.mjs';

// Inject analytics with production mode
inject({ mode: 'production' });

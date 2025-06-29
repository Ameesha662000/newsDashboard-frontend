/**
 * @file This file contains shared constants used throughout the application.
 * Separating constants helps in maintaining and updating them easily.
 */

// For IndexedDB
export const DB_NAME = 'NewsDashboardDB';
export const DB_VERSION = 1;
export const STORE_NAME = 'articles';

// For News API
export const NEWS_API_URL = `https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&pageSize=50`;

// For Mock Authentication
export const MOCK_USERS = {
  
   'test@test.com': { password: 'test', role: 'user', name: 'Ameesha' },
  'admin@admin.com': { password: 'admin', role: 'admin', name: 'Admin' },
};
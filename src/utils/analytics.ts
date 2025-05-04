import { inject } from '@vercel/analytics';

export const initializeAnalytics = () => {
  inject();
};
export interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export interface PrayerTimesResponse {
  data: {
    timings: PrayerTimes;
    date: {
      readable: string;
      timestamp: string;
    };
  };
  code: number;
  status: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  author: string;
  category: string;
  icon: string;
  slug: string;
  tags?: string[];
}

export interface GeolocationPosition {
  latitude: number;
  longitude: number;
  city?: string;
  country?: string;
}

export interface LocationResponse {
  city?: string;
  locality?: string;
  countryName?: string;
  principalSubdivision?: string;
}

export interface NavigationItem {
  href: string;
  label: string;
  icon?: string;
}

export interface CategoryTag {
  href: string;
  label: string;
  icon: string;
}

export interface InfoCard {
  title: string;
  description: string;
  icon: string;
}

export interface LinkCard {
  href: string;
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface ErrorState {
  message: string;
  code?: string | number;
}

export interface AppError extends Error {
  code?: string | number;
  details?: unknown;
}
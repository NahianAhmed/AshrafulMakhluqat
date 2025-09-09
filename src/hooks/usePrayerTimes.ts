import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { type PrayerTimes, type PrayerTimesResponse, type GeolocationPosition, type LocationResponse, type LoadingState } from '../types';

const DEFAULT_LOCATION: GeolocationPosition = {
  latitude: 23.8103,
  longitude: 90.4125,
  city: 'Dhaka',
  country: 'Bangladesh'
};

export function usePrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [loading, setLoading] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);

  const formatTime = (time24: string): string => {
    const [hoursStr, minutes] = time24.split(':');
    if (!hoursStr || !minutes) return time24;
    const hours = parseInt(hoursStr);
    const hour12 = hours % 12 || 12;
    const ampm = hours < 12 ? 'AM' : 'PM';
    return `${hour12}:${minutes} ${ampm}`;
  };

  const fetchPrayerTimes = async (latitude: number, longitude: number, city?: string) => {
    try {
      setLoading('loading');
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();

      const response = await axios.get<PrayerTimesResponse>(
        `https://api.aladhan.com/v1/timings/${day}-${month}-${year}`,
        {
          params: {
            latitude,
            longitude,
            method: 2, // Islamic Society of North America (ISNA)
            tune: '0,0,0,0,0,0,0,0,0'
          }
        }
      );

      if (response.data?.data?.timings) {
        setPrayerTimes(response.data.data.timings);
        setLocation({ 
          latitude, 
          longitude, 
          ...(city && { city })
        });
        setLoading('success');
        setError(null);
      } else {
        throw new Error('Invalid API response');
      }
    } catch (err) {
      console.error('Error fetching prayer times:', err);
      setError('Unable to fetch prayer times. Please check your internet connection.');
      setLoading('error');
    }
  };

  const getLocationAndFetchTimes = useCallback(async () => {
    if ('geolocation' in navigator) {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (pos) => resolve({
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            }),
            reject,
            {
              timeout: 10000,
              enableHighAccuracy: true
            }
          );
        });

        // Try to get city name using reverse geocoding
        try {
          const locationResponse = await axios.get<LocationResponse>(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.latitude}&longitude=${position.longitude}&localityLanguage=en`
          );
          const city = locationResponse.data?.city || locationResponse.data?.locality || '';
          await fetchPrayerTimes(position.latitude, position.longitude, city);
        } catch {
          // Fallback without city name
          await fetchPrayerTimes(position.latitude, position.longitude);
        }
      } catch {
        console.warn('Geolocation failed, using default location');
        await fetchPrayerTimes(
          DEFAULT_LOCATION.latitude,
          DEFAULT_LOCATION.longitude,
          `${DEFAULT_LOCATION.city}, ${DEFAULT_LOCATION.country}`
        );
      }
    } else {
      console.warn('Geolocation not supported, using default location');
      await fetchPrayerTimes(
        DEFAULT_LOCATION.latitude,
        DEFAULT_LOCATION.longitude,
        `${DEFAULT_LOCATION.city}, ${DEFAULT_LOCATION.country}`
      );
    }
  }, []);

  useEffect(() => {
    getLocationAndFetchTimes();
  }, [getLocationAndFetchTimes]);

  return {
    prayerTimes,
    location,
    loading,
    error,
    formatTime,
    refetch: getLocationAndFetchTimes
  };
}
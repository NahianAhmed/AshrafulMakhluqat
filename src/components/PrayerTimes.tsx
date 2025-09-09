import { usePrayerTimes } from '../hooks/usePrayerTimes';
import { LoadingSpinner } from './common/LoadingSpinner';

const prayerNames = [
  { key: 'Fajr', label: 'Fajr' },
  { key: 'Dhuhr', label: 'Dhuhr' },
  { key: 'Asr', label: 'Asr' },
  { key: 'Maghrib', label: 'Maghrib' },
  { key: 'Isha', label: 'Isha' }
] as const;

export function PrayerTimes() {
  const { prayerTimes, location, loading, error, formatTime } = usePrayerTimes();

  return (
    <section id="prayer" className="bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-xl p-6 my-8 text-center">
      <h3 className="text-xl font-semibold text-yellow-800 mb-4">
        <i className="fas fa-clock mr-2"></i>
        Today's Prayer Times
      </h3>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <i className="fas fa-exclamation-triangle mr-2"></i>
          {error}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {prayerNames.map(({ key, label }) => (
          <div key={key} className="bg-white rounded-lg shadow-md p-4">
            <div className="font-semibold text-yellow-800 text-sm mb-1">
              {label}
            </div>
            <div className="text-yellow-900 text-sm font-medium">
              {loading === 'loading' ? (
                <LoadingSpinner size="sm" />
              ) : (
                prayerTimes?.[key] ? formatTime(prayerTimes[key]) : '--:--'
              )}
            </div>
          </div>
        ))}
      </div>

      {location && (
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mt-4 text-yellow-800 text-sm">
          <i className="fas fa-map-marker-alt mr-2"></i>
          {location.city 
            ? `Prayer times for ${location.city}`
            : `Prayer times for your location (${location.latitude.toFixed(2)}, ${location.longitude.toFixed(2)})`
          }
        </div>
      )}
    </section>
  );
}
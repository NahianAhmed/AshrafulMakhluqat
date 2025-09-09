import { useState } from 'react';
import { PrayerTimes } from '../components/PrayerTimes';

interface PrayerGuide {
  name: string;
  arabicName: string;
  rakats: number;
  time: string;
  description: string;
  benefits: string[];
}

const prayerGuides: PrayerGuide[] = [
  {
    name: 'Fajr',
    arabicName: 'الفجر',
    rakats: 2,
    time: 'Dawn',
    description: 'The dawn prayer, offering spiritual awakening and blessing for the day ahead.',
    benefits: ['Barakah in daily sustenance', 'Protection throughout the day', 'Mental clarity and peace']
  },
  {
    name: 'Dhuhr',
    arabicName: 'الظهر',
    rakats: 4,
    time: 'Midday',
    description: 'The midday prayer, a pause for reflection during the busiest part of the day.',
    benefits: ['Spiritual rejuvenation', 'Break from worldly concerns', 'Increased focus and productivity']
  },
  {
    name: 'Asr',
    arabicName: 'العصر',
    rakats: 4,
    time: 'Afternoon',
    description: 'The afternoon prayer, preparing the soul for the evening transition.',
    benefits: ['Spiritual preparation for evening', 'Protection from afternoon fatigue', 'Increased patience']
  },
  {
    name: 'Maghrib',
    arabicName: 'المغرب',
    rakats: 3,
    time: 'Sunset',
    description: 'The sunset prayer, expressing gratitude for the day\'s provisions.',
    benefits: ['Gratitude and reflection', 'Family bonding time', 'Peaceful transition to night']
  },
  {
    name: 'Isha',
    arabicName: 'العشاء',
    rakats: 4,
    time: 'Night',
    description: 'The night prayer, seeking Allah\'s protection and forgiveness before sleep.',
    benefits: ['Peaceful sleep', 'Forgiveness of sins', 'Spiritual completion of the day']
  }
];

const qiblaDirections = [
  { city: 'New York', country: 'USA', direction: '58° NE' },
  { city: 'London', country: 'UK', direction: '118° SE' },
  { city: 'Sydney', country: 'Australia', direction: '277° W' },
  { city: 'Tokyo', country: 'Japan', direction: '293° NW' },
  { city: 'Cairo', country: 'Egypt', direction: '135° SE' },
  { city: 'Istanbul', country: 'Turkey', direction: '147° SE' }
];

const duasData = [
  {
    timing: 'Before Prayer',
    arabic: 'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ',
    translation: 'O Allah, separate me from my sins...',
    transliteration: 'Allahumma ba\'id bayni wa bayna khatayaya...'
  },
  {
    timing: 'After Prayer',
    arabic: 'أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ',
    translation: 'I seek Allah\'s forgiveness (3 times)',
    transliteration: 'Astaghfirullah, Astaghfirullah, Astaghfirullah'
  },
  {
    timing: 'Before Sleep',
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    translation: 'In Your name O Allah, I die and I live',
    transliteration: 'Bismika Allahumma amutu wa ahya'
  }
];

export function Prayer() {
  const [selectedTab, setSelectedTab] = useState<'times' | 'guide' | 'qibla' | 'duas'>('times');
  const [selectedPrayer, setSelectedPrayer] = useState<PrayerGuide | null>(null);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Prayer Guide
          </h1>
          <div className="arabic-text text-2xl text-white/90 mb-4">
            دليل الصلاة
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your complete guide to Islamic prayer - times, directions, methods, and supplications.
            The cornerstone of Islamic worship and spiritual connection.
          </p>
        </header>

        {/* Navigation Tabs */}
        <section className="flex justify-center mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 flex flex-wrap">
            <button
              onClick={() => setSelectedTab('times')}
              className={`px-4 py-3 rounded-full font-medium transition-all text-sm ${
                selectedTab === 'times'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <i className="fas fa-clock mr-2"></i>
              Prayer Times
            </button>
            <button
              onClick={() => setSelectedTab('guide')}
              className={`px-4 py-3 rounded-full font-medium transition-all text-sm ${
                selectedTab === 'guide'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <i className="fas fa-book mr-2"></i>
              Prayer Guide
            </button>
            <button
              onClick={() => setSelectedTab('qibla')}
              className={`px-4 py-3 rounded-full font-medium transition-all text-sm ${
                selectedTab === 'qibla'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <i className="fas fa-compass mr-2"></i>
              Qibla Direction
            </button>
            <button
              onClick={() => setSelectedTab('duas')}
              className={`px-4 py-3 rounded-full font-medium transition-all text-sm ${
                selectedTab === 'duas'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <i className="fas fa-hands mr-2"></i>
              Prayer Du'as
            </button>
          </div>
        </section>

        {/* Prayer Times Tab */}
        {selectedTab === 'times' && (
          <section className="animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <PrayerTimes />
              
              <div className="card bg-white p-8 mt-8">
                <h3 className="text-2xl font-bold text-center mb-6">Prayer Time Calculation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-3">Calculation Method</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      We use the Islamic Society of North America (ISNA) method for accurate prayer time calculations 
                      based on your geographic location.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Fajr: 15° below horizon</li>
                      <li>• Isha: 15° below horizon</li>
                      <li>• Madhab: Shafi, Maliki, Hanbali</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-3">Time Adjustments</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Prayer times are automatically adjusted based on your location's latitude, longitude, 
                      and timezone for maximum accuracy.
                    </p>
                    <div className="bg-gray-50 rounded p-3">
                      <p className="text-xs text-gray-500">
                        Times shown are local to your detected location. 
                        For manual location selection, please enable location services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Prayer Guide Tab */}
        {selectedTab === 'guide' && (
          <section className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {prayerGuides.map((prayer) => (
                <div 
                  key={prayer.name} 
                  className="card bg-white p-6 cursor-pointer card-hover"
                  onClick={() => setSelectedPrayer(prayer)}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-pray text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-primary-600 mb-1">{prayer.name}</h3>
                    <div className="arabic-text text-lg text-gray-600 mb-2">{prayer.arabicName}</div>
                    <span className="text-sm text-gray-500">{prayer.rakats} Rakats • {prayer.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm text-center">{prayer.description}</p>
                </div>
              ))}
            </div>

            {/* Selected Prayer Details */}
            {selectedPrayer && (
              <div className="card bg-white p-8 max-w-4xl mx-auto">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">
                    {selectedPrayer.name} Prayer Guide
                  </h3>
                  <div className="arabic-text text-xl text-gray-600 mb-4">
                    {selectedPrayer.arabicName}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-3">Prayer Details</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li><strong>Rakats:</strong> {selectedPrayer.rakats}</li>
                      <li><strong>Timing:</strong> {selectedPrayer.time}</li>
                      <li><strong>Type:</strong> Fard (Obligatory)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-3">Spiritual Benefits</h4>
                    <ul className="space-y-2 text-gray-600">
                      {selectedPrayer.benefits.map((benefit, index) => (
                        <li key={index}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <button 
                    onClick={() => setSelectedPrayer(null)}
                    className="btn-secondary"
                  >
                    <i className="fas fa-arrow-left mr-2"></i>
                    Back to Prayer List
                  </button>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Qibla Direction Tab */}
        {selectedTab === 'qibla' && (
          <section className="animate-fade-in">
            <div className="card bg-white p-8 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <i className="fas fa-compass text-4xl text-primary-600 mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Qibla Direction</h3>
                <p className="text-gray-600 mb-6">
                  Face towards the Kaaba in Mecca during prayer. The Qibla direction varies based on your location.
                </p>
                
                <div className="bg-primary-50 rounded-lg p-6 mb-8">
                  <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-kaaba text-3xl text-white"></i>
                  </div>
                  <p className="text-primary-800 font-medium">
                    For your current location, face approximately towards the Southeast
                  </p>
                  <p className="text-primary-600 text-sm mt-2">
                    (Enable location services for precise direction)
                  </p>
                </div>
              </div>
              
              <h4 className="font-semibold text-center mb-6">Qibla Directions for Major Cities</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {qiblaDirections.map((location, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                    <h5 className="font-semibold text-gray-900">{location.city}</h5>
                    <p className="text-sm text-gray-600 mb-2">{location.country}</p>
                    <div className="text-primary-600 font-bold">{location.direction}</div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <button className="btn-primary">
                  <i className="fas fa-location-arrow mr-2"></i>
                  Get Precise Qibla Direction
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Prayer Du'as Tab */}
        {selectedTab === 'duas' && (
          <section className="animate-fade-in">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Prayer Supplications</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {duasData.map((dua, index) => (
                <div key={index} className="card bg-white p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-primary-600">{dua.timing}</h3>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                      Sunnah
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="arabic-text text-xl md:text-2xl text-primary-600 leading-relaxed text-right">
                      {dua.arabic}
                    </div>
                    <div className="text-gray-500 text-sm italic">
                      {dua.transliteration}
                    </div>
                    <div className="text-gray-700">
                      {dua.translation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Quote */}
        <section className="card max-w-4xl mx-auto my-16">
          <div className="gradient-bg text-white text-center p-8">
            <div className="arabic-text text-2xl mb-4">
              وَأَقِمِ الصَّلَاةَ إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ
            </div>
            <p className="text-lg mb-2">
              "And establish prayer. Indeed, prayer prohibits immorality and wrongdoing."
            </p>
            <p className="text-sm opacity-90">Quran 29:45</p>
          </div>
        </section>
      </div>
    </div>
  );
}
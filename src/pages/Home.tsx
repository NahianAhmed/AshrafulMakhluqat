import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CategoryTags } from '../components/CategoryTags';
import { PrayerTimes } from '../components/PrayerTimes';

export function Home() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Islamic date calculation (simplified)
    const today = new Date();
    const hijriYear = Math.floor((today.getFullYear() - 622) * 1.030684) + 1;
    const hijriMonths = [
      'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
      'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha\'ban',
      'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'
    ];
    const monthIndex = today.getMonth();
    setCurrentDate(`${hijriMonths[monthIndex]} ${hijriYear} AH`);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <header className="text-center py-16 text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
            Ashraful Makhluqat
          </h1>
          <p className="arabic-text text-xl md:text-2xl mb-2 opacity-90">
            أشرف المخلوقات - The Most Noble of Creation
          </p>
          <p className="text-lg md:text-xl font-light opacity-90 mb-4">
            Islamic Blog & Spiritual Guidance
          </p>
          {currentDate && (
            <div className="text-sm opacity-75">
              <i className="fas fa-calendar-alt mr-2"></i>
              Approximately {currentDate}
            </div>
          )}
        </header>

        {/* Category Navigation */}
        <CategoryTags />

        {/* Prayer Times */}
        <div className="animate-slide-up">
          <PrayerTimes />
        </div>

        {/* Quick Links */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Explore Islamic Knowledge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/articles"
              className="card card-hover bg-white p-8 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-book text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary-600 mb-2">Featured Articles</h3>
              <p className="text-gray-600">Read inspiring articles on Islamic faith, spirituality, and guidance</p>
            </Link>

            <Link
              to="/quran"
              className="card card-hover bg-white p-8 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-quran-arabic text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary-600 mb-2">Quran Studies</h3>
              <p className="text-gray-600">Explore verses, tafsir, and meanings from the Holy Quran</p>
            </Link>

            <Link
              to="/hadith"
              className="card card-hover bg-white p-8 text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <i className="fas fa-scroll text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-primary-600 mb-2">Hadith Collection</h3>
              <p className="text-gray-600">Authentic sayings and traditions of Prophet Muhammad (PBUH)</p>
            </Link>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="card max-w-4xl mx-auto my-12">
          <div className="gradient-bg text-white text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Islamic Community</h2>
            <p className="arabic-text text-lg mb-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
            <p className="mb-4">In the Name of Allah, the Most Gracious, the Most Merciful</p>
            <p className="text-lg leading-relaxed">
              Join us on a journey of spiritual growth and Islamic knowledge. 
              Discover authentic teachings from the Quran and Sunnah, 
              connect with fellow Muslims, and strengthen your faith.
            </p>
          </div>
          <div className="p-8 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <i className="fas fa-mosque text-primary-600 text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2">Authentic Sources</h4>
                <p className="text-sm text-gray-600">All content verified from Quran and authentic Hadith</p>
              </div>
              <div>
                <i className="fas fa-users text-primary-600 text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2">Community Driven</h4>
                <p className="text-sm text-gray-600">Built for Muslims, by Muslims with love and dedication</p>
              </div>
              <div>
                <i className="fas fa-heart text-primary-600 text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2">Spiritual Growth</h4>
                <p className="text-sm text-gray-600">Resources to help you grow closer to Allah</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
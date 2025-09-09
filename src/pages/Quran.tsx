import { useState } from 'react';

interface Surah {
  number: number;
  name: string;
  arabicName: string;
  englishName: string;
  verses: number;
  type: 'Meccan' | 'Medinan';
  meaning: string;
}

const featuredSurahs: Surah[] = [
  {
    number: 1,
    name: 'الفاتحة',
    arabicName: 'الفاتحة',
    englishName: 'Al-Fatiha',
    verses: 7,
    type: 'Meccan',
    meaning: 'The Opening'
  },
  {
    number: 2,
    name: 'البقرة',
    arabicName: 'البقرة',
    englishName: 'Al-Baqarah',
    verses: 286,
    type: 'Medinan',
    meaning: 'The Cow'
  },
  {
    number: 18,
    name: 'الكهف',
    arabicName: 'الكهف',
    englishName: 'Al-Kahf',
    verses: 110,
    type: 'Meccan',
    meaning: 'The Cave'
  },
  {
    number: 36,
    name: 'يس',
    arabicName: 'يس',
    englishName: 'Yaseen',
    verses: 83,
    type: 'Meccan',
    meaning: 'Ya-Seen'
  },
  {
    number: 67,
    name: 'الملك',
    arabicName: 'الملك',
    englishName: 'Al-Mulk',
    verses: 30,
    type: 'Meccan',
    meaning: 'The Kingdom'
  },
  {
    number: 112,
    name: 'الإخلاص',
    arabicName: 'الإخلاص',
    englishName: 'Al-Ikhlas',
    verses: 4,
    type: 'Meccan',
    meaning: 'The Sincerity'
  }
];

const dailyVerses = [
  {
    arabic: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا',
    translation: 'And whoever fears Allah - He will make for him a way out.',
    reference: 'Quran 65:2'
  },
  {
    arabic: 'وَاللَّهُ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ',
    translation: 'But Allah is the best guardian, and He is the most merciful of the merciful.',
    reference: 'Quran 12:64'
  },
  {
    arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
    translation: 'For indeed, with hardship [will be] ease.',
    reference: 'Quran 94:5'
  }
];

export function Quran() {
  const [selectedTab, setSelectedTab] = useState<'surahs' | 'verses' | 'tafsir'>('surahs');

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Holy Quran
          </h1>
          <div className="arabic-text text-2xl text-white/90 mb-4">
            القرآن الكريم
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            The final revelation from Allah, a guide for all humanity. 
            Explore the verses, meanings, and wisdom of the Holy Quran.
          </p>
        </header>

        {/* Navigation Tabs */}
        <section className="flex justify-center mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={() => setSelectedTab('surahs')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedTab === 'surahs'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <i className="fas fa-list mr-2"></i>
              Surahs
            </button>
            <button
              onClick={() => setSelectedTab('verses')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedTab === 'verses'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <i className="fas fa-quote-right mr-2"></i>
              Daily Verses
            </button>
            <button
              onClick={() => setSelectedTab('tafsir')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedTab === 'tafsir'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <i className="fas fa-book-open mr-2"></i>
              Tafsir
            </button>
          </div>
        </section>

        {/* Surahs Tab */}
        {selectedTab === 'surahs' && (
          <section className="animate-fade-in">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Featured Surahs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredSurahs.map((surah) => (
                <div key={surah.number} className="card card-hover bg-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      {surah.number}
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      surah.type === 'Meccan' 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {surah.type}
                    </span>
                  </div>
                  <h3 className="arabic-text text-xl font-bold text-primary-600 mb-2 text-right">
                    {surah.arabicName}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {surah.englishName}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">{surah.meaning}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{surah.verses} verses</span>
                    <button className="text-primary-600 hover:text-primary-700 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Daily Verses Tab */}
        {selectedTab === 'verses' && (
          <section className="animate-fade-in">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Verses of Reflection</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {dailyVerses.map((verse, index) => (
                <div key={index} className="card bg-white p-8">
                  <div className="text-center">
                    <div className="arabic-text text-2xl md:text-3xl text-primary-600 mb-6 leading-relaxed">
                      {verse.arabic}
                    </div>
                    <div className="text-lg text-gray-700 mb-4 italic">
                      "{verse.translation}"
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {verse.reference}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tafsir Tab */}
        {selectedTab === 'tafsir' && (
          <section className="animate-fade-in">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Tafsir & Commentary</h2>
            <div className="card max-w-4xl mx-auto bg-white p-8">
              <div className="text-center mb-8">
                <i className="fas fa-book-open text-4xl text-primary-600 mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Understanding the Quran
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Tafsir helps us understand the deeper meanings, context, and wisdom behind 
                  the verses of the Holy Quran. Explore authentic commentaries from renowned scholars.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-primary-600 mb-3">
                    <i className="fas fa-graduation-cap mr-2"></i>
                    Classical Tafsir
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Tafsir Ibn Kathir</li>
                    <li>• Tafsir At-Tabari</li>
                    <li>• Tafsir Al-Qurtubi</li>
                    <li>• Tafsir Al-Jalalayn</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-primary-600 mb-3">
                    <i className="fas fa-clock mr-2"></i>
                    Contemporary Tafsir
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Fi Zilal al-Quran</li>
                    <li>• Al-Mizan</li>
                    <li>• Tafhim al-Quran</li>
                    <li>• Modern Interpretations</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="btn-primary">
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Access Full Tafsir Library
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Bottom Quote */}
        <section className="card max-w-4xl mx-auto my-16">
          <div className="gradient-bg text-white text-center p-8">
            <div className="arabic-text text-2xl mb-4">
              إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ
            </div>
            <p className="text-lg">
              "Indeed, it is We who sent down the Quran and indeed, We will be its guardian."
            </p>
            <p className="text-sm opacity-90 mt-2">Quran 15:9</p>
          </div>
        </section>
      </div>
    </div>
  );
}
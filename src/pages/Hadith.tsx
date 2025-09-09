import { useState } from 'react';

interface HadithCollection {
  name: string;
  arabicName: string;
  collector: string;
  totalHadiths: number;
  description: string;
  authenticity: 'Sahih' | 'Hasan' | 'Mixed';
}

interface FeaturedHadith {
  arabic: string;
  translation: string;
  narrator: string;
  source: string;
  category: string;
}

const hadithCollections: HadithCollection[] = [
  {
    name: 'Sahih al-Bukhari',
    arabicName: 'صحيح البخاري',
    collector: 'Imam al-Bukhari',
    totalHadiths: 7563,
    description: 'The most authentic collection of Hadith, compiled by Imam Muhammad al-Bukhari.',
    authenticity: 'Sahih'
  },
  {
    name: 'Sahih Muslim',
    arabicName: 'صحيح مسلم',
    collector: 'Imam Muslim',
    totalHadiths: 7190,
    description: 'Second most authentic collection, known for its rigorous authentication methods.',
    authenticity: 'Sahih'
  },
  {
    name: 'Sunan Abu Dawood',
    arabicName: 'سنن أبي داود',
    collector: 'Imam Abu Dawood',
    totalHadiths: 5274,
    description: 'Focus on legal matters and jurisprudence in Islamic law.',
    authenticity: 'Mixed'
  },
  {
    name: 'Jami at-Tirmidhi',
    arabicName: 'جامع الترمذي',
    collector: 'Imam at-Tirmidhi',
    totalHadiths: 3956,
    description: 'Known for grading Hadiths and providing commentary on their authenticity.',
    authenticity: 'Mixed'
  },
  {
    name: 'Sunan an-Nasa\'i',
    arabicName: 'سنن النسائي',
    collector: 'Imam an-Nasa\'i',
    totalHadiths: 5761,
    description: 'Focused on the Sunnah practices with careful authentication.',
    authenticity: 'Sahih'
  },
  {
    name: 'Sunan Ibn Majah',
    arabicName: 'سنن ابن ماجه',
    collector: 'Ibn Majah',
    totalHadiths: 4341,
    description: 'Covers various aspects of Islamic life with diverse narrations.',
    authenticity: 'Mixed'
  }
];

const featuredHadiths: FeaturedHadith[] = [
  {
    arabic: 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
    translation: 'Actions are but by intention and every man shall have only that which he intended.',
    narrator: 'Umar ibn al-Khattab (RA)',
    source: 'Sahih al-Bukhari & Sahih Muslim',
    category: 'Intentions'
  },
  {
    arabic: 'الدِّينُ النَّصِيحَةُ',
    translation: 'Religion is sincere advice.',
    narrator: 'Tamim ad-Dari (RA)',
    source: 'Sahih Muslim',
    category: 'Character'
  },
  {
    arabic: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
    translation: 'Whoever believes in Allah and the Last Day, let him speak good or remain silent.',
    narrator: 'Abu Huraira (RA)',
    source: 'Sahih al-Bukhari & Sahih Muslim',
    category: 'Speech & Manners'
  },
  {
    arabic: 'كُلُّ مُسْلِمٍ عَلَى الْمُسْلِمِ حَرَامٌ دَمُهُ وَمَالُهُ وَعِرْضُهُ',
    translation: 'Every Muslim is sacred to another Muslim: his blood, his property, and his honor.',
    narrator: 'Abu Bakr (RA)',
    source: 'Sahih Muslim',
    category: 'Rights & Justice'
  }
];

const hadithCategories = [
  'All', 'Faith & Belief', 'Prayer & Worship', 'Character & Manners', 
  'Family & Social', 'Business & Ethics', 'Knowledge & Learning'
];

export function Hadith() {
  const [selectedTab, setSelectedTab] = useState<'collections' | 'featured' | 'search'>('featured');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredHadiths = selectedCategory === 'All' 
    ? featuredHadiths 
    : featuredHadiths.filter(hadith => {
        const categoryKeyword = selectedCategory.split(' ')[0];
        return categoryKeyword && hadith.category.includes(categoryKeyword);
      });

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hadith Collection
          </h1>
          <div className="arabic-text text-2xl text-white/90 mb-4">
            الحديث الشريف
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Authentic sayings, actions, and approvals of Prophet Muhammad (ﷺ). 
            The second source of Islamic guidance after the Quran.
          </p>
        </header>

        {/* Navigation Tabs */}
        <section className="flex justify-center mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
            <button
              onClick={() => setSelectedTab('featured')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedTab === 'featured'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <i className="fas fa-star mr-2"></i>
              Featured
            </button>
            <button
              onClick={() => setSelectedTab('collections')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedTab === 'collections'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <i className="fas fa-books mr-2"></i>
              Collections
            </button>
            <button
              onClick={() => setSelectedTab('search')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedTab === 'search'
                  ? 'bg-white text-primary-600 shadow-lg'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <i className="fas fa-search mr-2"></i>
              Search
            </button>
          </div>
        </section>

        {/* Featured Hadiths Tab */}
        {selectedTab === 'featured' && (
          <section className="animate-fade-in">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {hadithCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-white text-primary-600 shadow-md'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {filteredHadiths.map((hadith, index) => (
                <div key={index} className="card bg-white p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      <i className="fas fa-quote-right"></i>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-xs rounded-full font-medium mb-3">
                        {hadith.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="arabic-text text-xl md:text-2xl text-primary-600 mb-4 leading-relaxed text-right">
                      {hadith.arabic}
                    </div>
                    <div className="text-lg text-gray-700 mb-4 italic leading-relaxed">
                      "{hadith.translation}"
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 flex justify-between items-center text-sm text-gray-500">
                    <div>
                      <span className="font-medium">Narrator:</span> {hadith.narrator}
                    </div>
                    <div>
                      <span className="font-medium">Source:</span> {hadith.source}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Collections Tab */}
        {selectedTab === 'collections' && (
          <section className="animate-fade-in">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Major Hadith Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hadithCollections.map((collection, index) => (
                <div key={index} className="card bg-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center">
                      <i className="fas fa-book"></i>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      collection.authenticity === 'Sahih'
                        ? 'bg-green-100 text-green-800'
                        : collection.authenticity === 'Hasan'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {collection.authenticity}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-600 mb-1">
                    {collection.name}
                  </h3>
                  <div className="arabic-text text-lg text-gray-600 mb-2">
                    {collection.arabicName}
                  </div>
                  <p className="text-sm text-gray-500 mb-3">
                    by {collection.collector}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {collection.totalHadiths.toLocaleString()} Hadiths
                    </span>
                    <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                      Explore →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Search Tab */}
        {selectedTab === 'search' && (
          <section className="animate-fade-in">
            <div className="card max-w-4xl mx-auto bg-white p-8">
              <div className="text-center mb-8">
                <i className="fas fa-search text-4xl text-primary-600 mb-4"></i>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Hadith Search
                </h3>
                <p className="text-gray-600 mb-6">
                  Search through thousands of authentic Hadiths by keyword, narrator, or topic.
                </p>
                
                <div className="max-w-2xl mx-auto">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Hadiths..."
                      className="w-full px-6 py-4 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                    <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-gray-50 rounded-lg p-6">
                  <i className="fas fa-user text-primary-600 text-2xl mb-3"></i>
                  <h4 className="font-semibold mb-2">Search by Narrator</h4>
                  <p className="text-sm text-gray-600">Find Hadiths narrated by specific companions</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <i className="fas fa-tags text-primary-600 text-2xl mb-3"></i>
                  <h4 className="font-semibold mb-2">Search by Topic</h4>
                  <p className="text-sm text-gray-600">Browse Hadiths by Islamic topics and themes</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <i className="fas fa-book-open text-primary-600 text-2xl mb-3"></i>
                  <h4 className="font-semibold mb-2">Search by Collection</h4>
                  <p className="text-sm text-gray-600">Filter by specific Hadith collections</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="btn-primary">
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Access Full Hadith Database
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Bottom Quote */}
        <section className="card max-w-4xl mx-auto my-16">
          <div className="gradient-bg text-white text-center p-8">
            <div className="arabic-text text-2xl mb-4">
              مَا تَرَكْتُ شَيْئًا مِمَّا أَمَرَكُمُ اللَّهُ بِهِ إِلَّا وَقَدْ أَمَرْتُكُمْ بِهِ
            </div>
            <p className="text-lg mb-2">
              "I have left nothing that Allah commanded you with except that I have commanded you with it."
            </p>
            <p className="text-sm opacity-90">Prophet Muhammad ﷺ</p>
          </div>
        </section>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { BlogGrid } from '../components/BlogGrid';
import { blogPosts } from '../utils/blogData';

const categories = [
  'All',
  'Quran',
  'Islamic Basics',
  'Du\'as',
  'Spirituality',
  'Islamic Calendar',
  'Islamic History'
];

export function Articles() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Islamic Articles
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our collection of authentic Islamic articles covering Quran, Hadith, 
            spirituality, and practical guidance for Muslim life.
          </p>
        </header>

        {/* Category Filter */}
        <section className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-primary-600 shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Count */}
        <section className="text-center mb-8">
          <p className="text-white/80">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </section>

        {/* Blog Grid */}
        <section className="animate-fade-in">
          <BlogGrid posts={filteredPosts} />
        </section>

        {/* No Articles Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="card max-w-md mx-auto p-8">
              <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 mb-4">
                No articles match the selected category. Try selecting a different category.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="btn-primary"
              >
                View All Articles
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <section className="card max-w-4xl mx-auto my-16">
          <div className="gradient-bg text-white text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-6">
              New articles are added regularly with fresh insights and authentic Islamic knowledge.
            </p>
            <div className="arabic-text text-xl mb-4">
              وَقُل رَّبِّ زِدْنِي عِلْماً
            </div>
            <p className="text-sm opacity-90">
              "And say: My Lord, increase me in knowledge" - Quran 20:114
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
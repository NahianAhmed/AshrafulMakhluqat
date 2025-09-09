import { type InfoCard, type LinkCard } from '../types';

const infoCards: InfoCard[] = [
  {
    title: 'Mission',
    description: 'To share authentic Islamic knowledge and promote spiritual growth through Quranic teachings and prophetic guidance',
    icon: 'fas fa-star-and-crescent'
  },
  {
    title: 'Content Focus',
    description: 'Quran, Hadith, Islamic spirituality, worship guidelines, and practical Islamic living in the modern world',
    icon: 'fas fa-book-quran'
  },
  {
    title: 'Community',
    description: 'Building a community of learners seeking to strengthen their faith and understanding of Islam',
    icon: 'fas fa-users'
  },
  {
    title: 'Languages',
    description: 'Content available in English with Arabic references and transliterations',
    icon: 'fas fa-language'
  }
];

const linkCards: LinkCard[] = [
  {
    href: '#quran',
    title: 'Quran Studies',
    description: 'Tafsir and verse explanations',
    icon: 'fas fa-book-quran'
  },
  {
    href: '#hadith',
    title: 'Hadith Collection',
    description: 'Authentic prophetic traditions',
    icon: 'fas fa-scroll'
  },
  {
    href: '#prayer',
    title: 'Prayer Guide',
    description: 'Complete salah instructions',
    icon: 'fas fa-pray'
  },
  {
    href: '#duas',
    title: 'Du\'a Collection',
    description: 'Daily supplications',
    icon: 'fas fa-hands'
  }
];

const commitmentTags = [
  'Authentic Sources',
  'Scholarly Verified',
  'Regular Updates',
  'Community Driven'
];

export function AboutSection() {
  const handleLinkClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main id="about" className="card max-w-6xl mx-auto my-12">
      <div className="gradient-bg text-white text-center p-8">
        <h2 className="text-3xl font-bold mb-4">About This Blog</h2>
        <p className="arabic-text text-lg mb-2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
        <p>In the Name of Allah, the Most Gracious, the Most Merciful</p>
      </div>

      <div className="p-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {infoCards.map((card) => (
            <div key={card.title} className="bg-gray-50 rounded-xl p-6 border-l-4 border-primary-600">
              <h3 className="text-lg font-semibold text-primary-600 mb-3">
                <i className={`${card.icon} mr-2`}></i>
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
          <div className="flex flex-wrap gap-3">
            {commitmentTags.map((tag) => (
              <span
                key={tag}
                className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Islamic Resources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {linkCards.map((card) => (
              <button
                key={card.href}
                onClick={() => handleLinkClick(card.href)}
                className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-primary-500 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <i className={`${card.icon} text-2xl text-primary-600 mb-3 block`}></i>
                <h4 className="font-semibold text-gray-900 mb-2">{card.title}</h4>
                <p className="text-sm text-gray-600">{card.description}</p>
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
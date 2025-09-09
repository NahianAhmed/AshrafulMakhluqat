import { Link } from 'react-router-dom';
import { type CategoryTag } from '../types';

const categories: CategoryTag[] = [
  { href: '/quran', label: 'Quran', icon: 'fas fa-book' },
  { href: '/hadith', label: 'Hadith', icon: 'fas fa-scroll' },
  { href: '/prayer', label: 'Prayer', icon: 'fas fa-pray' },
  { href: '/articles', label: 'Spirituality', icon: 'fas fa-heart' },
  { href: '/articles', label: 'History', icon: 'fas fa-mosque' },
  { href: '/prayer', label: 'Du\'as', icon: 'fas fa-hands' }
];

export function CategoryTags() {

  return (
    <section className="flex flex-wrap justify-center gap-4 my-8">
      {categories.map((category, index) => (
        <Link
          key={`${category.href}-${index}`}
          to={category.href}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 inline-block"
        >
          <i className={`${category.icon} mr-2`}></i>
          {category.label}
        </Link>
      ))}
    </section>
  );
}
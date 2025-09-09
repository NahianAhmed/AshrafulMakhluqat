import { AboutSection } from '../components/AboutSection';

const teamMembers = [
  {
    name: 'Development Team',
    role: 'Technical Development',
    description: 'Building modern, accessible Islamic applications with cutting-edge technology.',
    icon: 'fas fa-code'
  },
  {
    name: 'Islamic Scholars',
    role: 'Content Verification',
    description: 'Ensuring all content is authentic and sourced from verified Islamic texts.',
    icon: 'fas fa-graduation-cap'
  },
  {
    name: 'Community Contributors',
    role: 'Content & Feedback',
    description: 'Muslim community members who contribute content and provide valuable feedback.',
    icon: 'fas fa-users'
  }
];

const features = [
  {
    title: 'Real-time Prayer Times',
    description: 'Accurate prayer times based on your location using authentic calculation methods',
    icon: 'fas fa-clock'
  },
  {
    title: 'Authentic Sources',
    description: 'All content verified from Quran, authentic Hadith, and classical Islamic texts',
    icon: 'fas fa-shield-alt'
  },
  {
    title: 'Modern Technology',
    description: 'Built with React, TypeScript, and modern web technologies for best user experience',
    icon: 'fas fa-rocket'
  },
  {
    title: 'Responsive Design',
    description: 'Works perfectly on mobile, tablet, and desktop devices with accessibility features',
    icon: 'fas fa-mobile-alt'
  },
  {
    title: 'PWA Capable',
    description: 'Install as a native app on your device for offline access and better performance',
    icon: 'fas fa-download'
  },
  {
    title: 'Community Driven',
    description: 'Open source project built by Muslims, for Muslims with community contributions',
    icon: 'fas fa-heart'
  }
];

const stats = [
  { number: '1000+', label: 'Daily Users', icon: 'fas fa-users' },
  { number: '50+', label: 'Articles', icon: 'fas fa-newspaper' },
  { number: '200+', label: 'Hadiths', icon: 'fas fa-scroll' },
  { number: '114', label: 'Quran Surahs', icon: 'fas fa-book-quran' }
];

const milestones = [
  {
    year: '2024',
    title: 'Project Launch',
    description: 'Started as a simple Islamic blog to share authentic knowledge'
  },
  {
    year: '2025',
    title: 'Modern Redesign',
    description: 'Transformed into a modern React application with enhanced features'
  },
  {
    year: 'Future',
    title: 'Mobile App',
    description: 'Planning native mobile applications for iOS and Android'
  }
];

export function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <div className="arabic-text text-2xl text-white/90 mb-4">
            عنا
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Dedicated to spreading authentic Islamic knowledge through modern technology, 
            connecting Muslims worldwide with their faith and spiritual heritage.
          </p>
        </header>

        {/* Mission Statement */}
        <section className="card max-w-4xl mx-auto mb-16">
          <div className="gradient-bg text-white text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <div className="arabic-text text-xl mb-4">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</div>
            <p className="text-lg leading-relaxed mb-6">
              To create a comprehensive digital platform that brings authentic Islamic knowledge 
              to Muslims around the world, utilizing modern technology while maintaining the 
              purity and authenticity of Islamic teachings from the Quran and Sunnah.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <i className="fas fa-star-and-crescent text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2">Authentic</h4>
                <p className="text-sm opacity-90">Verified from Quran & Sunnah</p>
              </div>
              <div>
                <i className="fas fa-globe text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2">Accessible</h4>
                <p className="text-sm opacity-90">Available worldwide, free of charge</p>
              </div>
              <div>
                <i className="fas fa-heart text-3xl mb-3"></i>
                <h4 className="font-semibold mb-2">Community</h4>
                <p className="text-sm opacity-90">Built by Muslims, for Muslims</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="card bg-white text-center p-6">
              <i className={`${stat.icon} text-3xl text-primary-600 mb-3`}></i>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card bg-white p-6">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card bg-white text-center p-8">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${member.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="card bg-white p-6 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Existing About Section */}
        <AboutSection />

        {/* Technology Stack */}
        <section className="card max-w-4xl mx-auto my-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Built With Modern Technology</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <i className="fab fa-react text-3xl text-blue-500"></i>
                <p className="font-medium text-sm">React 18</p>
              </div>
              <div className="space-y-2">
                <i className="fas fa-code text-3xl text-blue-600"></i>
                <p className="font-medium text-sm">TypeScript</p>
              </div>
              <div className="space-y-2">
                <i className="fas fa-wind text-3xl text-teal-500"></i>
                <p className="font-medium text-sm">Tailwind CSS</p>
              </div>
              <div className="space-y-2">
                <i className="fas fa-bolt text-3xl text-yellow-500"></i>
                <p className="font-medium text-sm">Vite</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm mb-4">
                Open source project hosted on GitHub. Contributions welcome from the community.
              </p>
              <div className="flex justify-center gap-4">
                <button className="btn-primary">
                  <i className="fab fa-github mr-2"></i>
                  View on GitHub
                </button>
                <button className="btn-secondary">
                  <i className="fas fa-hands-helping mr-2"></i>
                  Contribute
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Support */}
        <section className="card max-w-4xl mx-auto">
          <div className="gradient-bg text-white text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg mb-6">
              Have suggestions, found an error, or want to contribute? We'd love to hear from you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/20 rounded-lg p-4">
                <i className="fas fa-bug text-2xl mb-2"></i>
                <h4 className="font-semibold mb-1">Report Issues</h4>
                <p className="text-sm opacity-90">Found a bug or technical issue?</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <i className="fas fa-lightbulb text-2xl mb-2"></i>
                <h4 className="font-semibold mb-1">Suggestions</h4>
                <p className="text-sm opacity-90">Ideas for new features or content?</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <i className="fas fa-hands-helping text-2xl mb-2"></i>
                <h4 className="font-semibold mb-1">Contribute</h4>
                <p className="text-sm opacity-90">Want to help improve the platform?</p>
              </div>
            </div>
            <div className="arabic-text text-lg mb-2">
              جَزَاكَ اللهُ خَيْراً
            </div>
            <p className="text-sm opacity-90">May Allah reward you with goodness</p>
          </div>
        </section>
      </div>
    </div>
  );
}
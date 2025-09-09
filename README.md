# Ashraful Makhluqat - Islamic Blog

A modern React TypeScript application for sharing Islamic knowledge, built with best practices and modern web technologies.

## 🌟 Features

- **Modern React + TypeScript**: Built with React 18 and TypeScript for type safety
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Prayer Times**: Dynamic prayer times based on geolocation using Aladhan API
- **PWA Ready**: Progressive Web App capabilities for offline usage
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized with Vite, lazy loading, and modern React patterns
- **Code Quality**: ESLint, Prettier, and strict TypeScript configuration

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **PWA**: Vite PWA Plugin
- **Code Quality**: ESLint, Prettier
- **Icons**: Font Awesome

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   └── layout/          # Layout components
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── types/               # TypeScript type definitions
├── utils/               # Utility functions and data
└── assets/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nahianahmed/AshrafulMakhluqat.git
cd AshrafulMakhluqat
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript compiler check

## 🔧 Development Guidelines

### Code Style

- Use TypeScript strict mode
- Follow React best practices and hooks patterns
- Use functional components with TypeScript interfaces
- Implement proper error boundaries
- Use custom hooks for complex logic

### Component Structure

```typescript
interface ComponentProps {
  // Define props with strict typing
}

export function ComponentName({ prop }: ComponentProps) {
  // Component logic
  return <div>Component JSX</div>;
}
```

### API Integration

- Use custom hooks for API calls
- Implement proper loading and error states
- Handle edge cases gracefully

## 🌙 Islamic Features

- **Prayer Times**: Automatic calculation based on location
- **Islamic Calendar**: Approximate Hijri date display
- **Arabic Typography**: Proper RTL text support with Amiri font
- **Islamic Content**: Quran verses, Hadith, and spiritual guidance
- **Authentic Sources**: All content verified from authentic Islamic sources

## 📱 PWA Features

- Offline functionality
- Install as native app
- Fast loading with service worker
- Responsive design for all devices

## 🎨 Design System

### Colors
- Primary: Teal shades (#0f766e, #134e4a)
- Secondary: Yellow/Gold for prayer times
- Neutral: Gray scale for text and backgrounds

### Typography
- Body: Inter (sans-serif)
- Arabic: Amiri (serif)
- Proper font loading and fallbacks

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

The project is configured for GitHub Pages deployment. The built files will be in the `dist` directory.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Create a Pull Request

### Development Standards

- Write TypeScript with strict typing
- Add proper JSDoc comments for complex functions
- Ensure accessibility standards (WCAG 2.1)
- Test on multiple devices and browsers
- Follow Islamic guidelines for content

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤲 Islamic Guidance

This project is created with the intention of spreading authentic Islamic knowledge. All content is sourced from the Quran and authentic Hadith. May Allah accept this effort and make it beneficial for the Muslim community.

*"And whoever saves a life, it is as if he has saved all of mankind"* - Quran 5:32

## 📞 Support

For support or questions:
- Create an issue on GitHub
- Contact the maintainer: nahianahmed

---

**May Allah bless this project and make it a source of continuous charity (Sadaqah Jariyah) for all contributors.**
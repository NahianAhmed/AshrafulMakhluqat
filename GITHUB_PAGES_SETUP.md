# GitHub Pages Setup Guide

## 🎯 Quick Setup

Follow these steps to deploy your Islamic blog to GitHub Pages:

### 1. Repository Settings
1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Set **Source** to "**GitHub Actions**"

### 2. Create and Push to Develop Branch
```bash
# Create develop branch
git checkout -b develop

# Add all files
git add .

# Commit changes
git commit -m "Setup GitHub Pages deployment"

# Push to develop branch
git push -u origin develop
```

### 3. Automatic Deployment
- GitHub Actions will automatically build and deploy
- Monitor progress in the **Actions** tab
- Site will be available at: `https://nahianahmed.github.io/AshrafulMakhluqat/`

## 📋 What's Already Configured

✅ **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- Triggers on push to `develop` branch
- Builds with Node.js 18
- Runs type checking and linting
- Deploys to GitHub Pages

✅ **Vite Configuration** 
- Correct base URL for GitHub Pages
- PWA configuration
- Production build optimization

✅ **React Router Setup**
- Basename configuration for subdirectory
- Client-side routing support

✅ **GitHub Pages Compatibility**
- 404.html for client-side routing
- SPA redirect scripts
- Proper asset paths

## 🚀 Deployment Process

### Automatic (Recommended)
```bash
# Any push to develop branch triggers deployment
git push origin develop
```

### Manual (Alternative)
```bash
# Install gh-pages if not already installed
npm install

# Deploy manually
npm run deploy
```

## 🛠 Available Scripts

```bash
npm run dev              # Development server
npm run build            # Production build
npm run build:github     # Build with quality checks
npm run deploy           # Manual deployment to gh-pages
npm run preview          # Preview production build
```

## 🔧 Configuration Details

### Environment Variables
- **Development**: Base URL = `/`
- **Production**: Base URL = `/AshrafulMakhluqat/`

### Router Configuration
```typescript
const basename = import.meta.env.PROD 
  ? '/AshrafulMakhluqat'
  : '';
```

### Build Output
- Files generated in `/dist` directory
- Includes PWA assets and service worker
- 404.html for client-side routing

## 📝 Workflow Status

Monitor your deployment:
1. Go to **Actions** tab in GitHub
2. Click on latest workflow run
3. Check build and deploy steps
4. Access your site once deployment succeeds

## 🎨 Features Included

✅ **Responsive Design** - Mobile, tablet, desktop
✅ **PWA Support** - Offline functionality
✅ **Prayer Times** - Location-based calculation
✅ **Islamic Content** - Quran, Hadith, articles
✅ **SEO Optimized** - Meta tags and structured data
✅ **Accessibility** - WCAG compliant
✅ **Performance** - Optimized builds and caching

## 🔗 URLs

- **Development**: `http://localhost:5173`
- **Production**: `https://nahianahmed.github.io/AshrafulMakhluqat/`

## 📞 Support

If you encounter issues:
1. Check the [DEPLOYMENT.md](DEPLOYMENT.md) guide
2. Review GitHub Actions logs
3. Verify repository settings
4. Test local build with `npm run build:github`

**May Allah bless this project and make it beneficial for the Muslim community! 🤲**
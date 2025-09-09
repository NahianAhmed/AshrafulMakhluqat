# Deployment Guide

This guide explains how to deploy the Ashraful Makhluqat React application to GitHub Pages using GitHub Actions.

## 🚀 Automatic Deployment

The project is configured for automatic deployment to GitHub Pages when you push to the `main` branch.

### Setup Steps

1. **Enable GitHub Pages**: 
   - Go to your repository Settings
   - Navigate to "Pages" in the left sidebar
   - Set Source to "GitHub Actions"

2. **Ensure you're on main branch**:
   ```bash
   git checkout main
   git pull origin main
   ```

3. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

### Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. **Build Process**:
   - Checkout the code
   - Setup Node.js 18
   - Install dependencies with `npm ci`
   - Run TypeScript type checking
   - Run ESLint for code quality
   - Build the application for production
   - Upload the build artifacts

2. **Deploy Process**:
   - Deploy to GitHub Pages
   - Make the site available at: `https://nahianahmed.github.io/AshrafulMakhluqat/`

## 🛠 Manual Deployment

For manual deployment, you can use the gh-pages package:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build and deploy**:
   ```bash
   npm run deploy
   ```

## ⚙️ Configuration

### Base URL Configuration

The application is configured to work with GitHub Pages subdirectory:

- **Development**: Base URL is `/`
- **Production**: Base URL is `/AshrafulMakhluqat/`

### Router Configuration

React Router is configured with the correct basename for GitHub Pages:

```typescript
const basename = import.meta.env.MODE === 'production' 
  ? '/AshrafulMakhluqat'
  : '';

<Router basename={basename}>
```

### Vite Configuration

Vite build configuration handles the correct base URL:

```typescript
const baseUrl = mode === 'production' 
  ? process.env.VITE_BASE_URL || '/AshrafulMakhluqat/'
  : '/';
```

## 🔧 Client-Side Routing

GitHub Pages doesn't natively support client-side routing. The project includes:

1. **404.html**: Redirects to index.html with proper URL handling
2. **SPA GitHub Pages script**: Handles URL redirects in index.html

## 📊 Build Output

The build process generates:

- **Static files**: HTML, CSS, JS in `/dist` directory
- **PWA assets**: Service worker and manifest
- **Assets**: Fonts, icons, and other static resources

## 🚨 Troubleshooting

### Common Issues

1. **404 on page refresh**:
   - Ensure 404.html is present in `/public`
   - Check SPA GitHub Pages script is included

2. **Assets not loading**:
   - Verify base URL is correctly set
   - Check Vite configuration

3. **Routing not working**:
   - Confirm Router basename is set correctly
   - Ensure all Links use relative paths

### Debugging

1. **Check workflow status**:
   - Go to "Actions" tab in GitHub repository
   - Review build and deploy logs

2. **Local testing**:
   ```bash
   # Test production build locally
   npm run build
   npm run preview
   ```

3. **Verify URLs**:
   - Development: `http://localhost:5173`
   - Production: `https://nahianahmed.github.io/AshrafulMakhluqat/`

## 📝 Environment Variables

For production deployment, these environment variables are set:

- `VITE_BASE_URL`: `/AshrafulMakhluqat/`
- `NODE_ENV`: `production`

## 🎯 Performance Optimization

The deployment includes:

- **Code splitting**: Automatic with Vite
- **Asset optimization**: CSS and JS minification
- **PWA features**: Service worker for caching
- **Gzip compression**: Handled by GitHub Pages

## 📱 PWA Deployment

The Progressive Web App features are automatically configured:

- **Manifest**: Generates with correct scope and start_url
- **Service Worker**: Handles offline functionality
- **Icons**: SVG icons for all platforms

## 🔐 Security

- **HTTPS**: Enforced by GitHub Pages
- **CSP**: Content Security Policy headers
- **SRI**: Subresource Integrity for external resources

## 📈 Monitoring

After deployment, monitor:

- **Performance**: Page load times and Core Web Vitals
- **Accessibility**: WCAG compliance
- **SEO**: Search engine optimization metrics
- **PWA**: Installation and offline usage
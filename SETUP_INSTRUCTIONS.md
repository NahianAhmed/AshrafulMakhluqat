# Complete Setup Instructions

## 🚀 **Issue Resolution: npm ci Error**

The error you encountered happens because the `package-lock.json` file needs to be updated and committed with the new dependencies. Here's how to fix it:

### **Fix the npm ci Error:**

```bash
# 1. Update dependencies and generate new lock file
npm install

# 2. Commit the updated package-lock.json
git add package-lock.json
git commit -m "Update package-lock.json with gh-pages dependency"

# 3. Now npm ci will work in GitHub Actions
```

## 📋 **Complete Setup Checklist**

### **1. Local Development Setup**
```bash
# Clone/navigate to your repository
cd AshrafulMakhluqat

# Install dependencies (this will create/update package-lock.json)
npm install

# Start development server
npm run dev
```

### **2. GitHub Repository Setup**
```bash
# Make sure package-lock.json is committed
git add package-lock.json package.json
git commit -m "Add deployment dependencies"

# Push to main branch
git push origin main
```

### **3. GitHub Pages Configuration**
1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Set **Source** to "**GitHub Actions**"
5. Save the settings

### **4. Deploy to GitHub Pages**
```bash
# Any push to main branch will trigger deployment
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 🔧 **Available Commands**

```bash
# Development
npm run dev              # Start development server
npm run preview          # Preview production build

# Building
npm run build            # Standard production build
npm run build:github     # Build with quality checks (recommended)

# Quality Assurance
npm run type-check       # TypeScript type checking
npm run lint             # ESLint code linting
npm run lint:fix         # Auto-fix ESLint issues
npm run format           # Prettier code formatting
npm run format:check     # Check code formatting

# Deployment
npm run deploy           # Manual deployment to gh-pages
```

## 📁 **Project Structure**

```
AshrafulMakhluqat/
├── .github/workflows/   # GitHub Actions
│   └── deploy.yml       # Deployment workflow
├── public/              # Static assets
│   └── 404.html         # Client-side routing support
├── src/                 # Source code
│   ├── components/      # React components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── package.json         # Dependencies and scripts
├── package-lock.json    # Locked dependency versions
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎯 **Deployment URLs**

- **Development**: `http://localhost:5173`
- **Production**: `https://nahianahmed.github.io/AshrafulMakhluqat/`

## 🐛 **Troubleshooting**

### **npm ci Error (Current Issue)**
```bash
# This error means package-lock.json is outdated
npm install              # Update lock file
git add package-lock.json
git commit -m "Update package-lock.json"
```

### **GitHub Actions Failing**
1. Check **Actions** tab in GitHub
2. Look for error messages in build logs
3. Ensure **GitHub Pages** is set to "GitHub Actions"
4. Verify `package-lock.json` is committed

### **Routes Not Working on GitHub Pages**
- The `404.html` file handles client-side routing
- Make sure it's in the `public/` directory
- Verify base URL is correctly set in `vite.config.ts`

### **Build Errors**
```bash
# Check for TypeScript errors
npm run type-check

# Check for linting issues
npm run lint

# Fix formatting
npm run format
```

## ✅ **Verification Steps**

After setup, verify everything works:

1. **Local Development**:
   ```bash
   npm run dev
   # Should open http://localhost:5173
   ```

2. **Production Build**:
   ```bash
   npm run build:github
   # Should complete without errors
   ```

3. **GitHub Actions**:
   - Push to `develop` branch
   - Check **Actions** tab for successful deployment
   - Visit your GitHub Pages URL

## 🎨 **Features Included**

✅ **Modern React + TypeScript**  
✅ **Responsive Design** (Mobile, Tablet, Desktop)  
✅ **Islamic Content** (Quran, Hadith, Prayer Times)  
✅ **PWA Support** (Offline functionality)  
✅ **SEO Optimized** (Meta tags, structured data)  
✅ **Accessibility** (WCAG compliant)  
✅ **Performance** (Vite build optimization)  
✅ **Quality Assurance** (TypeScript, ESLint, Prettier)  
✅ **Automatic Deployment** (GitHub Actions)  

## 🤲 **Islamic Features**

- **Prayer Times**: Real-time, location-based calculation
- **Quran**: Surahs, verses, and Tafsir
- **Hadith**: Authentic collections and search
- **Islamic Calendar**: Hijri date display
- **Arabic Typography**: Proper RTL support
- **Duas**: Daily supplications and prayers

## 📞 **Support**

If you encounter any issues:

1. **Check the logs**: GitHub Actions → Latest workflow run
2. **Verify setup**: Follow this checklist step by step
3. **Test locally**: `npm run build:github`
4. **Review guides**: `DEPLOYMENT.md` and `GITHUB_PAGES_SETUP.md`

**May Allah make this project beneficial for the Muslim community! 🕌**
# Troubleshooting Guide

## 🚨 Common Deployment Issues

### **Issue 1: Branch "develop" not allowed to deploy (SOLVED)**

**Error Message:**
```
Branch "develop" is not allowed to deploy to github-pages due to environment protection rules.
The deployment was rejected or didn't satisfy other protection rules.
```

**Solution:**
The workflow has been updated to use the `main` branch instead of `develop`. GitHub Pages typically allows deployment from `main` by default.

**Steps to Fix:**
```bash
# 1. Switch to main branch
git checkout main

# 2. Merge any changes from develop (if you had one)
git merge develop  # Only if you have a develop branch

# 3. Push to main to trigger deployment
git push origin main
```

### **Issue 2: npm ci Error**

**Error Message:**
```
npm ci can only install packages when your package.json and package-lock.json are in sync
```

**Solution:**
```bash
# Update package-lock.json
npm install

# Commit the updated lock file
git add package-lock.json
git commit -m "Update package-lock.json"
git push origin main
```

### **Issue 3: GitHub Pages Not Enabled**

**Error Message:**
```
GitHub Pages is not enabled for this repository
```

**Solution:**
1. Go to repository **Settings**
2. Scroll to **Pages** section
3. Set **Source** to "**GitHub Actions**"
4. Save the settings

### **Issue 4: 404 on Direct URL Access**

**Problem:** Routes work when navigating within the app, but fail on direct URL access.

**Solution:** 
- The `404.html` file is already configured
- Ensure it exists in the `public/` directory
- Verify the build includes it in the `dist/` folder

### **Issue 5: Environment Protection Rules**

**Error Message:**
```
Environment protection rules prevent deployment
```

**Solutions:**

**Option A: Use Main Branch (Recommended)**
```bash
git checkout main
git push origin main
```

**Option B: Configure Environment Protection (Advanced)**
1. Go to repository **Settings**
2. Navigate to **Environments**
3. Click on **github-pages** environment
4. Under **Deployment branches**, add your desired branch
5. Save the settings

**Option C: Remove Environment Protection**
1. Go to repository **Settings**
2. Navigate to **Environments** 
3. Delete the **github-pages** environment
4. GitHub will recreate it with default settings

### **Issue 6: Build Failures**

**TypeScript Errors:**
```bash
npm run type-check
# Fix any TypeScript errors shown
```

**Linting Errors:**
```bash
npm run lint
# Fix any ESLint errors, or use:
npm run lint:fix
```

**Build Errors:**
```bash
npm run build
# Check the output for specific errors
```

### **Issue 7: Site Not Updating After Deployment**

**Solutions:**
1. **Clear Browser Cache:** Ctrl+F5 or Cmd+Shift+R
2. **Check GitHub Actions:** Go to Actions tab, verify deployment succeeded
3. **Wait for Propagation:** GitHub Pages can take a few minutes to update
4. **Verify Build Output:** Check that `dist/` folder contains updated files

### **Issue 8: Base URL Problems**

**Problem:** Assets not loading or routes not working in production.

**Solution:** 
- Verify `vite.config.ts` has correct base URL
- Check that `App.tsx` has correct basename for Router
- Ensure all links are relative (no leading slash for internal routes)

### **Issue 9: PWA Not Working**

**Problem:** Progressive Web App features not functioning.

**Solution:**
- Verify `manifest.webmanifest` is being served
- Check that service worker is registered
- Ensure HTTPS is being used (GitHub Pages provides this automatically)

## 🔍 Debugging Steps

### **1. Check GitHub Actions Logs**
1. Go to repository **Actions** tab
2. Click on the latest workflow run
3. Expand failed steps to see detailed logs

### **2. Test Build Locally**
```bash
# Full build test
npm run build:github

# Test production build
npm run preview
```

### **3. Verify Configuration**
```bash
# Check if all required files exist
ls -la .github/workflows/
ls -la public/
ls -la dist/ # After building
```

### **4. Environment Verification**
- **Node.js Version:** 18+ (check with `node --version`)
- **npm Version:** 8+ (check with `npm --version`)  
- **Git Status:** `git status` should show clean working directory

## 📞 **Getting Help**

### **Priority Order:**
1. **Check this troubleshooting guide**
2. **Review GitHub Actions logs**
3. **Test build locally**
4. **Check GitHub Pages settings**
5. **Review environment protection rules**

### **Quick Commands to Diagnose:**
```bash
# Check versions
node --version && npm --version

# Check git status  
git status
git branch -a

# Test build process
npm run build:github

# Verify files exist
ls -la dist/
```

### **Common File Locations:**
- **Workflow:** `.github/workflows/deploy.yml`
- **Config:** `vite.config.ts`, `package.json`
- **Build Output:** `dist/` directory
- **Public Assets:** `public/` directory

## ✅ **Verification Checklist**

After fixing any issues:

- [ ] GitHub Pages enabled in repository settings
- [ ] Source set to "GitHub Actions"  
- [ ] `package-lock.json` committed and up to date
- [ ] Build passes locally with `npm run build:github`
- [ ] Pushing to `main` branch triggers deployment
- [ ] GitHub Actions workflow completes successfully
- [ ] Site accessible at `https://nahianahmed.github.io/AshrafulMakhluqat/`

## 🤲 **Final Notes**

Most deployment issues are resolved by:
1. Using the `main` branch instead of `develop`
2. Ensuring `package-lock.json` is committed
3. Verifying GitHub Pages settings

**May Allah make this process smooth for you and bless this Islamic project!**
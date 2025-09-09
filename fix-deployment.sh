#!/bin/bash

# Fix deployment script for GitHub Pages
echo "🔧 Fixing GitHub Pages deployment setup..."

# Step 1: Update dependencies and lock file
echo "📦 Updating dependencies..."
npm install

# Step 2: Check if package-lock.json exists
if [ -f "package-lock.json" ]; then
    echo "✅ package-lock.json found and updated"
else
    echo "❌ package-lock.json not found - creating it..."
    npm install
fi

# Step 3: Test the build process
echo "🏗️ Testing build process..."
npm run build:github

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed - check errors above"
    exit 1
fi

# Step 4: Check if dist directory has required files
echo "📁 Checking build output..."
if [ -f "dist/index.html" ] && [ -f "dist/404.html" ]; then
    echo "✅ Build output looks good"
else
    echo "❌ Missing required files in dist/"
    exit 1
fi

echo ""
echo "🎉 Setup complete! Now you can:"
echo "1. Commit the changes:"
echo "   git add ."
echo "   git commit -m 'Fix deployment setup'"
echo ""
echo "2. Push to main branch:"
echo "   git checkout main"
echo "   git push origin main"
echo ""
echo "3. Enable GitHub Pages in repository settings:"
echo "   Settings → Pages → Source: 'GitHub Actions'"
echo ""
echo "4. Your site will be available at:"
echo "   https://nahianahmed.github.io/AshrafulMakhluqat/"
echo ""
echo "🤲 May Allah bless this Islamic project!"
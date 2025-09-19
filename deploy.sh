#!/bin/bash

# Build script for Jarurat Care Patient Dashboard
echo "🏥 Building Jarurat Care Patient Dashboard..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

# Build the project
echo "🔨 Building for production..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
  echo "✅ Build successful! Files are in the dist/ folder"
  echo "📁 You can now deploy the dist/ folder to your hosting service"
  echo ""
  echo "🚀 Deployment options:"
  echo "   1. Vercel: Run 'vercel' in this directory"
  echo "   2. Netlify: Drag the dist/ folder to app.netlify.com"
  echo "   3. GitHub Pages: Push to gh-pages branch"
else
  echo "❌ Build failed. Please check for errors above."
  exit 1
fi

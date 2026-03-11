# WAYFARE — Premium Travel Gear

A modern, full-featured e-commerce site for premium travel bags, backpacks, wallets, and suitcases. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Design Philosophy

- **Aesthetic**: Editorial luxury — dark obsidian base with rust accents
- **Fonts**: Playfair Display (headings) + DM Sans (body) + DM Mono (labels)
- **Color Palette**: Obsidian `#0A0A08`, Ivory `#F5F2EC`, Rust `#C4541A`, Sand `#C8B89A`, Slate `#3D4A5C`

## Pages

- `/` — Homepage with hero slider, products, features, testimonials
- `/collections` — All products with category filter + sort
- `/products/[id]` — Product detail page with gallery, color picker, add to cart
- `/about` — Brand story page

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: Next.js (auto-detected)
5. Deploy!

## Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial Wayfare site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wayfare.git
git push -u origin main
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts via next/font
- **Animation**: CSS animations + transitions
- **Images**: Unsplash (replace with your product images)
- **Deployment**: Vercel

## Customization

### Replace product data
Edit `lib/data.ts` to add your real products, prices, and images.

### Replace images
Swap Unsplash URLs in `lib/data.ts` with your product photography hosted on:
- Cloudinary
- Vercel Blob Storage
- AWS S3
- Your own CDN

### Add a CMS
Connect to Sanity, Contentful, or Shopify for product management.

### Add payments
Integrate Razorpay or Stripe for checkout functionality.

## Project Structure

```
wayfare/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── globals.css         # Global styles + animations
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About page
│   ├── collections/page.tsx # Collections page
│   └── products/[id]/      # Product detail
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── MarqueeTicker.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── CategoryShowcase.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── EditorialSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── NewsletterSection.tsx
│   └── ui/
│       └── ProductCard.tsx
└── lib/
    └── data.ts             # Product data
```

# Ujala Hotel (उजाला होटल) — Premium 3D Restaurant Website

An immersive, award-winning 3D restaurant experience for **Ujala Hotel**, an authentic vegetarian family restaurant located on Belwai–Phulpur Road in Mahimapur, Uttar Pradesh, India.

---

## Features

- **Interactive 3D WebGL Hero**: Real-time Three.js scene featuring a royal brass Indian vegetarian thali with dal tadka, paneer curry, palak sabzi, steamed rice, fresh puffed roti, terracotta kulhad chai with animated rising steam, and golden spice particles.
- **Mouse Parallax & Scroll Choreography**: Dynamic camera orbiting and scroll-linked depth transitions.
- **Editorial Food Highlights**: 3D card tilt interaction showcasing the 8 customer-review-mentioned dishes (*Vegetarian Thali, Paneer Curry, Dal Tadka, Palak Sabzi, Fresh Roti, Rice, Crispy Pakodi, Chai*).
- **Restaurant Story**: *"A Place to Pause and Enjoy"* — presenting Ujala Hotel as a welcoming stop for highway travelers and local families with 100% verified facts.
- **Food & Atmosphere Gallery**: Interactive masonry gallery with full-screen high-resolution modal lightbox.
- **Verified Reviews & Trust**: Transparent presentation of the official **3.1/5 rating from 50 Google reviews** with a direct link to live Google Maps reviews.
- **Interactive Location & Navigation**: Direct one-touch phone dialer (`+91 94517 72419`), Google Maps turn-by-turn navigation, and responsive embedded map.
- **Advanced SEO & Schema.org**: Fully configured Open Graph, Twitter cards, and Schema.org `Restaurant` JSON-LD structured data.

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# The site will be running at http://localhost:3000
```

---

## Deployment Instructions

### 1. Vercel (Recommended)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Set Framework Preset to **Vite**.
5. Click **Deploy**. Vercel will build and deploy automatically.

### 2. Netlify
1. Sign in to [Netlify](https://netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Connect your GitHub repository.
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.

### 3. GitHub Pages
1. Build the production assets:
   ```bash
   npm run build
   ```
2. Deploy the `dist` directory to your `gh-pages` branch or configure GitHub Actions with the official Vite deployment workflow.

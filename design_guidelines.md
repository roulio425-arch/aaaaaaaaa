# Design Guidelines - Boulangerie Espoir

## Design Approach
**Reference-Based Approach** drawing inspiration from modern hospitality and food e-commerce leaders (Airbnb's warmth, Sweetgreen's food photography, Goldbelly's product showcase) combined with Mediterranean/North African cultural aesthetics. This creates an ultra-modern yet authentic experience celebrating Kabyle heritage.

## Core Design Principles
- **Mobile-First Excellence**: Every interaction optimized for touch, with generous tap targets and thumb-friendly navigation
- **Food-Forward Visuals**: Hero imagery and product photography drive the experience
- **Cultural Authenticity**: Incorporate geometric patterns and warm Mediterranean colors reflecting Kabyle/Béjaïa heritage
- **Seamless Commerce**: Intuitive shopping cart with minimal friction

## Color Palette

**Primary Colors:**
- Brand Primary: 28 75% 45% (warm terracotta/clay - evoking traditional ovens and Béjaïa earth tones)
- Brand Secondary: 35 85% 55% (golden amber - representing fresh bread crust and honey)

**Dark Mode:**
- Background: 25 15% 12% (warm dark brown)
- Surface: 25 12% 18%
- Text Primary: 35 20% 95%
- Text Secondary: 35 15% 70%

**Light Mode:**
- Background: 35 30% 98% (warm cream)
- Surface: 0 0% 100%
- Text Primary: 25 40% 15%
- Text Secondary: 25 20% 40%

**Accent:**
- Success/CTA: 142 70% 45% (olive green - Mediterranean freshness)
- Subtle accents from Kabyle patterns in decorative elements only

## Typography

**Font Families:**
- Headings: 'Playfair Display' (elegant, sophisticated serif for brand prestige)
- Body: 'Inter' (clean, highly legible sans-serif for product descriptions and UI)
- Accent: 'Italiana' (for special callouts and decorative elements)

**Scales:**
- Mobile H1: text-4xl font-bold (hero headlines)
- Mobile H2: text-2xl font-semibold (section headers)
- Mobile Body: text-base leading-relaxed
- Desktop H1: text-6xl font-bold
- Desktop H2: text-4xl font-semibold
- Product Titles: text-xl font-semibold
- Prices: text-2xl font-bold (golden color)

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm.

**Grid Structure:**
- Mobile: Single column, full-width cards with p-6
- Tablet: 2-column grid for product showcase
- Desktop: 3-4 column grid for pastry/pizza gallery, max-w-7xl container

**Section Rhythm:**
- Mobile: py-12 between major sections
- Desktop: py-20 to py-24 for breathing room

## Component Library

**Navigation:**
- Sticky header with logo (left), hamburger menu (right) on mobile
- Desktop: Horizontal nav with "Accueil | Pâtisseries | Pizzas | Café | À Propos | Panier"
- Fixed cart icon with item count badge
- Semi-transparent background with backdrop blur on scroll

**Product Cards:**
- Elevated cards with subtle shadow and rounded-2xl corners
- High-quality food photography (aspect-ratio: 4/3)
- Product name, description snippet, price prominently displayed
- "Ajouter au panier" button with cart icon
- Hover: Gentle lift effect (transform scale 1.02)

**Shopping Cart:**
- Slide-out panel from right on mobile/desktop
- Line items with thumbnail, name, quantity controls (+/-), remove option
- Sticky total at bottom
- Primary CTA: "Commander" button

**Hero Section:**
- Full-viewport on desktop, 80vh on mobile
- Large hero image of artisan bread/pastries with warm lighting
- Overlaid headline: "Espoir - L'Art de la Pâtisserie Kabyle"
- Subtitle highlighting Béjaïa heritage
- Dual CTAs: "Découvrir nos Pâtisseries" + "Commander Pizza"

**Category Sections:**
- Pâtisseries Kabyles: Grid showcase (Makrout, Kalb el Louz, Tamina, Griwech, Dziriettes)
- Pizzas: 2-column on mobile, 3-column on desktop with size/price options
- Café: Featured coffee drinks with beautiful pour shots

**Footer:**
- Multi-column on desktop (Informations, Horaires, Contact, Réseaux Sociaux)
- Newsletter signup with email input
- Subtle Kabyle geometric pattern background in brand colors at 10% opacity

## Images

**Hero Image:** Large, full-width professional photograph of an artisan baking scene - hands shaping traditional Kabyle pastries with flour dust, warm golden lighting, shallow depth of field. Alternative: Beautiful spread of colorful pastries on traditional Algerian ceramics.

**Product Images:**
- High-resolution, consistently lit food photography
- White or neutral warm backgrounds for product catalog
- Lifestyle shots showing pastries being enjoyed with coffee
- Pizza shots with melted cheese pull, fresh ingredients visible

**Decorative Elements:**
- Subtle Kabyle geometric patterns as section dividers
- Coffee steam illustrations/icons
- Wheat/grain motifs in golden color

**Logo:** Circular emblem combining traditional Kabyle geometric patterns with modern typography, featuring "ESPOIR" in elegant serif, warm terracotta and gold color scheme, clean line work suitable for both light and dark backgrounds.

## Mobile-Specific Optimizations
- Bottom navigation bar with Home, Menu, Cart, Profile icons
- Swipeable product carousels
- Tap targets minimum 48px height
- Card-based layout for easy thumb scrolling
- Collapsible category filters with clear visual hierarchy
- One-tap "Commander" quick actions on product cards
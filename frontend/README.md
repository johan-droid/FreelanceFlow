# FreelanceFlow

Financial clarity for independent minds. A modern landing page built with Next.js 14, TypeScript, and custom CSS.

## Overview

FreelanceFlow is a comprehensive financial platform designed specifically for freelancers and independent contractors. This repository contains the landing page showcasing the platform's key features and benefits.

## Features

- **Safe-to-Spend Calculator**: Intelligently calculates your monthly spending budget based on income history volatility
- **Automated Tax Planning**: Multi-country tax engines with progressive bracket support
- **Bank Sync & Reconciliation**: Seamless invoice-to-payment tracking with Plaid integration
- **AI Financial Coach**: Claude-powered AI assistant for personalized financial guidance
- **Tax Estimator**: Real-time tax calculations for US, UK, and Australia
- **Testimonials**: Client success stories and real-world usage
- **Flexible Pricing**: Free tier with Pro and Enterprise options
- **Security**: Bank-level encryption, SOC 2 Type II certified, GDPR compliant

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS variables
- **Fonts**: Playfair Display (serif), DM Sans (sans-serif), DM Mono (monospace) from Google Fonts
- **Components**: React 18+
- **Build Tool**: Turbopack

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles and CSS variables
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx          # Navigation bar with scroll detection
│   ├── HeroSection.tsx      # Hero section with dashboard mockup
│   ├── PainPointsSection.tsx # Problem/solution cards
│   ├── FeaturesSection.tsx  # Interactive feature demos
│   ├── TestimonialsSection.tsx # Client testimonials
│   ├── PricingSection.tsx   # Pricing table with FAQ
│   ├── SecuritySection.tsx  # Trust & security section
│   ├── FinalCTASection.tsx  # Final call-to-action
│   └── Footer.tsx          # Footer with links
public/                      # Static assets
eslint.config.mjs           # ESLint configuration
tsconfig.json               # TypeScript configuration
next.config.ts              # Next.js configuration
package.json                # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

The page will automatically reload when you make changes to the code.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Features Breakdown

### Navbar
- Sticky navigation that compresses on scroll
- Links to all main sections
- Call-to-action button

### Hero Section
- Large animated headline
- Feature highlights badges
- Interactive dashboard mockup with live data
- Floating cards showing key metrics
- Mini income chart with animations

### Pain Points Section
- Three problem cards with icons
- Statistics highlighting the issues
- Smooth fade-in animations on scroll

### Features Section
- Four detailed features with interactive demos:
  1. **Safe-to-Spend Calculator**: Interactive slider-based calculator
  2. **Tax Estimator**: Multi-country tax calculator with visual breakdown
  3. **Invoice Timeline**: Step-by-step invoice-to-payment flow
  4. **AI Chat**: Interactive chat interface with sample responses

### Testimonials Section
- Three client testimonial cards
- Star ratings and user credentials
- Fade-in animations

### Pricing Section
- Three tier pricing cards (Starter, Pro, Enterprise)
- Annual/monthly toggle with savings display
- Feature comparison lists
- Frequently asked questions with accordion

### Security Section
- Three security feature cards
- Partner logos (Plaid, Stripe, AWS, Anthropic)
- Trust badges and certifications

### Final CTA
- Compelling headline with emphasis
- Primary and secondary actions
- Trust indicators

### Footer
- Company information
- Product, company, help, and status links
- Status indicator
- Copyright and legal links

## Interactive Components

### Calculator
- Real-time calculation updates
- Slider inputs with visual feedback
- Dynamic confidence badges
- Volatility-based budget calculation

### Tax Calculator
- Country selector (US, UK, AU)
- Breakdown by tax type
- Visual bar chart
- Quarterly payment information

### Chat Interface
- Message history
- Dynamic responses
- User and bot message styling

### FAQ Accordion
- Smooth expand/collapse animations
- Keyboard accessible

## Styling

All styles are defined in `globals.css` with CSS variables for easy theming:

- **Navy** (`#0a0f1e`): Primary dark background
- **Gold** (`#c9a84c`): Primary accent, CTAs
- **Green** (`#1fb87e`): Success states
- **Red** (`#e05555`): Warning/danger states
- **Amber** (`#d4831e`): Caution states
- **Cream** (`#f5f0e8`): Primary text color

Custom variables defined in `:root` for easy maintenance and theming.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Turbopack for fast builds
- Static page generation where possible
- Optimized images
- CSS variables for efficient styling
- Minimal JavaScript bundle

## Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## Responsive Design

The design includes responsive breakpoints for mobile devices (max-width: 900px) with:
- Collapsed navigation menu
- Single-column layouts
- Touch-friendly interactions
- Optimized font sizes

## Future Enhancements

- Add more interactive demo modes
- Payment integration for trial signups
- Blog section
- Detailed feature pages
- Mobile app links
- Analytics integration
- A/B testing framework

## License

Proprietary - FreelanceFlow

## Support

For questions or issues, please contact the development team.

---

Built with ❤️ for freelancers, by freelancers.

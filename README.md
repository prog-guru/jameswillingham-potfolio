# James Willingham - Portfolio

A modern, production-ready developer portfolio built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🎨 **Modern Design** - Clean, professional UI inspired by Vercel, Linear, and Notion
- 🌓 **Dark Mode** - Full dark/light theme support with persistent preference
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Performance** - Built with Next.js 14 App Router and server components
- 🎭 **Smooth Animations** - Subtle Framer Motion animations for enhanced UX
- 🔍 **SEO Optimized** - Complete metadata and Open Graph tags
- ♿ **Accessible** - Keyboard navigation and proper focus states

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles and Tailwind directives
├── components/
│   ├── Header.tsx      # Navigation header with theme toggle
│   ├── Footer.tsx      # Site footer
│   ├── Section.tsx     # Reusable section wrapper
│   ├── ExperienceCard.tsx
│   ├── EducationCard.tsx
│   ├── SkillGroup.tsx
│   ├── ContactForm.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── data/
│   ├── personal.ts     # Personal information and summary
│   ├── experience.ts   # Work experience data
│   ├── skills.ts       # Skills grouped by category
│   └── education.ts    # Education information
└── public/             # Static assets (if any)
```

## Customization

All content is stored in the `data/` directory. Update these files to customize:

- `data/personal.ts` - Name, title, contact info, summary
- `data/experience.ts` - Work experience entries
- `data/skills.ts` - Skills by category
- `data/education.ts` - Education details

## Deployment

This portfolio is ready to deploy on:

- **Vercel** (recommended) - Zero-config deployment
- **Netlify** - Easy deployment with continuous integration
- **Any Node.js hosting** - Build and deploy the production bundle

## License

This project is private and proprietary.
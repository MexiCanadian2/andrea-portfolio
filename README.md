# Andrea M. Bravo Ojeda — Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?logo=framer)
![Anthropic](https://img.shields.io/badge/Claude_AI-Anthropic-orange)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)

A stunning, production-ready personal portfolio for Andrea M. Bravo Ojeda — trilingual international business professional with expertise in AI, digital marketing, leadership, and global trade missions.

---

## Features

- 🎨 Elegant editorial design system (ivory, charcoal, champagne gold, sage)
- ✍️ Typewriter animation in the hero section
- 🗺️ SVG world map animated background + trade mission routes
- 📅 Animated experience timeline (alternating, responsive)
- 🌍 Trade Missions showcase with expandable cards
- 📊 Framer Motion animated skill bars and counters
- 🤖 AI chatbot powered by Anthropic Claude (streaming SSE)
- 📬 Contact form with API route
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ WCAG AA accessible
- 🚀 `prefers-reduced-motion` respected

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| AI | Anthropic Claude (claude-sonnet-4-5) |
| Deployment | Vercel |

---

## Local Setup

### Prerequisites

- Node.js 18+
- npm 9+

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/andrea-portfolio.git
cd andrea-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

Get your API key at: https://console.anthropic.com/

### 4. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `ANTHROPIC_API_KEY` | Anthropic Claude API key for the chatbot | Yes |

---

## Deployment

### Vercel (Recommended)

```bash
# 1. Initialize git
git init && git add . && git commit -m "Initial portfolio commit"

# 2. Create GitHub repo and push
gh repo create andrea-portfolio --public --push --source=.

# 3. Deploy to Vercel
vercel --prod
```

Then add your `ANTHROPIC_API_KEY` in the Vercel dashboard under **Project → Settings → Environment Variables**.

---

## Project Structure

```
andrea-portfolio/
├── app/
│   ├── api/
│   │   ├── chat/route.ts        # Claude streaming AI chatbot endpoint
│   │   └── contact/route.ts     # Contact form endpoint
│   ├── globals.css              # Global styles + design tokens
│   ├── layout.tsx               # Root layout with fonts and SEO
│   └── page.tsx                 # Main page assembling all sections
├── components/
│   ├── Navbar.tsx               # Sticky navigation
│   ├── Hero.tsx                 # Hero with typewriter + world map
│   ├── About.tsx                # Bio, stats, skill pills
│   ├── ExperienceTimeline.tsx   # Alternating timeline
│   ├── TradeMissions.tsx        # Mission showcase cards
│   ├── Education.tsx            # Education cards
│   ├── SkillsTools.tsx          # Bar charts + tool grid
│   ├── Contact.tsx              # Contact info + form
│   ├── Footer.tsx               # Footer
│   └── ChatBot.tsx              # Streaming AI chatbot
├── lib/
│   ├── cv-data.ts               # All CV content as typed constants
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
├── .env.local                   # Environment variables (not committed)
├── vercel.json                  # Vercel deployment config
└── tailwind.config.ts           # Tailwind design system
```

---

## License

© 2025 Andrea M. Bravo Ojeda. All rights reserved.

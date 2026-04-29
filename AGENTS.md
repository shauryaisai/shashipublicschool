# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

An interactive resume/portfolio application with an AI-powered assistant. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| AI | TanStack AI with multi-provider support |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
â”œâ”€â”€ public
â”‚   â”œâ”€â”€ favicon.ico
â”‚   â”œâ”€â”€ logo.png
â”‚   â”œâ”€â”€ tanstack-circle-logo.png
â”‚   â””â”€â”€ tanstack-word-logo-white.svg  # TanStack wordmark logo (white) used in header/nav.
â”œâ”€â”€ src
â”‚   â”œâ”€â”€ components
â”‚   â”‚   â”œâ”€â”€ Header.tsx  # Header.
â”‚   â”‚   â”œâ”€â”€ HeaderNav.tsx  # Navigation sidebar template: mobile menu, Home link, add-on routes; EJS-driven for dynamic route generation.
â”‚   â”‚   â”œâ”€â”€ ProductAIAssistant.tsx  # AI marketing assistant.
â”‚   â”‚   â””â”€â”€ ProductRecommendation.tsx  # Product recommendation card.
â”‚   â”œâ”€â”€ data
â”‚   â”‚   â””â”€â”€ products.ts  # Product catalog data template.
â”‚   â”œâ”€â”€ lib
â”‚   â”‚   â”œâ”€â”€ product-ai-hook.ts  # useProductChat hook.
â”‚   â”‚   â””â”€â”€ product-tools.ts  # AI tools: getProducts, recommendProduct.
â”‚   â”œâ”€â”€ routes
â”‚   â”‚   â”œâ”€â”€ products
â”‚   â”‚   â”‚   â””â”€â”€ $productId.tsx  # Product detail page with recommendation.
â”‚   â”‚   â”œâ”€â”€ __root.tsx  # Root layout: Header, styles.
â”‚   â”‚   â”œâ”€â”€ api.product-chat.ts  # POST handler for product AI chat.
â”‚   â”‚   â””â”€â”€ index.tsx  # Marketing home with ProductAIAssistant.
â”‚   â”œâ”€â”€ store
â”‚   â”‚   â””â”€â”€ product-assistant.ts  # Zustand store for assistant state.
â”‚   â”œâ”€â”€ router.tsx  # TanStack Router setup: creates router from generated routeTree with scroll restoration.
â”‚   â””â”€â”€ styles.css  # Global styles.
â”œâ”€â”€ .gitignore  # Template for .gitignore: node_modules, dist, .env, .netlify, .tanstack, etc.
â”œâ”€â”€ AGENTS.md  # This document provides an overview of the project structure for developers and AI agents working on this codebase.
â”œâ”€â”€ netlify.toml  # Netlify deployment config: build command (vite build), publish directory (dist/client), and dev server settings (port 8888, target 3000).
â”œâ”€â”€ package.json  # Project manifest with TanStack Start, React 19, Vite 7, Tailwind CSS 4, and Netlify plugin dependencies; defines dev and build scripts.
â”œâ”€â”€ pnpm-lock.yaml
â”œâ”€â”€ tsconfig.json  # TypeScript config: ES2022 target, strict mode, @/* path alias for src/*, bundler module resolution.
â””â”€â”€ vite.config.ts  # Vite config template: TanStack Start, React, Tailwind, Netlify plugin, and optional add-on integrations; processed by EJS.
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:

- `__root.tsx` - Root layout wrapping all pages
- `index.tsx` - Route for `/`
- `api.*.ts` - Server API endpoints (e.g., `api.resume-chat.ts` â†’ `/api/resume-chat`)

### Component Architecture

**UI Primitives** (`src/components/ui/`):
- Radix UI-based, Tailwind-styled
- Card, Badge, Checkbox, Separator, HoverCard

**Feature Components** (`src/components/`):
- Header, HeaderNav, ResumeAssistant

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind, Content Collections |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `content-collections.ts` | Zod schemas for jobs and education frontmatter |
| `styles.css` | Tailwind imports + CSS custom properties (oklch colors) |

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Conventions

### Naming
- Components: PascalCase
- Utilities/hooks: camelCase
- Routes: kebab-case files

### Styling
- Tailwind CSS utility classes
- `cn()` helper for conditional class merging
- CSS variables for theme tokens in `styles.css`

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias
- Zod for runtime validation
- Type-only imports with `type` keyword

### State Management
- React hooks for local state
- Zustand if you need it for global state
### Marketing Site with AI Assistant

Marketing site with TanStack AI chat assistant. No Stripe checkout.

**AI tools available:**
- `getProducts` - Get all products from catalog
- `recommendProduct` - Display product recommendation card (MUST use for recommendations)

**Components:** ProductAIAssistant, ProductRecommendation

**Dependencies:** @tanstack/ai, streamdown

## Environment Variables

For AI: ANTHROPIC_API_KEY, GEMINI_API_KEY, GEMINI_API_KEY, or OLLAMA_BASE_URL (same as ai add-on).

## Application Name

This starter uses "Application Name" as a placeholder throughout the UI and metadata. Replace it with the user's desired application name in the following locations:

### UI Components
- `src/components/Header.tsx` â€” app name displayed in the header
- `src/components/HeaderNav.tsx` â€” app name in the mobile navigation header

### SEO Metadata
- `src/routes/__root.tsx` â€” the `title` field in the `head()` configuration

Search for all occurrences of "Application Name" in the `src/` directory and replace with the user's application name.


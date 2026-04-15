# music-jiva

# Jiva — Music Discovery

A music discovery page built with Next.js 14+, TailwindCSS, MongoDB, and TanStack Query.

## Tech Stack

- **Next.js 14+** — App Router, Server Components, API Routes
- **TailwindCSS** — Styling
- **MongoDB + Mongoose** — Database
- **TanStack Query** — Client-side data fetching via custom hooks
- **TypeScript** — Type safety throughout

## Getting Started

### 1. Install dependencies

```bash
npm install mongoose @tanstack/react-query @tanstack/react-query-devtools
```

### 2. Set up environment variables

Create a `.env.local` file in the root:

```env
MONGODB_URI=mongodb://localhost:27017/jiva
```

Replace with your MongoDB Atlas URI if using cloud.

### 3. Seed the database

```bash
npx tsx seed/seed.ts
```

### 4. Run the dev server

```bash
npm run dev
# or with Turbopack
npm run dev --turbo
```

Open [http://localhost:3000](http://localhost:3000) — it will redirect to `/discover`.

## Project Structure

```
jiva/
├── app/
│   ├── layout.tsx              # Root layout (fonts, providers)
│   ├── page.tsx                # Redirects to /discover
│   ├── globals.css
│   ├── discover/
│   │   ├── page.tsx            # Discovery page
│   │   └── loading.tsx         # Skeleton loading state
│   └── api/
│       ├── releases/route.ts
│       ├── artists/route.ts
│       └── playlists/route.ts
├── components/
│   ├── Providers.tsx           # TanStack Query provider
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Sidebar.tsx
│   └── discover/
│       ├── HeroBanner.tsx
│       ├── NewReleases.tsx
│       ├── RecommendedArtists.tsx
│       └── TrendingPlaylists.tsx
├── hooks/
│   ├── useNewReleases.ts
│   ├── useRecommendedArtists.ts
│   └── useTrendingPlaylists.ts
├── lib/
│   ├── mongodb.ts              # DB connection with caching
│   └── queryClient.ts          # TanStack Query client
├── models/
│   ├── Artist.ts
│   ├── Album.ts
│   └── Playlist.ts
└── seed/
    └── seed.ts
```

## Data Flow

```
MongoDB → API Route → TanStack Query Hook → React Component
```

Each section (New Releases, Recommended Artists, Trending Playlists) follows the same pattern:
1. **Model** defines the Mongoose schema + TypeScript interface
2. **API route** connects to DB and returns JSON
3. **Custom hook** uses `useQuery` to fetch from the API route
4. **Component** consumes the hook and renders with loading/error states


## Navigation

The Navbar and Sidebar contain additional menu items beyond **Discover**. These are **static UI elements only** — they do not route to any page. They exist purely for visual structure and include hover effects to simulate an interactive navigation experience.

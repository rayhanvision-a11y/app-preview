# SunPlex IPTV (IPTV Smarters Pro Layout) Specification & Design Guide

## 1. Overview
**SunPlex IPTV** is a state-of-the-art IPTV Streaming Media Player Web Application designed after the iconic **IPTV Smarters Pro** interface. It provides a cinematic, user-friendly experience for streaming Live TV, Video on Demand (Movies), TV Series, EPG (Electronic Program Guide), and Multi-screen broadcasting.

---

## 2. Design System & Tokens

### Color Palette (Cinematic Dark Mode)
| Token Name | Hex / Value | Usage |
| :--- | :--- | :--- |
| `--bg-primary` | `#0B0F19` | Main application background (Deep Midnight) |
| `--bg-secondary` | `#111827` | Card backgrounds, drawer panels |
| `--bg-tertiary` | `#1F2937` | Input fields, active item highlights |
| `--accent-gold` | `#F59E0B` | SunPlex Primary Accent / Status active glow |
| `--accent-purple` | `#8B5CF6` | Primary Action / Live TV highlight |
| `--accent-cyan` | `#06B6D4` | Movies / Series category badge |
| `--accent-rose` | `#F43F5E` | Live record / Warning badge |
| `--text-primary` | `#F9FAFB` | Main headings & title text |
| `--text-secondary` | `#9CA3AF` | Subtitles, metadata, EPG timing |
| `--glass-bg` | `rgba(17, 24, 39, 0.75)` | Frosted glass containers |
| `--glass-border` | `rgba(255, 255, 255, 0.1)` | Subtle glass borders |
| `--focus-glow` | `0 0 20px rgba(139, 92, 246, 0.6)` | Smart TV Remote Focus border glow |

### Typography & Fonts
- **Primary Font**: `'Outfit'`, `'Inter'`, sans-serif (Google Fonts)
- **Hierarchy**:
  - `Display / Logo`: 28px Bold (Tracking +0.5px)
  - `Heading 1`: 24px SemiBold
  - `Heading 2`: 18px Medium
  - `Body Regular`: 14px Regular
  - `Small / Badge`: 11px Bold Uppercase

---

## 3. UI Layout Architecture

```
+-----------------------------------------------------------------------------------+
|  [Logo: SUNPLEX IPTV]       [Account: VIP Premium | Exp: 320d | 1/3]   [Search] [Time] |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|   +-------------------+  +-------------------+  +-------------------+             |
|   |  📺 LIVE TV       |  |  🎬 MOVIES (VOD)  |  |  🍿 SERIES        |             |
|   |  1,420 Channels   |  |  4,850 Titles     |  |  890 Shows        |             |
|   +-------------------+  +-------------------+  +-------------------+             |
|                                                                                   |
|   +-------------------+  +-------------------+  +-------------------+             |
|   |  📅 EPG TV GUIDE  |  |  🖥️ MULTI-SCREEN  |  |  ⭐️ FAVORITES      |             |
|   +-------------------+  +-------------------+  +-------------------+             |
|                                                                                   |
|   +---------------------------------------------------------------------------+   |
|   | 🔴 RECENTLY WATCHED / NOW PLAYING CAROUSEL                                 |   |
|   +---------------------------------------------------------------------------+   |
+-----------------------------------------------------------------------------------+
```

---

## 4. Component Breakdown & Data Models

### 1. Header & Playlist Bar
- **Props/Data**: `user: { name, accountType, expiryDate, activeConnections, maxConnections }`
- **Actions**: Refresh Playlist, Open Account Modal, Toggle Search, Open Settings.

### 2. Dashboard Grid Cards (IPTV Smarters Core)
- **Cards**:
  - `Live TV`: Opens Live Channel Player with Categories sidebar.
  - `Movies`: Opens VOD Poster Grid with filter by Genre & Rating.
  - `Series`: Opens TV Shows Catalog with Seasons & Episodes.
  - `EPG Guide`: Opens Interactive Channel Schedule Matrix.
  - `Multi-Screen`: Opens 2-way or 4-way Video Grid player.
  - `Favorites`: Filtered view of saved channels/movies.

### 3. Live TV Player View
- **Sidebar**: Categories (Sports, Movies, News, Documentaries, Kids) + Channel List with live channel logo & current EPG program.
- **Player Area**: HTML5 Video element / HLS stream container + overlay controls (Play/Pause, Mute, Aspect Ratio, Stream Quality 4K/FHD/HD, Fullscreen).

### 4. Movie Detail Modal
- **Backdrop**: High-res backdrop image with gradient overlay.
- **Info Card**: Title, Release Year, Genre, IMDB Rating, Duration, Plot Summary, Cast.
- **Buttons**: "Play Movie", "Add to Favorites", "Watch Trailer".

---

## 5. Framework Conversion Guide (React / Next.js / Vue / Laravel / Flutter)

### How to Convert `index.html` + `styles.css` + `app.js` to Frameworks:

#### A. React / Next.js
1. Convert `styles.css` variables into `tailwind.config.js` or standard CSS module `global.css`.
2. Break down `index.html` views into separate React components:
   - `<Header />`
   - `<DashboardGrid onViewSelect={setActiveView} />`
   - `<LiveTvPlayer channels={channelsData} />`
   - `<MovieCatalog movies={moviesData} />`
   - `<EpgGuide schedule={epgData} />`
   - `<MultiScreenPlayer />`
3. Use `useState` for active views, current stream, and modal state.

#### B. Vue.js / Nuxt
1. Create single-file components (`.vue`): `Header.vue`, `Dashboard.vue`, `Player.vue`, `MovieCard.vue`.
2. Use `v-if` / `v-show` or `vue-router` for view switching.

#### C. Laravel / PHP
1. Include `styles.css` in `resources/css/app.css` via Vite.
2. Split layout into Blade components: `@include('components.header')`, `@include('components.iptv-grid')`.
3. Pass dynamic M3U / Xtream Codes API data from Laravel controller to Blade view.

#### D. Android (Kotlin) / Flutter
1. Map CSS colors to `ThemeData` / `AppColors`.
2. Replace Grid layout with `GridView.builder` (Flutter) or `RecyclerView` with `GridLayoutManager` (Android).
3. Use `video_player` / `better_player` package in Flutter or `ExoPlayer` in Android for video stream rendering.

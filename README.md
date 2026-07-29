# SheCode Africa Summit 2026

Welcome to the official repository for the SheCode Africa Summit 2026. This project hosts the primary 2026 summit web application at the root directory, alongside archived builds for previous summit editions (/2022, /2024).

## 👥 Volunteer Contributors & Page Ownership

### Chidalu Anukam

- Landing Page (/)
- Speaker Page (/speakers)
- Accessibility Page (/accessibility)

### Glory Okafor

- Schedule Page (/schedule)
- About Page (/about)
- Accessibility Page (/accessibility)

## 🔗 Project Links

- **Live Staging URL**: https://sca-summit-staging.herokuapp.com/
- **Figma Design Link**: [Insert Figma URL Here]

## 📄 Site Map & Pages

The 2026 application includes the following pages:

- **Landing Page** (`/`) – Hero section, overview, key highlights, and primary call-to-actions.
- **Speaker Page** (`/speakers`) – Profiles and bios of all event speakers.
- **Schedule Page** (`/schedule`) – Timeline of keynotes, panels, workshop sessions, and events.
- **Accessibility Page** (`/accessibility`) – Accessibility statements, guidelines, and accommodations for attendees.
- **About Page** (`/about`) – Information regarding SheCode Africa, the summit mission, and organizing team.

## 🛠️ Tech Stack & Setup

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Hosting / Deployment**: Heroku (via Root Express server `server.js`)

## 📁 Repository Structure

```
shecode-summit/
├── 2022/              # Archived 2022 summit files & build
├── 2024/              # Archived 2024 summit files & build
├── public/            # Static assets for 2026
├── src/               # React 2026 source code
│   ├── assets/
│   ├── components/
│   ├── pages/         # Landing, Speaker, Schedule, Accessibility, About
│   ├── App.tsx
│   └── index.css      # Tailwind v4 import (@import "tailwindcss";)
├── server.js          # Root Express server to route 2026 & archived years on Heroku
├── vite.config.ts     # Vite + Tailwind configuration
└── package.json
```

## 🚀 Getting Started Locally

### Prerequisites

Make sure you have Node.js (v18+ recommended) and npm installed.

### 1. Install Dependencies

Run in the root directory:

```bash
npm install
```

### 2. Run Local Development Server

Starts the Vite dev server for the 2026 app with Hot Module Replacement (HMR):

```bash
npm run dev
```

### 3. Build for Production

Compiles the React TypeScript application into the `/dist` directory:

```bash
npm run build
```

### 4. Test Production Server Locally

To test how Express serves the Vite build (mimicking Heroku production):

```bash
npm run build
npm start
```

## 🌐 Deployment (Heroku)

This repository is configured to deploy directly to Heroku. When a push is made to the main branch:

1. Heroku runs `npm run build` (or `heroku-postbuild` if configured).
2. The root `server.js` serves the 2026 React app from `/dist`.
3. Legacy subpaths (`/2024`, `/2022`) route to their respective static builds if present.
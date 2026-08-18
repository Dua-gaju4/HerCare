# HerCare – Women's Health & Wellness Platform

## Project Overview

HerCare is a responsive women’s health and wellness frontend built with React and Vite. It combines cycle tracking, symptom logging, education, articles, community interaction, profile management, and theme settings in one calm interface.

## Features

### Module 1
- Project setup
- Home page
- Authentication UI
- Dashboard
- Navigation
- Footer
- Responsive design

### Module 2
- Menstrual cycle tracker
- Calendar
- Period prediction
- Mood tracker
- Symptoms tracker
- Water tracker
- Medicine reminder
- Dashboard statistics

### Module 3
- Women’s disease library
- Disease details
- Search and filter
- Health education
- Nutrition guide
- Wellness tracker
- Articles

### Module 4
- Community feed
- Doctor posts
- Notifications
- User profile
- Settings
- Dark and light theme
- Responsive testing and bug fixes

## Technology Stack

- React
- Vite
- Tailwind CSS
- JavaScript ES6
- React Router DOM
- Local Storage
- Mock JSON data
- Lucide React icons

## Installation

```bash
npm install
npm run dev
```

## Project Structure

- `src/components` reusable UI building blocks
- `src/pages` route-level screens
- `src/layouts` shared layout wrappers
- `src/routes` application routing
- `src/data` mock JSON and static datasets
- `src/utils` helper functions and local storage utilities

## Deployment

The project is ready for Vercel deployment as a React + Vite SPA.

1. Build the app with `npm run build`.
2. Deploy the repository to Vercel.
3. Keep `vercel.json` in the project root so direct navigation to routes like `/dashboard`, `/diseases`, `/articles`, `/community`, `/profile`, and `/settings` resolves to `index.html`.

## Notes

- All community, doctor, notification, profile, and saved article content is demo data stored locally in the browser.
- Doctor posts are educational mock content only and do not represent real healthcare professionals.

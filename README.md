# KECY Website Redesign (React + MUI)

Modern redesign of the original static `index.html` into a React frontend using Material UI.

## Scope

- Uses only the root `index.html` as source content.
- Other folders/files in the workspace are treated as historical reference.
- No backend/API required.

## Stack

- React + TypeScript
- Vite (v5, Node 20.18 compatible)
- Material UI (`@mui/material`, `@mui/icons-material`)

## Quick start

```powershell
cd "c:\Users\Daniel\Desktop\kecy stranka\kecy_redesign"
npm install
npm run dev
```

## Build

```powershell
npm run build
npm run preview
```

`npm run build` now prerenders the homepage HTML after the Vite bundle is created, which gives crawlers real page content before JavaScript runs.

## Project structure

- `src/App.tsx` – redesigned single-page layout and sections
- `src/content.ts` – editable camp content and yearly details
- `src/theme.ts` – global MUI theme (colors, typography, shape)
- `src/index.css` – minimal base styles + smooth scrolling

## Yearly update workflow

Update these fields in `src/content.ts` each season:

- `dateRange`, `locationLabel`, `locationUrl`
- `registrationWindow`, `registrationUrl`, `registrationNote`
- `priceTiers`, `refundRules`
- `albums`, `contact`, `payment`

## Notes

- This redesign intentionally modernizes visuals and spacing instead of preserving old Bootstrap styling.
- Old jQuery and legacy dependencies are no longer used.

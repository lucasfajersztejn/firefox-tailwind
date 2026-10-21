

Readme · MD
# Firefox Homepage — Tailwind CSS practice
 
A pixel-faithful recreation of the Mozilla Firefox homepage, built as a
practice project to apply Tailwind CSS to a real, complex layout instead of
a toy page.
 
**Live:** https://mozilla-firefox-home.netlify.app
 
## Why this project
 
After finishing a Tailwind course I wanted to test it against a design I
had not made myself, with constraints I could not bend: an existing grid,
real spacing, real breakpoints. Copying a production homepage forces you to
solve the layout the designer actually shipped, not the one that happens to
be easy in Tailwind.
 
## What I practiced
 
- **Utility-first layout** — the full page built with Tailwind utilities,
  no custom CSS files.
- **Responsive design** — a single layout that works from mobile to desktop
  using Tailwind breakpoints.
- **System-aware dark mode** — the page follows the visitor's operating
  system theme, and the hero illustration swaps position depending on the
  active mode.
## Stack
 
React · Tailwind CSS · Vite
 
## A note on the content
 
All body copy is placeholder text. The goal was the layout, the responsive
behaviour and the theming, so I deliberately did not reproduce Mozilla's
copy. The design, trademarks and brand assets belong to Mozilla; this is a
non-commercial learning exercise and is not affiliated with or endorsed by
Mozilla.
 
## Running it locally
 
```bash
npm install
npm run dev
```

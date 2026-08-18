# Khalak Tariq — Developer Portfolio

A single-page portfolio built with **React + Vite + Tailwind CSS**, showcasing full-stack projects, UI/UX design work, experience, and skills.

## Getting Started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build → outputs to /dist
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/   # Navbar, Hero, Projects, Experience, Skills, DesignShowcase, About, Contact, Footer, Icons, ProjectMock
  data/
    profile.js  # ALL real content lives here — edit this file to update anything
  index.css     # Tailwind directives + design tokens
  App.jsx
  main.jsx
public/
  Khalak_Tariq_Resume.pdf   # served by the "Download Resume" buttons
  favicon.svg
```

## Editing Content

Everything text-based (name, links, projects, skills, experience, certifications) lives in
`src/data/profile.js`. Update that file and the whole site updates — no need to touch components.

To replace the resume PDF: drop your new file into `public/` and update
`resumeFile` in `src/data/profile.js` if the filename changes.

## Deployment

This is a static site (`npm run build` outputs plain HTML/CSS/JS to `dist/`).
Deploy `dist/` to any static host:

- **Vercel**: `npm i -g vercel` → `vercel --prod` (or connect the GitHub repo in the Vercel dashboard)
- **Netlify**: drag-and-drop the `dist/` folder at app.netlify.com/drop, or connect the repo (build command `npm run build`, publish directory `dist`)
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use the `gh-pages` npm package
- **Render (Static Site)**: connect the repo, build command `npm run build`, publish directory `dist`

## Notes

- No screenshots of the live projects were available, so project previews use a
  designed placeholder (browser-chrome mockup + initials) instead of fabricated screenshots.
  Swap in real screenshots any time by editing `src/components/ProjectMock.jsx` or
  replacing it with an `<img>`.
- Colors, fonts, and spacing are defined in `tailwind.config.js` and `src/index.css`.

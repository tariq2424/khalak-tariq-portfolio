# Khalak Tariq — Full Stack Developer Portfolio

A responsive, single-page developer portfolio built with **React + Vite + Tailwind CSS**.
It showcases deployed full-stack projects (MERN and Django), internship experience, technical skills, and a downloadable resume.

**Live site:** https://khalak-tariq-portfolio.onrender.com/

## Highlights

- **Dark and light themes** — dark by default, with a toggle that remembers the visitor's choice.
- **Mobile-first and responsive** — tested from small phones (390px) up to wide desktops, with no horizontal scroll.
- **Project showcase** — each project has a problem, solution, features, tech stack, live demo, and GitHub link.
- **Click-to-view previews** — click any project screenshot to open the full-size image (close with the button, `Esc`, or by tapping outside).
- **Experience timeline** — three internships (MERN, Full Stack, Django) with detailed responsibilities.
- **Single source of content** — all text lives in one file: `src/data/profile.js`.
- **Accessible** — semantic HTML, keyboard navigation, visible focus states, reduced-motion support.

## Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 19, Tailwind CSS 3 |
| Build | Vite |
| Fonts | Space Grotesk, Inter, JetBrains Mono (Google Fonts) |
| Linting | oxlint |
| Hosting | Render (static site) |

## Getting Started

```bash
npm install
npm run dev        # local dev server → http://localhost:5173
npm run build      # production build → /dist
npm run preview    # preview the production build → http://localhost:4173
npm run lint       # run oxlint
```

## Project Structure

```
src/
  components/   Navbar, Hero, Projects, Experience, Skills, About, Contact, Footer,
                ProjectMock, Lightbox, Reveal, SectionHeading, WinTitleBar, Icons
  data/
    profile.js  All content: profile, skills, experience, projects, education, certifications
  index.css     Theme tokens (dark/light) and shared component styles
  App.jsx
  main.jsx
public/
  projects/     Project homepage screenshots
  Khalak_Tariq_Final_Full_Stack_Resume.pdf   Resume served by the "Download Resume" buttons
  favicon.svg
```

## Editing Content

Everything text-based lives in `src/data/profile.js`. Update that file and the whole site updates.

- **Add or edit a project:** edit the `projects` array. Set `featured: true` for the large layout.
  Projects without a `problem` field render as a compact row.
- **Project screenshots:** drop an image into `public/projects/` and point the project's `image` field to it.
- **Resume PDF:** replace `public/Khalak_Tariq_Final_Full_Stack_Resume.pdf` (keep the filename), or change `resumeFile` in `profile.js`.
- **Theme colors:** change the CSS variables at the top of `src/index.css` (`:root` for dark, `[data-theme="light"]` for light).

## Deployment (Render)

This is a static site.

| Setting | Value |
| --- | --- |
| Build command | `npm install && npm run build` |
| Publish directory | `dist` |

Push to the connected GitHub branch and Render rebuilds automatically.

## Contact

**Khalak Tariq** — Full Stack Web Developer, Modasa, Gujarat, India
[LinkedIn](https://www.linkedin.com/in/tariq-khalak) · [GitHub](https://github.com/tariq2424) · khalaktariq24@gmail.com

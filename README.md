# Masum Billah — Portfolio

Personal portfolio for **Masum Billah**, a backend-focused Software Engineer
specializing in **.NET Core microservices**, event-driven systems, and
high-throughput APIs.

🔗 **Live site:** [me](https://masumcsepust.github.io/)

---

## Tech

Built with **Jekyll**, **CSS**, and **vanilla JavaScript**. GitHub Pages builds
Jekyll sites automatically — no CI config or build step to run yourself.
Content (jobs, projects, stack, study plan) lives in `_data/*.yml` so updates
don't touch markup, and each page section is its own include.

- Semantic HTML5 with accessibility built in (skip link, ARIA, focus states)
- Responsive CSS (custom properties, grid/flex, mobile-first breakpoints)
- Vanilla JS for the scroll-progress bar, reveal-on-scroll, and mobile menu
- SEO meta tags, Open Graph, and JSON-LD structured data
- Site chrome (head/meta, nav, footer) in `_layouts` and `_includes`; repeatable
  content in `_data`

## Structure

```
portfolio/
├── index.html              # front matter + ordered section includes
├── _config.yml              # site title, description, author, social links
├── _layouts/
│   └── default.html         # html shell: head, nav, main, footer, scripts
├── _includes/
│   ├── seo.html              # meta tags, Open Graph, Twitter, JSON-LD
│   ├── nav.html               # topbar navigation
│   ├── hero.html               # header / intro
│   ├── about.html                # about section + profile id-card
│   ├── stack.html                 # skills grid (loops _data/stack.yml)
│   ├── experience.html             # timeline (loops _data/experience.yml)
│   ├── projects.html                # project cards (loops _data/projects.yml)
│   ├── studyplan.html                # study plan (loops _data/studyplan.yml)
│   ├── contact.html                   # contact section
│   └── footer.html
├── _data/
│   ├── stack.yml            # skill categories & chips
│   ├── experience.yml        # job history
│   ├── projects.yml           # selected projects
│   └── studyplan.yml           # interview-prep topics & weekly plan
├── css/
│   └── styles.css          # all styling + responsive rules
├── js/
│   └── main.js             # interactions
├── assets/
│   ├── resume.pdf          # downloadable résumé
│   └── favicon.svg         # site icon
├── README.md
└── .gitignore
```

## Run locally

Requires Ruby + Bundler:

```bash
gem install bundler jekyll
bundle exec jekyll serve
# then visit http://localhost:4000
```

Editing content (a new job, project, or study-plan week) usually means editing
the matching file in `_data/`, not the HTML.

## Deploy (GitHub Pages)

1. Create a public repo named `<your-username>.github.io`.
2. Push all files (keep the folder structure).
3. **Settings → Pages → Deploy from branch → `main` / root.**
4. GitHub Pages detects Jekyll and builds automatically — live at
   `https://<your-username>.github.io/` in ~1 minute.

> Before going live, update the placeholder URLs (`masumbillah.dev`) in
> `_config.yml` to your real domain.

## License

© 2026 Masum Billah. All rights reserved.

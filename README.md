# Masum Billah — Portfolio

Personal portfolio for **Masum Billah**, a backend-focused Software Engineer
specializing in **.NET Core microservices**, event-driven systems, and
high-throughput APIs.

🔗 **Live site:** _add your URL after deploying_

---

## Tech

Built with plain **HTML, CSS, and vanilla JavaScript** — no frameworks, no build
step. Fast to load, easy to maintain, and fully responsive across mobile,
tablet, and desktop.

- Semantic HTML5 with accessibility built in (skip link, ARIA, focus states)
- Responsive CSS (custom properties, grid/flex, mobile-first breakpoints)
- Vanilla JS for the scroll-progress bar, reveal-on-scroll, and mobile menu
- SEO meta tags, Open Graph, and JSON-LD structured data

## Structure

```
portfolio/
├── index.html          # markup & content
├── css/
│   └── styles.css      # all styling + responsive rules
├── js/
│   └── main.js         # interactions
├── assets/
│   ├── resume.pdf      # downloadable résumé
│   └── favicon.svg     # site icon
├── README.md
└── .gitignore
```

## Run locally

Just open `index.html` in a browser. Or serve it:

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

1. Create a public repo named `<your-username>.github.io`.
2. Upload all files (keep the folder structure).
3. **Settings → Pages → Deploy from branch → `main` / root.**
4. Live at `https://<your-username>.github.io/` in ~1 minute.

> Before going live, update the placeholder URLs (`masumbillah.dev`) in
> `index.html`'s meta tags to your real domain.

## License

© 2026 Masum Billah. All rights reserved.

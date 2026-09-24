# Prothit Halder — Personal portfolio

React + Vite portfolio with responsive layouts, accessible expandable experience entries, and direct links to Yelp, Instagram, LinkedIn, GitHub, and email.

## Local preview

```sh
npm install
npm run dev
```

## GitHub Pages

1. Create a GitHub repository named `prorick.github.io` and upload this folder's contents (including `.github`, excluding `node_modules` and `dist`).
2. In repository Settings → Pages, set the build source to **GitHub Actions**.
3. Push to `main` or run the deployment workflow. Your address will be `https://prorick.github.io` after the workflow succeeds.
4. Optionally purchase a domain such as `prothithalder.com` if available. Configure it in Settings → Pages → Custom domain and follow GitHub's DNS instructions. Domain availability has not been checked.

The included workflow builds and publishes the site. No GitHub repository or public deployment has been created by this local build.

## Editing

- Content, contact links, experience: `src/main.jsx`
- Colors, layout, mobile styles: `src/styles.css`
- Page title and description: `index.html`

Experience and education reflect the résumé supplied September 2026. Penn graduation is marked expected. Yelp is a direct profile link, not a live review feed.

The hero uses the supplied Potsdam, Germany photo, converted from HEIC to JPEG for browser compatibility. Google Fonts is loaded externally, with local sans-serif fallbacks.

## University logo sources

- Penn shield: https://branding.web-resources.upenn.edu/logos-and-branding/download-penn-logos
- UC San Diego official white wordmark: https://brand.ucsd.edu/using-the-brand/downloads/index.html

Official assets are stored locally and displayed without changing their colors or proportions.

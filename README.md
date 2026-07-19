# Ali Haji Mazdarani Portfolio

Portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is generated in `dist`.

## GitHub Pages deployment

Deployment runs automatically after every push to the `main` branch.

1. Push this project to a GitHub repository.
2. Open the repository **Settings**.
3. Go to **Pages**.
4. Set **Source** to **GitHub Actions**.
5. Push to `main`, or run the **Deploy to GitHub Pages** workflow manually.

The Vite base path is relative, so deployment works for both:

- `username.github.io`
- `username.github.io/repository-name/`

## Special pages

- `public/404.html` is automatically copied to `dist/404.html` and is used by GitHub Pages for invalid URLs.
- `public/offline.html` is the maintenance page and is available at `/offline.html`.

To temporarily publish the maintenance page as the homepage, change the workflow build step to:

```yaml
- name: Build maintenance page
  run: |
    npm run build
    cp public/offline.html dist/index.html
```

Restore `npm run build` when maintenance is finished.

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

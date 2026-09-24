# Austin Schmid — Portfolio

This repository is a static Jekyll portfolio site designed to publish directly to GitHub Pages as a user site.

## Update the site

- Edit the Markdown pages in the repository root: `index.md`, `about.md`, `work-experience.md`, and `contact.md`.
- Shared page structure lives in `_layouts/`.
- Shared head, navigation, and footer markup lives in `_includes/`.
- Site-wide styles are in `assets/css/style.css`; the small theme toggle is in `assets/js/theme.js`.
- Update `_config.yml` before publishing:
  - Replace `your-github-username` in `url` and `github_username`.
  - Add a LinkedIn profile URL to `linkedin_url` if desired.

Content should remain grounded in the résumé. Do not add achievements, employers, clients, metrics, or projects that have not been supplied.

## Publish with GitHub Pages

1. Create a GitHub repository named `<your-github-username>.github.io`.
2. Replace the placeholders in `_config.yml`.
3. Push the repository to the `main` branch.
4. In the repository’s **Settings → Pages**, choose **Deploy from a branch**, select `main`, and choose `/ (root)`.
5. GitHub Pages will build the site at `https://<your-github-username>.github.io`.

No manual build step or application server is required.

## Preview locally

Install Ruby and Bundler if they are not already available, then run:

```bash
gem install bundler jekyll
jekyll serve --livereload
```

Open `http://localhost:4000`.

## Run Lighthouse

With the local server running, use Chrome DevTools → **Lighthouse**, select **Mobile** and **Desktop**, and run audits for Performance, Accessibility, Best Practices, and SEO. The target is 90 or higher in each category.

The layout is designed for a 375px phone width and a 1280px desktop width. Check both widths after content changes.
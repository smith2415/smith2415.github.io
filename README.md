<<<<<<< HEAD
# Austin Schmid — Portfolio

This repository is a static Jekyll portfolio site designed to publish directly to GitHub Pages as the user site `smith2415.github.io`. `baseurl` stays empty, and internal links use Jekyll's URL filters.

## Update the site

- Edit the Markdown pages in the repository root: `index.md`, `about.md`, `work-experience.md`, and `contact.md`.
- Shared page structure lives in `_layouts/`.
- Shared head, navigation, and footer markup lives in `_includes/`.
- Site-wide styles are in `assets/css/style.css`; the small theme toggle is in `assets/js/theme.js`.
- `_config.yml` is configured for `smith2415.github.io`. If the repository moves to another GitHub username, update `url` and `github_username`.
- Add a LinkedIn profile URL to `linkedin_url` if desired. With no LinkedIn URL, the Contact page displays no public contact link or email address.

Content should remain grounded in the résumé. Do not add achievements, employers, clients, metrics, or projects that have not been supplied.

## Publish with GitHub Pages

1. Create a GitHub repository named `smith2415.github.io`.
2. Push the repository to the `main` branch.
3. In the repository’s **Settings → Pages**, choose **Deploy from a branch**, select `main`, and choose `/ (root)`.
4. GitHub Pages will build the site at `https://smith2415.github.io`.

No manual build step or application server is required.

## Preview locally

Install Ruby and Jekyll if they are not already available, then run:

```bash
gem install jekyll
jekyll serve --livereload
```

Open `http://localhost:4000`.

## Run Lighthouse

With the local server running, use Chrome DevTools → **Lighthouse**, select **Mobile** and **Desktop**, and run audits for Performance, Accessibility, Best Practices, and SEO. The target is 90 or higher in each category.

The layout is designed for a 375px phone width and a 1280px desktop width. Check both widths after content changes.
=======
# smith2415.github.io
Personal website
>>>>>>> origin/main

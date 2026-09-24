# Portfolio Site Plan

## Goal

Build Austin Schmid’s personal portfolio as a publish-ready, root-level Jekyll site for a GitHub user site at `username.github.io`.

## Content

- **Home:** concise introduction and positioning based only on the supplied résumé.
- **About:** education, interests, and a short professional summary.
- **Work Experience:** Edelman Smithfield, US Army Special Operations Psychological Operations, and US Army Infantry.
- **Contact:** LinkedIn link if supplied; no public email or mailto link.
- **Additional work:** published book and academic paper listed as supplied.

## Design direction

- Clean, modern typography with an editorial sense of hierarchy.
- Responsive single-column layout for phones and desktops.
- Light and dark themes with a small accessible theme toggle.
- High contrast, semantic HTML, visible keyboard focus, and restrained motion.
- No invented employers, achievements, metrics, clients, projects, or contact details.

## Technical approach

- Jekyll files live directly in the repository root: `index.md`, page Markdown files, `_config.yml`, `_layouts`, `_includes`, `assets`, sitemap, favicon, and README.
- Reusable layouts and includes keep content separate from presentation.
- Plain HTML and CSS with minimal JavaScript; no backend, database, form handler, framework, tracker, or unnecessary dependency.
- GitHub Pages builds directly from `main` and the repository root with `baseurl` empty and URL filters for links.
- SEO metadata, sitemap, favicon, local preview instructions, and Lighthouse instructions are included.

## Assumptions and required values

- GitHub username is still needed to replace `myusername` in the site URL and repository guidance.
- LinkedIn profile URL is optional and will only be linked, never fetched for content.
- Any résumé detail that does not map cleanly to a page will remain in the supplied wording or be marked as a placeholder.

## Approval

After approval, build the complete root-level site and verify the structure, navigation, responsive widths of 375px and 1280px, and GitHub Pages configuration.
# Chris Ninatanta — Robotics Research Portfolio

An updated personal research website built with Jekyll / GitHub Pages, based on a clean left-sidebar layout selected for this redesign.

## Main features

- Responsive, fixed desktop sidebar with an accessible mobile navigation drawer.
- WSU-inspired color palette: official core crimson `#A60F2D`, gray `#4D4D4D`, and neutral surfaces (no WSU logos or university endorsement implied).
- Light and dark themes, defaulting to system preference on first visit and remembering manual selection in the browser's `localStorage` (`cn-color-theme`).
- Homepage featuring the actual portrait, peer-reviewed research papers, and genuine robotics project figures.
- Apple gripper and wearable haptics prioritized as flagship stories in the homepage and Projects index.
- Dedicated **30–90-second, on-screen-labeled video highlight** areas for the two flagship projects (apple-gripper physical mechanism and wearable-haptic hardware), ready for real YouTube embeds or MP4s.
- Prominent **My Engineering Contributions** section immediately under each flagship hero, flagged as draft attribution until reviewed.
- Real research-figure galleries; no CAD files or prototype-iteration imagery required.
- Dedicated, full technical case studies for four research projects, with clearly labeled paper results and draft contribution attribution; plus Research, Publications, CV, and Talks.
- Existing PDFs, papers, images, and bibliography files retained.

## Publish on GitHub Pages

1. Make a backup or create a new Git branch in `C-Ninatanta/c-ninatanta.github.io`.
2. Copy the contents of this ZIP **to the root of that repository**, keeping the original directory structure. Do not put everything in an extra top-level folder.
3. Commit and push the files, then allow the repository's normal GitHub Pages build to complete.
4. Confirm the public homepage, project pages, PDF links, and dark-mode toggle.

To build locally using the existing Gemfile:

```bash
bundle install
bundle exec jekyll serve
```

The Jekyll build was **not executed** in the delivered environment because the Jekyll gem was not installed. The layout was separately rendered in Chromium as a static HTML preview to check styling, theme toggle behavior, and desktop/mobile overflow.

## Confirmed page structure

- **Mount Rainier portrait** retained on homepage; **Publications** appear before **Featured Projects**.
- Flagship project pages follow: **My Engineering Contributions → 30–90-second video highlight → Why this matters → Design & methods → Testing & validation → Results & takeaways → Photos and experiments**. Other project pages retain their original case-study ordering.
- Quantitative figures for published projects are explicitly attributed to their respective team papers. Haptic work is described as an active research theme without unverified results.

## Where to edit

- `assets/profile/site.css` — new responsive design and light/dark theme variables.
- `assets/profile/site.js` — theme persistence and mobile menu interaction.
- `_layouts/profile-base.html` — shared site navigation and theme controls.
- `_layouts/profile-home.html` — homepage sections.
- `_layouts/profile-project.html` — shared template for detailed project pages.
- `_data/research.yml` — project information, evidence, contributions, photos, and PDFs.
- `_data/featured_publications.yml` — homepage publication cards.
- `_pages/` — page content.

## Before going live

- Replace `files/CV_C_Ninatanta_2025.pdf` with an updated CV; update its name in `_pages/about.md`, `_layouts/profile-home.html`, and `_pages/cv.md` if renamed.
- Add your actual haptic device photographs and demonstration video to its project page. The layout includes a clearly labeled media placeholder.
- Verify the IROS 2023 gripper talk date in `_talks/2025-10-03-2023-IROS-Gripper.md` (listed as October 2025 in the original repository).
- Review the accuracy of project contribution summaries, especially on coauthored work. Review the contribution summaries in `_data/research.yml` before you publish; the editorial notes are maintained there and in `SITE_REDESIGN_NOTES.md`.
- When publishing, check that PDF paths with punctuation, including the IROS 2023 file, load correctly.

The standalone HTML visual preview is provided separately from the ZIP; its navigation links point to the live website, so unreleased pages will not appear until the repository is deployed.

## Adding videos and media

Follow [`MEDIA_UPLOAD_GUIDE.md`](MEDIA_UPLOAD_GUIDE.md) and [`VIDEO_EDITING_STORYBOARDS.md`](VIDEO_EDITING_STORYBOARDS.md). The YouTube video IDs and gallery entries are data-driven in `_data/research.yml`; no HTML changes are required.

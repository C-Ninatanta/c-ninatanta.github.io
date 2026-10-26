# Sidebar Layout / Light–Dark Redesign

## Design decision

Selected layout: editorial sidebar, prominent hero portrait, research-pillar strip, publications first, featured projects second, and a three-column background/contact section. Neutral type and generous spacing; official WSU colors used as accents without WSU trademarks.

## Changes delivered

- Main shell and responsive nav in `_layouts/profile-base.html`.
- Theme switcher and persistence in `assets/profile/site.js`.
- CSS variables for both modes in `assets/profile/site.css`.
- Homepage, research vision, project list, individual project pages, publications, CV, and talks updated.
- Actual paper figures and real publication titles used; concept mockup's fictional legged robot, perception papers, and manipulation imagery intentionally not adopted.

## Pending content

- Updated CV PDF.
- Haptic device photographs and demos.
- Confirmation of outdated IROS talk date.
- Detailed individual role descriptions reviewed by the researcher.

## Testing

A self-contained HTML visual preview was tested in headless Chromium at 1440 px and 390 px widths. Both theme modes render, the theme toggle switches state, the mobile menu opens, no client-side JavaScript errors were observed, and there was no horizontal overflow. The GitHub Pages Jekyll build could not be run locally without the Jekyll gem.

## Confirmed design decisions (October 2026)

- Keep the real Mount Rainier portrait on the homepage.
- Keep the Publications section **before** Featured Projects.
- Keep desktop sidebar and the persistent light / dark theme toggle.
- Expand each individual project page into a technical case study: problem, approach, draft individual contributions, validation, results, and supporting links.

### Accuracy and media checklist

Results on three published projects were checked against the abstracts and relevant methods/results passages of their uploaded paper PDFs. The numerical values describe **coauthored research findings**, not necessarily the applicant's individually measured outputs. Attribution-review reminders are maintained in the source data and documentation rather than displayed to site visitors. The haptic page intentionally has no numerical result or fabricated imagery; replace its placeholder media text with authentic photographs and demonstration clips when ready.

## Media showcase confirmation

- Apple-harvesting gripper and wearable haptic feedback are now the two headline projects.
- Homepage still shows Publications before Featured Projects; Mount Rainier portrait and light/dark modes unchanged.
- Extracted and optimized genuine figures from the three included coauthored robotics papers; gallery images are presented as research-team figures, not personal-credit evidence.
- Data-driven YouTube (privacy-enhanced) or MP4 embeds and accessible fullscreen image galleries have been added to the project templates.
- Haptic page retains a clear placeholder until original photos and footage are supplied; no invented measurements or imagery.
- See MEDIA_UPLOAD_GUIDE.md to publish new media.

## October 2026: video and contribution decisions

- User chose a **30–90 second highlight demo** for each flagship project; include genuine demonstration footage when provided, not fabricated videos.
- CAD renderings and prototype iteration galleries are **not expected**. Keep research figures already sourced from papers, and show device/test images when available.
- The flagship project pages now feature **My Engineering Contributions** immediately below the hero. These descriptions remain draft attribution to verify before the page is publicly published.
- The image gallery has been simplified to focus on real hardware, test setups, demonstration stills, and research results.

## Short-demo direction (latest)

- **Format:** 30–90 seconds with short on-screen captions, rather than a narrated long-form presentation.
- **Apple gripper:** show real three-finger hardware, cable-driven motion, apple contact, and reset.
- **Haptic system:** show the genuine wearable, putting it on, observable feedback hardware, and worn operation. Avoid labeling invisible effects as visible.
- **Supporting file:** `VIDEO_EDITING_STORYBOARDS.md` provides editable timing and shot suggestions.
- These are storyboard ideas only; actual photos/videos have not been supplied.

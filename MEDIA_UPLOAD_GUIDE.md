# Add real photos and demonstration videos

The existing research images are extracted from the PDFs included in this site. No new claims about individual credit or unpublished research outcomes are implied by the figures. **Flagship stories** on the home page and Projects index are the apple-harvesting gripper and wearable haptic feedback system.

## The video format: short hardware highlights with on-screen labels

The user-selected direction is **30–90 seconds, no voice-over required, short on-screen labels**. The apple gripper's priority is its **physical mechanism**, while the haptic project's priority is the **wearable hardware**.

Use the shot-by-shot outline in [`VIDEO_EDITING_STORYBOARDS.md`](VIDEO_EDITING_STORYBOARDS.md). It contains the suggested captions, approximate times, filming priorities, and export settings for both projects.

The site's project page automatically shows a topic-specific video description and proposed label list while footage is pending. **These are editing notes, not proof of a completed video**. Once you insert a YouTube ID or MP4 path, the actual player replaces the placeholder without requiring a template edit.

## Video: recommended YouTube workflow

1. Upload the demo to YouTube as **Public** or **Unlisted** (not Private). Unlisted videos can be embedded without appearing in public search results; people with the link can still view them.
2. Open `_data/research.yml`. Find the correct project `id`.
3. Edit just `video.youtube_id`. From `https://www.youtube.com/watch?v=ABC123` copy `ABC123`. Do **not** paste the full URL.
4. Change `video.title` to an accessible description such as `Apple harvesting prototype field demonstration`.
5. The project page automatically displays a large privacy-enhanced YouTube embed near the top. No further HTML edits needed.

If you use GitHub for the video instead, compress it as web-ready **MP4** (`H.264` video, `AAC` audio), ideally short and compact. Upload to `assets/project-videos/apple-gripper-demo.mp4` (create the folder); then set `video.mp4: /assets/project-videos/apple-gripper-demo.mp4`, with `video.youtube_id: ''`. Set `video.poster: /images/projects/apple-gripper/poster.jpg` for a custom still image. Large videos can exceed GitHub repository and Pages bandwidth limits; hosted YouTube is more convenient for longer demos. Avoid committing an uncompressed multi-hundred-megabyte file.

## Image gallery

1. Add your JPG / PNG / WebP assets under `images/projects/<project-id>/`. Compress photos first to roughly 1200–1800 px across and use clear descriptive filenames.
2. Open `_data/research.yml` and locate `gallery:` for the project. Add entries in the order they should appear:

```yaml
  gallery:
    - src: /images/projects/haptic-systems/device.jpg
      alt: Photograph of the wearable haptic feedback device
      label: Wearable device
      caption: Photograph of the physical wearable haptic device
      category: prototype
    - src: /images/projects/haptic-systems/test-setup.jpg
      alt: Haptic feedback device arranged in its actual testing setup
      label: Test setup
      caption: Equipment used for haptic feedback testing
      category: experiment
```

3. The gallery auto-renders a responsive thumbnail grid. Click a photo to open the full-size lightbox. Keyboard arrows move between photos, and Escape closes it.
4. Suggested gallery sequence: **final hardware → experiment/test setup → robot in action → published results**. CAD files and prototype-iteration photos are **not required**. For the haptic project, start with a photo of the wearable and a still from the demonstration video. Include accurate captions; avoid posting identifiable participants without appropriate permission.

The missing-media states are deliberate; they show no invented photos or video. You can remove the placeholder by adding the entries above. Gallery entries from existing coauthored papers are credited in the surrounding section; review individual contributions separately.

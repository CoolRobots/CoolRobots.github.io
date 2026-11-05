# Engineering Portfolio — Jackson Bethune

A responsive, modern dark-mode engineering portfolio built with plain HTML, CSS, and JavaScript. No paid hosting, build tools, dependencies, or frameworks required.

## Publish for free on GitHub Pages

1. Sign in at https://github.com and create a **public** repository named `YOURUSERNAME.github.io` (replace YOURUSERNAME with your exact GitHub username).
2. Upload **the contents of this folder**, not the enclosing `engineering-portfolio` folder. The `index.html` file must be at the repository root. On GitHub: **Add file → Upload files**, drag in the files/folders, then **Commit changes**. Alternatively, clone the repository and push the files using Git.
3. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
4. Wait a few minutes, then visit `https://YOURUSERNAME.github.io`.
5. For a different repository name, your URL will instead be `https://YOURUSERNAME.github.io/REPOSITORY/` (relative project links are supported).

## Customize before sharing

- `index.html`: About text, headline, contact links, SEO description. Replace the placeholder LinkedIn URL.
- `script.js`: Edit project names, descriptions, dates, skills, and links. Change `https://github.com/coolrobots` to your actual account if different.
- `projects/*.html`: Each project has its own detail page. Replace prompt text with accurate specifics, photos, test results, and links.
- `assets/`: Add your own photos and optional `resume.pdf`. For card images, set each project's `image` in `script.js`, e.g. `image:'assets/senior-robot.jpg'`.
- `styles.css`: Colors, typography, and layout. Accent color is `--accent`.
- In `script.js`, remove the resume and LinkedIn click-handler blocks after adding your real resume and LinkedIn profile; they intentionally prevent broken links until configured.

**Important:** Project illustrations are generic SVG placeholders, not photos of your work. Buck converter and Formula SAE are marked in progress. Don't claim testing or outcomes you haven't completed. Don't publish proprietary/team-controlled materials without permission.

## Local preview

Double-click `index.html` to open it in your browser. No server needed.

## Robotics dropdown
The homepage navigation includes a **Robotics** dropdown with links to **Junior Year** and **Senior Year** project pages. Click or tap Robotics to expand it; keyboard users can use Enter/Space. Edit the links in `index.html` and the styling at the bottom of `styles.css`.

# Visual editor — GitHub Pages

1. Upload all files in this folder to the root of your GitHub Pages repository (replace matching files).
2. Open `https://coolrobots.github.io/editor.html` after deployment.
3. Edit homepage or project fields in the forms.
4. Click **Download content.json**.
5. In GitHub, open `content.json` and use **Upload files** at the repository root to replace it with the downloaded file. Commit the change.
6. Refresh your live website after Pages redeploys.

For images, upload image files separately into `assets/` in the repository. In the editor, set the image path to `assets/photo.jpg` (home and project pages use the same root-relative project image value; the project detail page needs `../assets/photo.jpg` if viewing from projects/). To use images consistently, enter an absolute site path such as `/assets/photo.jpg` instead.

The editor is publicly accessible, but cannot publish changes; only someone with repository write access can update the website. It is not a password-protected CMS. No third-party authentication or paid services required.

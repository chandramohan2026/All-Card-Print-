# All Card — GitHub Pages PWA

## Upload to GitHub Pages
1. Download and extract this ZIP.
2. Open your GitHub repository and upload the files/folders inside this folder (not the outer folder).
3. Commit the changes.
4. In **Settings → Pages**, select the branch and root (`/(root)`), then Save.
5. Open the published HTTPS URL in Chrome. On a supported device, use **Install app** / **Add to Home screen**.

## Included
- `index.html`: existing All Print Print Manager app, rebranded to All Card.
- `manifest.json`: PWA app name and icons.
- `service-worker.js`: basic same-origin shell caching/offline fallback.
- `assets/icons/`: app icons.

## Important notes
- The app's existing functions and embedded tools were retained; this package adds PWA metadata and branding.
- JavaScript was intentionally not aggressively minified/obfuscated in this build to avoid breaking the large embedded tools. Browser-side code cannot be made secret: anyone who can load a webpage can inspect its client-side code. Keep API secrets and privileged operations on a secured backend.
- Firebase backend/authentication is **not newly connected by this ZIP**. It can be integrated as a separate next step.
- PWA installation requires HTTPS (GitHub Pages provides HTTPS after publishing) or localhost. First load requires internet for external libraries that the original app references.
- Test the deployed site and printing workflow before using it for customers.

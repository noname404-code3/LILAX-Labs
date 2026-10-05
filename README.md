# LILAX Labs Website V2

Premium static website for LILAX Labs.

## Included
- Custom LILAX logo used in the page and browser title-bar/favicon area
- LILAX VPN featured product
- Download count displayed beside every software action
- Toronto, Canada live clock using `America/Toronto`
- Responsive dark premium UI
- Smooth reveal animations and subtle cursor glow
- GitHub release download link for LILAX VPN
- Coming Soon cards for future LILAX products

## Run locally
Open `index.html` directly or use VS Code Live Server.

## GitHub Pages
Upload the contents of this folder to a repository and enable GitHub Pages from the repository settings.

## Download count
The current displayed VPN count is a front-end placeholder (`12.4K`). A real counter requires a backend/analytics source. The UI IDs are already prepared in `index.html` and `script.js` for connecting one later.


## V3 Performance Edition
This version is optimized for lower CPU/GPU usage:
- Removed continuous mouse-following glow
- Removed expensive backdrop blur
- Removed continuously moving ticker animation
- Removed animated large blur filters
- Uses IntersectionObserver for one-time reveal animations
- Keeps animations mostly to compositor-friendly opacity/transform
- Includes reduced-motion support


## V4 Smooth Marquee
The feature strip now runs continuously like a real website marquee:
- Two identical sets create a seamless loop
- Uses only `transform: translate3d()` for animation
- No blur, filters, canvas, JavaScript animation, or layout changes
- `contain: layout paint` reduces repaint scope
- 24-second linear loop keeps movement smooth
- Automatically stops for `prefers-reduced-motion`

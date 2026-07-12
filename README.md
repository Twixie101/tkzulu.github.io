Personal Portfolio — HTML/CSS/JS

Files:
- index.html — main page (edit text, add projects directly here)
- style.css — styles and color variables at the top for easy edits
- script.js — small JS helpers (mobile nav toggle, form behavior)

How to use:
1. Open `index.html` in your browser (double-click or use a server).

Optional: open from PowerShell:

```powershell
Start-Process .\index.html
```

Customization tips:
- Change colors in `:root` variables at the top of `style.css`.
- Change font by editing the Google Fonts link in the head of `index.html`.
- Add new projects by copying a `.project-card` block in `index.html` and updating the image, title and links.
- To enable real contact submissions use an email API (e.g., Formspree, Netlify Forms, or your own endpoint) and replace the mailto logic in `script.js`.

Assets:
- Add your photos and project images into an `images/` folder next to `index.html`.

License: feel free to adapt for personal use.

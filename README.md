# WCC Homeschool Conference Website
## How to Update This Site Each Year

This site is designed so that **one non-technical person** can update all conference content
by editing a single file. No coding knowledge required.

---

## 📁 Folder Structure

```
wcchomeschool.org/
├── index.html          ← Root hub page (update year links here)
├── about/
│   └── index.html      ← Evergreen "About" page (rarely changes)
├── 2026/
│   ├── config.js       ← ⭐ THE ONLY FILE TO EDIT each year
│   └── index.html      ← Auto-populates from config.js (don't edit)
├── 2025/
│   └── index.html      ← Archived 2025 content (don't edit)
└── assets/
    ├── images/
    │   └── speakers/   ← Upload speaker photos here
    └── flyer_2026.jpg  ← Upload the conference poster here
```

---

## ✏️ How to Update for a New Year (e.g., 2027)

### Step 1 — Copy the year folder
Copy the entire `/2026/` folder and rename it `/2027/`.

### Step 2 — Edit config.js
Open `/2027/config.js` in any text editor (Notepad, TextEdit, VS Code).

Update these values:
- `year` — change to "2027"
- `theme` / `themeChinese` — the conference theme for this year
- `dates` — check-in date, conference dates, daily hours
- `location` — venue name, address, Google Maps link
- `registerUrl` — paste the new Zeffy registration link
- `posterUrl` — update to `/assets/flyer_2027.jpg`
- `sessions` — add/remove/rename sessions
- `speakers` — update the list of speakers with names, roles, and bios
- `pastYears` — add `{ year: "2026", url: "/2026/" }` to the list

### Step 3 — Upload photos
Upload speaker photos to `/assets/images/speakers/` and use the filename in each speaker's `photo:` field.

### Step 4 — Update the root homepage
Open `/index.html` and update:
- The "current year" link and button text to point to `/2027/`
- Add `/2026/` to the past conferences list

### Step 5 — Done!
The `/2027/index.html` page reads from `config.js` automatically. No other files need editing.

---

## 🔧 Technical Notes (for the developer)

- No build step, no npm, no framework dependencies
- Pure HTML + CSS + vanilla JS
- Google Fonts loaded via CDN (Playfair Display + Source Sans 3)
- Scroll animations via IntersectionObserver API
- Speaker modal is pure JS, no libraries
- All content is driven by the `CONFERENCE` object in `config.js`
- The `config.js` file uses a global variable (not ES module) so it works without a bundler

### Hosting
Works on any static host: GitHub Pages, Netlify, Vercel, traditional web hosting.
No server-side code required.

### Adding a custom domain
Point your domain's DNS A record to your host's IP, or use a CNAME if on Netlify/Vercel.

---

## 🆘 Common Questions

**Q: Nothing changed after I edited config.js!**
A: Make sure you saved the file, then hard-refresh the browser (Ctrl+Shift+R / Cmd+Shift+R).

**Q: Speaker photos aren't showing.**
A: Check the file path in config.js matches exactly (case-sensitive). Photos must be in `/assets/images/speakers/`.

**Q: How do I add a new session?**
A: In config.js, add a new line inside `sessions: [...]` like:
`{ icon: "🎵", en: "Music in Homeschooling", zh: "在家教育中的音樂" },`

**Q: How do I change the donate instructions?**
A: The donate section text is hardcoded in `/2026/index.html` around line 200 (search for "donate-card").
This is intentional — banking details shouldn't change yearly and are kept separate from config.js.

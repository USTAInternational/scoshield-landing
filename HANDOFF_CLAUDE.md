# Handoff for Claude - scoshield.org landing

## Goal
Publish the static landing page for SCO Shield dedicated servers on `scoshield.org`.

## Source
- Site folder: `D:\ownCloud\2. AI first BIM LLC\16. Servers\scoshield-landing`
- Ready ZIP: `D:\ownCloud\2. AI first BIM LLC\16. Servers\scoshield-landing.zip`

## Files to publish
Upload the contents of `scoshield-landing`, not the parent folder:
- `index.html`
- `styles.css`
- `script.js`
- `assets\favicon.svg`
- `assets\hero-server.png`

## Local preview
From the site folder:

```powershell
python -m http.server 8095 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:8095/
```

## What the page sells
- Dedicated storage servers for geodesy, BIM and project teams.
- Packages:
  - 8 TB from 199,000 KGS
  - 24-32 TB from 299,000 KGS
  - 48+ TB from 399,000 KGS
- Positioning: own server is better than Telegram/WhatsApp, USB flash drives, portable SSD/HDD, Dropbox, OneDrive and other cloud tools for heavy survey/BIM data.

## Contact links
- Phone: `+996 755 405 666`
- Email: `usta.community@gmail.com`
- WhatsApp: `https://wa.me/996755405666`
- Telegram: `https://t.me/+996755405666`
- YouTube: `https://www.youtube.com/@usta_international`

## Publishing checklist
- Confirm all asset paths are relative.
- Confirm `assets/hero-server.png` loads.
- Confirm no horizontal scroll on mobile.
- Confirm contact links open.
- Do not add secrets or API keys to the site folder.

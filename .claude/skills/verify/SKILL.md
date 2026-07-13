---
name: verify
description: How to run and verify the static HTML games in this repo
---

# Verifying the games in this repo

All games are self-contained static HTML files at the repo root (no build step).
`party-game.html` loads React/Babel from the local `lib/` folder and word data
from `words.js` — external CDNs are blocked in the sandbox, so keep deps local.

## Serve

```bash
python3 -m http.server 8931 --bind 127.0.0.1 &   # serve repo root
curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8931/party-game.html
```

Opening via `file://` misses `words.js`-adjacent fetch semantics in some
browsers; always use the HTTP server.

## Drive (Playwright)

- Chromium executable: `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`
  (pass as `executablePath`; the bare `/opt/pw-browsers/chromium` path is a
  directory listing, not a binary).
- `npm install playwright` in the scratchpad works (npm registry is reachable).
- Use a mobile viewport (390x844) — the games are mobile-first.

## Gotchas

- Word cards have a ~0.5s entrance animation (`backwards` fill): screenshots
  taken immediately after render show invisible cards. Wait ~1s before
  screenshotting.
- To fast-forward `party-game.html` to a late-game state, inject
  `localStorage` key `party-game-30s` with
  `{inProgress, teams, settings, current, round, used}` and reload → the
  setup screen offers "Verder met vorig spel".
- The winner check runs when a round completes (after the last team's result
  screen is clicked through), not immediately when a team passes the target.
- Guessing all 5 words ends a turn after ~450ms — use that to skip timer waits.

# Plan: cnonclstudio.com, from "videographer" to Creative Lead

Updated 2026-10-20. Branch `creative-lead` (from `design-pass-1`). Nothing goes live without Can's OK.

## Goal
Visitors read Can as a videographer/editor (FILMMAKING hologram, sitting, editing alone).
New message: "I lead the work: clients, teams, strategy, content systems. I don't operate the camera."

## Fixed rules
- Never: camera, editing timeline, film set, video village / monitor directing (reads as producer).
- Can stands, leads, presents, reviews, thinks. Never sits alone doing craft.
- Wardrobe everywhere: black blazer + black t-shirt. Haircut must match (short dark hair swept back).
- Face may show where needed; Intro only shows him from behind.
- Colours and mood stay as today: Dubai night, dark glass, warm practical light, cool hologram glow.
- No fake numbers, no client logos, no em dashes in copy.
- Every video is a seamless loop: same plate as first and last frame, static camera, cyclical motion only.

## Scene by scene
| # | Scene | Decision |
|---|---|---|
| 1 | Intro | **Change.** Can alone, standing, from behind, looking up at the holograms, thinking. New plate + new loop video. |
| 1b | Intro holograms | **Change 3 cards:** FILMMAKING → CREATIVE DIRECTION; UGC card without fake view numbers; CAN ÖNCÜL card "Creative / Strategist" → "Creative Lead". Other cards stay. |
| 2 | Case Studies | **Change background.** Night boardroom, Can standing presenting storyboards to 3 clients. Cards stay. |
| 3 | UGC | **Change.** UGC control room: wall of 9:16 screens with real looping clips + flow dashboard, Can and 2 teammates reviewing. |
| 4 | Previous Works | Stays. |
| 5 | How I Think | Stays. |
| 6 | Systems I Build | Stays. |
| 7 | Final | Stays (plate, video, CNO robot). |

## 1. Intro
- Plate: edit of today's `plates/intro.jpg` (same room, same camera, same empty glass for the holograms).
  Only change: Can stands behind the desk, back to camera, hands on the desk, looking up at the holograms.
  Candidate: `gen/creative-lead/intro-s1.png`.
- Why holograms and not a phone call: holograms = vision, overview of all the work; a phone call reads as
  account manager / producer and is not a loop-friendly motion.
- Loop video (Can makes it on fal.ai): static camera; he slowly tilts his head toward one card, shifts weight,
  one hand comes up to his chin and goes back to the desk; city lights flicker. The holograms already float in code.

## 1b. Intro hologram cards (transparent PNG, same size and glass style as today)
- `p-film.png` → CREATIVE DIRECTION: wall of key visuals and moodboards. Lines: Brand Platforms / Campaigns / Teams / Clients.
- `p-ugc.png` → UGC SYSTEMS: reel thumbnails, lines: Briefs / Creators / Variants / Testing. No numbers.
- `p-can.png` → same portrait, subtitle "Creative Lead".

## 2. Case Studies
- Plate `plates/case-b.jpg`: night boardroom, Can standing at a big screen with storyboards and key visuals,
  3 clients at the table (backs and profiles). Kept dark so the 5 cards read.
- Copy: "From client brief to big idea."

## 3. UGC control room
- Plate `plates/ugc.jpg`: a flat wall facing the camera with a grid of empty dark 9:16 screens (about 4 x 8)
  and a long dashboard screen beside it. Can and 2 teammates stand in front, Can pointing at one screen.
- Code (`case-cards.js`): real `<video>` tiles placed into the screens, muted loops; every 3-5 s one tile
  cross-fades to another clip; one tile carries a "selected" ring. Plays only while the scene is visible;
  still poster on mobile and with reduced motion.
- Clips: new UGC Can will produce; until then the 22 existing ones.
- Dashboard: no numbers, a flow instead: BRIEF → CREATORS → VARIANTS → TEST → SCALE.
- Copy: label `UGC SYSTEMS`, headline `ONE BRIEF` / `DOZENS OF` / `VARIANTS`,
  sub "I build and run the content engine." / "Brief, creators, variants, testing."
- Needs ffmpeg to shrink the clips.

## Copy (done, not committed)
- Header `Can Öncül · Creative Lead`; hero sub "Creative Lead. Ideas, teams / and systems brought to life.";
  title, og:title, meta description lead with Creative Lead.

## Order of work
1. Can approves this plan.
2. Intro plate (pick or refine `intro-s1`) → Can OK.
3. 3 hologram cards → Can OK.
4. UGC plate + video wall code → Can OK.
5. Case Studies plate → Can OK.
6. Can makes the Intro loop on fal.ai (I hand over plate + prompt + size/duration).
7. Integrate, test desktop + mobile, screenshots, commit on `creative-lead`.
8. Live only after Can's OK.

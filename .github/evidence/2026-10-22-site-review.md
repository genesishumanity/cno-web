# Site changes and review — 2026-10-22

## Delivered locally
- Restored the pre-centered Works design from 6ee7779: title upper left, three short upper rows and four lower rows, original hover size. Kept loading posters and all existing 117 manifest entries/descriptions unchanged.
- Added 15 existing campaign images to Works (117 -> 132 total; 55 -> 70 still images). Each addition explicitly says CONCEPT and describes a proposal; no new client-result claims.
- UGC wall: replaced the eight-live-video cap with the actual 7 x 3 tile count. All 21 screens remain video. Reduced-motion posters and inactive-scene pausing preserved.
- Added a portrait UGC grid because the original cinematic wall was outside the phone viewport.
- Cache keys: design-pass.css v21, case-cards.js v40.

## Validation
- node --check case-cards.js; git diff --check: PASS.
- Browser check .github/checks/site.cjs: PASS on local Chromium, desktop 1440 x 900 and phone emulation 390 x 844.
- Verified 7 Works rows; upper-left heading; preserved subtitle and hover descriptions; all 132 local media paths exist.
- All 21 UGC video tiles have decoded frames, unpaused state and advancing playback; still videos after cross-fade; paused when leaving scene; 21 posters under reduced motion.
- All 21 phone UGC tiles fit within viewport.
- Separate Chromium decoding check: all 32 UGC source MP4s played and advanced (script at /tmp/cno-site-review/all-clips.cjs).
- Existing 117 manifest objects compared with HEAD and confirmed unchanged.
- Browser page errors: none. Screenshots retained at /Users/cno/cno-web-handoff/review-20261022.
- Production: GitHub Pages confirmed built for 509c82e0f7409d3e5e1879f400e845a51a8d584d. Fresh browser regression against https://cnonclstudio.com passed: 132 entries, 21/21 playing UGC screens, preserved descriptions/hover, reduced motion, inactive pausing and portrait bounds. No page errors. This evidence-only follow-up changes no runtime assets.

Reproduce browser check with local HTTP server on port 18765 and PLAYWRIGHT_MODULE, CHROMIUM_EXECUTABLE pointing to the installed tools, then node .github/checks/site.cjs. BASE_URL can target production.

## Design assessment
Reviewed all seven desktop scenes and phone Works, UGC, Contact.
- Intro: coherent warm cinematic identity; the left-aligned title provides a strong reading order. Preserve it.
- Cases: campaign images integrated into the wall make the story distinctive. Small labels and clickable-image affordance are weak; concept/proposal status should remain explicit.
- Works: upper-left copy gives the collection a stable anchor and matches the rest of the site. Many moving tiles still compete for attention; curated selection matters more than adding near-duplicates.
- UGC: the 8/21 playback cap and offscreen phone wall were functional problems; addressed here. The 21 simultaneous videos increase decode/network use; real low-power phones remain untested.
- Thinking: warm light, human and robot story fit the site; a visible problem-to-decision example would substantiate the general statement more strongly.
- Systems: visually strong but the four restricted-system links lead to an access-restricted message. Public previews/status would make the section more useful. Not changed in this scoped patch.
- Contact: CTA and email work as clear next actions. Phone header navigation is extremely small and tightly packed; a dedicated mobile-navigation pass is the next design priority.
- Accessibility: hover-only Works descriptions and non-semantic clickable case wrappers remain weak for keyboard/touch users. No claim of WCAG compliance or measured contrast audit.

## Limits / rollback
Real iOS Safari, Android devices, low-power mode and throttled-network performance were not tested. Native browser autoplay policies still apply. Restore the release parent with git revert to roll back this scoped commit. Do not reset or overwrite unrelated work.

## Library follow-up and visual audit
- Added three existing Healthy Socks campaign concepts, two original Aquadrop images and two new AI-generated Aquadrop variations (alpine lake and studio ice/splash). Library: 132 -> 139. Originals copied to Desktop/untitled folder/Aquadrop-Variations.
- Small Talk footage was already present as real-promo.mp4; identified by comparing decoded frames with the source. Renamed its title to Small Talk: promo film; no duplicate video added. Metal-chain phone-case work excluded as requested.
- New image descriptions distinguish concepts and AI-generated variations; original Aquadrop poster remains an existing concept artifact, not a verified award claim.
- Updated browser regression's expected manifest count. Narrow local browser check: 139 entries, all seven added images decode at declared dimensions, one named Small Talk entry, no excluded phone-case series, seven Works rows. PASS. git diff --check: PASS.
- Broader existing regression reached mobile navigation but timed out waiting for networkidle while multiple audit browsers were active. Do not claim a fresh full UGC regression pass from this run. No UGC runtime changes in this follow-up.
- Visual review: viewed all seven scenes at 1440x900 and 390x844. Evidence screenshots: /Users/cno/cno-web-handoff/review-20261022-library (work and think are the actual Cases/Thinking scene hashes).
- Findings: warm amber palette and left-aligned text are coherent; intro shows solitary ideation despite teams in copy; Cases convincingly shows client presentation; UGC is busy but shows production breadth; Thinking/Systems/Contact repeat solitary person/robot imagery. Systems introduces a colder cosmic environment and abstract symbols rather than product evidence.
- Mobile: intro/Thinking/Contact crop out the principal people; Cases wall is outside viewport; Systems cards extend offscreen; header links are too small and crowded. These existing design issues are review findings only; no hero/layout changes made pending user's feedback.
- Production verification after commit 26a40ac: https://cnonclstudio.com served all 139 entries; all seven new images decoded at declared dimensions; one named Small Talk entry; excluded phone-case series absent; Works rendered seven rows. Narrow Chromium check PASS.
- Remaining: actual phone/Safari checks and human acceptance of the two generated concepts; minor AI-generated bottle lettering is not print-ready typography.

## Library hover caption fix and hero concept — 2026-10-23
- Replaced the fixed 92px caption budget and two-line description clamp with measured full-caption height; kept full copy visible, wrapping long words, and constrained hover width/placement to the viewport. CSS/JS cache keys advanced.
- Added .github/checks/library-caption.cjs; all 139 manifest entries fit at 1440x900 and 800x600. Node syntax and git diff checks pass.
- Built a standalone, unshipped homepage concept at /Users/cno/cno-web-handoff/hero-preview-20261022/preview.html with desktop and mobile screenshots. Current headline and support copy retained; generated new landscape and portrait collaborative studio art. Mobile has its own composition and readable safe space.
- No homepage source assets/layout changed. User requested review before deciding; concept awaits feedback.
- ClaimQI source check: ChatGPT library is not exposed to connected tools. Existing local campaign deck/PDF and ClaimQI-storyboard-v3.png are present; compared local work/claimqi assets and contact sheet. They use the same dark navy/cyan concept but differ in storyboard artwork/layout; cannot establish that original ChatGPT library files are available from current access.
- Remaining: user's creative acceptance of hero direction; user may provide ChatGPT Library images if direct account access is desired.

- Production deployment of hover caption fix verified 2026-10-23: live HTML serves design-pass.css v22 and case-cards.js v41; all 139 live captions fit within hover cards at 1440x900 and 800x600. PASS.

/* Case cards: opens a swipeable "case file" when a Case Studies card is clicked. Additive only. */
(function(){
var ROLE="Strategy, concept, creative direction";
var mq=document.createElement('style');mq.textContent='.ccmq{-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}.ccmq-t{display:inline-block;white-space:nowrap;animation:ccmq 40s linear infinite;will-change:transform}.ccmq-t span::after{content:"\\00b7";margin:0 1.6em;opacity:.55}@keyframes ccmq{to{transform:translateX(-50%)}}';document.head.appendChild(mq);
var A="/work/atorie/frames/",D="/work/dolce/frames/",Q="/work/claimqi/",V="/work/vw/",S="/work/saffron/";
var CASES=[
/* 0 — VOLKSWAGEN TIGUAN */
{brand:"Volkswagen Tiguan",cat:"AUTOMOTIVE",title:"I choose VW for my family.",idea:"Choose enough.",role:ROLE,
 brief:"In Dubai a car is often chosen for the people outside it. The family inside pays for it every day.",
 insight:"The family that matters is inside the car, not watching from the street.",
 slides:[
 {k:"THE TENSION",h:"A car bought for everyone else.",quote:"Status for others. Life for the family.",p:["In the Gulf a car can be a status object. Big SUVs, tight parking, kids climbing down from a seat that's too high.","I never attack luxury owners. I let the inconvenience speak."],big:["Status for others.","Life for the family."],bg:V+"arrival.jpg"},
 {k:"THE REFRAME",h:"Who are you choosing this for?",p:["The category asks what people will think. I ask something else, and the Tiguan becomes the choice of someone with nothing left to prove."],list:["The category asks: what will people think when they see my car?","I ask: who am I actually choosing this car for?"],big:["What will people think?","Who am I choosing this for?"],bg:V+"family2.jpg"},
 {k:"THE PROMISE",h:"Self-assurance, not compromise.",quote:"Luxury asks: what will people think? Volkswagen asks: who cares?",p:["The buyer should feel: I know what matters to me. I don't need a bigger badge to prove my success. I made the smarter choice, and I'm comfortable enough to smile at the status race instead of joining it.","Calm, amused, never bitter."],big:["Choose","enough."],bg:V+"family.jpg"},
 {k:"HERO FILM",h:"Four scenes. One wink.",p:["Comedy that stays cinematic. The joke is the situation, never the people in it."],frames:[[V+"family.jpg","The setup","A villa community at golden hour. The Tiguan family waits for friends, relaxed and natural."],[V+"arrival.jpg","The arrival","A large prestige SUV enters the street. Impressive, until the parking space is too tight."],[V+"struggle.jpg","The struggle","Forward, back, forward again. A father exhausted, a mother squeezing out, a child lowering herself from the high seat."],[V+"family2.jpg","The contrast","Back to the Tiguan family. One parent watches, a small smile, a subtle wink. No speech."]],cols:2,ar:"11/6",why:"The wink defines the brand: Volkswagen is not jealous, not defending itself and doesn't need to prove anything."},
 {k:"OOH + TONE",h:"The restraint is the message.",quote:"I choose VW for my family.",p:["Baby-blue background, the Tiguan family from the film, one italic line. Deliberately minimal against Dubai's crowded signage."],list:["Witty, premium, understated, a little cheeky","The joke is about unnecessary excess, never about wealth","No attacking luxury, no calling buyers idiots, no “cheap option” framing"],img:V+"billboard.jpg"}
 ]},
/* 1 — SAFFRON & CO. */
{brand:"Saffron & Co.",cat:"HOSPITALITY",title:"Don't bother at home. Come to us.",idea:"Nobody goes to a restaurant just for the food.",role:ROLE,
 brief:"A premium brunch place in Dubai with three locations. Beautiful product, invisible online.",
 insight:"Nobody goes to a restaurant just for the food. They go for the people.",
 slides:[
 {k:"THE CHALLENGE",h:"Strong product. No story.",p:["Three locations, a beautiful space, expats and Emiratis aged 25–40. The content was polished food shots and menu updates, and nobody reacted.","None of it carried the founder's idea: families gathering."],list:["Audience: 25–40, expats and Emiratis","Content: food photography, menu updates","Result: no engagement, no story"],big:["Great food.","No reason to care."],bg:S+"kitchen.jpg"},
 {k:"THE INSIGHT",h:"It was never about brunch.",quote:"They go for the people. People just like them.",p:["Food is available at home. What's scarce is a table with people like you.","Saffron's real product is belonging, and the brand had never said so."],big:["Not brunch.","Belonging."],bg:S+"table.jpg"},
 {k:"THE IDEA",h:"Radical honesty.",quote:"Don't bother at home. Come to us.",p:["Cooking at home is a burden. Saffron offers a way out, of the kitchen and of isolation.","Saffron becomes the place where families come alive, not just a place where they eat."],big:["Don't bother at home.","Come to us."],bg:S+"entrance.jpg"},
 {k:"HERO FILM",h:"From heavy to warm.",p:["Same family, two worlds. The music only arrives at Saffron."],frames:[[S+"kitchen.jpg","The struggle","A Saturday morning at home. A tired mother, a restless child, a father scrolling. No music, only domestic fatigue."],[S+"phone.jpg","The turn","A phone buzzes. A WhatsApp from a smiling friend at Saffron. The parents exchange a glance."],[S+"table.jpg","The arrival","A wide table, warm light, the same family transformed. Laughter, leaning in, food arriving, unhurried."],[S+"entrance.jpg","The close","The screen blurs. Don't bother at home. Come to us. Warm, upbeat music."]],cols:2,ar:"11/6",why:"The product is the same family, transformed. Home feels heavy; Saffron feels like belonging."},
 {k:"INFLUENCER STRATEGY",h:"People trust people like them.",quote:"Warm, spontaneous and honest, not staged.",p:["5–8 Dubai family micro-creators (50K–200K followers) visit Saffron with their real families, documenting it without a script."],list:["Real families, not actors","No script, no staging","Mirrors the insight: people trust people who are like them"],big:["5–8 families.","Zero scripts."],bg:S+"phone.jpg"},
 {k:"PROJECTED TARGETS",h:"Where this should land.",p:["Working targets within three months of launch. Not results."],stats:[["+40–60%","Engagement rate"],["+25–35%","Family-first perception"],["+20%","Follower growth"],["+20%","Weekend family bookings"]]}
 ]},
/* 2 — CLAIMQI */
{brand:"ClaimQI",cat:"B2B · AI HEALTHCARE",title:"Not more flags. Better decisions.",idea:"Know when not to act.",role:ROLE,
 brief:"Payer teams are drowning in flags. More noise, and the valuable cases get lost.",
 insight:"The better question isn't “does this look suspicious?” It's “does this deserve action?”",
 slides:[
 {k:"THE OPPORTUNITY",h:"A stronger story than “AI that finds suspicious claims.”",quote:"Not more flags. Better decisions.",p:["The old question is about probability and anomaly. The better one is about evidence, rules, policy and determination."],list:["Old question: does this claim look suspicious?","Better question: does this claim actually deserve action?"],img:Q+"art-cover.jpg"},
 {k:"THE STAKES",h:"The wrong decision costs more than the missed flag.",quote:"Deciding with confidence.",p:["It isn't about finding more. It's about deciding with confidence."],list:["Missed flags: higher risk, higher costs, real consequences","Better decisions: healthier systems, stronger outcomes, greater trust"],img:Q+"art-stakes.jpg"},
 {k:"FILM 01 · PRECISION",h:"The right target.",quote:"Signal. Evidence. Decision.",p:["In a world of signals, ClaimQI knows when the evidence is strong enough to act."],img:Q+"art-film1.jpg",frames:[[Q+"frames/f1-1.jpg","The contest","A stadium of signals. Everything demands attention."],[Q+"frames/f1-2.jpg","The calm","ClaimQI goes still and reads the evidence."],[Q+"frames/f1-3.jpg","The shot","One decision, released only when it is ready."],[Q+"frames/f1-4.jpg","The result","Right target. Right action."]],cols:4,why:"Precision is the product: the shot only leaves the bow when the evidence is strong enough."},
 {k:"FILM 02 · JUDGMENT",h:"False alarm.",quote:"Know when not to act.",p:["The smartest system isn't the one that reacts fastest. It's the one that knows when not to act."],img:Q+"art-film2.jpg",frames:[[Q+"frames/f2-1.jpg","The sound","Something moves in the dark."],[Q+"frames/f2-2.jpg","The panic","The systems around it react. Alarms everywhere."],[Q+"frames/f2-3.jpg","The scan","ClaimQI scans before acting."],[Q+"frames/f2-4.jpg","The reveal","Harmless. Not every signal deserves action."]],cols:4,why:"The film shows the product's real value: restraint, backed by evidence."},
 {k:"FILM 03 · CONTEXT",h:"Upon request.",p:["The third film is a teaser built on withheld context."],big:["Some stories","are worth","waiting for."],bg:Q+"art-stakes.jpg"},
 {k:"THE SYSTEM",h:"Three films. One product story.",list:["Prevent: find where to look","Core: know what's actually wrong","Insights: see the bigger picture","Probability → Evidence → Decision"],img:Q+"art-three.jpg"},
 {k:"THE CONTENT SYSTEM",h:"One story, built to travel.",p:["LinkedIn, YouTube and Meta, plus executive content, industry media and expert collaborations."],list:["3 hero films","Cutdowns","Multi-format assets","Distribution"],big:["3 hero films","Cutdowns","Every format","Every channel"],bg:Q+"art-cover.jpg"},
 {k:"THE OUTCOME",h:"More than content. A stronger position.",list:["Clearer position","Faster buyer understanding","Stronger sales alignment","Higher memorability","More qualified conversations","More pipeline opportunity"],img:Q+"art-end.jpg"}
 ]},
/* 3 — ATORIE */
{brand:"Atorie",cat:"FASHION",title:"good enough.",idea:"The product is good enough. So is the person.",role:ROLE,
 brief:"Atorie sells quality fashion at lower markups. Said as “luxury for less,” it still sounds like the cheaper option.",
 insight:"I think people want more than value. They want to feel confident in the choice, and already enough.",
 slides:[
 {k:"THE THINKING",h:"Everyone says: be more.",quote:"The product is good enough. The person already is too.",p:["Fashion and social pressure keep pushing the same message. I went the other way.","What I thought was missing: people want to feel confident about the choice, desirable and culturally current, and already enough."],list:["The product is good enough. The quality is genuinely there.","The person is already good enough. They don't need a more expensive object to prove anything.","From there: a hero film, product proof, a campaign bag and a reaction language. Then GUDINAF, which should actually launch first."],big:["be more.","show more.","prove more.","buy more.","good enough."],bg:A+"hero-1.jpg"},
 {k:"HERO FILM",h:"She keeps walking.",quote:"Atta girl.",p:["Voices follow her through changing places: “Could be better.” “You should…” She never stops, explains herself or proves anything.","Crash zoom to the bag. The voices cut. Silence. A woman says, “Atta girl.” She smiles slightly, as if someone finally understood, and keeps walking out of frame."],frames:[[A+"hero-1.jpg","She walks","She moves forward. Confident. No rush."],[A+"hero-2.jpg","The voices","People talk. Opinions everywhere. She hears it, but doesn't stop."],[A+"hero-3.jpg","Different places","Different environments. Same pressure. Same walk."],[A+"hero-4.jpg","The bag","A closer look. More is not always better."],[A+"hero-5.jpg","The turn","Finally, a different voice. She smiles."],[A+"hero-6.jpg","She keeps going","Same person. Different places. Still enough."]],cols:3,ar:"1/1",why:"The pressure never gets to direct her. The film shows the stance without a single speech."},
 {k:"PRODUCT FILM",h:"Show the quality.",quote:"What about the stitching?",p:["The first film is about the person. The second answers the product question. A question, then the evidence: fabric, seam, construction, finish.","We don't answer every question with “good enough.” That could sound like “just okay.” Quality first. Only at the end: good enough."],cap:"Final product proof would use Atorie's real materials and manufacturing.",frames:[[A+"prod-1.jpg","The question","She looks closer. She asks the real questions."],[A+"prod-2.jpg","The fabric","A close look at the material. Texture, grain, feel."],[A+"prod-3.jpg","The stitching","Precise. Strong. Built to last."],[A+"prod-4.jpg","The manufacturing","Skilled hands. Real production."],[A+"prod-5.jpg","The construction","Thoughtful design. Made properly."],[A+"prod-6.jpg","The finish","Every detail matters."],[A+"prod-7.jpg","The details","Inside and out. Considered design."],[A+"prod-8.jpg","The result","High quality. Without the unnecessary markup."],[A+"prod-9.jpg","The message","Exactly what you need."]],cols:3,ar:"3/2"},
 {k:"THE BAG + REACTION LANGUAGE",h:"Something people can carry. Something people can say.",quote:"Someone posts something. The reply is: good enough.",p:["The campaign bag: oversized, brown leather, slouchy, relaxed, premium, with large beige good enough. lettering and soft, almost liquid edges. A real object people could want to carry for what it says as much as for the brand.","The reaction language: the woman and the bag as a GIF, the bag on its own, stickers, story replies, animated lettering, meme formats."],list:["Let people use the words themselves","The bag makes it visible","GIFs, stickers and memes make it something people use with each other"],img:"/work/atorie/bag.jpg"},
 {k:"PRE-LAUNCH · FIRST APPEARANCES",h:"GUDINAF comes first.",quote:"Something is coming.",p:["Before the hero film. Before the main campaign. Almost no explanation. It sounds like a word, a name or a code. We don't explain it yet.","Small sightings first, then the questions. It warms the audience and lets Atorie test the response before the main drop."],cap:"Concept storyboard, including illustrative social posts. Posts and engagement are concept mockups, not real reactions.",frames:[[A+"gud-1.jpg","The billboard","A simple sight in the city. No explanation. Just a word. GUDINAF."],[A+"gud-2.jpg","The poster","Spotted in different neighborhoods. No logo. No context. Just GUDINAF."],[A+"gud-3.jpg","The sticker","Small, but everywhere. People start noticing."],[A+"gud-4.jpg","The bag","A few bags appear. No post. No announcement."],[A+"gud-5.jpg","People notice","The first posts start to appear. What is GUDINAF? Everyone has a different theory."],[A+"gud-6.jpg","Theories","People start connecting the dots. A brand? A campaign? A message? No one knows for sure."],[A+"gud-7.jpg","The conversation grows","It spreads across platforms. People share photos, theories and memes."],[A+"gud-8.jpg","The first official post","Atorie finally joins the conversation. Still no explanation. And now everyone is talking."]],cols:4,ar:"328/362"},
 {k:"PRE-LAUNCH · SPECULATION",h:"“What is GUDINAF?”",quote:"Is it German? A person? A new brand?",p:["People guess, search and talk. Their own theories are part of the idea.","Atorie can watch whether the word creates curiosity before committing to the main drop. Watch searches, real mentions, shares and visits. These test attention and interest, not sales."],cap:"Illustrative collage. Posts, profiles and engagement are concept mockups, not actual public reaction.",img:"/work/atorie/speculation.jpg"},
 {k:"PRE-LAUNCH · PRESS MOMENT",h:"A question. A flash. A wink.",quote:"She just winks.",p:["If the curiosity reaches the press, keep the mystery going. Evening, outside a company building. A group of executives comes down the steps. A reporter holds out a microphone. Camera flashes. One woman just winks.","No explanation. She keeps moving. The answer comes later, with the campaign."],cap:"AI concept image of a proposed scene, not a real press event or a depiction of confirmed Atorie executives.",img:"/work/atorie/press.jpg"},
 {k:"THE REVEAL",h:"Then, BAM.",quote:"“Oh. That is what it was.”",p:["The main campaign arrives after people have had something to wonder about. The word gets its meaning. The feeling gets its film. The quality gets its proof.","That is why the mystery comes first: test the market and heat the audience before the main campaign. Real response decides how far to take it."],list:["01 Seed the mystery. Small GUDINAF sightings, almost no explanation.","02 Watch the response. Speculation, searches and conversation. The press moment if interest develops.","03 Reveal and drop. GUDINAF = good enough. The hero film, product film, bag, GIFs, stickers and memes."],big:["GUDINAF","=","good enough."],bg:A+"gud-1.jpg"},
 {k:"AFTER THE REVEAL",h:"Are people still using it?",quote:"The mystery is answered. Now test whether the feeling stays.",p:["Keep good enough. and GUDINAF in circulation through memes, GIFs and replies, so people can use them in their own situations.","Watch repeat use, new reactions and return visits. Keep what people use. If it feels played out, move on."],cap:"Illustrative meme collage, not measured results. Proposal by Can Öncül, not commissioned or endorsed by Atorie.",img:"/work/atorie/memes.jpg"}
 ]},
/* 4 — DOLCE GLOW */
{brand:"Dolce Glow",cat:"BEAUTY",title:"Two ways to tell the glow.",idea:"Make the glow precious. Then make room for life.",role:"Concept, treatment, visual direction",
 brief:"Blush Me is a self-tanning blush whose colour develops over time. How do you show a glow that stays?",
 insight:"Feeling good in your skin and checking it all day don't go together.",
 slides:[
 {k:"THE STARTING POINT",h:"Where the idea begins.",p:["Blush Me is a self-tanning blush. Its colour develops over time; the brand describes a natural-looking blush tan that lasts beyond makeup."],list:["Product: a glow that stays","People: a moment to enjoy. The tension between feeling good in your skin and checking your appearance","Place: an Italian world. The founder's roots and the Amalfi coast"],big:["Product.","People.","Place."],bg:D+"jw-1.jpg"},
 {k:"FILM 01 · JEWELER / GOLD",h:"What if glow were the jewel?",quote:"Desire, anticipation and quiet delight.",p:["I put Blush Me somewhere unexpected: an Amalfi jeweller. Silver, gold, then diamond. Each presentation builds anticipation.","The final box opens. We see her reaction before we see Blush Me. She leaves it on display, preserving the ritual."],cap:"AI-created direction studies.",frames:[[D+"jw-1.jpg","Place","Amalfi limestone, sea and sun."],[D+"jw-2.jpg","Interior","Walnut, glass, aged brass."],[D+"jw-3.jpg","Cast & styling","Self-possessed. Cream silk, real skin."],[D+"jw-4.jpg","Texture","Dense velvet. Restrained gold."],[D+"jw-5.jpg","Gesture","Gloved hands. A slow reveal."],[D+"jw-6.jpg","Light & detail","Hard daylight. Intimate interiors."]],cols:3,ar:"1/1",why:"A familiar luxury ritual creates an unexpected ending. The product earns the last reveal."},
 {k:"FILM 01 · STORYBOARD",h:"Silver. Gold. Diamond.",quote:"Hello, could I see what you have?",p:["Fourteen shots: the coast, the shopfront, the door bell, the greeting, the presentation, silver, gold, diamond, the final piece, her reaction, the reveal, the exit."],img:"/work/dolce/jeweler-board.jpg"},
 {k:"FILM 02 · TAKE IT AND ENJOY IT",h:"Less checking. More living.",quote:"“Take it and enjoy it.”",p:["One woman is present in her day; another keeps interrupting hers to check her makeup. Morning, midday and dinner play in split screen.","The frame opens into a shared bathroom: the women are strangers in the same restaurant. A visible handoff gives the line its meaning."],cap:"AI-created direction studies.",frames:[[D+"tk-1.jpg","Morning","Soft window light, visible skin texture."],[D+"tk-2.jpg","Daytime","Movement, ease and natural gestures."],[D+"tk-3.jpg","Contrast","Distraction, played with restraint."],[D+"tk-4.jpg","Shared space","Cream marble, terracotta, warm mirrors."],[D+"tk-5.jpg","The handoff","Show the product passing between hands."],[D+"tk-6.jpg","Evening","Candlelight, laughter, attention returned."]],cols:3,ar:"1/1",why:"The visual contrast is easy to follow, and the shared space and small act of kindness give it a human ending."},
 {k:"FILM 02 · STORYBOARD",h:"Relief, generosity, connection.",quote:"Take it and enjoy it.",p:["Morning, midday, dinner, the shared mirror, back to the table, the product reveal. The handoff expresses relief, not an instant tanning effect: the colour develops over twelve hours."],img:"/work/dolce/takeit-board.jpg"},
 {k:"FROM BOARDS TO FILM",h:"A clear first week.",p:["About a week for a chosen direction. AI cuts the cost of early visual exploration. A final production budget follows the agreed scope."],scenes:[["Shape","Lock one direction, dialogue and timing. Keep the jeweller's reveals precise; map the restaurant and mirror geometry."],["Visualise","Use AI to explore casting, light, locations and shot continuity. Build keyframes and a rough animatic before committing to a shoot."],["Refine","Review pacing, product visibility and the handoff. Deliver a visual plan and previsualization for production discussion."]]}
 ]}
];
var EXTRA={
"Volkswagen Tiguan":{
 chain:["VW sits at the edge of the family-car conversation in a status-first market.","The family that matters is inside the car, not watching from the street.","I choose VW for my family.","A villa street, a prestige SUV that can't park, and a wink.","Witty, premium, understated. Baby-blue and minimal."],
 rollout:{go:["Hero film on YouTube and digital OOH in Dubai","Minimal baby-blue signage, one line","Social cutdowns of the parking scene"],watch:["Consideration among families","Shares and saves of the film","The wink: does the line get repeated?"]}},
"Saffron & Co.":{
 chain:["Three locations, a strong product, and no story or engagement online.","Nobody goes to a restaurant just for the food. They go for the people.","Don't bother at home. Come to us.","A heavy Saturday at home becomes a warm table, voiced by real families.","Warm, honest, unscripted."],
 rollout:{go:["60-second hero film across Instagram, TikTok and YouTube","5–8 family micro-creators, visiting for real","Weekend family table as the recurring format"],watch:["Engagement rate against today's baseline","Shift to family-first perception","Weekend family bookings"]}},
"ClaimQI":{
 chain:["Payer teams drown in flags, and “AI finds suspicious claims” is a generic story.","The cost of the wrong decision is bigger than the cost of the missed flag.","Not more flags. Better decisions.","Three films: Prevent, Core, Insights. One product story.","Cinematic, precise, quiet confidence in a cool-blue world."],
 rollout:{go:["Three hero films, then cutdowns and multi-format assets","LinkedIn, YouTube and Meta","Executive content, industry media, expert collaborations"],watch:["Quality of response, not just reach","Qualified conversations","Pipeline opportunity"]}},
"Atorie":{
 chain:["Quality at lower markups risks reading as the cheaper option.","Fashion says be more. People want to feel they're already enough.","good enough.","A woman who keeps walking, a bag people carry, a word people say.","Warm, dark, restrained. Brown leather and a quiet serif."],
 rollout:{go:["Seed GUDINAF: billboard, poster, sticker, bag","Press moment if curiosity builds","Reveal and drop: hero film, product film, bag, GIFs, stickers, memes"],watch:["Searches, real mentions and shares","Whether the word creates curiosity","Repeat use after the reveal"]}},
"Dolce Glow":{
 chain:["A glow that develops over twelve hours is hard to show in one moment.","Feeling good in your skin and checking it all day don't go together.","Two ways to tell the glow.","A jeweller's reveal, and a shared mirror in a restaurant.","Amalfi warmth. Velvet, gold, real skin."],
 rollout:{go:["Film 1 and Film 2 as a pair: the precious reveal, the human moment","One week from boards to rough animatic","A production budget follows the agreed scope"],watch:["Pacing and product visibility","Which film carries the line best","Relief, not an instant tan, in the handoff"]}}
};
CASES.forEach(function(c){var e=EXTRA[c.brand];if(e){c.chain=e.chain;c.rollout=e.rollout}});

var fl=document.createElement('link');fl.rel='stylesheet';fl.href='https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap';document.head.appendChild(fl);
var G="#e3b982",LN="rgba(255,255,255,.14)";
var css=document.createElement('style');
css.textContent=
".cc-ov{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.78);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:18px;font-family:'Inter Tight',system-ui,sans-serif;color:#f4f5f7}"+
".cc-ov.on{display:flex}"+
".cc-pn{width:min(1280px,100%);height:min(88vh,800px);background:linear-gradient(160deg,rgba(16,17,20,.97),rgba(5,5,6,.98));border:1px solid "+LN+";border-radius:14px;box-shadow:0 0 0 1px rgba(227,185,130,.06),0 30px 120px rgba(227,185,130,.07);display:grid;grid-template-rows:auto 1fr auto;overflow:hidden}"+
".cc-hd{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;border-bottom:1px solid "+LN+";font-size:11.5px;letter-spacing:.22em;color:#9aa0a6;gap:12px}"+
".cc-hd b{color:#fff;font-weight:600;letter-spacing:.2em}.cc-hd i{font-style:normal;color:"+G+"}"+
".cc-x{background:none;border:1px solid "+LN+";color:#fff;width:34px;height:34px;border-radius:50%;cursor:pointer;font-size:14px;flex:none}"+
".cc-bd{display:grid;grid-template-columns:1.3fr 1fr;min-height:0}"+
".cc-md{position:relative;overflow:hidden;background:#050505;border-right:1px solid "+LN+";min-height:0;display:flex}"+
".cc-md .bg{position:absolute;inset:-30px;background-size:cover;background-position:center;filter:blur(34px) brightness(.32) saturate(.8);transform:scale(1.1)}"+
".cc-pd{position:relative;flex:1;padding:24px;display:flex;flex-direction:column;gap:8px;min-height:0;min-width:0}"+
".cc-im{flex:1;min-height:0;border:1px solid "+LN+";border-radius:4px;background-size:contain;background-position:center;background-repeat:no-repeat;background-color:rgba(0,0,0,.35)}"+
".cc-md.cover .cc-im{background-size:cover;border:0;border-radius:0}.cc-md.cover .cc-pd{padding:0}"+
".cc-fg{display:grid;gap:6px;min-height:0}"+
".cc-fg.solo{flex:1;align-content:center}.cc-fg.solo .cc-f{aspect-ratio:var(--ar,1/1)}.cc-fg.row{height:30%;flex:none}"+
".cc-f{position:relative;border:1px solid "+LN+";border-radius:3px;overflow:hidden;background:#000;min-height:0}"+
".cc-f img{width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.92) contrast(1.04)}"+
".cc-f:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0) 55%,rgba(0,0,0,.78))}"+
".cc-f span{position:absolute;z-index:1;left:9px;bottom:7px;right:6px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"+
".cc-f span em{font-style:normal;color:"+G+";margin-right:6px}"+
".cc-big{position:relative;padding:44px;display:flex;flex-direction:column;justify-content:center;flex:1;font-size:clamp(30px,4vw,62px);font-weight:700;letter-spacing:.015em;line-height:1.02;text-transform:uppercase}"+
".cc-big span{display:block;color:rgba(255,255,255,.42)}.cc-big span:last-child{color:#fff}"+
".cc-sc{display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1;min-height:0}.cc-sc.three{grid-template-columns:1fr}"+
".cc-s{border:1px solid "+LN+";border-radius:3px;padding:18px;background:rgba(255,255,255,.02);display:flex;flex-direction:column;gap:8px;min-height:0;overflow:hidden}"+
".cc-s em{font-style:normal;color:"+G+";font-size:12px;letter-spacing:.2em}"+
".cc-s b{font-size:15px;letter-spacing:.14em;text-transform:uppercase;font-weight:600}"+
".cc-s p{margin:0;font-size:14.5px;line-height:1.5;color:#c9cdd2}"+
".cc-st{display:grid;grid-template-columns:1fr 1fr;gap:6px;flex:1}"+
".cc-st div{border:1px solid "+LN+";border-radius:3px;padding:20px;display:flex;flex-direction:column;justify-content:center;gap:8px;background:rgba(255,255,255,.02)}"+
".cc-st b{font-size:clamp(32px,3.6vw,54px);font-weight:700;color:"+G+";letter-spacing:-.01em}"+
".cc-st span{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#9aa0a6}"+
".cc-tx{padding:30px 34px;overflow:auto;overscroll-behavior:contain;min-height:0;position:relative}"+
".cc-num{position:sticky;top:100%;text-align:right;font-size:clamp(90px,11vw,170px);font-weight:700;line-height:.8;letter-spacing:-.04em;color:rgba(255,255,255,.045);pointer-events:none;margin-top:30px;user-select:none}"+
".cc-k{font-size:11px;letter-spacing:.24em;color:"+G+";margin-bottom:14px}"+
".cc-tx h2{margin:0 0 18px;font-size:clamp(24px,2.5vw,36px);font-weight:700;letter-spacing:.02em;line-height:1.1;text-transform:uppercase}"+
".cc-tx p{margin:0 0 13px;font-size:16.5px;line-height:1.55;color:#d3d7dc}"+
".cc-tx ul{margin:8px 0 12px;padding:0;list-style:none}"+
".cc-tx li{font-size:15.5px;line-height:1.45;color:#d3d7dc;padding:10px 0;border-top:1px solid "+LN+"}"+
".cc-tx li:first-child{border-top:0}"+
".cc-note{margin-top:16px;font-size:12px;line-height:1.5;color:#7c838b;border-top:1px solid "+LN+";padding-top:10px}"+
".cc-ch>div{display:grid;grid-template-columns:28px 1fr;column-gap:10px;padding:9px 0;border-top:1px solid "+LN+"}.cc-ch>div:first-child{border-top:0}.cc-ch em{font-style:normal;color:"+G+";font-size:11px;letter-spacing:.14em;grid-row:span 2;padding-top:2px}.cc-ch b{font-size:10px;letter-spacing:.2em;color:#8b9299;font-weight:500}.cc-ch p{margin:2px 0 0!important;font-size:14.5px!important;line-height:1.42!important}"+
".cc-s ul{margin:6px 0 0;padding:0;list-style:none}.cc-s li{font-size:14.5px;line-height:1.45;color:#d3d7dc;padding:9px 0;border-top:1px solid "+LN+"}.cc-s li:first-child{border-top:0}"+
".cc-md.vis .bg{inset:-6px;transform:none;filter:blur(1.5px) brightness(.42) saturate(.95)}"+
".cc-q{font-family:'Mrs Saint Delafield','Segoe Script',cursive;font-size:34px;line-height:1.05;color:"+G+";margin:-4px 0 16px}"+
".cc-fn{list-style:none;margin:6px 0 12px;padding:0}.cc-fn li{display:grid;grid-template-columns:28px 1fr;column-gap:10px;padding:9px 0;border-top:1px solid "+LN+"}.cc-fn li:first-child{border-top:0}.cc-fn em{font-style:normal;color:"+G+";font-size:11px;letter-spacing:.14em;grid-row:span 2;padding-top:2px}.cc-fn b{font-size:11px;letter-spacing:.18em;text-transform:uppercase;font-weight:600}.cc-fn span{font-size:14px;line-height:1.4;color:#b9bec4}"+
".cc-why{border:1px solid "+LN+";border-radius:3px;padding:14px 16px;margin:14px 0;background:rgba(227,185,130,.05)}.cc-why b{font-size:10px;letter-spacing:.22em;color:"+G+";font-weight:500}.cc-why p{margin:6px 0 0!important;font-size:15px!important}"+
".cc-sc2{font-family:'Mrs Saint Delafield','Segoe Script',cursive;font-size:44px;line-height:1;color:"+G+";margin:2px 0 18px}"+
".cc-lb{font-size:10.5px;letter-spacing:.22em;color:#8b9299;margin:16px 0 6px}"+
".cc-mt{display:grid;grid-template-columns:1fr 1fr;gap:12px;border-top:1px solid "+LN+";margin-top:18px;padding-top:12px}"+
".cc-mt b{display:block;font-size:10px;letter-spacing:.18em;color:#8b9299;font-weight:500;margin-bottom:3px}.cc-mt span{font-size:13.5px}"+
".cc-ft{display:flex;align-items:center;gap:14px;padding:12px 24px;border-top:1px solid "+LN+"}"+
".cc-ar{background:none;border:1px solid "+LN+";color:#fff;width:38px;height:38px;border-radius:50%;cursor:pointer;font-size:15px;flex:none}"+
".cc-ar:disabled{opacity:.25;cursor:default}"+
".cc-dots{display:flex;gap:6px;flex:1;align-items:center;overflow:hidden}"+
".cc-dots i{height:3px;flex:1;max-width:46px;border-radius:2px;background:rgba(255,255,255,.16);cursor:pointer;transition:.25s}"+
".cc-dots i.on{background:"+G+"}"+
".cc-ct{font-size:11.5px;letter-spacing:.18em;color:#8b9299;flex:none}"+
".cc-bt{border:1px solid #fff;color:#fff;background:none;padding:10px 16px;font:600 11px 'Inter Tight',sans-serif;letter-spacing:.18em;border-radius:2px;text-decoration:none;flex:none;white-space:nowrap}"+
"@media(max-width:860px){.cc-ov{padding:0}.cc-pn{height:100%;max-height:none;border-radius:0;border:0}.cc-bd{grid-template-columns:1fr;grid-template-rows:42% 1fr}.cc-md{border-right:0;border-bottom:1px solid "+LN+"}.cc-pd{padding:12px}.cc-big{padding:20px;font-size:clamp(24px,8vw,40px)}.cc-tx{padding:20px}.cc-bt{display:none}.cc-hd{padding:12px 16px}.cc-ft{padding:10px 16px}.cc-s{padding:10px}.cc-s p{font-size:12.5px}.cc-st div{padding:10px}.cc-f span{font-size:8.5px;left:6px}.cc-sc2{font-size:36px}.cc-q{font-size:28px}}";
document.head.appendChild(css);
var ov=document.createElement('div');ov.className='cc-ov';
ov.innerHTML='<div class="cc-pn" role="dialog" aria-modal="true"></div>';
document.body.appendChild(ov);
var pn=ov.firstChild,cur=0,idx=0;
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function all(c,i){
 var out=[{overview:true,k:"OVERVIEW",img:"/plates/case-card"+(i+1)+".jpg",cover:true}].concat(c.slides);
 if(c.rollout)out.push({k:"ROLL-OUT + WHAT I'D WATCH",h:"How it travels. What tells us it works.",p:["This is a proposal, so there are no results to claim. These are the signals I would track."],rollout:c.rollout});
 out.push({k:"THE NEXT STEP",h:"Same method. Your brand.",p:["Business problem, cultural truth, idea, story, direction. In a one-week sprint, from brief to visual plan."],big:["Brief.","Insight.","Idea.","Film."],cta:true});
 return out}
function media(s,c,i){
 var bgimg=s.cover?s.img:(s.bg||"/plates/case-card"+(i+1)+".jpg"),h='<div class="cc-md'+(s.cover?' cover':'')+(s.bg&&!s.img&&!s.frames?' vis':'')+'"><div class="bg" style="background-image:url('+bgimg+')"></div><div class="cc-pd">';
 if(s.cover)h+='<div class="cc-im" style="background-image:url('+s.img+')"></div>';
 else if(s.frames){
  if(s.img)h+='<div class="cc-im" style="background-image:url('+s.img+')"></div>';
  h+='<div class="cc-fg '+(s.img?'row':'solo')+'" style="grid-template-columns:repeat('+(s.cols||3)+',1fr);--ar:'+(s.ar||'1/1')+'">'+s.frames.map(function(f,n){return '<div class="cc-f"><img src="'+f[0]+'" alt=""><span><em>'+String(n+1).padStart(2,'0')+'</em>'+esc(f[1])+'</span></div>'}).join('')+'</div>';
 }
 else if(s.img)h+='<div class="cc-im" style="background-image:url('+s.img+')"></div>';
 else if(s.scenes)h+='<div class="cc-sc'+(s.scenes.length===3?' three':'')+'">'+s.scenes.map(function(x,n){return '<div class="cc-s"><em>'+String(n+1).padStart(2,'0')+'</em><b>'+esc(x[0])+'</b><p>'+esc(x[1])+'</p></div>'}).join('')+'</div>';
 else if(s.rollout)h+='<div class="cc-sc" style="align-content:start"><div class="cc-s" style="align-self:start"><em>ROLL-OUT</em><ul>'+s.rollout.go.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul></div><div class="cc-s" style="align-self:start"><em>WHAT I\'D WATCH</em><ul>'+s.rollout.watch.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul></div></div>';
 else if(s.stats)h+='<div class="cc-st">'+s.stats.map(function(x){return '<div><b>'+esc(x[0])+'</b><span>'+esc(x[1])+'</span></div>'}).join('')+'</div>';
 else if(s.big)h+='<div class="cc-big">'+s.big.map(function(b){return '<span>'+esc(b)+'</span>'}).join('')+'</div>';
 return h+'</div></div>';
}
function render(){
 var c=CASES[cur],S=all(c,cur),s=S[idx],n=S.length,tx='<div class="cc-k">'+esc(s.k)+'</div>';
 if(s.overview){
  var L=["BUSINESS PROBLEM","CULTURAL TRUTH","THE IDEA","THE STORY","DIRECTION"];
  tx+='<h2>'+esc(c.brand)+'</h2><div class="cc-sc2">'+esc(c.idea)+'</div>'+
  (c.chain?'<div class="cc-ch">'+c.chain.map(function(t,n){return '<div><em>'+String(n+1).padStart(2,'0')+'</em><b>'+L[n]+'</b><p>'+esc(t)+'</p></div>'}).join('')+'</div>':
  '<div class="cc-lb">THE BRIEF</div><p>'+esc(c.brief)+'</p><div class="cc-lb">THE INSIGHT</div><p>'+esc(c.insight)+'</p>')+
  '<div class="cc-mt"><div><b>ROLE</b><span>'+esc(c.role)+'</span></div><div><b>TYPE</b><span>Creative proposal · 2026</span></div></div>';
 }else{
  tx+='<h2>'+esc(s.h)+'</h2>'+(s.quote?'<div class="cc-q">'+esc(s.quote)+'</div>':'')+(s.p||[]).map(function(t){return '<p>'+esc(t)+'</p>'}).join('')+(s.list?'<ul>'+s.list.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul>':'');
  if(s.frames&&s.frames[0][2])tx+='<div class="cc-lb">FRAME BY FRAME</div><ol class="cc-fn">'+s.frames.map(function(f,n){return '<li><em>'+String(n+1).padStart(2,'0')+'</em><b>'+esc(f[1])+'</b><span>'+esc(f[2])+'</span></li>'}).join('')+'</ol>';
  if(s.why)tx+='<div class="cc-why"><b>WHY IT WORKS</b><p>'+esc(s.why)+'</p></div>';
  if(s.cap)tx+='<div class="cc-note">'+esc(s.cap)+'</div>';
  if(s.cta)tx+='<a class="cc-bt" style="display:inline-block;margin-top:14px" href="mailto:cnoncl.studio@gmail.com">START A CONVERSATION</a>';
 }
 var dots='';for(var d=0;d<n;d++)dots+='<i class="'+(d===idx?'on':'')+'" data-i="'+d+'"></i>';
 pn.innerHTML='<div class="cc-hd"><span><i>'+String(cur+1).padStart(2,'0')+'</i> &nbsp;/&nbsp; '+esc(c.cat)+' &nbsp;·&nbsp; <b>'+esc(c.brand.toUpperCase())+'</b></span><button class="cc-x" aria-label="Close">✕</button></div>'+
 '<div class="cc-bd">'+media(s,c,cur)+'<div class="cc-tx">'+tx+''+((s.overview||s.frames||s.why)?'':'<div class="cc-num">'+String(idx+1).padStart(2,'0')+'</div>')+'</div></div>'+
 '<div class="cc-ft"><button class="cc-ar" id="ccp" aria-label="Previous"'+(idx===0?' disabled':'')+'>←</button><div class="cc-dots">'+dots+'</div><span class="cc-ct">'+String(idx+1).padStart(2,'0')+' / '+String(n).padStart(2,'0')+'</span><button class="cc-ar" id="ccn" aria-label="Next"'+(idx===n-1?' disabled':'')+'>→</button>'+(s.cta?'':'<a class="cc-bt" href="mailto:cnoncl.studio@gmail.com">START A CONVERSATION</a>')+'</div>';
 pn.querySelector('.cc-x').onclick=close;
 pn.querySelector('#ccp').onclick=function(){go(idx-1)};pn.querySelector('#ccn').onclick=function(){go(idx+1)};
 [].forEach.call(pn.querySelectorAll('.cc-dots i'),function(e){e.onclick=function(){go(+e.getAttribute('data-i'))}});
 var nx=S[idx+1];if(nx){[nx.img].concat((nx.frames||[]).map(function(f){return f[0]})).forEach(function(u){if(u){var im=new Image();im.src=u}})}
}
function go(i){var n=all(CASES[cur],cur).length;if(i<0||i>=n)return;idx=i;render()}
function preload(i){all(CASES[i],i).forEach(function(x){[x.img,x.bg].concat((x.frames||[]).map(function(f){return f[0]})).forEach(function(u){if(u){var im=new Image();im.src=u}})})}
var SL=['vw','saffron','claimqi','atorie','dolce'];
window.openCase=function(i){if(!CASES[i])return;cur=i;idx=0;render();ov.classList.add('on');preload(i);try{history.replaceState(null,'','#case-'+SL[i])}catch(e){}};
function close(){ov.classList.remove('on');try{if(/^#case-/.test(location.hash))history.replaceState(null,'',location.pathname+location.search)}catch(e){}}
function fromHash(){var m=/^#case-(\w+)/.exec(location.hash),i=m?SL.indexOf(m[1]):-1;if(i>=0)window.openCase(i)}
fromHash();addEventListener('hashchange',fromHash);
ov.addEventListener('click',function(e){if(e.target===ov)close()});
addEventListener('keydown',function(e){if(!ov.classList.contains('on'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')go(idx+1);if(e.key==='ArrowLeft')go(idx-1)});
['wheel','touchmove'].forEach(function(t){ov.addEventListener(t,function(e){e.stopPropagation()},{passive:true})});
var sx=null;pn.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
pn.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>60)go(idx+(dx<0?1:-1))},{passive:true});

/* UGC cards: click opens a vertical looping video player (video/ugc/*.mp4) */
var UG=[['trust','BRAND STORY · Talking head'],['saves','TRAVEL · POV drive'],['follows','LIFESTYLE · Routine vlog'],['comments','BRAND UGC · Pet + product']];
var uc=document.createElement('style');uc.textContent='.card3d:has(img[src*="ugc-card"]){cursor:pointer}.ug-ov{position:fixed;inset:0;z-index:99999;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,.84);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.ug-ov.on{display:flex}.ug-bx{position:relative;border-radius:18px;overflow:hidden;background:#000;box-shadow:0 30px 90px rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.14);max-width:92vw}.ug-bx video{display:block;max-height:88vh;max-width:92vw;width:auto;height:auto;min-height:320px;background:#000}.ug-lb{position:absolute;left:16px;top:14px;font:500 10.5px/1 "Inter Tight",Inter,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#fff;text-shadow:0 1px 6px rgba(0,0,0,.8)}.ug-bt{position:absolute;border:1px solid rgba(255,255,255,.35);background:rgba(0,0,0,.45);color:#fff;font:500 10.5px/1 "Inter Tight",Inter,sans-serif;letter-spacing:.14em;text-transform:uppercase;border-radius:99px;padding:10px 14px;cursor:pointer}.ug-bt:hover{background:rgba(255,255,255,.18)}.ug-x{right:12px;top:8px;width:36px;height:36px;padding:0;font-size:14px}.ug-m{right:12px;bottom:14px}';document.head.appendChild(uc);
var uo=document.createElement('div');uo.className='ug-ov';uo.innerHTML='<div class="ug-bx" role="dialog" aria-modal="true"><video playsinline loop preload="metadata"></video><span class="ug-lb"></span><button class="ug-bt ug-x" aria-label="Close">✕</button><button class="ug-bt ug-m" aria-label="Toggle sound">Sound on</button></div>';
document.body.appendChild(uo);
var uv=uo.querySelector('video'),um=uo.querySelector('.ug-m');
function ugOpen(i){if(!UG[i])return;uv.src='/video/ugc/'+UG[i][0]+'.mp4';uv.poster='/plates/ugc-card'+(i+1)+'.jpg';uv.muted=false;um.textContent='Sound on';uo.querySelector('.ug-lb').textContent=UG[i][1];uo.classList.add('on');var p=uv.play();if(p&&p.catch)p.catch(function(){uv.muted=true;um.textContent='Sound off';uv.play().catch(function(){})});try{history.replaceState(null,'','#ugc-'+UG[i][0])}catch(e){}}
function ugClose(){uo.classList.remove('on');uv.pause();uv.removeAttribute('src');uv.load();try{if(/^#ugc-/.test(location.hash))history.replaceState(null,'',location.pathname+location.search)}catch(e){}}
document.addEventListener('click',function(e){var c=e.target.closest&&e.target.closest('.card3d');if(!c)return;var im=c.querySelector('img[src*="ugc-card"]');if(!im)return;var m=/ugc-card(\d)/.exec(im.getAttribute('src'));if(m)ugOpen(+m[1]-1)});
uo.addEventListener('click',function(e){if(e.target===uo)ugClose()});
uo.querySelector('.ug-x').onclick=ugClose;
um.onclick=function(){uv.muted=!uv.muted;um.textContent=uv.muted?'Sound off':'Sound on'};
uv.addEventListener('click',function(){if(uv.paused)uv.play();else uv.pause()});
addEventListener('keydown',function(e){if(uo.classList.contains('on')&&e.key==='Escape')ugClose()});
function ugHash(){var m=/^#ugc-(\w+)/.exec(location.hash);if(!m)return;for(var k=0;k<UG.length;k++)if(UG[k][0]===m[1])ugOpen(k)}
ugHash();addEventListener('hashchange',ugHash);
})();

/* Case cards: opens a swipeable "case file" when a Case Studies card is clicked. Additive only. */
(function(){
var ROLE="Strategy, concept, creative direction";
var A="/work/atorie/frames/",D="/work/dolce/frames/",Q="/work/claimqi/";
var CASES=[
/* 0 — VOLKSWAGEN TIGUAN */
{brand:"Volkswagen Tiguan",cat:"AUTOMOTIVE",title:"I choose VW for my family.",idea:"Choose enough.",role:ROLE,
 brief:"In Dubai a car is often chosen for the people outside it. The family inside pays for it every day.",
 insight:"The family that matters is inside the car, not watching from the street.",
 slides:[
 {k:"THE TENSION",h:"A car bought for everyone else.",p:["In the Gulf a car can be a status object. Big SUVs, tight parking, kids climbing down from a seat that's too high.","I never attack luxury owners. I let the inconvenience speak."],big:["Status for others.","Life for the family."]},
 {k:"THE REFRAME",h:"Who are you choosing this for?",p:["The category asks what people will think. I ask something else, and the Tiguan becomes the choice of someone with nothing left to prove."],big:["What will people think?","Who am I choosing this for?"]},
 {k:"THE PROMISE",h:"Self-assurance, not compromise.",p:["Luxury asks: what will people think? Volkswagen asks: who cares?","Calm, amused, never bitter."],big:["Choose","enough."]},
 {k:"HERO FILM",h:"Four scenes. One wink.",p:["It ends on a wink. Volkswagen isn't jealous, isn't defending itself and doesn't need to prove anything."],scenes:[["The setup","A villa street at golden hour. The Tiguan family waits for friends, relaxed."],["The arrival","A big prestige SUV tries to park. Forward, back, forward again."],["The struggle","Slow-motion comedy. A child lowers herself from the unusually high seat."],["The contrast","Back to the Tiguan family. One parent, a small smile, a wink."]]},
 {k:"TONE + OOH",h:"The restraint is the message.",p:["Witty, premium, understated, a little cheeky. The joke is always about excess, never about wealth.","On the street: baby-blue, one line, nothing else."],big:["I choose VW","for my family."]}
 ]},
/* 1 — SAFFRON & CO. */
{brand:"Saffron & Co.",cat:"HOSPITALITY",title:"Don't bother at home. Come to us.",idea:"Nobody goes to a restaurant just for the food.",role:ROLE,
 brief:"A premium brunch place in Dubai with three locations. Beautiful product, invisible online.",
 insight:"Nobody goes to a restaurant just for the food. They go for the people.",
 slides:[
 {k:"THE CHALLENGE",h:"Strong product. No story.",p:["Three locations, a beautiful space, expats and Emiratis aged 25–40. The content was polished food shots and menu updates, and nobody reacted.","None of it carried the founder's idea: families gathering."],big:["Great food.","No reason to care."]},
 {k:"THE INSIGHT",h:"It was never about brunch.",p:["Food is available at home. What's scarce is a table with people like you.","Saffron's real product is belonging, and the brand had never said so."],big:["Not brunch.","Belonging."]},
 {k:"THE IDEA",h:"Radical honesty.",p:["Cooking at home is a burden. Saffron offers a way out, of the kitchen and of isolation."],big:["Don't bother at home.","Come to us."]},
 {k:"HERO FILM",h:"From heavy to warm.",p:["Same family, two worlds. The music only arrives at Saffron."],scenes:[["The struggle","A Saturday morning at home. A tired mother, a restless child, a father scrolling. No music."],["The turn","A phone buzzes. A friend at Saffron. The parents share a glance."],["The arrival","A wide table, warm light, the same family transformed. Unhurried."],["The close","The screen blurs. Don't bother at home. Come to us."]]},
 {k:"INFLUENCER STRATEGY",h:"People trust people like them.",p:["5–8 Dubai family micro-creators (50K–200K followers) visit with their real families. No script. Warm, honest, unstaged."],big:["5–8 families.","Zero scripts."]},
 {k:"PROJECTED TARGETS",h:"Where this should land.",p:["Working targets within three months of launch. Not results."],stats:[["+40–60%","Engagement rate"],["+25–35%","Family-first perception"],["+20%","Follower growth"],["+20%","Weekend family bookings"]]}
 ]},
/* 2 — CLAIMQI */
{brand:"ClaimQI",cat:"B2B · AI HEALTHCARE",title:"Not more flags. Better decisions.",idea:"Know when not to act.",role:ROLE,
 brief:"Payer teams are drowning in flags. More noise, and the valuable cases get lost.",
 insight:"The better question isn't “does this look suspicious?” It's “does this deserve action?”",
 slides:[
 {k:"THE OPPORTUNITY",h:"A stronger story than “AI that finds suspicious claims.”",p:["The old question is about probability and anomaly. The better one is about evidence, rules, policy and determination."],img:Q+"art-cover.jpg"},
 {k:"THE STAKES",h:"The wrong decision costs more than the missed flag.",p:["It isn't about finding more. It's about deciding with confidence."],img:Q+"art-stakes.jpg"},
 {k:"FILM 01 · PRECISION",h:"The right target.",p:["In a world of signals, ClaimQI knows when the evidence is strong enough to act.","Signal. Evidence. Decision."],img:Q+"art-film1.jpg",frames:[[Q+"frames/f1-1.jpg","The contest"],[Q+"frames/f1-2.jpg","The calm"],[Q+"frames/f1-3.jpg","The shot"],[Q+"frames/f1-4.jpg","The result"]],cols:4},
 {k:"FILM 02 · JUDGMENT",h:"False alarm.",p:["The smartest system isn't the one that reacts fastest. It's the one that knows when not to act."],img:Q+"art-film2.jpg",frames:[[Q+"frames/f2-1.jpg","The sound"],[Q+"frames/f2-2.jpg","The panic"],[Q+"frames/f2-3.jpg","The scan"],[Q+"frames/f2-4.jpg","The reveal"]],cols:4},
 {k:"FILM 03 · CONTEXT",h:"Upon request.",p:["The third film is a teaser built on withheld context."],big:["Some stories","are worth","waiting for."]},
 {k:"THE SYSTEM",h:"Three films. One product story.",list:["Prevent: find where to look","Core: know what's actually wrong","Insights: see the bigger picture"],img:Q+"art-three.jpg"},
 {k:"THE CONTENT SYSTEM",h:"One story, built to travel.",p:["LinkedIn, YouTube and Meta, plus executive content, industry media and expert collaborations."],big:["3 hero films","Cutdowns","Every format","Every channel"]},
 {k:"THE OUTCOME",h:"More than content. A stronger position.",list:["Clearer position","Faster buyer understanding","Stronger sales alignment","Higher memorability","More qualified conversations","More pipeline opportunity"],img:Q+"art-end.jpg"}
 ]},
/* 3 — ATORIE */
{brand:"Atorie",cat:"FASHION",title:"good enough.",idea:"The product is good enough. So is the person.",role:ROLE,
 brief:"Atorie sells quality fashion at lower markups. Said as “luxury for less,” it still sounds like the cheaper option.",
 insight:"I think people want more than value. They want to feel confident in the choice, and already enough.",
 slides:[
 {k:"THE THINKING",h:"Everyone says: be more.",p:["Fashion and social pressure keep pushing the same message. I went the other way.","The product is good enough. The person already is too."],big:["be more.","show more.","prove more.","buy more.","good enough."]},
 {k:"HERO FILM",h:"She keeps walking.",p:["Voices follow her through changing places: “Could be better.” “You should…” She never stops, never proves anything.","Crash zoom to the bag. Silence. “Atta girl.”"],frames:[[A+"hero-1.jpg","She walks"],[A+"hero-2.jpg","The voices"],[A+"hero-3.jpg","Different places"],[A+"hero-4.jpg","The bag"],[A+"hero-5.jpg","The turn"],[A+"hero-6.jpg","She keeps going"]],cols:3,ar:"1/1"},
 {k:"PRODUCT FILM",h:"Show the quality.",p:["A question, then proof. Fabric, seam, construction, finish. “Good enough” only arrives at the end, so it never sounds like “just okay.”"],cap:"Final proof would use Atorie's real materials and manufacturing.",frames:[[A+"prod-1.jpg","The question"],[A+"prod-2.jpg","The fabric"],[A+"prod-3.jpg","The stitching"],[A+"prod-4.jpg","The manufacturing"],[A+"prod-5.jpg","The construction"],[A+"prod-6.jpg","The finish"],[A+"prod-7.jpg","The details"],[A+"prod-8.jpg","The result"],[A+"prod-9.jpg","The message"]],cols:3,ar:"3/2"},
 {k:"THE BAG + REACTION LANGUAGE",h:"Something people can carry. Something people can say.",p:["An oversized brown leather bag with good enough. across it, and a reaction language: GIFs, stickers, replies.","Someone posts something. The reply is: good enough."],img:"/work/atorie/bag.jpg"},
 {k:"PRE-LAUNCH · FIRST APPEARANCES",h:"GUDINAF comes first.",p:["Before the hero film, no explanation. A billboard, a poster, a sticker, a bag. One word.","People start asking."],cap:"Concept storyboard.",frames:[[A+"gud-1.jpg","The billboard"],[A+"gud-2.jpg","The poster"],[A+"gud-3.jpg","The sticker"],[A+"gud-4.jpg","The bag"]],cols:4,ar:"328/413"},
 {k:"PRE-LAUNCH · SPECULATION",h:"“What is GUDINAF?”",p:["Is it German? A person? A new brand? People guess, search and talk. Their theories are part of the idea.","Atorie can watch the curiosity before committing to the drop."],cap:"Illustrative collage. Posts and engagement are concept mockups, not real reactions.",img:"/work/atorie/speculation.jpg"},
 {k:"PRE-LAUNCH · PRESS MOMENT",h:"A question. A flash. A wink.",p:["If the curiosity reaches the press: executives leave a building, a microphone, flashes, and one woman just winks.","No explanation. The answer comes later."],cap:"AI concept image of a proposed scene.",img:"/work/atorie/press.jpg"},
 {k:"THE REVEAL",h:"Then, BAM.",p:["“Oh. That is what it was.”"],list:["01 Seed the mystery","02 Watch the response","03 Reveal and drop: film, bag, GIFs, stickers, memes"],big:["GUDINAF","=","good enough."]},
 {k:"AFTER THE REVEAL",h:"Are people still using it?",p:["I'd keep the words in circulation through memes, GIFs and replies, and watch what people actually keep using. If it feels played out, move on."],cap:"Illustrative collage, not measured results. Proposal by Can Öncül, not commissioned or endorsed by Atorie.",img:"/work/atorie/memes.jpg"}
 ]},
/* 4 — DOLCE GLOW */
{brand:"Dolce Glow",cat:"BEAUTY",title:"Two ways to tell the glow.",idea:"Make the glow precious. Then make room for life.",role:"Concept, treatment, visual direction",
 brief:"Blush Me is a self-tanning blush whose colour develops over time. How do you show a glow that stays?",
 insight:"Feeling good in your skin and checking it all day don't go together.",
 slides:[
 {k:"THE STARTING POINT",h:"Where the idea begins.",p:["A glow that stays. A moment to enjoy. An Italian world, from the founder's roots and the Amalfi coast."],big:["Product.","People.","Place."]},
 {k:"FILM 01 · JEWELER / GOLD",h:"What if glow were the jewel?",p:["I put Blush Me in an Amalfi jeweller. Silver, gold, diamond, and each reveal builds anticipation.","We see her face before we see the product. She leaves it on display, like a ritual."],cap:"Visual direction studies.",frames:[[D+"jw-1.jpg","The coast"],[D+"jw-2.jpg","The jeweller"],[D+"jw-3.jpg","The guest"],[D+"jw-4.jpg","The velvet"],[D+"jw-5.jpg","The reveal"],[D+"jw-6.jpg","The detail"]],cols:3,ar:"1/1"},
 {k:"FILM 01 · STORYBOARD",h:"Silver. Gold. Diamond.",p:["A familiar luxury ritual, an unexpected ending. The product earns the last reveal."],img:"/work/dolce/jeweler-board.jpg"},
 {k:"FILM 02 · TAKE IT AND ENJOY IT",h:"Less checking. More living.",p:["One woman lives her day. Another keeps checking her makeup. Split screen: morning, midday, dinner.","Then a shared bathroom, two strangers, one small handoff: “Take it and enjoy it.”"],cap:"Visual direction studies.",frames:[[D+"tk-1.jpg","Morning"],[D+"tk-2.jpg","Midday"],[D+"tk-3.jpg","Dinner"],[D+"tk-4.jpg","The shared mirror"],[D+"tk-5.jpg","The handoff"],[D+"tk-6.jpg","Back to the table"]],cols:3,ar:"1/1"},
 {k:"FILM 02 · STORYBOARD",h:"Relief, generosity, connection.",p:["The handoff shows relief, not an instant tan. The product takes 12 hours to develop."],img:"/work/dolce/takeit-board.jpg"},
 {k:"FROM BOARDS TO FILM",h:"A clear first week.",p:["About a week for a chosen direction. AI cuts the cost of early exploration. A production budget follows the agreed scope."],scenes:[["Shape","Lock one direction, dialogue and timing."],["Visualise","Use AI to explore casting, light, locations and continuity."],["Refine","Review pacing and product visibility. Deliver a visual plan and rough animatic."]]}
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
"@media(max-width:860px){.cc-ov{padding:0}.cc-pn{height:100%;max-height:none;border-radius:0;border:0}.cc-bd{grid-template-columns:1fr;grid-template-rows:42% 1fr}.cc-md{border-right:0;border-bottom:1px solid "+LN+"}.cc-pd{padding:12px}.cc-big{padding:20px;font-size:clamp(24px,8vw,40px)}.cc-tx{padding:20px}.cc-bt{display:none}.cc-hd{padding:12px 16px}.cc-ft{padding:10px 16px}.cc-s{padding:10px}.cc-s p{font-size:12.5px}.cc-st div{padding:10px}.cc-f span{font-size:8.5px;left:6px}.cc-sc2{font-size:36px}}";
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
 var bgimg=s.cover?s.img:"/plates/case-card"+(i+1)+".jpg",h='<div class="cc-md'+(s.cover?' cover':'')+'"><div class="bg" style="background-image:url('+bgimg+')"></div><div class="cc-pd">';
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
  tx+='<h2>'+esc(s.h)+'</h2>'+(s.p||[]).map(function(t){return '<p>'+esc(t)+'</p>'}).join('')+(s.list?'<ul>'+s.list.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul>':'');
  if(s.cap)tx+='<div class="cc-note">'+esc(s.cap)+'</div>';
  if(s.cta)tx+='<a class="cc-bt" style="display:inline-block;margin-top:14px" href="mailto:cnoncl.studio@gmail.com">START A CONVERSATION</a>';
 }
 var dots='';for(var d=0;d<n;d++)dots+='<i class="'+(d===idx?'on':'')+'" data-i="'+d+'"></i>';
 pn.innerHTML='<div class="cc-hd"><span><i>'+String(cur+1).padStart(2,'0')+'</i> &nbsp;/&nbsp; '+esc(c.cat)+' &nbsp;·&nbsp; <b>'+esc(c.brand.toUpperCase())+'</b></span><button class="cc-x" aria-label="Close">✕</button></div>'+
 '<div class="cc-bd">'+media(s,c,cur)+'<div class="cc-tx">'+tx+''+(s.overview?'':'<div class="cc-num">'+String(idx+1).padStart(2,'0')+'</div>')+'</div></div>'+
 '<div class="cc-ft"><button class="cc-ar" id="ccp" aria-label="Previous"'+(idx===0?' disabled':'')+'>←</button><div class="cc-dots">'+dots+'</div><span class="cc-ct">'+String(idx+1).padStart(2,'0')+' / '+String(n).padStart(2,'0')+'</span><button class="cc-ar" id="ccn" aria-label="Next"'+(idx===n-1?' disabled':'')+'>→</button>'+(s.cta?'':'<a class="cc-bt" href="mailto:cnoncl.studio@gmail.com">START A CONVERSATION</a>')+'</div>';
 pn.querySelector('.cc-x').onclick=close;
 pn.querySelector('#ccp').onclick=function(){go(idx-1)};pn.querySelector('#ccn').onclick=function(){go(idx+1)};
 [].forEach.call(pn.querySelectorAll('.cc-dots i'),function(e){e.onclick=function(){go(+e.getAttribute('data-i'))}});
 var nx=S[idx+1];if(nx){[nx.img].concat((nx.frames||[]).map(function(f){return f[0]})).forEach(function(u){if(u){var im=new Image();im.src=u}})}
}
function go(i){var n=all(CASES[cur],cur).length;if(i<0||i>=n)return;idx=i;render()}
window.openCase=function(i){if(!CASES[i])return;cur=i;idx=0;render();ov.classList.add('on')};
function close(){ov.classList.remove('on')}
ov.addEventListener('click',function(e){if(e.target===ov)close()});
addEventListener('keydown',function(e){if(!ov.classList.contains('on'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')go(idx+1);if(e.key==='ArrowLeft')go(idx-1)});
['wheel','touchmove'].forEach(function(t){ov.addEventListener(t,function(e){e.stopPropagation()},{passive:true})});
var sx=null;pn.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
pn.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>60)go(idx+(dx<0?1:-1))},{passive:true});
})();

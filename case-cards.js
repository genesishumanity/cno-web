/* Case cards: opens a swipeable "case file" when a Case Studies card is clicked. Additive only. */
(function(){
var ROLE="Strategy, concept, creative direction";
var CASES=[
/* 0 — VOLKSWAGEN TIGUAN */
{brand:"Volkswagen Tiguan",cat:"AUTOMOTIVE",title:"I choose VW for my family.",idea:"Choosing enough is a statement.",role:ROLE,
 brief:"In Dubai a car can be a visible status object, chosen partly for the people outside it. The family living with it pays the daily price.",
 insight:"The family that matters is inside the car, not watching from the street.",
 slides:[
 {k:"THE TENSION",h:"A car bought for everyone else.",p:["In Dubai and the wider Gulf, a car can become a status object, chosen partly for the people outside the vehicle.","The trade-offs show up in family life: parking, narrow residential spaces, children climbing down from a high vehicle, added cost.","The campaign never attacks luxury owners. It lets the inconvenience speak for itself."],big:["Status","for others.","Life","for the family."]},
 {k:"THE REFRAME",h:"Who are you actually choosing this car for?",p:["The category asks: what will people think when they see my car?","Volkswagen changes the question. The Tiguan becomes the decision of someone who no longer needs to prove anything."],big:["What will people think?","→","Who am I choosing this for?"]},
 {k:"THE PROMISE",h:"Self-assurance, not compromise.",p:["Volkswagen is the confident choice for people who value the life inside the car more than the impression outside it.","Luxury asks: what will people think? Volkswagen asks: who cares?"],big:["Choose","enough."]},
 {k:"HERO FILM",h:"Four scenes. One wink.",list:["The setup: a villa community at golden hour. The Tiguan family waits for friends, relaxed.","The prestige SUV arrives: it can't park. Forward, back, forward again.","The struggle: slow-motion comedy. A child lowers themselves from the unusually high SUV.","The contrast: back to the Tiguan family. One parent gives a small smile and a wink."],p:["End frame: I choose VW for my family."]},
 {k:"TONE + OOH",h:"The restraint is the message.",p:["Witty, culturally observant, premium, understated, slightly cheeky. The joke is always about unnecessary excess, never about wealth.","OOH: baby-blue background, the Tiguan family, one italic line. Deliberately minimal against Dubai's crowded signage."],big:["I choose VW","for my family."]}
 ]},
/* 1 — SAFFRON & CO. */
{brand:"Saffron & Co.",cat:"HOSPITALITY",title:"Don't bother at home. Come to us.",idea:"Nobody goes to a restaurant just for the food.",role:ROLE,
 brief:"A premium brunch restaurant in Dubai with three locations. Strong product, invisible on social.",
 insight:"Food is available at home. What is scarce is a table with people who reflect your lifestyle and values.",
 slides:[
 {k:"THE CHALLENGE",h:"Strong product. No story.",p:["Three locations, a beautifully designed space, an audience of 25–40 year-old expats and Emiratis.","Polished food photography and menu updates generated no engagement. Nothing in the brand's communication reflected the founder's family-gathering vision."]},
 {k:"THE INSIGHT",h:"Nobody goes to a restaurant just for the food.",p:["They go for the people. People just like them.","Saffron's real product is not brunch. It is belonging, and the brand had never said so."],big:["Not brunch.","Belonging."]},
 {k:"THE IDEA",h:"Don't bother at home. Come to us.",p:["A campaign built on radical honesty: cooking at home is a burden. Saffron offers liberation, from the kitchen and from isolation.","Saffron becomes the place where families come alive."],big:["Don't bother","at home.","Come to us."]},
 {k:"HERO FILM",h:"A family, transformed.",list:["The struggle: a Saturday morning at home. A tired mother, a restless child, a father scrolling. No music, only domestic fatigue.","The turn: a phone buzzes. A WhatsApp from a friend at Saffron. The parents exchange a glance.","The arrival: a wide table, warm light, the same family transformed. Joy of being together, unhurried.","The close: the screen blurs. DON'T BOTHER AT HOME. COME TO US."]},
 {k:"INFLUENCER STRATEGY",h:"People trust people like them.",p:["5–8 Dubai family micro-influencers (50K–200K followers) visit Saffron with their real families.","No script. Warm, spontaneous and honest, not staged."]},
 {k:"PROJECTED TARGETS",h:"Where this should land.",list:["+40–60% engagement rate from current baseline","+25–35% shift in family-first brand perception","+20% follower growth","+20% weekend family bookings"],p:["Working targets within three months of launch. Not results."]}
 ]},
/* 2 — CLAIMQI */
{brand:"ClaimQI",cat:"B2B · AI HEALTHCARE",title:"Not more flags. Better decisions.",idea:"Know when not to act.",role:ROLE,
 brief:"Payer teams are drowning in data. More claims, more flags, more noise, and valuable cases get lost.",
 insight:"The better question is not “does this claim look suspicious?” but “does this claim actually deserve action?”",
 slides:[
 {k:"THE OPPORTUNITY",h:"A stronger story than “AI that finds suspicious claims.”",p:["The old question: does this claim look suspicious? Probability, anomaly, score.","The better question: does this claim actually deserve action? Evidence, rules, policy, determination."],img:"/work/claimqi/s2-02.jpg"},
 {k:"THE PROBLEM",h:"Payer teams are drowning in data, not insight.",p:["More claims. More flags. More noise. AI can find what looks suspicious, but that isn't the same as knowing what is worth your team's time."],img:"/work/claimqi/s3-03.jpg"},
 {k:"THE STAKES",h:"The cost of the wrong decision is bigger than the cost of the missed flag.",p:["It's not just about finding more. It's about deciding with confidence."],img:"/work/claimqi/s4-04.jpg"},
 {k:"FILM 01 · PRECISION",h:"The Right Target.",p:["In a world of signals, ClaimQI knows when the evidence is strong enough to act.","The contest, the calm, the shot, the result. Signal → evidence → decision."],img:"/work/claimqi/s6-06.jpg"},
 {k:"FILM 02 · JUDGMENT",h:"False Alarm.",p:["Know when not to act. The smartest system isn't the one that reacts fastest. It's the one that knows when not to act.","The sound, the panic, the scan, the reveal."],img:"/work/claimqi/s7-07.jpg"},
 {k:"FILM 03 · CONTEXT",h:"Upon request.",p:["Some stories are worth waiting for. A teaser built on withheld context."],img:"/work/claimqi/s8-08.jpg"},
 {k:"THE SYSTEM",h:"Three films. One product story.",list:["Prevent: find where to look","Core: know what's actually wrong","Insights: see the bigger picture"],img:"/work/claimqi/s9-09.jpg"},
 {k:"THE CONTENT SYSTEM",h:"One story. Every channel.",p:["3 hero films → cutdowns → multi-format → distribution on LinkedIn, YouTube and Meta, plus executive content, industry media and expert collaborations."],img:"/work/claimqi/s10-10.jpg"},
 {k:"THE OUTCOME",h:"More than content. A stronger business position.",list:["Clearer position","Faster buyer understanding","Stronger sales alignment","Higher memorability","More qualified conversations","More pipeline opportunity"],img:"/work/claimqi/s11-11.jpg"}
 ]},
/* 3 — ATORIE */
{brand:"Atorie",cat:"FASHION",title:"good enough.",idea:"The product is good enough. So is the person.",role:ROLE,
 brief:"Atorie offers high-quality fashion with lower markups. Left at “luxury quality for less,” it can still feel like the cheaper alternative.",
 insight:"People want to feel confident about the choice, and already enough. Fashion and social pressure keep saying the opposite.",
 slides:[
 {k:"THE THINKING",h:"Where this started.",p:["Good materials, good manufacturing, a price below traditional luxury. But “luxury quality for less” can still feel like the cheaper alternative to the thing someone really wanted.","The product is good enough. The quality is genuinely there. The person is already good enough. They do not need a more expensive object to prove anything."],big:["be more.","show more.","prove more.","buy more.","good enough."]},
 {k:"HERO FILM",h:"She keeps walking.",p:["A woman walks through changing places. Voices follow her: “Could be better.” “You should…” “Not enough.” She never stops, explains herself or tries to prove anything.","Crash zoom to the good enough. bag. The voices cut. Silence. A woman says, “Atta girl.” She smiles slightly and keeps walking out of frame."],img:"/work/atorie/hero.jpg",cap:"Storyboard: concept visual direction."},
 {k:"PRODUCT FILM",h:"Show the quality.",p:["A question. Then the evidence. “What about the fabric?” A macro shot. “What about the stitching?” The seam. Construction, finish, manufacturing, each cutting to the real product.","We don't answer every question with “good enough.” That could sound like “just okay.” Quality first. Only at the end: good enough."],img:"/work/atorie/product.jpg",cap:"Final product proof would use Atorie's actual materials and manufacturing."},
 {k:"THE BAG + REACTION LANGUAGE",h:"Something people can carry. Something people can say.",p:["The campaign bag: oversized, brown leather, slouchy, relaxed, premium, with large beige good enough. lettering and soft liquid edges. A real object people could want to carry for what it says.","The reaction language: the woman and the bag as a GIF, stickers, story replies, animated lettering, meme formats. Someone posts something. The reply is: good enough."],img:"/work/atorie/bag.jpg"},
 {k:"PRE-LAUNCH · FIRST APPEARANCES",h:"GUDINAF should come first.",p:["Before the hero film. Before the main campaign. Almost no explanation.","A billboard. A poster. A sticker. A bag. A small social post. Only GUDINAF. It sounds like a word, a name or a code. We don't explain it yet."],img:"/work/atorie/gudinaf.jpg",cap:"Concept storyboard, including illustrative social posts."},
 {k:"PRE-LAUNCH · SPECULATION",h:"“What is GUDINAF?”",p:["“Is it German?” “A person?” “A new brand?” People guess, search and talk. Their own theories are part of the idea.","Atorie can watch whether the word creates curiosity before committing to the main drop."],img:"/work/atorie/speculation.jpg",cap:"Illustrative X collage. Posts and engagement are concept mockups, not actual public reaction."},
 {k:"PRE-LAUNCH · PRESS MOMENT",h:"A question. A flash. A wink.",p:["Evening, outside a company building. Executives come down the steps. A reporter holds out a microphone. Camera flashes. One woman just winks.","No explanation. She keeps moving. The answer comes later, with the campaign."],img:"/work/atorie/press.jpg",cap:"AI concept image of a proposed scene, not a real press event."},
 {k:"THE REVEAL",h:"Then, BAM. GUDINAF = good enough.",list:["01 Seed the mystery. Small GUDINAF sightings, almost no explanation.","02 Watch the response. Speculation, searches and conversation. The press moment if interest develops.","03 Reveal and drop. The hero film, product film, bag, GIFs, stickers and memes."],p:["“Oh. That is what it was.” Real response decides how far to take it."],big:["GUDINAF","=","good enough."]},
 {k:"AFTER THE REVEAL",h:"Are people still using it?",p:["Keep good enough. and GUDINAF in circulation through memes, GIFs and replies, so people can use them in their own situations.","Watch repeat use, new reactions and return visits. Keep what people use. If it feels played out, move on."],img:"/work/atorie/memes.jpg",cap:"Illustrative meme collage. Not measured results. Proposal by Can Öncül, not commissioned or endorsed by Atorie."}
 ]},
/* 4 — DOLCE GLOW */
{brand:"Dolce Glow",cat:"BEAUTY",title:"Two ways to tell the glow.",idea:"Make the glow precious. Then make room for life.",role:"Concept, treatment, visual direction",
 brief:"Blush Me is a self-tanning blush whose colour develops over time. How do you show a glow that stays?",
 insight:"Wanting to feel good in your skin, while checking it, pulls you out of the moment.",
 slides:[
 {k:"THE STARTING POINT",h:"Product. People. Place.",p:["A glow that stays: Blush Me's colour develops over time, a natural-looking blush tan that lasts beyond makeup.","A moment to enjoy: the tension between feeling good in your skin and checking your appearance.","An Italian world: the founder's Italian roots and the Amalfi Coast give the films a place, a warmth and pleasure."],img:"/work/dolce/cover.jpg"},
 {k:"FILM 01 · JEWELER / GOLD",h:"What if glow were the jewel?",p:["Put Blush Me somewhere unexpected: an Amalfi jeweller. Silver, gold, then diamond. Each presentation builds anticipation.","The final box opens. We see her reaction before we see Blush Me. She leaves it on display, preserving the ritual.","Desire, anticipation and quiet delight."],img:"/work/dolce/jeweler.jpg",cap:"Visual direction studies."},
 {k:"FILM 01 · STORYBOARD",h:"Silver. Gold. Diamond. Reaction. Blush Me.",p:["A familiar luxury ritual creates an unexpected ending. The product earns the last reveal."],img:"/work/dolce/jeweler-board.jpg"},
 {k:"FILM 02 · TAKE IT AND ENJOY IT",h:"Less checking. More living.",p:["One woman is present in her day. Another keeps interrupting hers to check her makeup. Morning, midday and dinner play in split screen.","The frame opens into a shared bathroom: strangers in the same restaurant. A visible handoff gives the line its meaning: “Take it and enjoy it.”","Relief, generosity and connection."],img:"/work/dolce/takeit.jpg",cap:"Visual direction studies."},
 {k:"FILM 02 · STORYBOARD",h:"Morning. Midday. Dinner. The handoff.",p:["The visual contrast is easy to follow. The shared space and a small act of kindness give it a human ending. The handoff expresses relief, not an instant tanning effect."],img:"/work/dolce/takeit-board.jpg"},
 {k:"FROM BOARDS TO FILM",h:"A clear first week.",list:["Shape: lock one direction, dialogue and timing","Visualise: use AI to explore casting, light, locations and shot continuity","Refine: review pacing and product visibility. Deliver a visual plan and rough animatic"],p:["Approximately one week for a selected direction. A final production budget follows the agreed scope."]}
 ]}
];
var css=document.createElement('style');
css.textContent=
".cc-ov{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.76);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:18px;font-family:'Inter Tight',system-ui,sans-serif;color:#f4f5f7}"+
".cc-ov.on{display:flex}"+
".cc-pn{width:min(1240px,100%);height:min(86vh,780px);background:linear-gradient(160deg,rgba(18,30,44,.97),rgba(7,11,16,.97));border:1px solid rgba(160,200,235,.22);border-radius:18px;box-shadow:0 0 0 1px rgba(127,212,255,.08),0 30px 120px rgba(40,140,255,.2);display:grid;grid-template-rows:auto 1fr auto;overflow:hidden}"+
".cc-hd{display:flex;justify-content:space-between;align-items:center;padding:16px 22px;border-bottom:1px solid rgba(160,200,235,.16);font-size:12px;letter-spacing:.16em;color:#7fd4ff;gap:12px}"+
".cc-hd b{color:#f4f5f7;font-weight:700;letter-spacing:.1em}"+
".cc-x{background:none;border:1px solid rgba(160,200,235,.3);color:#fff;width:34px;height:34px;border-radius:50%;cursor:pointer;font-size:15px;flex:none}"+
".cc-bd{display:grid;grid-template-columns:1.25fr 1fr;min-height:0}"+
".cc-md{position:relative;overflow:hidden;background:#05080c;border-right:1px solid rgba(160,200,235,.16);display:flex;align-items:center;justify-content:center;min-height:0}"+
".cc-md .bg{position:absolute;inset:-20px;background-size:cover;background-position:center;filter:blur(28px) brightness(.45);transform:scale(1.1)}"+
".cc-md img{position:relative;max-width:100%;max-height:100%;object-fit:contain;display:block}"+
".cc-md.cover img{width:100%;height:100%;object-fit:cover}"+
".cc-big{position:relative;padding:40px;font-size:clamp(34px,4.4vw,68px);font-weight:800;letter-spacing:-.03em;line-height:1}"+
".cc-big span{display:block}.cc-big span:nth-child(even){color:#7fd4ff}"+
".cc-cap{position:absolute;left:16px;right:16px;bottom:12px;font-size:11px;line-height:1.4;color:#c5ccd3;text-shadow:0 1px 8px #000}"+
".cc-tx{padding:30px 32px;overflow:auto;overscroll-behavior:contain;min-height:0}"+
".cc-k{font-size:11px;letter-spacing:.2em;color:#7fd4ff;margin-bottom:12px}"+
".cc-tx h2{margin:0 0 16px;font-size:clamp(26px,2.8vw,40px);font-weight:800;letter-spacing:-.02em;line-height:1.06}"+
".cc-tx p{margin:0 0 12px;font-size:16px;line-height:1.55;color:#d9dee3}"+
".cc-tx ul{margin:6px 0 12px;padding:0;list-style:none}"+
".cc-tx li{font-size:15.5px;line-height:1.5;color:#d9dee3;padding:10px 0;border-top:1px solid rgba(160,200,235,.16)}"+
".cc-tx li:first-child{border-top:0}"+
".cc-note{margin-top:14px;font-size:12px;line-height:1.45;color:#8a94a0}"+
".cc-id{font-size:19px;font-weight:700;margin:12px 0 4px}"+
".cc-lb{font-size:10.5px;letter-spacing:.18em;color:#97a0aa;margin:14px 0 5px}"+
".cc-mt{display:grid;grid-template-columns:1fr 1fr;gap:12px;border-top:1px solid rgba(160,200,235,.16);margin-top:16px;padding-top:12px}"+
".cc-mt b{display:block;font-size:10px;letter-spacing:.16em;color:#97a0aa;font-weight:500;margin-bottom:3px}.cc-mt span{font-size:13.5px}"+
".cc-ft{display:flex;align-items:center;gap:14px;padding:12px 22px;border-top:1px solid rgba(160,200,235,.16)}"+
".cc-ar{background:none;border:1px solid rgba(160,200,235,.3);color:#fff;width:38px;height:38px;border-radius:50%;cursor:pointer;font-size:16px;flex:none}"+
".cc-ar:disabled{opacity:.3;cursor:default}"+
".cc-dots{display:flex;gap:6px;flex:1;align-items:center;overflow:hidden}"+
".cc-dots i{height:4px;flex:1;max-width:46px;border-radius:2px;background:rgba(160,200,235,.25);cursor:pointer;transition:.25s}"+
".cc-dots i.on{background:#7fd4ff}"+
".cc-ct{font-size:12px;letter-spacing:.14em;color:#97a0aa;flex:none}"+
".cc-bt{border:1px solid #f4f5f7;background:#f4f5f7;color:#000;padding:10px 16px;font:600 11.5px 'Inter Tight',sans-serif;letter-spacing:.14em;border-radius:3px;text-decoration:none;flex:none;white-space:nowrap}"+
"@media(max-width:860px){.cc-ov{padding:0}.cc-pn{height:100%;max-height:none;border-radius:0;border:0}.cc-bd{grid-template-columns:1fr;grid-template-rows:38% 1fr}.cc-md{border-right:0;border-bottom:1px solid rgba(160,200,235,.16)}.cc-big{padding:18px;font-size:clamp(26px,9vw,44px)}.cc-tx{padding:20px 20px}.cc-bt{display:none}.cc-hd{padding:12px 16px}.cc-ft{padding:10px 16px}}";
document.head.appendChild(css);
var ov=document.createElement('div');ov.className='cc-ov';
ov.innerHTML='<div class="cc-pn" role="dialog" aria-modal="true"></div>';
document.body.appendChild(ov);
var pn=ov.firstChild,cur=0,idx=0;
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function all(c,i){
 var o={overview:true,k:"OVERVIEW",h:c.brand,idea:c.idea,brief:c.brief,insight:c.insight,role:c.role,img:"/plates/case-card"+(i+1)+".jpg",cover:true,title:c.title};
 return [o].concat(c.slides);
}
function render(){
 var c=CASES[cur],S=all(c,cur),s=S[idx],n=S.length;
 var media='';
 if(s.img){media='<div class="cc-md'+(s.cover?' cover':'')+'"><div class="bg" style="background-image:url('+s.img+')"></div><img src="'+s.img+'" alt="">'+'</div>'}
 else if(s.big){media='<div class="cc-md"><div class="bg" style="background-image:url(/plates/case-card'+(cur+1)+'.jpg)"></div><div class="cc-big">'+s.big.map(function(b){return '<span>'+esc(b)+'</span>'}).join('')+'</div></div>'}
 else{media='<div class="cc-md"><div class="bg" style="background-image:url(/plates/case-card'+(cur+1)+'.jpg)"></div><div class="cc-big"><span>'+esc(c.title)+'</span></div></div>'}
 var tx='<div class="cc-k">'+esc(s.k)+'</div>';
 if(s.overview){
  tx+='<h2>'+esc(c.brand)+'</h2><div class="cc-id" style="color:#7fd4ff;font-size:20px;margin-top:0">'+esc(c.title)+'</div>'+
  '<div class="cc-lb">THE BRIEF</div><p>'+esc(c.brief)+'</p><div class="cc-lb">THE INSIGHT</div><p>'+esc(c.insight)+'</p><div class="cc-lb">THE IDEA</div><div class="cc-id" style="margin-top:0">'+esc(c.idea)+'</div>'+
  '<div class="cc-mt"><div><b>ROLE</b><span>'+esc(c.role)+'</span></div><div><b>TYPE</b><span>Creative proposal · 2026</span></div></div>';
 }else{
  tx+='<h2>'+esc(s.h)+'</h2>'+(s.p||[]).map(function(t){return '<p>'+esc(t)+'</p>'}).join('')+(s.list?'<ul>'+s.list.map(function(t){return '<li>'+esc(t)+'</li>'}).join('')+'</ul>':'');
  if(s.cap)tx+='<div class="cc-note">'+esc(s.cap)+'</div>';
 }
 var dots='';for(var d=0;d<n;d++)dots+='<i class="'+(d===idx?'on':'')+'" data-i="'+d+'"></i>';
 pn.innerHTML='<div class="cc-hd"><span>'+String(cur+1).padStart(2,'0')+' / '+esc(c.cat)+' · <b>'+esc(c.brand.toUpperCase())+'</b></span><button class="cc-x" aria-label="Close">✕</button></div>'+
 '<div class="cc-bd">'+media+'<div class="cc-tx">'+tx+'</div></div>'+
 '<div class="cc-ft"><button class="cc-ar" id="ccp" aria-label="Previous"'+(idx===0?' disabled':'')+'>←</button><div class="cc-dots">'+dots+'</div><span class="cc-ct">'+(idx+1)+' / '+n+'</span><button class="cc-ar" id="ccn" aria-label="Next"'+(idx===n-1?' disabled':'')+'>→</button><a class="cc-bt" href="mailto:cnoncl.studio@gmail.com">START A CONVERSATION</a></div>';
 pn.querySelector('.cc-x').onclick=close;
 pn.querySelector('#ccp').onclick=function(){go(idx-1)};pn.querySelector('#ccn').onclick=function(){go(idx+1)};
 [].forEach.call(pn.querySelectorAll('.cc-dots i'),function(e){e.onclick=function(){go(+e.getAttribute('data-i'))}});
 var nx=S[idx+1];if(nx&&nx.img){var im=new Image();im.src=nx.img}
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

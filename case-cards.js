/* Case cards: opens a glass "case file" when a Case Studies card is clicked. Additive only. */
(function(){
var CASES=[
{brand:"Volkswagen Tiguan",cat:"AUTOMOTIVE",title:"I choose VW for my family.",idea:"Choosing enough is a statement.",
 brief:"In Dubai families choose oversized prestige SUVs for the people outside the car, then struggle with them daily.",
 insight:"The family that matters is inside the car, not watching from the street.",
 made:["60-second hero film: the big SUV that cannot park","OOH: baby-blue and minimal. The restraint is the message","Tone: smile at prestige, don't mock it"],role:"Strategy, concept, creative direction"},
{brand:"Saffron & Co.",cat:"HOSPITALITY",title:"Don't bother at home. Come to us.",idea:"Nobody goes to a restaurant just for the food.",
 brief:"A premium brunch restaurant in Dubai: three locations, polished food photography, almost no engagement.",
 insight:"Food is available at home. What is scarce is a table with people who reflect your lifestyle and values.",
 made:["60-second hero film: the struggle, the turn, the arrival, the close","Influencer strategy: 5–8 Dubai family micro-creators, unscripted","Projected targets: +40–60% engagement, +20% weekend family bookings (working targets, not results)"],role:"Strategy, concept, creative direction"},
{brand:"ClaimQI",cat:"B2B · AI HEALTHCARE",title:"Not more flags. Better decisions.",idea:"Know when not to act.",
 brief:"Payer teams are drowning in data. More claims, more flags, more noise, and valuable cases get lost.",
 insight:"The better question is not “does this claim look suspicious?” but “does this claim actually deserve action?”",
 made:["Three films, one product story: Prevent, Core, Insights","Cutdowns and multi-format system for LinkedIn, YouTube and Meta","Messaging platform and launch assets"],role:"Strategy, concept, creative direction"},
{brand:"Atorie",cat:"FASHION",title:"good enough.",idea:"The product is good enough. So are you.",
 brief:"High-quality fashion at lower markups can still feel like the cheaper alternative.",
 insight:"Fashion keeps saying be more, show more, prove more. People want to feel confident in the choice, and already enough.",
 made:["Hero film: she keeps walking while voices say “not enough”","Product film: every question cuts to real material and construction","Campaign bag and a reaction language: GIFs, stickers, replies","Pre-launch mystery: GUDINAF, revealed as good enough."],role:"Strategy, concept, creative direction"},
{brand:"Dolce Glow",cat:"BEAUTY",title:"Two ways to tell the glow.",idea:"Make the glow precious. Then make room for life.",
 brief:"How do you show a glow that lasts, for a self-tanning blush whose colour builds over twelve hours?",
 insight:"Wanting to feel good in your skin, while constantly checking it, pulls you out of the moment.",
 made:["Film 1, Jeweler / Gold: the product revealed like something precious in an Amalfi jeweller","Film 2, Take it and enjoy it: a shared mirror and a small act of kindness","Visual direction, storyboards, and a one-week path from boards to animatic"],role:"Concept, treatment, visual direction"}
];
var css=document.createElement('style');
css.textContent=".cc-ov{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:20px;font-family:'Inter Tight',system-ui,sans-serif;color:#f4f5f7}"+
".cc-ov.on{display:flex}"+
".cc-pn{width:min(1100px,100%);max-height:92vh;overflow:auto;overscroll-behavior:contain;background:linear-gradient(160deg,rgba(18,30,44,.96),rgba(8,12,18,.96));border:1px solid rgba(160,200,235,.22);border-radius:18px;box-shadow:0 0 0 1px rgba(127,212,255,.08),0 30px 120px rgba(40,140,255,.2);display:grid;grid-template-columns:1fr 1.05fr}"+
".cc-cv{position:relative;min-height:420px;background-size:cover;background-position:center;border-right:1px solid rgba(160,200,235,.22)}"+
".cc-cv:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.5))}"+
".cc-cv small{position:absolute;z-index:1;left:20px;bottom:16px;font-size:11px;letter-spacing:.16em;color:#d7dde3}"+
".cc-bd{padding:34px}"+
".cc-tp{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;font-size:12px;letter-spacing:.16em;color:#7fd4ff}"+
".cc-x{background:none;border:1px solid rgba(160,200,235,.3);color:#fff;width:34px;height:34px;border-radius:50%;cursor:pointer;font-size:16px}"+
".cc-bd h2{margin:0;font-size:clamp(30px,3.4vw,44px);font-weight:800;letter-spacing:-.02em;line-height:1.05}"+
".cc-id{font-size:20px;color:#7fd4ff;margin:10px 0 18px;font-weight:600}"+
".cc-lb{font-size:11px;letter-spacing:.18em;color:#97a0aa;margin:16px 0 6px}"+
".cc-bd p{margin:0;font-size:15.5px;line-height:1.5;color:#d9dee3}"+
".cc-bd ul{margin:0;padding-left:18px;font-size:15px;line-height:1.55;color:#d9dee3}"+
".cc-bd li{margin:3px 0}"+
".cc-mt{display:grid;grid-template-columns:1fr 1fr;gap:12px;border-top:1px solid rgba(160,200,235,.22);margin-top:20px;padding-top:14px}"+
".cc-mt b{display:block;font-size:10px;letter-spacing:.16em;color:#97a0aa;font-weight:500;margin-bottom:3px}.cc-mt span{font-size:13.5px}"+
".cc-bt{display:inline-block;margin-top:22px;border:1px solid #f4f5f7;background:#f4f5f7;color:#000;padding:11px 18px;font:600 12px 'Inter Tight',sans-serif;letter-spacing:.14em;border-radius:3px;text-decoration:none}"+
"@media(max-width:820px){.cc-pn{grid-template-columns:1fr}.cc-cv{min-height:200px;border-right:0;border-bottom:1px solid rgba(160,200,235,.22)}.cc-bd{padding:22px}}";
document.head.appendChild(css);
var ov=document.createElement('div');ov.className='cc-ov';
ov.innerHTML='<div class="cc-pn" role="dialog" aria-modal="true"></div>';
document.body.appendChild(ov);
var pn=ov.firstChild;
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
window.openCase=function(i){var c=CASES[i];if(!c)return;
 pn.innerHTML='<div class="cc-cv" style="background-image:url(/plates/case-card'+(i+1)+'.jpg)"><small>COVER FILM — COMING</small></div>'+
 '<div class="cc-bd"><div class="cc-tp"><span>0'+(i+1)+' / '+esc(c.cat)+'</span><button class="cc-x" aria-label="Close">✕</button></div>'+
 '<h2>'+esc(c.brand)+'</h2><div class="cc-id">'+esc(c.title)+'</div>'+
 '<div class="cc-lb">THE BRIEF</div><p>'+esc(c.brief)+'</p>'+
 '<div class="cc-lb">THE INSIGHT</div><p>'+esc(c.insight)+'</p>'+
 '<div class="cc-lb">THE IDEA</div><p style="font-size:19px;font-weight:700">'+esc(c.idea)+'</p>'+
 '<div class="cc-lb">THE WORK</div><ul>'+c.made.map(function(m){return '<li>'+esc(m)+'</li>'}).join('')+'</ul>'+
 '<div class="cc-mt"><div><b>ROLE</b><span>'+esc(c.role)+'</span></div><div><b>TYPE</b><span>Creative proposal · 2026</span></div></div>'+
 '<a class="cc-bt" href="mailto:cnoncl.studio@gmail.com">START A CONVERSATION</a></div>';
 pn.scrollTop=0;ov.classList.add('on');pn.querySelector('.cc-x').onclick=close};
function close(){ov.classList.remove('on')}
ov.addEventListener('click',function(e){if(e.target===ov)close()});
addEventListener('keydown',function(e){if(e.key==='Escape')close()});
['wheel','touchmove'].forEach(function(t){ov.addEventListener(t,function(e){e.stopPropagation()},{passive:true})});
})();

/* Hologram scene transition. Additive: one <script> tag in index.html. Remove the tag to revert.
   Off switch for testing: add ?holo=0 to the URL (or localStorage holo=off). */
(function(){
if(/[?&]holo=0/.test(location.search))return;
try{if(localStorage.getItem('holo')==='off')return}catch(e){}
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var css='#hx{position:fixed;inset:0;z-index:25;pointer-events:none;overflow:hidden;opacity:0;contain:strict}'
+'#hx.go{animation:hxall 1s cubic-bezier(.3,.1,.2,1) both}'
+'@keyframes hxall{0%{opacity:0}8%{opacity:1}70%{opacity:1}100%{opacity:0}}'
+'#hx .sc{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(120,235,255,.16) 0 1px,transparent 1px 4px);mix-blend-mode:screen}'
+'#hx.go .sc{animation:hxflick 1s steps(14) both}'
+'@keyframes hxflick{0%{opacity:.9}25%{opacity:.35}50%{opacity:.8}75%{opacity:.3}100%{opacity:0}}'
+'#hx .gr{position:absolute;inset:0;background-image:linear-gradient(rgba(120,235,255,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(120,235,255,.10) 1px,transparent 1px);background-size:64px 64px;mix-blend-mode:screen}'
+'#hx.go .gr{animation:hxgrid 1s ease-out both}'
+'@keyframes hxgrid{0%{opacity:0;transform:scale(1.15)}30%{opacity:1}100%{opacity:0;transform:scale(1)}}'
+'#hx .sw{position:absolute;left:0;right:0;height:16vh;top:-18vh;background:linear-gradient(180deg,transparent,rgba(110,235,255,.14) 55%,rgba(190,245,255,.55) 97%,transparent);filter:blur(1px);mix-blend-mode:screen}'
+'#hx.go .sw{animation:hxsweep .85s cubic-bezier(.45,.05,.3,1) both}'
+'@keyframes hxsweep{to{top:104vh}}'
+'#hx .sl{position:absolute;left:0;right:0;-webkit-backdrop-filter:hue-rotate(165deg) brightness(1.7) saturate(.5);backdrop-filter:hue-rotate(165deg) brightness(1.7) saturate(.5);background:rgba(90,225,255,.10);opacity:0}'
+'#hx.go .sl{animation:hxslice .62s steps(6) both;animation-delay:var(--d)}'
+'@keyframes hxslice{0%{opacity:0;transform:translateX(var(--x))}30%{opacity:1;transform:translateX(calc(var(--x)*-.6))}60%{opacity:1;transform:translateX(calc(var(--x)*.35))}100%{opacity:0;transform:none}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
var fx=document.createElement('div');fx.id='hx';fx.setAttribute('aria-hidden','true');
fx.innerHTML='<i class="gr"></i><i class="sc"></i><i class="sw"></i>';
document.body.appendChild(fx);
function slices(){
  [].slice.call(fx.querySelectorAll('.sl')).forEach(function(n){n.remove()});
  for(var i=0;i<6;i++){
    var s=document.createElement('i');s.className='sl';
    s.style.top=(Math.random()*88)+'%';s.style.height=(2+Math.random()*9)+'vh';
    s.style.setProperty('--x',((Math.random()<.5?-1:1)*(18+Math.random()*60))+'px');
    s.style.setProperty('--d',(Math.random()*.4).toFixed(2)+'s');
    fx.appendChild(s);
  }
}
var t;
function play(){
  slices();fx.classList.remove('go');void fx.offsetWidth;fx.classList.add('go');
  clearTimeout(t);t=setTimeout(function(){fx.classList.remove('go')},1100);
}
var cur=null;
function active(){var all=document.querySelectorAll('.scene'),o=document.querySelector('.scene.on');return o?[].indexOf.call(all,o):null}
var started=false;
function check(){
  var a=active();
  if(a!==null&&a!==cur){ if(started)play(); cur=a; started=true; }
}
function boot(){
  var root=document.getElementById('root');
  if(!root||!root.querySelector('.scene')){setTimeout(boot,300);return}
  new MutationObserver(check).observe(root,{subtree:true,attributes:true,attributeFilter:['class']});
  check();
}
boot();
})();

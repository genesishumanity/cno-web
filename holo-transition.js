/* Title materialize: when a scene changes, only its headline, label and button build up from light pixels.
   Nothing else on screen is touched. Additive: one <script> tag in index.html. Remove the tag to revert.
   ?holo=0 or localStorage holo=off disables it. */
(function(){
if(/[?&]holo=0/.test(location.search))return;
try{if(localStorage.getItem('holo')==='off')return}catch(e){}
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var st=document.createElement('style');
st.textContent='.hxin{animation:hxin .7s steps(7) both}@keyframes hxin{0%{opacity:0}100%{opacity:1}}'
 +'#hx{position:fixed;inset:0;width:100%;height:100%;z-index:25;pointer-events:none}';
document.head.appendChild(st);
var cv=document.createElement('canvas');cv.id='hx';cv.setAttribute('aria-hidden','true');document.body.appendChild(cv);
var g=cv.getContext('2d'),raf=0,D=800,LIFE=.4,C=7;
var SEL='.t.h,.t.sub,.btn,.t.cap.sp:not(.mute)';
function play(scene){
  cancelAnimationFrame(raf);
  var w=cv.width=innerWidth,h=cv.height=innerHeight,els=[].slice.call(scene.querySelectorAll(SEL)),cells=[];
  els.forEach(function(e){
    var r=e.getBoundingClientRect();
    if(r.width<4||r.height<4||r.right<0||r.left>w||r.bottom<0||r.top>h)return;
    e.classList.remove('hxin');void e.offsetWidth;e.classList.add('hxin');
    setTimeout(function(){e.classList.remove('hxin')},900);
    var x0=Math.max(0,r.left-4),x1=Math.min(w,r.right+4),y0=Math.max(0,r.top-3),y1=Math.min(h,r.bottom+3);
    for(var y=y0;y<y1;y+=C)for(var x=x0;x<x1;x+=C){
      cells.push({x:x,y:y,t:((x-x0)/Math.max(1,x1-x0))*.5+Math.random()*.15,a:.25+Math.random()*.4,w:Math.random()<.1});
    }
  });
  if(!cells.length)return;
  var s=performance.now();
  (function frame(now){
    var t=(now-s)/D;g.clearRect(0,0,w,h);
    if(t>=1)return;
    for(var k=0;k<cells.length;k++){
      var q=cells[k],u=(t-q.t)/LIFE;
      if(u<=0||u>=1)continue;
      g.fillStyle=(q.w?'rgba(235,252,255,':'rgba(126,232,255,')+(q.a*Math.sin(Math.PI*u)).toFixed(3)+')';
      g.fillRect(q.x,q.y,C-1,C-1);
    }
    raf=requestAnimationFrame(frame);
  })(s);
}
/* the scene with the highest opacity (scenes crossfade), HUD layer ignored */
var cur=null,started=false;
function check(){
  var all=[].slice.call(document.querySelectorAll('.scene:not(.hud)')),b=-1,o=0;
  all.forEach(function(s,i){var v=+getComputedStyle(s).opacity;if(v>o){o=v;b=i}});
  if(b>=0&&b!==cur){cur=b;if(started)play(all[b]);started=true}
}
function boot(){
  var root=document.getElementById('root');
  if(!root||!root.querySelector('.scene')){setTimeout(boot,300);return}
  var q=0;new MutationObserver(function(){if(q)return;q=requestAnimationFrame(function(){q=0;check()})}).observe(root,{subtree:true,attributes:true,attributeFilter:['class','style']});
  check();
}
boot();
})();

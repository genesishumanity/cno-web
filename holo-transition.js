/* Pixel hologram scene transition: a wave of small light pixels crosses the screen, direction differs per scene.
   Additive: one <script> tag in index.html. Remove the tag to revert. ?holo=0 or localStorage holo=off disables it. */
(function(){
if(/[?&]holo=0/.test(location.search))return;
try{if(localStorage.getItem('holo')==='off')return}catch(e){}
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var cv=document.createElement('canvas');
cv.id='hx';cv.setAttribute('aria-hidden','true');
cv.style.cssText='position:fixed;inset:0;width:100%;height:100%;z-index:25;pointer-events:none';
document.body.appendChild(cv);
var g=cv.getContext('2d'),raf=0;
var D=950,LIFE=.3;
/* front position 0..1 for a cell at (x,y) in 0..1; one pattern per destination scene */
var P=[
 function(x,y){return y},                                   /* intro: top to bottom */
 function(x,y){return x},                                   /* case studies: left to right */
 function(x,y){return 1-y},                                 /* ugc: bottom to top */
 function(x,y){return Math.hypot(x-.5,(y-.5)*.6)/.6},       /* previous works: from the center out */
 function(x,y){return 1-x},                                 /* how i think: right to left */
 function(x,y){return (x+y)/2},                             /* systems: diagonal */
 function(x,y){return Math.random()}                        /* contact: scatter */
];
function play(idx){
  cancelAnimationFrame(raf);
  var w=cv.width=innerWidth,h=cv.height=innerHeight;
  var c=Math.max(16,Math.round(w/60)),cols=Math.ceil(w/c),rows=Math.ceil(h/c),f=P[idx%P.length],cells=[];
  for(var j=0;j<rows;j++)for(var i=0;i<cols;i++){
    var p=f(i/cols,j/rows);
    cells.push({x:i*c,y:j*c,t:Math.max(0,Math.min(1,p))*(1-LIFE)+(Math.random()-.5)*.1,a:.14+Math.random()*.3,w:Math.random()<.06});
  }
  var s=performance.now();
  (function frame(now){
    var t=(now-s)/D;
    g.clearRect(0,0,w,h);
    if(t>=1+LIFE)return;
    for(var k=0;k<cells.length;k++){
      var q=cells[k],u=(t-q.t)/LIFE;
      if(u<=0||u>=1)continue;
      g.fillStyle=(q.w?'rgba(235,252,255,':'rgba(126,232,255,')+(q.a*Math.sin(Math.PI*u)).toFixed(3)+')';
      g.fillRect(q.x+1,q.y+1,c-2,c-2);
    }
    raf=requestAnimationFrame(frame);
  })(s);
}
/* the scene with the highest opacity (scenes crossfade), HUD layer ignored */
function active(){var all=[].slice.call(document.querySelectorAll('.scene:not(.hud)')),b=-1,o=0;all.forEach(function(s,i){var v=+getComputedStyle(s).opacity;if(v>o){o=v;b=i}});return b<0?null:b}
var cur=null,started=false;
function check(){
  var a=active();
  if(a!==null&&a!==cur){ if(started)play(a); cur=a; started=true; }
}
function boot(){
  var root=document.getElementById('root');
  if(!root||!root.querySelector('.scene')){setTimeout(boot,300);return}
  var q=0;new MutationObserver(function(){if(q)return;q=requestAnimationFrame(function(){q=0;check()})}).observe(root,{subtree:true,attributes:true,attributeFilter:['class','style']});
  check();
}
boot();
})();

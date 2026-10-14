/* Corner pixel transition: when a scene changes, small light pixels bloom from a random set of the page corners and fade.
   Nothing else on screen is touched. Additive: one <script> tag in index.html. Remove the tag to revert.
   ?holo=0 or localStorage holo=off disables it. */
(function(){
if(/[?&]holo=0/.test(location.search))return;
try{if(localStorage.getItem('holo')==='off')return}catch(e){}
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var cv=document.createElement('canvas');cv.id='hx';cv.setAttribute('aria-hidden','true');
cv.style.cssText='position:fixed;inset:0;width:100%;height:100%;z-index:25;pointer-events:none';
document.body.appendChild(cv);
var g=cv.getContext('2d'),raf=0,D=900,LIFE=.45,C=8;
function play(){
  cancelAnimationFrame(raf);
  var w=cv.width=innerWidth,h=cv.height=innerHeight,R=Math.min(w,h)*.34,cells=[];
  var corners=[[0,0],[w,0],[0,h],[w,h]].filter(function(){return Math.random()<.5});
  if(!corners.length)corners=[[[0,0],[w,0],[0,h],[w,h]][Math.floor(Math.random()*4)]];
  corners.forEach(function(c){
    var sx=c[0]?-1:1,sy=c[1]?-1:1;
    for(var j=0;j<R/C;j++)for(var i=0;i<R/C;i++){
      var dn=Math.hypot(i,j)*C/R;
      if(dn>=1||Math.random()<Math.pow(dn,.9))continue;
      cells.push({x:c[0]+sx*i*C-(c[0]?C:0),y:c[1]+sy*j*C-(c[1]?C:0),t:dn*.45+Math.random()*.2,a:.2+Math.random()*.4,w:Math.random()<.08});
    }
  });
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
  if(b>=0&&b!==cur){cur=b;if(started)play();started=true}
}
function boot(){
  var root=document.getElementById('root');
  if(!root||!root.querySelector('.scene')){setTimeout(boot,300);return}
  var q=0;new MutationObserver(function(){if(q)return;q=requestAnimationFrame(function(){q=0;check()})}).observe(root,{subtree:true,attributes:true,attributeFilter:['class','style']});
  check();
}
boot();
})();

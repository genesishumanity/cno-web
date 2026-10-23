const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_EXECUTABLE});try{
 const page=await browser.newPage();await page.goto(process.env.BASE_URL||'http://127.0.0.1:18766',{waitUntil:'domcontentloaded'});
 await page.locator('header a[href="#works"]').first().click();await page.waitForSelector('.pw-c');await page.evaluate(()=>document.fonts.ready);
 for(const viewport of [{width:1440,height:900},{width:800,height:600}]){
  await page.setViewportSize(viewport);await page.waitForTimeout(400);
  const failures=await page.evaluate(async()=>{const items=await fetch('/works/manifest.json').then(r=>r.json());const tile=document.querySelector('.pw-c'),original=tile._it,failures=[];
   for(const item of items){tile.dispatchEvent(new MouseEvent('mouseout',{bubbles:true}));tile._it=item;tile.dispatchEvent(new MouseEvent('mouseover',{bubbles:true}));const pop=document.querySelector('#pw-pop');pop.style.transition='none';pop.classList.add('on');const cap=pop.querySelector('.k'),rect=pop.getBoundingClientRect(),cr=cap.getBoundingClientRect();
    if(cap.scrollHeight>cap.clientHeight+1||cr.bottom>rect.bottom+1||rect.bottom>innerHeight||rect.top<0||rect.right>innerWidth)failures.push({title:item.title,scroll:cap.scrollHeight,client:cap.clientHeight,bottom:rect.bottom});
    for(const el of cap.children){const range=document.createRange();range.selectNodeContents(el);if(range.getBoundingClientRect().bottom>rect.bottom+1)failures.push({title:item.title,clippedText:true})}
   }tile._it=original;return failures;});assert.deepEqual(failures,[],JSON.stringify(viewport));
 }
 console.log('PASS: every library caption fits at 1440x900 and 800x600');
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exit(1)});

(async()=>{
let data;try{const r=await fetch((location.pathname.includes('/projects/')?'../':'')+'content.json',{cache:'no-store'});if(!r.ok)return;data=await r.json()}catch(e){return}
const site=data.site||{}, projects=data.projects||{};
const txt=(selector,value)=>{const el=document.querySelector(selector);if(el&&typeof value==='string')el.textContent=value};
const link=(selector,value)=>{const el=document.querySelector(selector);if(el&&value&&/^https:\/\//.test(value)){el.href=value;el.removeAttribute('data-linkedin')}};
const isProject=location.pathname.includes('/projects/');
if(!isProject){
 txt('.eyebrow',site.eyebrow);txt('.hero h1',site.headline);txt('.hero .lede',site.intro);txt('.about p',site.about);txt('.about p:nth-of-type(2)',site.about2);txt('.contact p',site.contact);
 if(site.skills){const e=document.querySelector('.skill-list');if(e){e.replaceChildren(...site.skills.split(',').map(x=>{let s=document.createElement('span');s.textContent=x.trim();return s}))}}
 document.querySelectorAll('a[href*="github.com/"]').forEach(a=>{if(/^https:\/\//.test(site.github||''))a.href=site.github});
 link('[data-linkedin]',site.linkedin);
 if(site.linkedin){const a=document.querySelector('[data-linkedin]');if(a){const clone=a.cloneNode(true);a.replaceWith(clone)}}
 if(site.resume){const a=document.querySelector('[data-resume]');if(a){a.href=site.resume;const clone=a.cloneNode(true);a.replaceWith(clone)}}
 if(site.email){const contact=document.querySelector('.contact .actions');if(contact&&!contact.querySelector('[data-email]')){const a=document.createElement('a');a.className='btn secondary';a.dataset.email='';a.href='mailto:'+site.email;a.textContent='Email me ↗';contact.append(a)}}
 const cards=document.querySelectorAll('.project-card');const ids=['ftc-senior','ftc-junior','buck-converter','fpga-piano','formula-sae'];cards.forEach((card,i)=>{const p=projects[ids[i]];if(!p)return;txtCard(card,'.project-meta',p.meta);txtCard(card,'h3',p.title);txtCard(card,'.project-body p',p.description);const tags=card.querySelector('.tags');if(tags&&p.tags){tags.replaceChildren(...p.tags.split(',').map(x=>{const e=document.createElement('span');e.textContent=x.trim();return e}))}if(p.image){const art=card.querySelector('.project-art');const old=art.querySelector('img,svg');if(old)old.remove();const img=document.createElement('img');img.src=p.image;img.alt=p.title;img.loading='lazy';art.append(img)}});
}else{
 const id=location.pathname.split('/').pop().replace('.html','');const p=projects[id];if(!p)return;
 txt('.detail h1',p.title);txt('.tagline',p.meta);txt('.summary',p.description);
 const labels={'Overview':'overview','Engineering challenges':'challenges','Results & evidence':'results','Tools & files':'tools'};
 document.querySelectorAll('.detail h2').forEach(h=>{const key=labels[h.textContent.trim()];if(key&&p[key]!=null){let e=h.nextElementSibling;if(e&&e.tagName==='P')e.textContent=p[key]}});
 if(p.image){const old=document.querySelector('.detail .placeholder');if(old){const img=document.createElement('img');img.src=(p.image.startsWith("assets/")?"../"+p.image:p.image);img.alt=p.title;img.style.cssText='width:100%;max-height:520px;object-fit:cover;border-radius:16px;margin:20px 0';old.replaceWith(img)}}
}
function txtCard(parent,selector,value){const e=parent.querySelector(selector);if(e&&typeof value==='string')e.textContent=value}
})();
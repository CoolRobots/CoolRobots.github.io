// Edit project descriptions here. Replace example image paths with your own photos.
// Put images in assets/ and set image: 'assets/your-photo.jpg'.
const projects = [
  {number:'01',title:'FTC Robotics — Senior Year',meta:'2025–2026 · LEAD DESIGNER & PROGRAMMER',description:'Led robot design and contributed programming for a competitive FTC robot. Explore the engineering decisions, mechanisms, and software behind the system.',tags:['Robotics','Mechanical Design','Programming'],image:'',icon:'robot',link:'projects/ftc-senior.html'},
  {number:'02',title:'FTC Robotics — Junior Year',meta:'2024–2025 · PROGRAMMER',description:'Developed robot software as part of an FTC team, with a focus on controls, iteration, and competition-ready reliability.',tags:['Robotics','Software','Controls'],image:'',icon:'code',link:'projects/ftc-junior.html'},
  {number:'03',title:'12V → 5V Buck Converter',meta:'POWER ELECTRONICS · IN PROGRESS',description:'Designed a DC-DC buck converter schematic around the TI LMR51430, exploring component selection, protection, and PCB implementation.',tags:['KiCad','Power Electronics','PCB'],image:'',icon:'circuit',link:'projects/buck-converter.html'},
  {number:'04',title:'FPGA Digital Piano',meta:'DIGITAL HARDWARE · COURSE PROJECT',description:'Built Verilog modules for note generation and waveform output, including square waves and a sine-wave approximation.',tags:['Verilog','FPGA','Digital Logic'],image:'',icon:'wave',link:'projects/fpga-piano.html'},
  {number:'05',title:'Formula SAE Switch Panel',meta:'CAD & MANUFACTURING · IN PROGRESS',description:'Designed a master switch panel in SolidWorks with mounting features, component clearances, and fabrication-oriented geometry.',tags:['SolidWorks','CAD','Formula SAE'],image:'',icon:'panel',link:'projects/formula-sae.html'}
];
const art = {
 robot:'<rect x="40" y="60" width="220" height="115" rx="14"/><circle cx="75" cy="190" r="25"/><circle cx="225" cy="190" r="25"/><rect x="90" y="90" width="120" height="55" rx="8"/><path d="M150 60V30m-20 0h40"/>',
 code:'<rect x="35" y="40" width="230" height="150" rx="12"/><path d="m120 88-28 25 28 25m60-50 28 25-28 25m-12-65-34 80"/>',
 circuit:'<rect x="40" y="35" width="220" height="160" rx="12"/><rect x="100" y="75" width="100" height="80" rx="6"/><path d="M100 95H65V65m35 70H65v30m135-70h35V65m-35 70h35v30M130 75V48m40 27V48M130 155v27m40-27v27"/>',
 wave:'<path d="M25 120h35c15 0 15-70 30-70s15 140 30 140 15-140 30-140 15 140 30 140 15-140 30-140 15 70 30 70h35"/>',
 panel:'<path d="M60 55h180l30 40v85H30V95z"/><circle cx="100" cy="115" r="27"/><circle cx="200" cy="115" r="27"/><path d="M80 180v20m140-20v20"/>'
};
const grid=document.querySelector('#project-grid');
if(grid){grid.innerHTML=projects.map(p=>`<article class="project-card"><div class="project-art"><span class="art-number">PROJECT ${p.number}</span>${p.image?`<img src="${p.image}" alt="${p.title} project photograph" loading="lazy">`:`<svg viewBox="0 0 300 230" aria-hidden="true" fill="none" stroke="#81baff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${art[p.icon]}</svg>`}</div><div class="project-body"><div class="project-meta">${p.meta}</div><h3>${p.title}</h3><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><a class="project-link" href="${p.link}" aria-label="Read about ${p.title}">View project ↗</a></div></article>`).join('')}
document.querySelector('#year').textContent=new Date().getFullYear();
// Resume and LinkedIn are intentionally disabled until you add your own URLs/files.
const resume=document.querySelector('[data-resume]');if(resume){resume.addEventListener('click',e=>{e.preventDefault();alert('Add your resume as assets/resume.pdf, then remove this click handler in script.js.');});}
const linkedin=document.querySelector('[data-linkedin]');if(linkedin){linkedin.addEventListener('click',e=>{e.preventDefault();alert('Replace the LinkedIn URL in index.html with your profile, then remove this click handler in script.js.');});}

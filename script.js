const featureData = {
 overview:{title:"Meet the AURION N1 Ultra",subtitle:"A new flagship philosophy",image:"assets/design.png",description:"A considered balance of sculpted design, immersive visuals and intelligent performance. N1 Ultra is a concept device imagined for people who want technology to feel effortless.",specs:[["Design language","Sculpted titanium-inspired frame"],["Experience","AURION OS concept"],["Finish","Obsidian / Lunar Silver"],["Starting concept price","₹79,999"]],footnote:"The AURION brand and specifications shown here are fictional concept content created for this website demo."},
 design:{title:"Sculpted to stand apart",subtitle:"Design · crafted with intent",image:"assets/design.png",description:"A refined silhouette, precision-machined edges and a confident camera island give N1 Ultra a distinct identity. Every line is designed to feel deliberate in the hand and striking from across the room.",specs:[["Frame","Aerospace-grade aluminium concept"],["Back","Matte ceramic-glass finish"],["Protection","IP68 concept rating"],["Colours","Obsidian / Lunar Silver"]],footnote:"Finish and durability details are illustrative concept specifications."},
 display:{title:"A window without limits",subtitle:"Display · visual brilliance",image:"assets/display.png",description:"Deep blacks, vivid colour and fluid motion bring your content to life. The edge-to-edge panel is imagined for cinematic viewing, creative work and effortless outdoor readability.",specs:[["Panel","6.82-inch AMOLED"],["Resolution","2K adaptive"],["Refresh rate","1–144 Hz adaptive"],["Peak brightness","Up to 3,000 nits"]],footnote:"Display figures are concept targets, not verified retail specifications."},
 performance:{title:"Power that keeps pace",subtitle:"Performance · no hesitation",image:"assets/performance-chip.png",description:"A next-generation flagship platform pairs fast memory with intelligent thermal control to keep demanding apps, creative workflows and games feeling responsive.",specs:[["Platform","Flagship 3 nm-class concept"],["Memory","Up to 24 GB RAM"],["Storage","Up to 1 TB UFS"],["Cooling","Vapor chamber system"]],footnote:"Chipset branding and benchmark results are not claimed; hardware details are fictional."},
 camera:{title:"Capture what moves you",subtitle:"Camera · beyond the ordinary",image:"assets/camera-system.png",description:"A high-resolution main sensor, ultra-wide perspective and periscope-style telephoto concept are built around natural colour, rich detail and dependable low-light capture.",specs:[["Main camera","200 MP OIS concept"],["Ultra-wide","50 MP"],["Telephoto","50 MP periscope"],["Video","8K capture concept"]],footnote:"Actual image quality depends on final hardware and software; these are illustrative specifications."},
 battery:{title:"Power through your day",subtitle:"Battery · freedom to go further",image:"assets/battery.png",description:"A high-capacity battery concept works with fast wired charging and convenient wireless charging, with adaptive power management designed to stretch every percentage.",specs:[["Capacity","5,500 mAh concept"],["Wired charging","100 W concept"],["Wireless","50 W concept"],["Smart mode","Adaptive power saver"]],footnote:"Charging speeds and battery capacity are proposed concept details and are not certified."},
 audio:{title:"Hear every layer",subtitle:"Audio · sound that surrounds",image:"assets/audio.png",description:"Balanced stereo speakers and spatial processing are imagined to make films, music and games feel fuller without sacrificing clarity at everyday listening levels.",specs:[["Speakers","Dual stereo"],["Spatial audio","AURION Spatial concept"],["Bluetooth","Next-gen wireless audio"],["Tuning","Studio-inspired profile"]],footnote:"Audio performance and codecs would depend on final product implementation."},
 security:{title:"Your world stays yours",subtitle:"Security · privacy by design",image:"assets/security.png",description:"On-device biometric access, a protected security environment and clear privacy controls put the user in charge of personal information.",specs:[["Unlock","In-display fingerprint concept"],["Face access","Secure face unlock"],["Security","Hardware-backed enclave"],["Privacy","Permission dashboard"]],footnote:"Security features are conceptual and should not be treated as a real product guarantee."},
 connectivity:{title:"Stay seamlessly connected",subtitle:"Connectivity · ready for everywhere",image:"assets/connectivity.png",description:"A modern connectivity suite concept supports fast mobile data, reliable Wi-Fi, Bluetooth accessories and easy sharing between compatible devices.",specs:[["Mobile","5G dual-SIM concept"],["Wi-Fi","Wi-Fi 7 concept"],["Bluetooth","Next-generation Bluetooth"],["Port","USB-C concept"]],footnote:"Network availability and standards support vary by region and final hardware."},
 ai:{title:"A smarter everyday",subtitle:"AURION AI · useful by design",image:"assets/ai-chip.png",description:"AURION AI is imagined as a privacy-aware assistant for summarising, translating, searching and improving everyday workflows — with clear controls over what runs on-device or in the cloud.",specs:[["Assistant","AURIONAI concept"],["Translate","Live language assistance"],["Creativity","Writing and image tools"],["Privacy","User-controlled AI settings"]],footnote:"AI functions are a design concept; no AI service is connected in this static demo."},
 box:{title:"Everything, considered",subtitle:"Inside the AURION N1 Ultra box",image:"assets/unboxing.PNg",description:"A minimal, organised unboxing experience keeps the essentials together with carefully arranged packaging and a premium first impression.",specs:[["In the box","N1 Ultra concept device"],["Power","USB-C cable"],["Protection","Protective case concept"],["Extras","SIM tool and quick guide"]],footnote:"Final in-box accessories may differ by market and retail package."}
};
const featureModal = new bootstrap.Modal(document.getElementById('featureModal'));
const preorderModal = new bootstrap.Modal(document.getElementById('preorderModal'));
const allFeaturesModal = new bootstrap.Modal(document.getElementById('allFeaturesModal'));
const toast = new bootstrap.Toast(document.getElementById('siteToast'),{delay:3200});
const iconMap={overview:'bi-play-circle',design:'bi-gem',display:'bi-display',performance:'bi-cpu',camera:'bi-camera',battery:'bi-battery-full',audio:'bi-soundwave',security:'bi-shield-lock',connectivity:'bi-wifi',ai:'bi-stars',box:'bi-box-seam'};
function showToast(message){document.getElementById('toastMessage').textContent=message;toast.show();}
function openFeature(key){
 const data=featureData[key]||featureData.overview;
 document.getElementById('featureModalTitle').textContent=data.title;
 document.getElementById('featureSubtitle').textContent=data.subtitle;
 const visual=document.getElementById('featureImage');visual.src=data.image;visual.alt=data.title;
 document.getElementById('featureDescription').textContent=data.description;
 document.getElementById('featureFootnote').textContent=data.footnote;
 document.getElementById('featureSpecs').innerHTML=data.specs.map(([k,v])=>`<div class="spec-item"><small>${k}</small><strong>${v}</strong></div>`).join('');
 document.querySelectorAll('[data-feature]').forEach(el=>el.classList.toggle('active',el.dataset.feature===key));
 featureModal.show();
}
document.querySelectorAll('[data-feature]').forEach(button=>button.addEventListener('click',()=>openFeature(button.dataset.feature)));
function openPreorder(){preorderModal.show();}
document.getElementById('preorderTop').addEventListener('click',openPreorder);
document.getElementById('preorderHero').addEventListener('click',openPreorder);
document.getElementById('modalPreorder').addEventListener('click',()=>{featureModal.hide();setTimeout(openPreorder,250);});
document.getElementById('preorderForm').addEventListener('submit',e=>{
 e.preventDefault();
 const name=document.getElementById('customerName').value.trim();
 preorderModal.hide();
 e.target.reset();
 setTimeout(()=>showToast(`Thanks${name?', '+name:''}! Your demo early-access request is confirmed locally.`),350);
});
const allFeatureList=document.getElementById('allFeatureList');
allFeatureList.innerHTML=Object.entries(featureData).filter(([key])=>key!=='overview').map(([key,item])=>`<div class="col-6"><button class="outline-btn w-100 text-start h-100" data-open-feature="${key}"><i class="bi ${iconMap[key]||'bi-stars'} me-2" style="color:var(--gold)"></i>${item.title}</button></div>`).join('');
allFeatureList.addEventListener('click',e=>{
 const btn=e.target.closest('[data-open-feature]');if(!btn)return;
 const key=btn.dataset.openFeature;allFeaturesModal.hide();setTimeout(()=>openFeature(key),250);
});
window.addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('hide'),1150));
document.addEventListener('mousemove',e=>{
 const glow=document.querySelector('.cursor-glow');if(!glow||window.innerWidth<800)return;
 glow.style.left=(e.clientX-125)+'px';glow.style.top=(e.clientY-125)+'px';
});
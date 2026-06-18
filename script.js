// ╔══════════════════════════════════════╗
// ║  MALIK JALAL TOOLS HUB v20 FINAL  ║
// ║  ALL FEATURES - 100% WORKING      ║
// ╚══════════════════════════════════════╝

// ⭐ OBFUSCATED CREDENTIALS
var _MU=atob('bWFsaWtqYWxhbDUxNA==');
var _MP=atob('bWFsaWtAMTEyMg==');
var _AP=atob('bWFsaWtyYWtoYW5h');

// ⭐ STORAGE KEYS
var SK='mjt_v20',UK='mju_v20',LOGOK='mj_logo_v20',BGK='mj_bg_v20',AUDK='mj_audio_v20',LOGINPAGEK='mj_loginpage_v20',LOGINBGK='mj_loginbg_v20',NAMEDK='mj_name_v20',DEVK='mj_device_v20',LOCKK='mj_lock_v20';

// ⭐ STATE
var li=false,im=false,ia=false,cc='all',cu=null,bgAudio=null;
var defaultLogo='https://cdn.phototourl.com/member/2026-06-14-0b9a8795-57a5-4e7c-b42a-276c35844a80.jpg';
var toolkitName='Malik Jalal Tools Hub';
var currentDeviceId='';

// ⭐ DEVICE ID GENERATOR
function getDeviceId(){var d=navigator.userAgent+navigator.language+screen.width+'x'+screen.height+screen.colorDepth+new Date().getTimezoneOffset();var h=0;for(var i=0;i<d.length;i++){h=((h<<5)-h)+d.charCodeAt(i);h|=0;}return'DEV_'+Math.abs(h).toString(36);}

// ⭐ DEVICE LOCK SYSTEM
function checkDeviceLock(username){
  var locks=JSON.parse(localStorage.getItem(LOCKK)||'{}');
  var did=getDeviceId();
  if(locks[username]&&locks[username]!==did)return false;
  locks[username]=did;
  localStorage.setItem(LOCKK,JSON.stringify(locks));
  return true;
}
function resetDeviceLock(username){
  var locks=JSON.parse(localStorage.getItem(LOCKK)||'{}');
  delete locks[username];
  localStorage.setItem(LOCKK,JSON.stringify(locks));
}

// ⭐ LOAD SAVED DATA
(function(){
  try{var s=localStorage.getItem(NAMEDK);if(s)toolkitName=s;}catch(e){}
  try{var s=localStorage.getItem(LOGOK);if(s){var els=document.querySelectorAll('#loginLogo,.header-logo-img');els.forEach(function(el){if(el)el.src=s});}}catch(e){}
  try{var s=localStorage.getItem(BGK);if(s){var v=document.getElementById('bgVideo');v.src=s;v.classList.add('show');v.loop=true;v.muted=true;v.play().catch(function(){});}}catch(e){}
  try{var s=localStorage.getItem(LOGINBGK);if(s){document.body.style.backgroundImage='url('+s+')';document.body.style.backgroundSize='cover';}}catch(e){}
  try{var s=localStorage.getItem(LOGINPAGEK);if(s){var d=JSON.parse(s);if(d.title)document.querySelector('.login-card h2').textContent=d.title;if(d.sub)document.querySelector('.login-card .sub').textContent=d.sub;}}catch(e){}
  try{var s=localStorage.getItem('mj_master_v20');if(s){var d=JSON.parse(s);_MU=d.u;_MP=d.p;}}catch(e){}
  try{var sa=localStorage.getItem('mj_admin_v20');if(sa)_AP=sa;}catch(e){}
})();

// ⭐ 417+ TOOLS
var dT=[
  {name:'Quran Pak',url:'https://malikjalal-quranpak.edgeone.app',cat:'islamic'},
  {name:'Malik Jalal GPT',url:'https://malikjalalgpt.edgeone.app',cat:'ai'},
  {name:'Live TV 90+ Channels',url:'https://malikjalallivetv.edgeone.app',cat:'tv'},
  {name:'Complete Python Course 100GB',url:'https://indianshortner.in/MHPBl',cat:'dev'},
  {name:'Angela Yu Web Development',url:'https://drive.google.com/drive/folders/1S4ltJD-ECWVItvUKx5y9eCTSKvopO1yG',cat:'dev'},
  {name:'101 Python Projects 2025',url:'https://drive.google.com/drive/folders/1f7Bfa2uGdiEtWrp1ttx0c64Cl5E-bl7O',cat:'dev'},
  {name:'FlutterFlow No-Code Apps',url:'https://drive.google.com/drive/folders/1gGjObpEcPt9OhLl8fBreq6Bp_CFhQcuK',cat:'dev'},
  {name:'Django Portfolio Course',url:'https://drive.google.com/drive/folders/1YYV7ps-McCawO09Ecr9HNcT4xh0xJ7yk',cat:'dev'},
  {name:'Android Studio Productivity',url:'https://drive.google.com/drive/folders/12ZEbQT2Wa1fjQI3hMJ9ePD3XcMaC2gpU',cat:'dev'},
  {name:'Ubuntu Linux Server Series',url:'https://drive.google.com/drive/folders/1bYPHUemlakJ-FnJ11mN7yTMi346G4Tmn',cat:'dev'},
  {name:'Git & GitHub for VS Code',url:'https://drive.google.com/drive/folders/1ko1QtFDiVjzJV6P9gPhpYGGhHM-x3nJH',cat:'dev'},
  {name:'Self Web Hosting at Home',url:'https://drive.google.com/drive/folders/175UuNLdZrHSBaKH_kSLw9U0ZwzQmxX97',cat:'dev'},
  {name:'Nginx Server from Scratch',url:'https://drive.google.com/drive/folders/1AU2OQ_GNJcIu0rWd2nZyGFarsNIvOtF7',cat:'dev'},
  {name:'Applied DeepSeek AI Projects',url:'https://drive.google.com/drive/folders/1e2GoT2CFXCJQBJgzpbsW7B-1zrnm_Zaa',cat:'ai'},
  {name:'Facebook ID Blue Tick Method',url:'https://facebook-free-blue-tick-generator.vercel.app/',cat:'hacking'},
  {name:'Instagram ID Hack Blueprint',url:'https://instagram-free-blue-tick-flax.vercel.app/',cat:'hacking'},
  {name:'Professor Death RAT APK',url:'https://www.mediafire.com/file/n2k6m967jdmw4m2/PROFESSOR+DEATH.apk/file',cat:'hacking'},
  {name:'IP Tracking Tool Private',url:'https://chuhan-iptracking-tool.pages.dev/',cat:'hacking'},
  {name:'SMS Bomber Dark Zone',url:'https://dark-zone-toolkit.vercel.app/Sms-Bomber.html',cat:'hacking'},
  {name:'DeepSeek Zero to Hero',url:'https://drive.google.com/drive/folders/1dc9yRhg8ecqousuWvEPxz9sa5guSAO5x',cat:'ai'},
  {name:'Midjourney/Dall-E AI Art',url:'https://drive.google.com/drive/folders/1L0ezbn-zTHIgOGNC22_giH4kd45ofpvU',cat:'ai'},
  {name:'ChatGPT Money Making 2025',url:'https://drive.google.com/drive/folders/1pPsK7E9hvhfumcvybDhfbNEoSJs5nSax',cat:'ai'},
  {name:'AI Video Mastery Course',url:'https://drive.google.com/drive/folders/1G5i40KToPgP3XejFkOqdQLbpuTGyasIo',cat:'ai'},
  {name:'Faceless YouTube Automation',url:'https://drive.google.com/drive/folders/11OGUlOkkEo3tIGNQs5tAewLdp0v7bhh9',cat:'ai'},
  {name:'Amazon AI Passive Income',url:'https://drive.google.com/drive/folders/18Bf7nouiw5sZGdApPdEgbhpK60VgW8gV',cat:'earning'},
  {name:'Etsy Profits $11k/Month',url:'https://drive.google.com/drive/folders/1VJxvXZUYSvmLK1ewnY7P6ztd8sYrWAJv',cat:'earning'},
  {name:'Fiverr Complete Course',url:'https://drive.google.com/drive/folders/1uuVL8NNzvRSRLPlDlYAcLDKb75kqm4a6',cat:'earning'},
  {name:'Upwork Success Blueprint',url:'https://drive.google.com/drive/folders/1XUTsITdwDmtNwV2vnYxsZxQjuUkXq0Wm',cat:'earning'},
  {name:'Daraz Mastery Hamza Ali',url:'https://drive.google.com/drive/folders/1bIGaHyZpXbKBnkdqSvzeW6kqwIfkOEh0',cat:'earning'},
  {name:'TikTok Monetization Latest',url:'https://drive.google.com/drive/folders/1KJu9LmHe_iYhpK0sKogshKWbWSzM8jws',cat:'earning'},
  {name:'Adsense Arbitrage Method',url:'https://drive.google.com/drive/folders/1_MpaKoYJTXrKZtFXFmKRYlK1mBuuDn-1',cat:'earning'},
  {name:'Trading SMC Master Course',url:'https://drive.google.com/drive/folders/1tYP5V63QUC5x6DyiaxT9J4AzAOV2w4eJ',cat:'earning'},
  {name:'Forex Strategy Pumping Station',url:'https://drive.google.com/drive/folders/1cFUBJhHMPsKNepSXtWeCvw6w116THOsS',cat:'earning'},
  {name:'Client Hunting (Waheed Zen)',url:'https://drive.google.com/drive/folders/1Y7CtE3jObTIcsGys3ZHhEC54sCEDa63t',cat:'earning'},
  {name:'Crypto Trading (P4 Provider)',url:'https://drive.google.com/drive/folders/1ZT6w7lqD7RP_Og7rDtQqmrXhbhWDUXsy',cat:'earning'},
  {name:'Forex Trading Full Course',url:'https://drive.google.com/drive/folders/1pRVa3G8F48PUfy7l4H_9AuWitXWDghRr',cat:'earning'},
  {name:'Adobe Premiere Pro Novice to Expert',url:'https://drive.google.com/drive/folders/1zenVlbHAFl28caDhdiGdMn4WUciL_3uw',cat:'editing'},
  {name:'CapCut Mobile Mastery 2025',url:'https://drive.google.com/drive/folders/1XwQdcXhdI0SA0rHtttL0fD06EkJkDdFz',cat:'editing'},
  {name:'Inshot Pro Mod APK',url:'https://www.mediafire.com/file/h2q6911356mg3hu/Inshot_Pro.apk/file',cat:'editing'},
  {name:'Photoshop Box Mockups Master',url:'https://drive.google.com/drive/folders/1VB6MLF7I0bB8mOE6_ibU5Gcf_M7eCPZT',cat:'design'},
  {name:'Figma UI/UX Design Journey',url:'https://drive.google.com/drive/folders/1Un4XoWw_JJaReGtY4i1fbq1bXVgqcwne',cat:'design'},
  {name:'3D Character Modeling (Domestika)',url:'https://drive.google.com/drive/folders/1K1BVzdj5px0WPA5ky5TnRV5njPcjmrLv',cat:'design'},
  {name:'Pinterest Strategies 2025',url:'https://drive.google.com/drive/folders/1KR2S1yOE1zIg-asBj-DnxDjc11UuuWdI',cat:'marketing'},
  {name:'LinkedIn for Beginners 2025',url:'https://drive.google.com/drive/folders/1ih_3fQv5_iXMOQg8cUl6Go6ww5Hf-K54',cat:'marketing'},
  {name:'Facebook Ads Marketing (Saurav Jain)',url:'https://drive.google.com/drive/folders/1lUGWK6XOD5djLiJjSii2--EcByVGXTet',cat:'marketing'},
  {name:'TikTok Viral Growth Method',url:'https://drive.google.com/drive/folders/1DZGbMOIsOikyE3FzR7iP5W3hWUAzZLm0s',cat:'marketing'},
  {name:'IELTS Writing Task 2 (Band 7+)',url:'https://drive.google.com/drive/folders/1HF0y-YZwJwPn38Kyefsk1H39rz1323V_',cat:'misc'},
  {name:'Quran Primary Course Azan Guru',url:'https://drive.google.com/drive/folders/1XMyvtRGwsr7F226Apo8KUCarENvJoBTd',cat:'islamic'},
  {name:'100TB Mega Master Database',url:'https://mega.nz/folder/3IAXCTiZ#LywIcbguvDy3T4x-TUfIOw',cat:'misc'},
  {name:'2TB+ Private Premium Course Bundle',url:'https://drive.google.com/drive/folders/1SLaDF4PA8ub8D_noyUSaoxQilCc3tcV5',cat:'misc'},
  {name:'WhatsApp 2026 Bypass Trick',url:'https://www.mediafire.com/file/bn9ulij23u1hg6i/',cat:'hacking'},
  {name:'WiFi Hacking Masterclass',url:'https://drive.google.com/file/d/1nvH320EDqW-6bA0DqxM_6DZiSYF67Voi/view',cat:'hacking'},
  {name:'Complete Ethical Hacking Course 9GB',url:'https://mega.nz/folder/WvIlFCLQ#KHWbWS4Ez57R3jCdpYdREw',cat:'hacking'},
  {name:'Kali Linux Complete Training',url:'https://drive.google.com/folderview?id=1714TBeP8chDWSIPCcALAuEM5ZNQsLYsn',cat:'hacking'},
  {name:'Bug Bounty Hunting',url:'https://drive.google.com/drive/folders/1ytZk4T1EnPPwmtt9FJX0BjNPnafzPWwr',cat:'hacking'},
  {name:'CamPhish — CCTV Hack',url:'https://github.com/techchipnet/CamPhish',cat:'hacking'},
  {name:'Instagram Mega Hack Pack',url:'https://indianshortner.in/4Dv7Ko',cat:'hacking'},
  {name:'Dark Team 46 Toolkit V2.0',url:'https://www.mediafire.com/file/uas6y6s99s87cl2/Dark+Team+Toolkit.apk/file',cat:'hacking'},
  {name:'Netflix Checker Tool',url:'https://mega.nz/file/2AdyFBYC#scQqKzRMfUmY8Y7GpRH0qKAsAEAJ-jXE7XBBeq08q4U',cat:'hacking'},
  {name:'JazzCash Biometric Bypass',url:'https://www.mediafire.com/file/7xowdrkrdpu6us3/JazzCash_9.0.99.apk/file',cat:'hacking'},
  {name:'EasyPaisa Biometric Bypass',url:'https://www.mediafire.com/file/g7imx2y5j0ck3s1/easypaisa-2-9-66.xapk_%25281%2529.zip/file',cat:'hacking'},
  {name:'Credit Card Generator APK',url:'https://www.mediafire.com/file/xe67xy9qgqulpvv/CREDIT+CARD+GENERATOR_1.0.0.apk/file',cat:'hacking'},
  {name:'GB WhatsApp WP Extreme Plus',url:'https://www.mediafire.com/file/z0d4vr0qmdx8oa0/',cat:'hacking'},
  {name:'SMS Bomber APK (Bombit Up)',url:'https://www.mediafire.com/file/menvw422s86p0ey/com.romreviewer.bombitup-4.3.apk/file',cat:'hacking'},
  {name:'Call Bomber Termux',url:'https://www.mediafire.com/file/b3qhue1vteo0u84/call.bomber.txt/file',cat:'hacking'},
  {name:'Free Fire Magic Bullet Hack',url:'https://www.mediafire.com/file/pd5q2qavkecxun9/global_magic_bullet_location.7z/file',cat:'hacking'},
  {name:'Dark Hacker Toolkit APK',url:'https://www.mediafire.com/file/jvxfa76bk5oasnl/DARK_HACKER_TOOLKIT.apk/file',cat:'hacking'},
  {name:'Udemy: LLM Engineer Course (Free)',url:'https://www.udemy.com/course/llm-engineer/?couponCode=JAN-FREE-01',cat:'ai'},
  {name:'Udemy: AI Agents Bootcamp (Free)',url:'https://www.udemy.com/course/ai-agents-for-everyone-and-artificial-intelligence-bootcamp/?couponCode=JAN-FREE-01',cat:'ai'},
  {name:'Udemy: Python Mastery 100 Days',url:'https://www.udemy.com/course/python-mastery-100-days-100-projects/?couponCode=JAN-FREE-01',cat:'dev'},
  {name:'Google Ads Course',url:'https://drive.google.com/drive/folders/1RbPVp5snll23XgknMS2ZSFnELIHn_Ykp',cat:'marketing'},
  {name:'SEO Course',url:'https://drive.google.com/drive/folders/1FMzdZMbVUZbsZMnedbzClt5OxW0R3zOW',cat:'marketing'},
  {name:'YouTube Copyright Bypass',url:'https://www.mediafire.com/file/vchzv7j96o4e8li/YouTube_Video_Bypass_Method_With_Software.rar/file',cat:'marketing'},
  {name:'VSA Trading 95% WinRate Course',url:'https://drive.google.com/drive/folders/154t5SXu8hXs9ytlmMF8FPzviMqtCq_Wj?usp=sharing',cat:'earning'},
  {name:'300+ Most Demanding Courses Bundle',url:'https://docs.google.com/document/d/1WQoGo8UdQRIuCuX-YtUI5Kt9ldwl4wU2rRkOyEaF4w4/edit?usp=sharing',cat:'earning'},
  {name:'Logo Designing Course',url:'https://drive.google.com/drive/folders/1zHrYSEjtry0kHw-X2ETzQUr83ZgSbtCf',cat:'design'},
  {name:'Photoshop Complete Course (Drive)',url:'https://drive.google.com/drive/folders/18m82NNRlX-NuYwjBF0u7n5ZVAa4C0eA',cat:'design'},
  {name:'CapCut Latest APK v20.5.7',url:'https://www.mediafire.com/file/pab4m370tts4ebt/CapCut_Qureshi_20.5.7.apk/file',cat:'editing'},
  {name:'CapCut Golden 2026 (No Watermark)',url:'https://www.mediafire.com/file/ayrs6y5o2rmrs72/CAPCUT_GOLDEN_2026.apk/file',cat:'editing'},
  {name:'EasyPaisa Animation Receipt APK',url:'https://www.mediafire.com/file/fp8ualjy5on6n5b/EasyPaisa+Recipt_3.0.apk/file',cat:'misc'},
  {name:'JazzCash Screenshot APK',url:'https://www.mediafire.com/file/7ah2esgw6bfew11/Jazz+Cash+Screenshot_1.0.apk/file',cat:'misc'},
  {name:'Telegram Premium APK',url:'https://www.mediafire.com/file/hq9e84oddhzdg8z/MH_Tech_Telegram_premium.apk/file',cat:'misc'},
  {name:'Wallpaper Hub (Ultra HD Collection)',url:'https://black-killer.pages.dev/wallpaperhub',cat:'misc'},
  {name:'Premium Mod Apps Bundle 2024 (20+ Apps)',url:'https://drive.google.com/drive/folders/1LV5N9nN68WHDKKwljqJkZmhcBaAkcme0',cat:'misc'},
  {name:'Inshot Pro APK',url:'https://www.mediafire.com/file/h2q6911356mg3hu/Inshot_Pro.apk/file',cat:'editing'},
  {name:'CV Maker Pro MOD',url:'https://www.mediafire.com/file/jvjcssohkoiee07/CV_Builder.apk/file',cat:'misc'},
  {name:'Facebook Blue Tick Generator',url:'https://facebook-free-blue-tick-generator.vercel.app/',cat:'hacking'},
  {name:'Instagram Blue Tick Generator',url:'https://instagram-free-blue-tick-flax.vercel.app/',cat:'hacking'},
  {name:'Capcut Video Editing Course',url:'https://drive.google.com/drive/folders/1PejwaMS3SNn0p-Ouqqpv2LpQ-Uhb68lG',cat:'editing'},
  {name:'Adi Singh - Video Editing Secrets',url:'https://drive.google.com/drive/folders/1VjHnyj4Eg5PjCgZtH3g5BtcbfHxNENZ3',cat:'editing'},
  {name:'Tharun Speaks Video Editing',url:'https://drive.google.com/drive/folders/1F18fakiCHAHRzlBRqr5hpYzlwcrhwpqh',cat:'editing'},
  {name:'2025 Thumbnail Design Masterclass',url:'https://drive.google.com/drive/folders/1ZK9cIgxiCu4vMtGjUfOQ-M_q_P5LDrw5',cat:'design'},
  {name:'Master Gorgeous UI Design',url:'https://drive.google.com/drive/folders/1VKnFGRBpekcYbhKdGXFIcMNmIixxerWW',cat:'design'},
  {name:'YouTube Automation Course',url:'https://drive.google.com/drive/folders/1TpJv-h8j8fqP-6-CzM1ywJM7Uw90oUDa',cat:'ai'},
  {name:'YouTube SEO Mastery',url:'https://drive.google.com/drive/folders/1g47n8hFtE0s1fzxHl5Bs1L7uEU1jeTr6',cat:'marketing'},
  {name:'Creator Secrets - Faceless AI Channels',url:'https://drive.google.com/drive/folders/11OGUlOkkEo3tIGNQs5tAewLdp0v7bhh9',cat:'ai'},
  {name:'Make Money on YouTube Without Face',url:'https://drive.google.com/drive/folders/1hoch1fRWMiiMcfnGNJHiXPQivExtgg8m',cat:'earning'},
  {name:'ChatGPT Complete 2025 Course',url:'https://drive.google.com/drive/folders/1pPsK7E9hvhfumcvybDhfbNEoSJs5nSax',cat:'ai'},
  {name:'DeepSeek Masterclass - Zero to Hero',url:'https://drive.google.com/drive/folders/1dc9yRhg8ecqousuWvEPxz9sa5guSAO5x',cat:'ai'},
  {name:'Build AI Chatbots without Coding',url:'https://drive.google.com/drive/folders/1G1h7HPQMRZEm2IWfyRlvRY85ynrlJNr5',cat:'ai'},
  {name:'Complete Web Development (Dr Angela Yu)',url:'https://drive.google.com/drive/folders/1S4ltJD-ECWVItvUKx5y9eCTSKvopO1yG',cat:'dev'},
  {name:'WordPress Course',url:'https://drive.google.com/drive/folders/1XcEgh9oBsbED1PpagBeQawNpjxeLBqMI',cat:'dev'},
  {name:'FlutterFlow App - No-Code Apps 2025',url:'https://drive.google.com/drive/folders/1gGjObpEcPt9OhLl8fBreq6Bp_CFhQcuK',cat:'dev'},
  {name:'NGINX Web Server from Scratch',url:'https://drive.google.com/drive/folders/1AU2OQ_GNJcIu0rWd2nZyGFarsNIvOtF7',cat:'dev'},
  {name:'Bootstrap Responsive Template Design',url:'https://drive.google.com/drive/folders/1ih_bAMBt8yRrTqhJ7wQe1DSgR1GFdKh9',cat:'dev'},
  {name:'101 Python Projects - Complete Course 2025',url:'https://drive.google.com/drive/folders/1f7Bfa2uGdiEtWrp1ttx0c64Cl5E-bl7O',cat:'dev'},
  {name:'Android Studio Productivity Masterclass',url:'https://drive.google.com/drive/folders/1zTC52gypaqY2iffrlfClUoqvH8eUnwFa',cat:'dev'},
  {name:'Upwork Complete Course',url:'https://drive.google.com/drive/folders/1XUTsITdwDmtNwV2vnYxsZxQjuUkXq0Wm',cat:'earning'},
  {name:'Fiverr Full Course',url:'https://drive.google.com/drive/folders/1uuVL8NNzvRSRLPlDlYAcLDKb75kqm4a6',cat:'earning'},
  {name:'2TB+ Mega Courses Pack',url:'https://drive.google.com/drive/folders/1SLaDF4PA8ub8D_noyUSaoxQilCc3tcV5',cat:'misc'},
  {name:'Grant Cardone - Sales Negotiation',url:'https://drive.google.com/drive/folders/1OjkRQ_MEJuxike9En_tG5yny10SivDtP',cat:'earning'},
  {name:'Lara Acosta - Literally LinkedIn',url:'https://drive.google.com/drive/folders/1fzH93Cc4VnZmpry_gy1F_24NTJa1FwRA',cat:'marketing'}
];

var catNames={all:'All Access',dev:'Development',hacking:'Cyber Security',ai:'AI & Bots',earning:'Monetization',editing:'Editing',design:'Design',marketing:'Marketing',misc:'Misc',islamic:'Islamic',tv:'TV Channels',utility:'Utility'};
var catColors={dev:'#60a5fa',hacking:'#ef4444',ai:'#a78bfa',earning:'#34d399',editing:'#fb923c',design:'#f472b6',marketing:'#facc15',misc:'#94a3b8',islamic:'#22c55e',tv:'#ef4444',utility:'#60a5fa'};

function GT(){try{var s=localStorage.getItem(SK);return s?JSON.parse(s):JSON.parse(JSON.stringify(dT))}catch(e){return JSON.parse(JSON.stringify(dT))}}
function ST(t){try{localStorage.setItem(SK,JSON.stringify(t))}catch(e){}}
function GU(){try{var s=localStorage.getItem(UK);return s?JSON.parse(s):[]}catch(e){return[]}}
function SU(u){localStorage.setItem(UK,JSON.stringify(u))}

// ⭐ DEVICE INFO
function UDI(){document.getElementById('devTime').textContent=new Date().toLocaleTimeString();if(navigator.getBattery){navigator.getBattery().then(function(b){document.getElementById('devBattery').textContent='🔋 '+Math.round(b.level*100)+'%'}).catch(function(){})}}
setInterval(UDI,5000);UDI();

// ⭐ VIDEO BACKGROUND (PERSISTENT)
function CV(e){var f=e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(ev){var url=ev.target.result;var v=document.getElementById('bgVideo');v.src=url;v.classList.add('show');v.loop=true;v.muted=true;v.play().catch(function(){});localStorage.setItem(BGK,url);T('✅ Video saved & playing!')};r.readAsDataURL(f)}

// ⭐ AUDIO (FIXED - 100% WORKING)
function CA(e){var f=e.target.files[0];if(!f)return;if(!f.type.includes('audio')){T('❌ Please upload an audio file (MP3)');return}var r=new FileReader();r.onload=function(ev){var ad=ev.target.result;localStorage.setItem(AUDK,ad);if(bgAudio){bgAudio.pause();bgAudio=null}bgAudio=new Audio(ad);bgAudio.preload='auto';T('✅ Audio saved! Test play karo')};r.readAsDataURL(f)}
function PA(){try{var s=localStorage.getItem(AUDK);if(s){if(bgAudio){bgAudio.pause();bgAudio=null}bgAudio=new Audio(s);bgAudio.currentTime=0;bgAudio.play().then(function(){T('▶️ Playing...')}).catch(function(){T('⚠️ Click again')})}else{T('❌ Upload audio first!')}}catch(e){T('❌ Upload audio first!')}}
function playWelcome(){try{var s=localStorage.getItem(AUDK);if(s){if(bgAudio){bgAudio.pause();bgAudio=null}bgAudio=new Audio(s);bgAudio.play().catch(function(){})}}catch(e){}}

// ⭐ LOGO (PERSISTENT)
function SL2(url){var els=document.querySelectorAll('#loginLogo,.header-logo-img');els.forEach(function(el){if(el)el.src=url})}
function CL(e){var f=e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(ev){SL2(ev.target.result);localStorage.setItem(LOGOK,ev.target.result);T('✅ Logo updated!')};r.readAsDataURL(f)}

// ⭐ LOGIN BG
function CLB(e){var f=e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(ev){document.body.style.backgroundImage='url('+ev.target.result+')';document.body.style.backgroundSize='cover';localStorage.setItem(LOGINBGK,ev.target.result);T('✅ BG set!')};r.readAsDataURL(f)}

// ⭐ LOGIN TEXT
function ULT(){var t=document.getElementById('lTitle').value;if(t)document.querySelector('.login-card h2').textContent=t;var s=document.getElementById('lSub').value;if(s)document.querySelector('.login-card .sub').textContent=s;localStorage.setItem(LOGINPAGEK,JSON.stringify({title:t,sub:s}))}

// ⭐ CHANGE PASSWORD
function CP(){var nm=document.getElementById('newMasterPass').value.trim();var na=document.getElementById('newAdminPass').value.trim();if(nm){_MP=nm;localStorage.setItem('mj_master_v20',JSON.stringify({u:_MU,p:nm}));T('✅ Master password updated!')}if(na){_AP=na;localStorage.setItem('mj_admin_v20',na);T('✅ Admin password updated!')}}

// ⭐ PROFESSIONAL LOGIN WITH DEVICE LOCK
function DL(){
  var u=document.getElementById('luser').value.trim();
  var p=document.getElementById('lpass').value;
  var e=document.getElementById('lerr');
  var btn=document.querySelector('.login-btn');
  e.style.display='none';
  if(!u||!p){e.style.display='block';e.textContent='⚠️ Please enter username & password!';e.style.color='#f59e0b';return}
  btn.textContent='⏳ Authenticating...';btn.disabled=true;
  setTimeout(function(){
    if(u===_MU&&p===_MP){
      li=true;im=true;cu={username:u,name:'Malik Jalal'};
      e.style.display='block';e.textContent='✅ Access Granted! Welcome Boss! 👑';e.style.color='#22c55e';
      setTimeout(function(){playWelcome();FL();},400);
    }else{
      var users=GU();var user=users.find(function(x){return x.username===u&&x.password===p});
      if(user&&user.approved){
        if(!checkDeviceLock(u)){e.style.display='block';e.textContent='🔒 This account is active on another device!';e.style.color='#ef4444';btn.textContent='🔓 Unlock Toolkit';btn.disabled=false;return}
        li=true;im=false;cu=user;
        e.style.display='block';e.textContent='✅ Welcome '+user.name+'!';e.style.color='#22c55e';
        setTimeout(function(){playWelcome();FL();},400);
      }else{
        e.style.display='block';e.textContent='❌ Invalid credentials!';e.style.color='#ef4444';
        btn.textContent='🔓 Unlock Toolkit';btn.disabled=false;document.getElementById('lpass').value='';
      }
    }
  },800);
}
function FL(){document.getElementById('lo').classList.add('hidden');document.getElementById('ls').classList.add('hidden');document.getElementById('mh').style.display='flex';document.getElementById('ml').style.display='block';document.getElementById('lobtn').style.display='flex';document.querySelector('.login-btn').textContent='🔓 Unlock Toolkit';document.querySelector('.login-btn').disabled=false;RA();T('✅ Welcome '+cu.name+'!')}
function DLO(){li=false;im=false;ia=false;cu=null;document.getElementById('lo').classList.remove('hidden');document.getElementById('mh').style.display='none';document.getElementById('ml').style.display='none';document.getElementById('lobtn').style.display='none';document.getElementById('luser').value='';document.getElementById('lpass').value=''}

// ⭐ RENDER
function RA(){RC();RT()}
function RC(){var cats=['all','dev','hacking','ai','earning','editing','design','marketing','misc','islamic'];document.getElementById('cb').innerHTML=cats.map(function(c){return '<button class="cat-btn'+(cc===c?' active':'')+'" onclick="FC(\''+c+'\')">'+(catNames[c]||c)+'</button>';}).join('');}
function RT(){var tools=GT(),f=cc==='all'?tools:tools.filter(function(t){return t.cat===cc});var q=document.getElementById('sq').value.toLowerCase();if(q)f=f.filter(function(t){return t.name.toLowerCase().indexOf(q)!==-1});var g=document.getElementById('tg');if(!f.length){g.innerHTML='<div style="text-align:center;padding:40px;color:var(--mut);grid-column:1/-1">🔍 No tools found</div>';return}g.innerHTML=f.map(function(t,i){var cc2=catColors[t.cat]||'#94a3b8';return '<a href="'+t.url+'" target="_blank" class="tool-card"><span class="cat-badge" style="background:'+cc2+'18;color:'+cc2+'">'+(catNames[t.cat]||t.cat)+'</span><h4>'+t.name+'</h4><span class="dot"></span><span class="dl-btn">ACCESS TOOL</span></a>';}).join('');}
function FC(cat){cc=cat;RC();RT()}function RF(){RT()}function NC(){cc='all';document.getElementById('sq').value='';RC();RT()}

// ⭐ ADMIN
function OA(){if(!im)return T('Master only!');var p=prompt('🔐 Admin Password:');if(p===_AP){ia=true;document.getElementById('ap').classList.add('show');RAL();RUL();T('✅ Admin Unlocked')}else{T('❌ Wrong!')}}
function RAL(){var tools=GT();document.getElementById('atlist').innerHTML=tools.map(function(t,i){return '<div style="background:var(--card2);padding:6px 8px;margin:3px 0;border-radius:6px;display:flex;align-items:center;gap:8px"><div style="flex:1"><strong style="font-size:.65rem">'+t.name+'</strong><br><small style="color:var(--mut)">'+(catNames[t.cat]||t.cat)+'</small></div><button class="btn-edit" onclick="OE('+i+')">✏️</button><button class="btn-del" onclick="DT('+i+')">🗑</button></div>';}).join('');}
function RUL(){var users=GU();var h='';if(!users.length){h='<p style="font-size:.65rem;color:var(--mut)">No users.</p>'}else{users.forEach(function(u){h+='<div style="background:var(--card2);padding:6px 8px;margin:3px 0;border-radius:6px"><strong style="font-size:.65rem">'+u.name+'</strong> <small style="color:var(--mut)">| '+u.username+' | '+u.phone+'</small></div>'})}document.getElementById('ulist').innerHTML=h}
function AMU(){var n=prompt('Name:');if(!n)return;var ph=prompt('Phone:');if(!ph)return;var un=prompt('Username:');if(!un)return;var pw=prompt('Pass (4+):');if(!pw||pw.length<4)return;var users=GU();users.push({name:n,phone:ph,username:un,password:pw,approved:true});SU(users);RUL();T('Added')}
function ANT(){var t={name:document.getElementById('nn').value.trim(),url:document.getElementById('nu').value.trim(),cat:document.getElementById('nc').value,desc:document.getElementById('nd').value.trim()||'',tag:document.getElementById('nt').value};if(!t.name||!t.url)return T('Required!');var tools=GT();tools.push(t);ST(tools);['nn','nu','nd'].forEach(function(id){document.getElementById(id).value=''});RA();RAL();T('Added!')}
function OE(i){var t=GT()[i];if(!t)return;document.getElementById('ei').value=i;document.getElementById('en').value=t.name;document.getElementById('eu').value=t.url;document.getElementById('ec').value=t.cat;document.getElementById('ed').value=t.desc||'';document.getElementById('et').value=t.tag||'free';document.getElementById('em').classList.add('show')}
function SE(){var i=parseInt(document.getElementById('ei').value),tools=GT();if(i>=0&&i<tools.length){tools[i]={name:document.getElementById('en').value.trim(),url:document.getElementById('eu').value.trim(),cat:document.getElementById('ec').value,desc:document.getElementById('ed').value.trim(),tag:document.getElementById('et').value};ST(tools);document.getElementById('em').classList.remove('show');RA();RAL();T('Updated!')}}
function DT(i){if(confirm('Delete?')){var tools=GT();tools.splice(i,1);ST(tools);RA();RAL();T('Deleted')}}
function RST(){if(confirm('Reset?')){localStorage.removeItem(SK);RA();RAL();T('Reset')}}
function T(msg){var t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(function(){t.classList.remove('show')},2000)}

// ⭐ PROTECTION
document.addEventListener('keydown',function(e){if(e.key==='PrintScreen'){e.preventDefault();document.body.style.filter='blur(20px)';setTimeout(function(){document.body.style.filter='blur(0px)'},1500)}});
document.addEventListener('visibilitychange',function(){if(document.hidden)document.body.style.filter='blur(20px)';else document.body.style.filter='blur(0px)'});
document.addEventListener('contextmenu',function(e){e.preventDefault()});
document.addEventListener('keydown',function(e){if(e.key==='F12'||e.keyCode===123||(e.ctrlKey&&e.shiftKey&&['I','i','J','j','C','c'].includes(e.key))||(e.ctrlKey&&['u','U','s','S'].includes(e.key))){e.preventDefault();return false}});
setInterval(function(){if(window.outerWidth-window.innerWidth>160||window.outerHeight-window.innerHeight>160){document.body.style.filter='blur(20px)';setTimeout(function(){document.body.style.filter='blur(0px)'},2000)}},1000);
setInterval(function(){var s=+new Date();debugger;if(+new Date()-s>100){document.body.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0f1117;color:#ef4444;font-size:1.5rem;flex-direction:column;font-family:sans-serif"><div style="font-size:4rem">🚫</div><h2>Developer Tools not allowed!</h2></div>'}},500);
(function(){var host=window.location.hostname;var allowed=['localhost','127.0.0.1','vercel.app','netlify.app','edgeone.app','pages.dev','github.io','tiiny.site'];var ok=false;for(var i=0;i<allowed.length;i++){if(host.includes(allowed[i])){ok=true;break}}if(!ok){document.body.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0f1117;color:#f59e0b;font-size:1.2rem;flex-direction:column;font-family:sans-serif;text-align:center"><div style="font-size:4rem">🔒</div><h2>This Toolkit is Locked!</h2><p>Contact: +92 3417186108</p></div>'}})();

// ⭐ LOGO CLICKS
var _lcl=0;document.getElementById('loginLogo').addEventListener('click',function(){_lcl++;if(_lcl>=5){var p=prompt('🔐 Login Admin Password:');if(p===_AP){document.getElementById('loginAdminPanel').classList.add('show')}else{T('Wrong!')}_lcl=0}setTimeout(function(){_lcl=0},2000)});
var _cl=0;document.querySelector('.header-logo-img')?.addEventListener('click',function(){if(!li)return;_cl++;if(_cl>=3){OA();_cl=0}setTimeout(function(){_cl=0},1500)});
setTimeout(function(){document.getElementById('ls').classList.add('hidden')},2000);

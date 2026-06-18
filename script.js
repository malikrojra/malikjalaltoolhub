<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Malik Jalal Tools Hub | 417+ Premium Tools</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<video id="bgVideo" loop muted playsinline autoplay></video>

<div class="device-info" id="deviceInfo">
  <span id="devTime">--:--</span>
  <span id="devBattery">🔋 --%</span>
  <span id="devName">📱 Device</span>
</div>

<div class="loading-screen" id="ls">
  <div class="loading-text">WELCOME TO<br><span>MALIK JALAL</span><br>TOOLS HUB</div>
  <div class="spinner"></div>
</div>

<div class="login-overlay" id="lo">
  <div class="islamic-header">
    <div class="urdu">کیا آج آپ نے درود شریف پڑھا ؟</div>
    <div class="arabic">صلى الله عليه وآله وسلم</div>
    <div class="hadith">حضور نبی کریم ﷺ نے ارشاد فرمایا کہ جو شخص ایک مرتبہ درود شریف پڑھتا ہے اللہ تعالی اُس پر دس رحمتیں نازل فرماتا ہے، دس گناہ معاف کرتا ہے اور دس درجے بلند کرتا ہے</div>
  </div>
  <div class="login-card">
    <img src="https://cdn.phototourl.com/member/2026-06-14-0b9a8795-57a5-4e7c-b42a-276c35844a80.jpg" id="loginLogo" alt="MJ" title="5-Click for Login Admin">
    <h2>Malik Jalal Tools Hub</h2>
    <p class="sub">🔐 417+ Premium Tools — Private Access</p>
    <input id="luser" placeholder="👤 Username" type="text">
    <input id="lpass" placeholder="🔒 Password" type="password" onkeydown="if(event.key==='Enter')DL()">
    <button class="login-btn" onclick="DL()">🔓 Unlock Toolkit</button>
    <div class="login-error" id="lerr"></div>
    <button class="pay-btn" onclick="document.getElementById('payM').classList.add('show')">💎 Get Access - Rs 2500</button>
    <p style="font-size:.6rem;color:#6b7280;margin-top:8px">👑 MALIK JALAL | Bahawalpur, Pakistan</p>
  </div>
</div>

<div class="edit-modal" id="payM">
  <div class="modal-content" style="text-align:center">
    <h3>💎 Premium Access</h3>
    <div style="font-size:2rem;font-weight:800;color:#f59e0b">Rs 2500</div>
    <div style="background:#dd1c1a;color:#fff;padding:12px;border-radius:10px;margin:10px 0">📱 <b>JazzCash: +92 3037376848</b><br><small>MALIK JALAL</small></div>
    <a href="https://wa.me/923417186108" target="_blank" style="display:block;background:#25d366;color:#fff;padding:10px;border-radius:10px;text-decoration:none;font-weight:700;font-size:.8rem">💚 WhatsApp: +92 3417186108</a>
    <button onclick="document.getElementById('payM').classList.remove('show')" style="background:rgba(255,255,255,0.06);margin-top:8px;width:100%">Close</button>
  </div>
</div>

<div class="logout-btn" id="lobtn" onclick="DLO()">🚪</div>

<div class="main-header" id="mh" style="display:none">
  <div class="header-left">
    <img src="https://cdn.phototourl.com/member/2026-06-14-0b9a8795-57a5-4e7c-b42a-276c35844a80.jpg" class="header-logo-img" alt="MJ">
    <h1>Malik <span>Jalal</span> Tools Hub</h1>
  </div>
  <div class="header-right">
    <button class="btn-outline" onclick="NC()">＋ New Chat</button>
    <button class="btn-danger" onclick="DLO()">🚪 Logout</button>
  </div>
</div>

<div class="main-layout" id="ml" style="display:none">
  <div class="search-wrap"><input id="sq" oninput="RF()" placeholder="🔍 Search 417+ tools..." type="text"><i class="fas fa-search"></i></div>
  <div class="cats" id="cb"></div>
  <a class="quran-banner" href="https://malikjalal-quranpak.edgeone.app" target="_blank"><span style="font-size:1.8rem">🕌</span><div><strong>📖 Quran Pak</strong><br><small>Audio • Translation</small></div></a>
  <div class="tools-grid" id="tg"></div>
  
  <div class="admin-panel" id="ap">
    <h3>👑 Admin Panel</h3>
    <div style="background:#1e222d;padding:10px;border-radius:8px;margin-bottom:8px">
      <h5 style="color:#f59e0b">🎨 Customize</h5>
      <div class="file-upload-box" onclick="document.getElementById('logoUpload').click()"><p>🖼️ Upload Logo</p><input type="file" id="logoUpload" accept="image/*" onchange="CL(event)"></div>
      <div class="file-upload-box" onclick="document.getElementById('bgVideoUpload').click()"><p>🎬 Upload BG Video</p><input type="file" id="bgVideoUpload" accept="video/*" onchange="CV(event)"></div>
      <div class="file-upload-box" onclick="document.getElementById('audioUpload').click()"><p>🔊 Upload Welcome Audio</p><input type="file" id="audioUpload" accept="audio/*" onchange="CA(event)"></div>
      <button class="btn-save" onclick="PA()" style="font-size:.6rem">▶️ Test Audio</button>
    </div>
    <div style="background:#1e222d;padding:10px;border-radius:8px;margin-bottom:8px">
      <h5 style="color:#f59e0b">🔐 Change Passwords</h5>
      <input id="newMasterPass" placeholder="New Master Password" type="password">
      <input id="newAdminPass" placeholder="New Admin Password" type="password">
      <button class="btn-save" onclick="CP()">💾 Save</button>
    </div>
    <div style="background:#1e222d;padding:10px;border-radius:8px;margin-bottom:8px">
      <h5 style="color:#f59e0b">👥 User Management</h5>
      <button class="btn-add" onclick="AMU()" style="font-size:.65rem">➕ Add User</button>
      <div id="ulist"></div>
    </div>
    <div style="background:#1e222d;padding:10px;border-radius:8px;margin-bottom:8px">
      <h5 style="color:#f59e0b">➕ Add Resource</h5>
      <input id="nn" placeholder="Name"><input id="nu" placeholder="URL">
      <select id="nc"><option value="dev">Development</option><option value="hacking">Cyber Security</option><option value="ai">AI & Bots</option><option value="earning">Monetization</option><option value="editing">Editing</option><option value="design">Design</option><option value="marketing">Marketing</option><option value="misc">Misc</option><option value="islamic">Islamic</option></select>
      <input id="nd" placeholder="Desc"><select id="nt"><option value="free">Free</option><option value="premium">Premium</option><option value="new">New</option></select>
      <button class="btn-add" onclick="ANT()">➕ Add</button>
    </div>
    <h5>📋 Resources</h5><div id="atlist"></div>
    <button class="btn-del" onclick="RST()">🗑 Reset</button>
    <button onclick="document.getElementById('ap').classList.remove('show')" style="background:rgba(255,255,255,0.06)">Close</button>
  </div>
</div>

<div class="edit-modal" id="em">
  <div class="modal-content">
    <h3>✏️ Edit</h3>
    <input id="ei" type="hidden"><input id="en" placeholder="Name"><input id="eu" placeholder="URL">
    <select id="ec"><option value="dev">Development</option><option value="hacking">Cyber Security</option><option value="ai">AI & Bots</option><option value="earning">Monetization</option><option value="editing">Editing</option><option value="design">Design</option><option value="marketing">Marketing</option><option value="misc">Misc</option><option value="islamic">Islamic</option></select>
    <input id="ed" placeholder="Desc"><select id="et"><option value="free">Free</option><option value="premium">Premium</option><option value="new">New</option></select>
    <button class="btn-save" onclick="SE()">💾 Save</button>
    <button onclick="document.getElementById('em').classList.remove('show')" style="background:rgba(255,255,255,0.06)">Cancel</button>
  </div>
</div>

<div class="edit-modal" id="loginAdminPanel">
  <div class="modal-content">
    <h3>🔧 Login Page Customizer</h3>
    <input id="lTitle" placeholder="Login Title" onchange="ULT()">
    <input id="lSub" placeholder="Login Subtitle" onchange="ULT()">
    <input id="lFooter" placeholder="Footer Text" onchange="ULT()">
    <div class="file-upload-box" onclick="document.getElementById('loginBgUpload').click()"><p>🖼️ Upload BG Image</p><input type="file" id="loginBgUpload" accept="image/*" onchange="CLB(event)"></div>
    <button onclick="document.getElementById('loginAdminPanel').classList.remove('show')" style="background:rgba(255,255,255,0.06);margin-top:8px;width:100%">Close</button>
  </div>
</div>

<div class="footer"><p>Developed with ❤️ by <strong style="color:#f59e0b">MALIK JALAL</strong> | Bahawalpur, Pakistan</p></div>
<div class="toast" id="toast"></div>

<script src="script.js"></script>
</body>
</html>

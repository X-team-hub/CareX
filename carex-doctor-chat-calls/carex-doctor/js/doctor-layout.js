// Shared layout. Every page is its own HTML file; this only injects the common sidebar/header.
(function(){
var P={d:'M3 11l9-8 9 8M5 10v10h14V10',c:'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',u:'M16 20v-2a4 4 0 00-8 0v2M12 12a4 4 0 100-8 4 4 0 000 8',v:'M3 7h12v10H3zM15 10l6-3v10l-6-3',f:'M6 3h9l4 4v14H6zM9 12h7M9 16h7',t:'M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2',w:'M3 7h18v13H3zM3 7l3-4h12l3 4M16 14h2',b:'M6 16V11a6 6 0 0112 0v5l2 2H4zM10 20h4',g:'M12 15a3 3 0 100-6 3 3 0 000 6zM12 3v3M12 18v3M3 12h3M18 12h3',r:'M12 2l3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z',p:'M12 5v14M5 12h14',m:'M6 9l6 6 6-6'};
window.icon=function(n){return '<svg class="ic" viewBox="0 0 24 24"><path d="'+P[n]+'"/></svg>'};
var NAV=[['dashboard','Dashboard','d'],['patients','My Patients','u'],['messages','Messages','m'],['appointments','Appointments','c'],['token-earnings','Token Earnings','w'],['consultation','Consultation','v'],['prescriptions','Prescriptions','f'],['availability','My Availability','t'],['notifications','Notifications','b'],['settings','Settings','g']];
var PARENT={'appointment-details':'appointments','patient-details':'patients','create-prescription':'prescriptions','earnings':'token-earnings','claim-tokens':'token-earnings','payout-requests':'token-earnings','transactions':'transactions','profile':'profile'};
var cur=(location.pathname.split('/').pop()||'dashboard.html').replace('.html','');cur=PARENT[cur]||cur;
function build(){
 var s=document.createElement('aside');s.className='sidebar';
 s.innerHTML='<div class="logo">CareX</div><nav>'+NAV.map(function(n){return '<a href="'+n[0]+'.html"'+(n[0]==cur?' class="active"':'')+'>'+icon(n[2])+n[1]+(n[0]=='notifications'?'<span class="badge-n" id="sideCount" hidden></span>':'')+'</a>'}).join('')+'</nav><div class="tag">Better Care.<br>Healthier Tomorrow.</div>';
 var dim=document.createElement('div');dim.className='dim';
 var h=document.createElement('header');h.className='topbar';
 h.innerHTML='<button class="iconbtn" id="menuBtn" aria-label="Toggle sidebar"><svg class="ic" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button><div class="sp"></div>'+
 '<a class="iconbtn" href="notifications.html" aria-label="Notifications">'+icon('b')+'<span class="badge-n" id="bellCount" hidden></span></a>'+
 '<a class="profile" href="profile.html"><div class="avatar" id="docAvatar">Dr</div><div><div class="pname" id="docName">Doctor</div><div class="vbadge" id="docVerified">✔ Verified Doctor</div></div></a>'+
 '<div class="dd"><button class="iconbtn" id="ddBtn" aria-label="Profile menu">'+icon('m')+'</button><div class="ddmenu" id="ddMenu"><a href="#" id="logoutLink">Logout</a></div></div>';
 document.body.prepend(s,dim);document.querySelector('.main').prepend(h);
 var tg=function(){s.classList.toggle('open');dim.classList.toggle('open')};
 document.getElementById('menuBtn').onclick=tg;dim.onclick=tg;
 document.getElementById('ddBtn').onclick=function(){document.getElementById('ddMenu').classList.toggle('open')};
 document.getElementById('logoutLink').onclick=function(e){e.preventDefault();CareXDoctor.logout()};
 document.querySelectorAll('[data-i]').forEach(function(e){e.outerHTML=icon(e.dataset.i)});
}
// Supabase hook: reuses YOUR existing client. No new client, no keys here.
window.CareXDoctor={client:function(){return window.supabaseClient||window.supabase_client||window.sb||null},
 async init(){var c=this.client();if(!c||!c.auth)return;
  var r=await c.auth.getUser();var u=r&&r.data&&r.data.user;if(!u)return;
  var n=(u.user_metadata&&(u.user_metadata.full_name||u.user_metadata.name))||u.email;
  document.getElementById('docName').textContent=n;document.getElementById('docAvatar').textContent=n.trim().slice(0,2).toUpperCase();
  var bn=document.getElementById('bannerName');if(bn)bn.textContent=n;this.user=u;/* TODO: query your existing doctors table by u.id; only if verified: document.getElementById('docVerified').classList.add('on') */}};
CareXDoctor.logout=async function(){var c=this.client();try{if(c&&c.auth)await c.auth.signOut()}catch(e){}location.href=window.CAREX_LOGIN_URL||'login.html'};
document.addEventListener('DOMContentLoaded',function(){build();CareXDoctor.init()});
})();

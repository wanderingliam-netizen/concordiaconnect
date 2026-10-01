const SUPABASE_URL = 'https://knadfjpgxvvwmrehvzle.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_CPEbD733DRH8vUnyICTYTg_rYkSMoKq';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
async function testSupabase() {
  console.log("Testing Supabase connection...");
  
  // Checks basic connectivity to your Supabase project
  const { data, error } = await supabase.from('posts').select('*');

  if (error) {
    // 404 / 'relation does not exist' means connection WORKED, 
    // but the table 'test' simply isn't created yet (which is completely fine for a ping test).
    console.log("Supabase connected successfully! Response from server:", error.message);
  } else {
    console.log("Supabase connected and returned data:", data);
  }
}

testSupabase();
const KEY = 'concordia-connect-demo-v1';
const assets = {
  campus: 'assets/campus.svg',
  eventConcert: 'assets/event-concert.svg',
  eventMileEnd: 'assets/event-mile-end.svg',
  eventHike: 'assets/event-hike.svg',
  eventStudy: 'assets/event-study.svg',
  avaEmma: 'assets/ava-emma.svg',
  avaDaniel: 'assets/ava-daniel.svg',
  avaSophie: 'assets/ava-sophie.svg',
  avaChloe: 'assets/ava-chloe.svg',
  avaLucas: 'assets/ava-lucas.svg',
  avaSophien: 'assets/ava-sophie-n.svg',
  avaMaya: 'assets/ava-maya.svg'
};

const seeded = {
  user: { name:'Liam', year:'2nd year', program:'Business', bio:'Always planning the next trip. Looking for good people, local food, hikes and spontaneous city missions.', interests:['Travel','Hiking','Good Food','Music'], email:'liam@example.com' },
  activeView:'home',
  boardFilter:'All',
  boardSearch:'',
  posts:[
    {id:1,user:'Emma L.',avatar:'avaEmma',time:'21 min ago',location:'Loyola Campus',tag:'Social',text:'Anyone down to grab food at Mile End tonight? Looking for 2-3 people to tag along!',image:'eventMileEnd',likes:12,liked:false,comments:[{user:'Alex R.',avatar:'avaLucas',text:"I'm in! What time?"},{user:'Emma L.',avatar:'avaEmma',text:'Around 6:30? I’ll DM the group once we have a few people.'}]},
    {id:2,user:'Daniel K.',avatar:'avaDaniel',time:'34 min ago',location:'Downtown',tag:'Study',text:'Study group for COMM214 this week? Looking for people who actually want to prepare (not just last minute 😅).',likes:8,liked:false,comments:[{user:'Maya',avatar:'avaMaya',text:'Yes please — Tuesday evening works for me.'}]},
    {id:3,user:'Sophie M.',avatar:'avaSophie',time:'48 min ago',location:'McGill/Concordia',tag:'Travel',text:'Heading to Old Montreal this Saturday around 11am. Anyone want to explore and grab coffee?',likes:15,liked:false,comments:[{user:'Lucas',avatar:'avaLucas',text:'I can join around noon!'}]},
    {id:4,user:'Lucas P.',avatar:'avaLucas',time:'1 hr ago',location:'SGW Campus',tag:'Other',text:'Looking for a couple people to try the new board game café after class. Zero experience required.',likes:6,liked:false,comments:[]},
    {id:5,user:'Maya R.',avatar:'avaMaya',time:'2 hrs ago',location:'Downtown',tag:'Social',text:'Anyone heading to the Friday student concert? I have two friends going and we’re happy to have a bigger group.',likes:10,liked:false,comments:[]},
    {id:6,user:'Chloe A.',avatar:'avaChloe',time:'3 hrs ago',location:'Mount Royal',tag:'Travel',text:'Sunrise hike this Sunday. Public transit from downtown. Coffee after. Who is brave?',image:'eventHike',likes:19,liked:false,comments:[{user:'Sophie M.',avatar:'avaSophie',text:'This sounds very on-brand for me 😂'}]}
  ],
  finder:[
    {id:'chloe',name:'Chloe',age:20,year:'2nd year',program:'Concordia',avatar:'avaChloe',interests:['Travel','Hiking','Good Food','Music'],bio:'Always down for new adventures! Looking to make more friends to explore the city, travel, and have good food with.',online:true},
    {id:'lucas',name:'Lucas',age:22,year:'3rd year',program:'Engineering',avatar:'avaLucas',interests:['Sports','Music','Movies','Tech'],bio:'Pickup basketball, concerts, late-night food spots and building questionable side projects.',online:false},
    {id:'sophien',name:'Sophie',age:21,year:'2nd year',program:'Arts',avatar:'avaSophien',interests:['Art','Food','Travel','Books'],bio:'Museums, coffee, thrift stores and finding the weirdest corner of Montreal.',online:true},
    {id:'maya',name:'Maya',age:20,year:'2nd year',program:'Communication',avatar:'avaMaya',interests:['Fitness','Music','Travel','Fashion'],bio:'Gym before class, music after class. Looking for people to explore Montreal with.',online:true},
    {id:'daniel',name:'Daniel',age:21,year:'3rd year',program:'Commerce',avatar:'avaDaniel',interests:['Study','Finance','Coffee','Hockey'],bio:'Study groups, cafés and trying to stay ahead of deadlines for once.',online:false}
  ],
  finderIndex:0,
  matches:[
    {id:'chloe',name:'Chloe',age:20,year:'2nd year',avatar:'avaChloe',interests:['Travel','Hiking','Food'],last:'Hey! I was thinking maybe Old Montreal or a hike this weekend?',online:true,unread:true,messages:[{from:'them',text:'Hey! I saw we both like hiking and good food.',time:'9:40 AM'},{from:'me',text:'I’m down for both haha. How about a hike then food after?',time:'9:42 AM'},{from:'them',text:'Perfect! I’ll make a post on the board and we can get a few more people if you want :)',time:'9:44 AM'}]},
    {id:'lucas',name:'Lucas',age:22,year:'3rd year',avatar:'avaLucas',interests:['Sports','Music','Movies'],last:'Want to join pickup basketball Thursday?',online:false,unread:false,messages:[{from:'them',text:'Want to join pickup basketball Thursday?',time:'Yesterday'},{from:'me',text:'Absolutely. What time?',time:'Yesterday'}]},
    {id:'sophien',name:'Sophie',age:21,year:'2nd year',avatar:'avaSophien',interests:['Art','Food','Travel'],last:'Found a tiny café in Mile End.',online:true,unread:false,messages:[{from:'them',text:'Found a tiny café in Mile End.',time:'Mon'},{from:'me',text:'Send it my way 👀',time:'Mon'}]},
    {id:'maya',name:'Maya',age:20,year:'2nd year',avatar:'avaMaya',interests:['Fitness','Music','Travel'],last:'Free for the student concert?',online:true,unread:false,messages:[{from:'them',text:'Free for the student concert?',time:'Sun'}]}
  ],
  activeMatchId:'chloe',
  issues:[
    {id:'april-12',title:'This Week at Concordia',date:'Apr 12, 2026',hero:'Newsletter #08',intro:'Your weekly guide to events, food, study tips and more around Concordia.',articles:[
      {title:'Free Concert: The Dears',meta:'Sat, Apr 12 · 7:00 PM',location:'Place des Arts · Free with student ID',image:'eventConcert',body:'A low-cost Saturday night option that still feels like a night out. Meet friends downtown, grab a quick bite before doors, then walk over together. The student rate makes this an easy group plan without overthinking it.',cta:'Add to your plans'},
      {title:'Mile End Food Crawl',meta:'Sat, Apr 12 · 12:00 PM',location:'Mile End · Hidden gems & local eats',image:'eventMileEnd',body:'Pick three stops, share everything and keep the afternoon moving. Start with coffee, hit one classic bakery, then finish with a cheap plate or sandwich. Bring a friend and use the board to grow the group.',cta:'See food route'},
      {title:'Study Tips for Finals',meta:'Tue, Apr 15 · 6:00 PM',location:'Library workshop',image:'eventStudy',body:'Try a two-pass review: first, build a one-page topic map from memory. Second, quiz yourself with short scenario questions. Put your phone in another room for 30-minute focused blocks.',cta:'Save study tip'},
      {title:'Montreal Hiking Meetup',meta:'Sun, Apr 13 · 9:00 AM',location:'Mount Royal Park',image:'eventHike',body:'Meet at the base and keep the pace friendly. Bring water, a snack and shoes with grip. The route is flexible, and the point is to talk while walking, not race to the top.',cta:'Open meetup'}
    ]},
    {id:'april-05',title:'Weekend Mode: Montreal Edition',date:'Apr 5, 2026',hero:'Newsletter #07',intro:'A packed but practical weekend plan for students who want to get out of the house.',articles:[
      {title:'Five-dollar breakfast mission',meta:'Sat, Apr 5 · 10:00 AM',location:'Atwater → Griffintown',image:'eventMileEnd',body:'Start with the cheapest breakfast you can find, then walk south and see how far you get before lunch. The goal is to make a full morning out of a tiny budget.',cta:'Plan the morning'},
      {title:'Campus club speed-run',meta:'Fri, Apr 4 · 4:00 PM',location:'SGW Campus · Multiple rooms',image:'eventConcert',body:'Give yourself 45 minutes to visit three club booths. Ask what they actually do, when they meet and whether they welcome beginners. Then follow up with one person you clicked with.',cta:'Add reminder'},
      {title:'The no-cram study session',meta:'Sun, Apr 6 · 2:00 PM',location:'Library · 3 x 30-minute blocks',image:'eventStudy',body:'Pick the most confusing topic first. Explain it out loud without notes, then fill the gaps. Repeat twice more. The goal is retrieval, not pretty notes.',cta:'Start a study post'}
    ]},
    {id:'march-29',title:'New Friends Without the Awkwardness',date:'Mar 29, 2026',hero:'Newsletter #06',intro:'Three simple ways to turn “we should hang out” into an actual plan.',articles:[
      {title:'Make the tiny plan',meta:'Any day · 10 minutes',location:'Concordia + nearby',image:'eventHike',body:'Instead of asking someone to hang out “sometime”, pick a place and a window. “Coffee at 3 near Guy?” is much easier to answer than “we should hang out.”',cta:'Create a plan'},
      {title:'Use a shared activity',meta:'Weekend idea',location:'Montreal',image:'eventConcert',body:'A walk, study session, food crawl or pickup game gives the conversation something to do. You do not need a perfect first impression — you just need a shared reason to be there.',cta:'Browse the board'},
      {title:'Follow up while the moment is fresh',meta:'Best within 24 hours',location:'Messages',image:'eventStudy',body:'Send one concrete message after meeting someone: where, when, and what you are doing. It turns a good interaction into a real plan before everyone gets busy again.',cta:'Open matches'}
    ]}
  ],
  events:[
    {id:'concert',title:'The Dears — Student Night',when:'Sat, Apr 12 · 7:00 PM',where:'Place des Arts',image:'eventConcert',detail:'Live music downtown. Student ID accepted for free entry.',interested:false},
    {id:'food',title:'Mile End Food Crawl',when:'Sat, Apr 12 · 12:00 PM',where:'Mile End',image:'eventMileEnd',detail:'Three stops, shared plates and a low-pressure way to meet people.',interested:false},
    {id:'hike',title:'Montreal Hiking Meetup',when:'Sun, Apr 13 · 9:00 AM',where:'Mount Royal Park',image:'eventHike',detail:'Transit-friendly hike with an easy pace and coffee after.',interested:true},
    {id:'study',title:'Study Tips for Finals',when:'Tue, Apr 15 · 6:00 PM',where:'Library',image:'eventStudy',detail:'A practical workshop for exam prep, retrieval practice and better study blocks.',interested:false}
  ]
};

let state = loadState();
const app = document.getElementById('app');
const modalRoot = document.getElementById('modalRoot');
const toastRoot = document.getElementById('toastRoot');

function loadState(){
  try{ const saved=JSON.parse(localStorage.getItem(KEY)); return saved ? {...seeded,...saved} : structuredClone(seeded); }
  catch(e){ return structuredClone(seeded); }
}
function save(){ localStorage.setItem(KEY,JSON.stringify(state)); }
function asset(key){ return assets[key] || assets.campus; }
function esc(s=''){return s.replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function avatar(key, cls='avatar'){return `<div class="${cls}"><img src="${asset(key)}" alt=""></div>`}
function toast(msg){const el=document.createElement('div');el.className='toast';el.textContent=msg;toastRoot.appendChild(el);setTimeout(()=>el.remove(),2600)}
function setView(view){ state.activeView=view; save(); render(); window.scrollTo({top:0,behavior:'smooth'}); }
function navWire(){
  document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
  document.querySelectorAll('[data-action="home"]').forEach(b=>b.addEventListener('click',()=>setView('home')));
}
function render(){
  const v=state.activeView;
  if(v==='home') renderHome();
  else if(v==='board') renderBoard();
  else if(v==='finder') renderFinder();
  else if(v==='matches') renderMatches();
  else if(v==='newsletter') renderNewsletter();
  else renderProfile();
  navWire(); updateNav();
}
function updateNav(){
  document.querySelectorAll('.nav-btn,.mobile-nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===state.activeView));
  const initials=(state.user.name||'L').split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase();
  document.getElementById('topAvatar').textContent=initials;
}

function renderHome(){
  app.innerHTML=`
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">Same campus · new connections</div>
        <h1>Make plans.<br>Meet <span>people.</span><br>Actually go.</h1>
        <p>ConcordiaConnect turns “we should hang out sometime” into real plans — study groups, food runs, hikes, events and new friendships built around what you already like.</p>
        <div class="hero-cta"><button class="btn btn-primary" id="getStarted">Get Started</button><button class="btn btn-ghost" data-view="board">Explore the Post Board</button></div>
      </div>
      <div class="demo-card"><img src="assets/design-reference.png" alt="ConcordiaConnect app design reference"><div class="demo-overlay"><div><strong>One campus. A lot of plans.</strong><div>Post • Discover • Match • Message</div></div><span>Interactive demo</span></div></div>
    </section>
    <div class="section-head"><div><h2>Everything in one place</h2><p>Built around how students actually make plans.</p></div></div>
    <section class="feature-grid">
      <article class="feature-card"><div class="feature-ico">◌</div><h3>Post Board</h3><p>See people looking for food, study buddies, events, day trips and last-minute plans — then jump in with a comment.</p></article>
      <article class="feature-card"><div class="feature-ico">♡</div><h3>Friend Finder</h3><p>Swipe through students by interests and vibe. Like people, match, and start a conversation without the dating-app pressure.</p></article>
      <article class="feature-card"><div class="feature-ico">▣</div><h3>Weekly Newsletter</h3><p>Curated events, practical study tips, food ideas and “what’s happening this week” in and around Concordia.</p></article>
      <article class="feature-card"><div class="feature-ico">✦</div><h3>Real plans</h3><p>Event cards have concrete times and places so “maybe” becomes “Saturday at noon”.</p></article>
      <article class="feature-card"><div class="feature-ico">☏</div><h3>Messages</h3><p>Matched friends can coordinate directly with lightweight chat and quick follow-up.</p></article>
      <article class="feature-card"><div class="feature-ico">◎</div><h3>Your profile</h3><p>Pick interests, write a short bio and edit your details whenever your semester changes.</p></article>
    </section>
    <div class="section-head"><div><h2>Jump into a plan</h2><p>${state.posts.length} example posts are already waiting.</p></div><button class="btn btn-primary" data-view="board">Open Post Board</button></div>
    <section class="board-layout"><div class="feed">${state.posts.slice(0,3).map(renderPost).join('')}</div><aside class="side-stack"><div class="panel"><h3>Quick stats</h3><div class="stat-row"><div class="stat"><b>${state.matches.length}</b><small>matches</small></div><div class="stat"><b>${state.posts.filter(p=>p.tag==='Travel').length}</b><small>travel posts</small></div><div class="stat"><b>${state.issues.length}</b><small>newsletters</small></div></div></div><div class="panel"><h3>Try a side quest</h3><p>Pick something small today: coffee with someone from class, a 30-minute walk, or a new place you’ve never tried.</p><div class="divider"></div><button class="btn btn-ghost" style="width:100%" id="sideQuest">Give me one</button></div></aside></section>
  `;
  document.getElementById('getStarted').addEventListener('click',openOnboarding);
  document.getElementById('sideQuest').addEventListener('click',()=>{
    const quests=['Ask someone in your next class if they want to study together for 30 minutes.','Take the metro one stop you rarely use and find a cheap food spot nearby.','Post one tiny plan on the board — coffee, a walk or a study block.','Invite one person from a match to an actual time-and-place plan.'];
    toast(quests[Math.floor(Math.random()*quests.length)]);
  });
}

function filteredPosts(){
  const q=(state.boardSearch||'').toLowerCase();
  return state.posts.filter(p=>(state.boardFilter==='All'||p.tag===state.boardFilter) && (!q || `${p.text} ${p.user} ${p.location}`.toLowerCase().includes(q)));
}
function renderBoard(){
  const filters=['All','Study','Social','Travel','Other']; const posts=filteredPosts();
  app.innerHTML=`<div class="page-title"><div><h1>Post Board</h1><p>Find people going to the same places, events or looking for study buddies.</p></div><button class="btn btn-primary" id="createPost">＋ Create post</button></div>
  <div class="toolbar"><input class="search-input" id="boardSearch" placeholder="Search posts, places, people…" value="${esc(state.boardSearch||'')}">${filters.map(f=>`<button class="filter-chip ${state.boardFilter===f?'active':''}" data-filter="${f}">${f}</button>`).join('')}</div>
  <div class="composer"><div class="avatar" style="display:grid;place-items:center;background:linear-gradient(135deg,#4b2440,#cf0a54);font-size:12px;font-weight:800">${esc((state.user.name||'L')[0])}</div><input id="composerInput" placeholder="What are you doing this week? Tap to create a post…"></div>
  <div class="board-layout"><div class="feed">${posts.length?posts.map(renderPost).join(''):`<div class="empty"><strong>No posts found</strong>Try a different filter or create the first one.</div>`}</div><aside class="side-stack"><div class="panel"><h3>Board pulse</h3><div class="stat-row"><div class="stat"><b>${state.posts.length}</b><small>posts</small></div><div class="stat"><b>${state.posts.reduce((a,p)=>a+p.likes,0)}</b><small>likes</small></div><div class="stat"><b>${state.posts.reduce((a,p)=>a+p.comments.length,0)}</b><small>comments</small></div></div></div><div class="panel"><h3>Post ideas</h3><p>• “Anyone down for a cheap lunch near Guy?”<br>• “Study group before COMM214?”<br>• “Who’s going to the Friday concert?”<br>• “Exploring Old Montreal Saturday.”</p></div></aside></div>`;
  document.getElementById('createPost').addEventListener('click',openCreatePost);
  document.getElementById('composerInput').addEventListener('focus',openCreatePost);
  document.getElementById('boardSearch').addEventListener('input',e=>{state.boardSearch=e.target.value;renderBoard();navWire();document.getElementById('boardSearch').focus();document.getElementById('boardSearch').setSelectionRange(e.target.value.length,e.target.value.length)});
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{state.boardFilter=b.dataset.filter;save();renderBoard();navWire()}));
  wirePostActions();
}
function renderPost(p){
  return `<article class="post-card" data-post="${p.id}">
    <div class="post-top"><div class="user-row">${avatar(p.avatar)}<div class="user-meta"><strong>${esc(p.user)}</strong><small>${esc(p.time)} · ${esc(p.location)}</small></div></div><span class="tag">${esc(p.tag)}</span></div>
    <div class="post-body"><p>${esc(p.text)}</p>${p.image?`<div class="post-image"><img src="${asset(p.image)}" alt=""></div>`:''}</div>
    <div class="post-actions"><button class="action-link ${p.liked?'liked':''}" data-like="${p.id}">♡ ${p.likes}</button><button class="action-link" data-comments="${p.id}">◯ ${p.comments.length}</button><button class="action-link" data-share="${p.id}">↗ Share</button><button class="action-link" data-open="${p.id}">Open</button></div>
  </article>`;
}
function wirePostActions(){
  document.querySelectorAll('[data-like]').forEach(b=>b.addEventListener('click',()=>{const p=state.posts.find(x=>x.id==b.dataset.like);p.liked=!p.liked;p.likes += p.liked?1:-1;save();renderBoard()}));
  document.querySelectorAll('[data-comments],[data-open]').forEach(b=>b.addEventListener('click',()=>openPostModal(b.dataset.comments||b.dataset.open)));
  document.querySelectorAll('[data-share]').forEach(b=>b.addEventListener('click',()=>{navigator.clipboard?.writeText(location.href).catch(()=>{});toast('Post link copied (demo)');}));
}

function renderFinder(){
  if(state.finderIndex>=state.finder.length) state.finderIndex=0;
  const p=state.finder[state.finderIndex];
  app.innerHTML=`<div class="page-title"><div><h1>Friend Finder</h1><p>Swipe, match, and make new friends on campus — friendship only.</p></div><button class="btn btn-ghost" id="resetFinder">↺ Reset queue</button></div>
  <div class="finder-grid"><div class="finder-card-wrap"><article class="finder-card"><div class="finder-photo"><img src="${asset(p.avatar)}" alt="${esc(p.name)}"></div><div class="finder-info"><div class="finder-name">${esc(p.name)}, ${p.age}</div><div class="finder-sub">${esc(p.program)} · ${esc(p.year)} ${p.online?'· <span style="color:#58dfa3">Online now</span>':''}</div><div class="chips">${p.interests.map(i=>`<span class="chip">${esc(i)}</span>`).join('')}</div><div class="finder-bio">${esc(p.bio)}</div></div><div class="swipe-actions"><button class="swipe-btn pass" id="passBtn" title="Pass">✕</button><button class="swipe-btn star" id="starBtn" title="Save for later">☆</button><button class="swipe-btn like" id="likeBtn" title="Like">♥</button></div></article></div>
  <aside class="side-stack"><div class="panel"><h3>Suggested matches</h3><div class="finder-side-list">${state.finder.map((x,i)=>`${avatar(x.avatar)}<div style="flex:1"><strong>${esc(x.name)}, ${x.age}</strong><small>${x.interests.slice(0,2).join(' · ')}</small></div>${state.matches.some(m=>m.id===x.id)?'<span class="mini-match">Matched</span>':''}`).join('')}</div></div><div class="panel"><h3>How it works</h3><p>Like someone to add them to Matches. Star them to remember the profile for later. Pass to move on. This prototype keeps everything in your browser.</p></div></aside></div>`;
  document.getElementById('passBtn').addEventListener('click',()=>swipe('pass'));
  document.getElementById('starBtn').addEventListener('click',()=>swipe('star'));
  document.getElementById('likeBtn').addEventListener('click',()=>swipe('like'));
  document.getElementById('resetFinder').addEventListener('click',()=>{state.finderIndex=0;save();renderFinder();navWire()});
}
function swipe(type){
  const p=state.finder[state.finderIndex];
  if(type==='like'){
    if(!state.matches.some(m=>m.id===p.id)) state.matches.unshift({id:p.id,name:p.name,age:p.age,year:p.year,avatar:p.avatar,interests:p.interests.slice(0,3),last:'New match — say hello 👋',online:p.online,unread:true,messages:[{from:'them',text:`Hey! We both like ${p.interests[0].toLowerCase()} — want to make a plan?`,time:'Now'}]});
    toast(`It’s a match with ${p.name}!`); state.activeMatchId=p.id; state.activeView='matches';
  }else if(type==='star') toast(`${p.name} saved for later`);
  else toast(`Passed on ${p.name}`);
  state.finderIndex=(state.finderIndex+1)%state.finder.length; save(); render();
}

function renderMatches(){
  const active=state.matches.find(m=>m.id===state.activeMatchId) || state.matches[0];
  if(!active){app.innerHTML=`<div class="empty"><strong>No matches yet</strong>Visit Friend Finder and like someone to start a conversation.</div>`;return}
  active.unread=false;save();
  app.innerHTML=`<div class="page-title"><div><h1>My Matches</h1><p>Keep the good conversations moving into real plans.</p></div><button class="btn btn-primary" data-view="finder">Find more people</button></div>
  <div class="matches-layout"><section class="panel match-list">${state.matches.map(m=>`<button class="match-item ${m.id===active.id?'active':''}" data-match="${m.id}">${avatar(m.avatar)}<div style="min-width:0;text-align:left"><strong>${esc(m.name)}, ${m.age}</strong><small>${esc(m.last)}</small></div><div class="spacer"></div>${m.unread?'<span class="unread-dot"></span>':''}</button>`).join('')}</section>
  <section class="panel chat"><div class="chat-head">${avatar(active.avatar)}<div><strong>${esc(active.name)}, ${active.age}</strong><div class="online">${active.online?'Online now':'Last active recently'}</div></div><div class="spacer"></div><button class="icon-btn" id="openProfileBtn">⋯</button></div><div class="messages" id="messages">${active.messages.map(m=>`<div class="bubble ${m.from==='me'?'out':'in'}">${esc(m.text)}<div class="msg-time">${esc(m.time)}</div></div>`).join('')}</div><form class="chat-form" id="chatForm"><input id="chatInput" placeholder="Type a message…" autocomplete="off"><button class="btn btn-primary" type="submit">Send</button></form></section></div>`;
  document.querySelectorAll('[data-match]').forEach(b=>b.addEventListener('click',()=>{state.activeMatchId=b.dataset.match;save();renderMatches();navWire()}));
  document.getElementById('chatForm').addEventListener('submit',e=>{e.preventDefault();const input=document.getElementById('chatInput');const val=input.value.trim();if(!val)return;active.messages.push({from:'me',text:val,time:new Date().toLocaleTimeString([], {hour:'numeric',minute:'2-digit'})});active.last=val;save();renderMatches();});
  document.getElementById('openProfileBtn').addEventListener('click',()=>openMiniProfile(active));
}

function renderNewsletter(){
  const issue=state.issues.find(i=>i.id===state.activeIssueId) || state.issues[0];
  state.activeIssueId=issue.id; save();
  app.innerHTML=`<div class="page-title"><div><h1>Newsletter</h1><p>Complete weekly editions with events, food, study tips and practical plans.</p></div><button class="btn btn-ghost" id="copyIssue">Copy issue link</button></div>
  <div class="news-grid"><section><div class="newsletter-hero" style="background-image:url('${asset('campus')}');background-size:cover;background-position:center"><div class="newsletter-hero-content"><div class="eyebrow">${esc(issue.hero)}</div><h2>${esc(issue.title)}</h2><p>${esc(issue.intro)}</p></div></div><div class="article-list">${issue.articles.map((a,i)=>`<article class="article-card"><img src="${asset(a.image)}" alt=""><div><div class="article-meta">${esc(a.meta)} · ${esc(a.location)}</div><h3>${esc(a.title)}</h3><p>${esc(a.body)}</p><button class="btn btn-ghost" style="margin-top:10px;padding:8px 11px;font-size:11px" data-article="${i}">${esc(a.cta)} →</button></div></article>`).join('')}</div></section>
  <aside class="side-stack"><div class="panel"><h3>Issues</h3><div class="issue-list">${state.issues.map(i=>`<button class="issue-btn ${i.id===issue.id?'active':''}" data-issue="${i.id}"><strong>${esc(i.title)}</strong><small>${esc(i.date)}</small></button>`).join('')}</div></div><div class="panel"><h3>What’s included</h3><p>Events you can actually attend, low-cost food ideas, study tactics you can test today, plus ways to turn a random interaction into a real plan.</p></div></aside></div>`;
  document.querySelectorAll('[data-issue]').forEach(b=>b.addEventListener('click',()=>{state.activeIssueId=b.dataset.issue;save();renderNewsletter();navWire()}));
  document.querySelectorAll('[data-article]').forEach(b=>b.addEventListener('click',()=>openArticle(issue.articles[Number(b.dataset.article)])));
  document.getElementById('copyIssue').addEventListener('click',()=>{navigator.clipboard?.writeText(location.href).catch(()=>{});toast('Issue link copied (demo)')});
}

function renderProfile(){
  const u=state.user; const initials=(u.name||'L').split(' ').map(x=>x[0]).join('').slice(0,2).toUpperCase();
  app.innerHTML=`<div class="page-title"><div><h1>Your Profile</h1><p>Control what other students see when you match.</p></div><button class="btn btn-primary" id="saveProfile">Save changes</button></div>
  <div class="profile-layout"><section class="panel profile-card"><div class="profile-large"><img src="${asset('avaChloe')}" alt=""></div><h2>${esc(u.name)}</h2><p>${esc(u.program)} · ${esc(u.year)}</p><div class="chips" style="justify-content:center">${u.interests.map(x=>`<span class="chip">${esc(x)}</span>`).join('')}</div><div class="profile-stats"><div class="stat"><b>${state.matches.length}</b><small>matches</small></div><div class="stat"><b>${state.posts.filter(p=>p.user===u.name).length}</b><small>your posts</small></div><div class="stat"><b>${u.interests.length}</b><small>interests</small></div></div></section>
  <section class="panel edit-form"><div class="form-row"><div class="field"><label>Full name</label><input id="pfName" value="${esc(u.name)}"></div><div class="field"><label>Year</label><select id="pfYear"><option>1st year</option><option ${u.year==='2nd year'?'selected':''}>2nd year</option><option ${u.year==='3rd year'?'selected':''}>3rd year</option><option ${u.year==='4th year'?'selected':''}>4th year</option><option>Graduate</option></select></div></div><div class="form-row"><div class="field"><label>Program</label><input id="pfProgram" value="${esc(u.program)}"></div><div class="field"><label>Email</label><input id="pfEmail" value="${esc(u.email)}"></div></div><div class="field"><label>Bio</label><textarea id="pfBio">${esc(u.bio)}</textarea></div><div class="field"><label>Interests (comma separated)</label><input id="pfInterests" value="${esc(u.interests.join(', '))}"></div><div class="divider"></div><button class="btn btn-ghost" id="resetDemo">Reset all demo data</button></section></div>`;
  document.getElementById('saveProfile').addEventListener('click',saveProfile);
  document.getElementById('resetDemo').addEventListener('click',()=>{localStorage.removeItem(KEY);state=structuredClone(seeded);toast('Demo reset');render()});
}
function saveProfile(){
  state.user.name=document.getElementById('pfName').value.trim()||'Liam';state.user.year=document.getElementById('pfYear').value;state.user.program=document.getElementById('pfProgram').value.trim()||'Student';state.user.email=document.getElementById('pfEmail').value.trim();state.user.bio=document.getElementById('pfBio').value.trim();state.user.interests=document.getElementById('pfInterests').value.split(',').map(x=>x.trim()).filter(Boolean).slice(0,6);save();toast('Profile saved');renderProfile();navWire();updateNav();}

function openOnboarding(){
  modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><div class="modal-head"><h3>Welcome to ConcordiaConnect</h3><button class="modal-close" data-close>×</button></div><div class="modal-body"><div class="onboard"><div class="onboard-visual"><div class="eyebrow">Start small</div><h2>Make the next plan easier.</h2><p>This prototype is ready to explore. Set a demo profile, then jump into the board, finder, newsletter and chat.</p><ul class="bullets"><li>Browser-only demo — no account needed</li><li>Posts, likes and comments are saved locally</li><li>Matches and messages work instantly</li><li>Three complete newsletter editions included</li></ul></div><div><div class="field"><label>Your name</label><input id="obName" value="${esc(state.user.name)}"></div><div class="field"><label>Program</label><input id="obProgram" value="${esc(state.user.program)}"></div><div class="field"><label>Year</label><select id="obYear"><option ${state.user.year==='1st year'?'selected':''}>1st year</option><option ${state.user.year==='2nd year'?'selected':''}>2nd year</option><option ${state.user.year==='3rd year'?'selected':''}>3rd year</option><option ${state.user.year==='4th year'?'selected':''}>4th year</option></select></div><div class="field"><label>Interests</label><input id="obInterests" value="${esc(state.user.interests.join(', '))}"></div><div class="modal-actions"><button class="btn btn-ghost" data-close>Cancel</button><button class="btn btn-primary" id="finishOnboard">Enter ConcordiaConnect</button></div></div></div></div></div></div>`;
  modalRoot.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeModal));
  document.getElementById('finishOnboard').addEventListener('click',()=>{state.user.name=document.getElementById('obName').value.trim()||'Liam';state.user.program=document.getElementById('obProgram').value.trim()||'Student';state.user.year=document.getElementById('obYear').value;state.user.interests=document.getElementById('obInterests').value.split(',').map(x=>x.trim()).filter(Boolean);save();closeModal();toast('Profile ready — explore the app');setView('board')});
}
function openCreatePost(){
  modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><div class="modal-head"><h3>Create a post</h3><button class="modal-close" data-close>×</button></div><div class="modal-body"><div class="field"><label>What’s the plan?</label><textarea id="newPostText" placeholder="e.g. Anyone down for coffee near Guy around 3?"></textarea></div><div class="form-row"><div class="field"><label>Category</label><select id="newPostTag"><option>Social</option><option>Study</option><option>Travel</option><option>Other</option></select></div><div class="field"><label>Location</label><input id="newPostLocation" placeholder="SGW Campus / Mile End / Downtown"></div></div><div class="modal-actions"><button class="btn btn-ghost" data-close>Cancel</button><button class="btn btn-primary" id="publishPost">Publish post</button></div></div></div></div>`;
  modalRoot.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeModal));
  
  document.getElementById('publishPost').addEventListener('click', async () => {
    const text = document.getElementById('newPostText').value.trim();
    if (!text) {
      toast('Add some text first');
      return;
    }

    const authorName = (state.user && state.user.name) ? state.user.name : 'Liam';
    const tag = document.getElementById('newPostTag').value;
    const location = document.getElementById('newPostLocation').value.trim() || 'Concordia';

    // 1. Insert into Supabase
    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          author: authorName,
          content: text
        }
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      toast('Failed to save to database');
      return;
    }

    // 2. Add to local state & UI
    const createdId = data && data[0] ? data[0].id : Date.now();
    state.posts.unshift({
      id: createdId,
      user: authorName,
      avatar: 'avaLucas',
      time: 'Just now',
      location: location,
      tag: tag,
      text: text,
      likes: 0,
      liked: false,
      comments: []
    });

    save();
    closeModal();
    toast('Post published');
    setView('board');
  });
}
function openPostModal(id){
  const p=state.posts.find(x=>x.id==id); if(!p)return;
  modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><div class="modal-head"><h3>Post</h3><button class="modal-close" data-close>×</button></div><div class="modal-body"><div class="post-top"><div class="user-row">${avatar(p.avatar)}<div class="user-meta"><strong>${esc(p.user)}</strong><small>${esc(p.time)} · ${esc(p.location)}</small></div></div><span class="tag">${esc(p.tag)}</span></div><div style="margin-top:14px;color:#f3f5f8;font-size:15px;line-height:1.65">${esc(p.text)}</div>${p.image?`<div class="post-image"><img src="${asset(p.image)}" alt=""></div>`:''}<div class="post-actions"><button class="action-link ${p.liked?'liked':''}" id="modalLike">♡ ${p.likes}</button><span class="muted">${p.comments.length} comments</span></div><div class="comments">${p.comments.map(c=>`<div class="comment">${avatar(c.avatar)}<div class="comment-box"><strong>${esc(c.user)}</strong><p>${esc(c.text)}</p></div></div>`).join('')}</div><div class="comment-form"><input id="commentInput" placeholder="Add a comment…"><button class="btn btn-primary" id="commentBtn">Post</button></div></div></div></div>`;
  modalRoot.querySelector('[data-close]').addEventListener('click',closeModal);
  document.getElementById('modalLike').addEventListener('click',()=>{p.liked=!p.liked;p.likes+=p.liked?1:-1;save();openPostModal(id)});
  document.getElementById('commentBtn').addEventListener('click',()=>{const val=document.getElementById('commentInput').value.trim();if(!val)return;p.comments.push({user:state.user.name,avatar:'avaLucas',text:val});save();openPostModal(id);toast('Comment added')});
}
function openArticle(a){
  modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><div class="modal-head"><h3>${esc(a.title)}</h3><button class="modal-close" data-close>×</button></div><div class="modal-body"><div class="post-image" style="height:240px"><img src="${asset(a.image)}" alt=""></div><div class="article-meta">${esc(a.meta)} · ${esc(a.location)}</div><h2 style="font-size:25px;letter-spacing:-.04em;margin:9px 0 10px">${esc(a.title)}</h2><p style="color:#dbe0e8;line-height:1.7;font-size:14px;margin:0">${esc(a.body)}</p><div class="modal-actions"><button class="btn btn-primary" data-docta>${esc(a.cta)}</button></div></div></div></div>`;
  modalRoot.querySelector('[data-close]').addEventListener('click',closeModal);modalRoot.querySelector('[data-docta]').addEventListener('click',()=>{toast('Added to your demo plans');closeModal()});
}
function openMiniProfile(m){
  modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal"><div class="modal-head"><h3>${esc(m.name)}’s profile</h3><button class="modal-close" data-close>×</button></div><div class="modal-body" style="display:flex;gap:16px;align-items:center">${avatar(m.avatar,'profile-large')}<div><h2 style="margin:0 0 4px">${esc(m.name)}, ${m.age}</h2><div class="muted" style="font-size:12px">${esc(m.year)} · Concordia</div><div class="chips">${m.interests.map(i=>`<span class="chip">${esc(i)}</span>`).join('')}</div><p style="margin:4px 0 0;color:#dce2ea;font-size:13px;line-height:1.6">${esc(m.last)}</p></div></div></div></div>`;
  modalRoot.querySelector('[data-close]').addEventListener('click',closeModal);
}
function closeModal(){modalRoot.innerHTML=''}

document.getElementById('searchBtn').addEventListener('click',()=>{setView('board');setTimeout(()=>document.getElementById('boardSearch')?.focus(),50)});
window.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
render();
const CMS_API_URL =
  'https://script.google.com/macros/s/AKfycbwEqMcD2sI92k9XfijEG1fxkZAe7tVBT39qzN_cmPZtE27ZN2q3q77WSPOQQeWxlXEz/exec';
render();
loadCms();

Object.assign(window, { setView, render, openCreatePost, openOnboarding, openPostModal, closeModal });
// Subscribe to new rows added to the 'posts' table
const channel = supabase
  .channel('realtime:posts')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'posts',
    },
    (payload) => {
      // payload.new comes from Supabase
      const newPost = {
        id: payload.new.id,
        user: payload.new.author || 'Anonymous',
        avatar: 'avaLucas',
        time: 'Just now',
        location: payload.new.location || 'Concordia',
        tag: payload.new.tag || 'Social',
        text: payload.new.content,
        likes: 0,
        liked: false,
        comments: []
      };

      // Avoid duplicating if the author already added it locally
      if (!state.posts.some(p => p.id === newPost.id)) {
        state.posts.unshift(newPost);
        render();
      }
    }
  )
  .subscribe();

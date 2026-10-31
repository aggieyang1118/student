/* ===== 方塊人偶（原創休閒穿搭風格），用 SVG 畫出來 ===== */
var AVATARS = [
  { id: 'curly',   name: '酷外套小子', skin: '#e9b98f', hair: '#2a1c14', hs: 'curly',  top: 'jacket', shirt: '#2f6fd6', jacket: '#1f2433', pants: '#26324f', print: 'gem' },
  { id: 'redhat',  name: '紅帽女孩',   skin: '#f7d6b8', hair: '#3a2416', hs: 'side',   hat: 'beanie', hatc: '#d93a3a', top: 'tee', shirt: '#3d7cc9', pants: '#2b3a5c', print: 'heart' },
  { id: 'vip',     name: 'VIP 男孩',   skin: '#f2c9a0', hair: '#2340b8', hs: 'spiky',  glass: 'gold', top: 'vip', shirt: '#2a8cf0', pants: '#1b1f2b', chain: true },
  { id: 'pony',    name: '馬尾女孩',   skin: '#f7d6b8', hair: '#8a5a2b', hs: 'pony',   top: 'overall', shirt: '#ffd36e', jacket: '#ff7eb6', pants: '#ff7eb6' },
  { id: 'gamer',   name: '耳機玩家',   skin: '#f2c9a0', hair: '#4a2f1d', hs: 'short',  hat: 'phones', hatc: '#25b04c', top: 'tee', shirt: '#7b4fd6', pants: '#2b3a5c', print: 'game' },
  { id: 'starlet', name: '粉紅明星',   skin: '#f7d6b8', hair: '#ff8ac6', hs: 'bob',    glass: 'heart', top: 'jacket', shirt: '#ffffff', jacket: '#b06cff', pants: '#f3f4fb' },
  { id: 'hoodie',  name: '帽T男孩',     skin: '#d9a37a', hair: '#1b1b1b', hs: 'short',  top: 'hoodie', shirt: '#e5484d', pants: '#3a3f4f', print: 'bolt' },
  { id: 'buns',    name: '包包頭女孩', skin: '#f5d2ad', hair: '#1b1b1b', hs: 'buns',   top: 'sweater', shirt: '#7fd6c2', pants: '#4a5b8c', print: 'star' },
  { id: 'capback', name: '反戴帽小子', skin: '#c98b5e', hair: '#1b1b1b', hs: 'short',  hat: 'capback', hatc: '#ff9f43', top: 'tee', shirt: '#ffffff', pants: '#3c4a7a', print: 'num' },
  { id: 'starclip',name: '星星髮夾女孩', skin: '#f7d6b8', hair: '#6b3fa0', hs: 'long',  clip: true, top: 'dress', shirt: '#c9b6ff', pants: '#c9b6ff' },
  { id: 'track',   name: '運動健將',   skin: '#d9a37a', hair: '#3a2416', hs: 'short',  hat: 'band', hatc: '#ffffff', top: 'track', shirt: '#25b04c', pants: '#25b04c' },
  { id: 'bear',    name: '熊熊帽女孩', skin: '#f7d6b8', hair: '#3a2416', hs: 'bob',  hat: 'bear', hatc: '#a66a3f', top: 'hoodie', shirt: '#a66a3f', pants: '#5a3a22' }
];
var AVATAR_ALIAS = { plaid: 'hoodie', goldy: 'capback', denim: 'gamer', knight: 'curly', space: 'gamer', ninja: 'hoodie', princess: 'starclip', robot: 'gamer', dino: 'track',
  cat: 'bear', pirate: 'hoodie', wizard: 'starlet', sport: 'capback', chef: 'gamer', bunny: 'buns' };
function avatarById(id) { id = AVATAR_ALIAS[id] || id; return AVATARS.find(a => a.id === id) || AVATARS[0]; }

function avatarSVG(id, opts) {
  const a = avatarById(id), o = opts || {};
  const shade = 'rgba(0,0,0,.16)', hl = 'rgba(255,255,255,.22)';
  const R = (x, y, w, h, f, e) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" ${e || ''}/>`;
  const H = a.hair;
  let s = '';
  // ---- 後面的頭髮 ----
  if (a.hs === 'long') s += R(27, 12, 46, 52, H, 'rx="6"');
  if (a.hs === 'pony') s += `<path d="M66 16 Q86 20 78 52 Q74 40 66 34Z" fill="${H}"/>` + R(64, 14, 8, 6, '#ff5a8a', 'rx="2"');
  if (a.hs === 'bob') s += R(27, 10, 46, 34, H, 'rx="8"');
  // ---- 腿、鞋 ----
  if (a.top === 'dress') {
    s += `<path d="M30 76 L70 76 L77 104 L23 104 Z" fill="${a.shirt}"/><path d="M58 76 L70 76 L77 104 L63 104 Z" fill="${shade}"/>` + R(34, 104, 10, 4, a.skin) + R(56, 104, 10, 4, a.skin);
  } else {
    s += R(31, 80, 18, 28, a.pants) + R(51, 80, 18, 28, a.pants) + R(60, 80, 9, 28, shade);
    if (a.top === 'track') s += R(31, 80, 3, 28, '#fff') + R(66, 80, 3, 28, '#fff');
  }
  s += R(30, 106, 20, 8, '#f5f7fb', 'rx="2"') + R(50, 106, 20, 8, '#f5f7fb', 'rx="2"') + R(30, 112, 20, 2, '#b9c2d3') + R(50, 112, 20, 2, '#b9c2d3') + R(64, 106, 6, 8, shade);
  // ---- 手臂 ----
  const sleeve = ['jacket', 'hoodie', 'track', 'sweater', 'plaid'].includes(a.top) ? (a.top === 'jacket' ? a.jacket : a.shirt) : null;
  const armC = a.top === 'vip' ? '#1f2433' : (sleeve || a.shirt);
  const armLen = sleeve ? 28 : 14;
  s += R(15, 48, 13, 35, a.skin) + R(72, 48, 13, 35, a.skin);
  s += R(15, 48, 13, armLen, armC) + R(72, 48, 13, armLen, armC) + R(79, 48, 6, 35, shade);
  if (a.top === 'track') s += R(15, 48, 3, 28, '#fff') + R(82, 48, 3, 28, '#fff');
  // ---- 身體 ----
  const torso = a.top === 'overall' ? a.shirt : a.shirt;
  s += R(28, 46, 44, 36, torso);
  switch (a.top) {
    case 'jacket': s += R(28, 46, 12, 36, a.jacket) + R(60, 46, 12, 36, a.jacket) + `<path d="M40 46 L44 54 L40 54Z M60 46 L56 54 L60 54Z" fill="${a.jacket}"/>`; break;
    case 'hoodie': s += `<path d="M30 46 Q50 60 70 46 L70 50 Q50 64 30 50Z" fill="rgba(0,0,0,.18)"/>` + R(44, 52, 2, 10, '#fff') + R(54, 52, 2, 10, '#fff') + R(36, 68, 28, 10, 'rgba(0,0,0,.12)', 'rx="3"'); break;
    case 'track': s += R(48, 46, 4, 36, '#e8e8e8') + R(28, 46, 44, 4, '#fff'); break;
    case 'sweater': for (let y = 72; y < 82; y += 4) s += R(28, y, 44, 2, 'rgba(255,255,255,.35)'); break;
    case 'plaid': for (let k = 0; k < 4; k++) { s += R(28 + k * 11, 46, 4, 36, 'rgba(20,20,30,.35)'); s += R(28, 52 + k * 8, 44, 3, 'rgba(20,20,30,.35)'); } break;
    case 'overall': s += R(32, 62, 36, 20, a.jacket) + R(33, 46, 6, 18, a.jacket) + R(61, 46, 6, 18, a.jacket) + R(35, 58, 4, 4, '#ffd36e') + R(61, 58, 4, 4, '#ffd36e') + R(42, 66, 16, 8, 'rgba(0,0,0,.12)', 'rx="2"'); break;
    case 'dress': s += R(28, 46, 44, 32, a.shirt) + R(28, 72, 44, 4, 'rgba(255,255,255,.5)'); break;
    case 'vip': s += R(28, 46, 8, 36, '#1f2433') + R(64, 46, 8, 36, '#1f2433') +
      `<text x="50" y="76" font-size="14" font-weight="900" text-anchor="middle" fill="#fff" stroke="#e5484d" stroke-width="1" font-family="Arial">VIP</text>`; break;
  }
  s += R(60, 46, 12, 36, shade) + R(28, 46, 44, 3, hl);
  switch (a.print) {
    case 'heart': s += `<path d="M50 72 C40 64 42 55 50 60 C58 55 60 64 50 72Z" fill="#ff6b8a"/>`; break;
    case 'star': s += `<path d="M50 54 l3 7 7 .6 -5.4 4.6 1.7 7 -6.3-3.8 -6.3 3.8 1.7-7 -5.4-4.6 7-.6z" fill="#fff"/>`; break;
    case 'gem': s += `<path d="M44 58 l6 -4 6 4 -6 8z" fill="#1f2433" opacity=".7"/>`; break;
    case 'bolt': s += `<path d="M52 54 L44 66 L50 66 L46 76 L56 62 L50 62 Z" fill="#ffd36e"/>`; break;
    case 'game': s += R(40, 58, 20, 11, '#1f2433', 'rx="5"') + R(43, 62, 5, 2, '#fff') + R(44.5, 60.5, 2, 5, '#fff') + `<circle cx="54" cy="61.5" r="1.5" fill="#ffd36e"/><circle cx="56.5" cy="64.5" r="1.5" fill="#ff6b8a"/>`; break;
    case 'num': s += `<text x="50" y="74" font-size="18" font-weight="900" text-anchor="middle" fill="#ff9f43" font-family="Arial">3</text>`; break;
    case 'skull': s += `<circle cx="50" cy="62" r="7" fill="#fff"/>` + R(46, 66, 8, 5, '#fff') + R(46, 60, 3, 3, '#1f2433') + R(51, 60, 3, 3, '#1f2433'); break;
  }
  if (a.chain) s += `<path d="M36 47 Q50 64 64 47" stroke="#e0a800" stroke-width="3" fill="none" stroke-dasharray="3 1.5"/><circle cx="50" cy="60" r="5.5" fill="#e0a800" stroke="#8a6400" stroke-width="1.2"/><circle cx="50" cy="60" r="2" fill="#fff3c4"/>`;
  if (a.hat === 'bear') s += R(28, 46, 44, 5, 'rgba(0,0,0,.15)');
  // ---- 頭、臉 ----
  s += R(32, 10, 36, 36, a.skin, 'rx="5"') + R(59, 10, 9, 36, shade, 'rx="3"');
  s += R(40, 24, 5, 7, '#1f2433', 'rx="1"') + R(55, 24, 5, 7, '#1f2433', 'rx="1"') + R(41, 25, 2, 2, '#fff') + R(56, 25, 2, 2, '#fff');
  s += `<path d="M42 36 Q50 42 58 36" stroke="#1f2433" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  s += R(35, 32, 5, 3, 'rgba(255,120,120,.4)', 'rx="1.5"') + R(60, 32, 5, 3, 'rgba(255,120,120,.4)', 'rx="1.5"');
  // ---- 前面的頭髮 ----
  switch (a.hs) {
    case 'curly': {
      [[34,10],[42,6],[50,4],[58,6],[66,10],[30,18],[70,18],[38,12],[62,12],[46,8],[54,8]].forEach(([x, y]) => s += `<circle cx="${x}" cy="${y}" r="7" fill="${H}"/>`);
      [[29,26],[71,26]].forEach(([x, y]) => s += `<circle cx="${x}" cy="${y}" r="5" fill="${H}"/>`); break; }
    case 'short': s += `<path d="M30 20 L30 10 Q30 4 38 4 L62 4 Q70 4 70 10 L70 20 L64 14 L56 18 L48 13 L40 18 L34 14 Z" fill="${H}"/>`; break;
    case 'spiky': s += `<path d="M30 18 L30 6 L36 -2 L40 6 L46 -6 L50 4 L56 -4 L60 6 L66 0 L70 10 L70 18 L62 13 L50 16 L38 13 Z" fill="${H}"/>`; break;
    case 'side': s += R(28, 14, 6, 30, H, 'rx="2"') + R(66, 14, 6, 30, H, 'rx="2"') + `<path d="M32 12 L68 12 L64 24 L54 18 L44 27 L36 20 Z" fill="${H}"/>`; break;
    case 'bob': s += `<path d="M30 8 Q50 -2 70 8 L70 20 L60 16 L50 20 L40 16 L30 20Z" fill="${H}"/>` + R(27, 14, 7, 28, H, 'rx="3"') + R(66, 14, 7, 28, H, 'rx="3"'); break;
    case 'pony': s += `<path d="M30 20 L30 10 Q30 3 40 3 L60 3 Q70 3 70 10 L70 18 L58 12 L46 16 L38 12 Z" fill="${H}"/>`; break;
    case 'buns': s += `<circle cx="34" cy="4" r="8" fill="${H}"/><circle cx="66" cy="4" r="8" fill="${H}"/>` + `<path d="M30 20 L30 10 Q30 4 40 4 L60 4 Q70 4 70 10 L70 20 L62 14 L50 17 L38 14 Z" fill="${H}"/>`; break;
    case 'long': s += `<path d="M30 20 L30 10 Q30 2 42 2 L58 2 Q70 2 70 10 L70 20 L56 12 L44 16 L36 12 Z" fill="${H}"/>`; break;
  }
  // ---- 帽子／配件 ----
  switch (a.hat) {
    case 'beanie': s += `<path d="M29 15 Q50 -8 71 15 Z" fill="${a.hatc}"/>` + R(28, 11, 44, 6, 'rgba(0,0,0,.18)', 'rx="3"') + R(28, 11, 44, 6, a.hatc, 'rx="3" opacity=".75"'); break;
    case 'phones': s += `<path d="M30 20 Q30 -2 50 -2 Q70 -2 70 20" stroke="${a.hatc}" stroke-width="4" fill="none"/>` + R(25, 18, 9, 14, a.hatc, 'rx="3"') + R(66, 18, 9, 14, a.hatc, 'rx="3"'); break;
    case 'capback': s += R(30, 4, 40, 12, a.hatc, 'rx="5"') + R(18, 10, 14, 5, a.hatc, 'rx="2"') + R(30, 13, 40, 3, 'rgba(0,0,0,.15)'); break;
    case 'capfront': s += R(30, 4, 40, 12, a.hatc, 'rx="5"') + R(48, 12, 28, 5, a.hatc, 'rx="2"') + R(30, 13, 40, 3, 'rgba(0,0,0,.15)'); break;
    case 'band': s += R(30, 13, 40, 5, a.hatc) + R(30, 13, 40, 2, '#e5484d'); break;
    case 'bear': s += `<path d="M27 26 Q27 0 50 0 Q73 0 73 26 L68 26 Q68 8 50 8 Q32 8 32 26Z" fill="${a.hatc}"/>` +
      `<circle cx="31" cy="4" r="6" fill="${a.hatc}"/><circle cx="69" cy="4" r="6" fill="${a.hatc}"/><circle cx="31" cy="4" r="3" fill="#ffd1b0"/><circle cx="69" cy="4" r="3" fill="#ffd1b0"/>`; break;
  }
  if (a.glass === 'gold') s += R(34, 21, 14, 10, '#7b4fd6', 'rx="3" stroke="#e0a800" stroke-width="2"') + R(52, 21, 14, 10, '#7b4fd6', 'rx="3" stroke="#e0a800" stroke-width="2"') + R(47, 24, 6, 2, '#e0a800') + R(36, 22, 5, 3, 'rgba(255,255,255,.55)') + R(54, 22, 5, 3, 'rgba(255,255,255,.55)');
  if (a.glass === 'heart') s += `<path d="M42 31 C34 26 35 20 42 23 C49 20 50 26 42 31Z M58 31 C50 26 51 20 58 23 C65 20 66 26 58 31Z" fill="#ff3d8b" stroke="#1f2433" stroke-width="1.2"/>` + R(48, 24, 4, 1.5, '#1f2433');
  if (a.clip) s += `<path d="M64 8 l2 4 4.5 .4 -3.4 2.9 1 4.4 -4.1-2.4 -4.1 2.4 1-4.4 -3.4-2.9 4.5-.4z" fill="#ffd36e" stroke="#e0a800" stroke-width=".8"/>`;
  const size = o.size || 96;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -16 100 134" width="${size}" height="${size * 1.34}" role="img" aria-label="${a.name}">${s}</svg>`;
}

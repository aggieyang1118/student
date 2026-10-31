/* ===== 戰場模式：關主怪獸、血條、攻擊動畫、音效 ===== */
var MONSTERS = {
  chinese: { name: '墨汁怪', body: '#4b3a8c', belly: '#7d6bd1' },
  math:    { name: '數字石像', body: '#7a8394', belly: '#a9b2c1' },
  science: { name: '毒菇怪', body: '#e5484d', belly: '#fff1e0' },
  social:  { name: '小火龍', body: '#f08a24', belly: '#ffd29a' },
  english: { name: '字母幽靈', body: '#c9d6ff', belly: '#eef2ff' },
  _mist:   { name: '錯字魔王', body: '#2b2f3a', belly: '#d64545' }
};
function monsterSVG(sid, size) {
  const m = MONSTERS[sid] || MONSTERS.math, R = (x, y, w, h, f, e) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" ${e || ''}/>`;
  const eyes = R(34, 40, 12, 12, '#fff', 'rx="2"') + R(54, 40, 12, 12, '#fff', 'rx="2"') + R(39, 44, 6, 7, '#1f2433') + R(55, 44, 6, 7, '#1f2433') +
    `<path d="M30 34 L46 38 M70 34 L54 38" stroke="#1f2433" stroke-width="4" stroke-linecap="round"/>`;
  const mouth = `<path d="M38 64 L44 60 L50 64 L56 60 L62 64" stroke="#1f2433" stroke-width="3.5" fill="none" stroke-linejoin="round"/>`;
  let s = '';
  switch (sid) {
    case 'chinese':
      s = `<path d="M18 90 Q10 40 50 18 Q90 40 82 90 Q74 82 66 90 Q58 82 50 90 Q42 82 34 90 Q26 82 18 90Z" fill="${m.body}"/>` +
        `<path d="M50 18 L46 2 L54 6 Z" fill="#1f2433"/>` + R(28, 64, 44, 10, m.belly, 'rx="5" opacity=".5"') + eyes + mouth +
        R(78, 30, 6, 34, '#c9925a', 'rx="2" transform="rotate(25 81 47)"') + `<path d="M84 62 l6 10 -10 0z" fill="#1f2433" transform="rotate(25 81 47)"/>`; break;
    case 'math':
      s = R(22, 20, 56, 66, m.body, 'rx="6"') + R(62, 20, 16, 66, 'rgba(0,0,0,.18)') + R(10, 44, 12, 26, m.body) + R(78, 44, 12, 26, m.body) +
        R(28, 86, 16, 10, '#5a6170') + R(56, 86, 16, 10, '#5a6170') + eyes + mouth +
        `<text x="50" y="82" font-size="13" font-weight="900" text-anchor="middle" fill="#ffd36e" font-family="Arial">7+3=?</text>`; break;
    case 'science':
      s = `<path d="M8 46 Q50 -6 92 46 Z" fill="${m.body}"/>` + `<circle cx="30" cy="30" r="6" fill="#fff"/><circle cx="62" cy="22" r="5" fill="#fff"/><circle cx="74" cy="38" r="4" fill="#fff"/>` +
        R(26, 44, 48, 48, m.belly, 'rx="10"') + R(28, 92, 14, 6, '#a3743f') + R(58, 92, 14, 6, '#a3743f') +
        eyes.replace(/y="40"/g, 'y="54"').replace(/y="44"/g, 'y="58"').replace(/M30 34 L46 38 M70 34 L54 38/, 'M30 50 L46 54 M70 50 L54 54') +
        `<path d="M40 80 L45 76 L50 80 L55 76 L60 80" stroke="#1f2433" stroke-width="3.5" fill="none"/>`; break;
    case 'social':
      s = `<path d="M84 70 Q98 60 94 44 Q90 58 78 60Z" fill="${m.body}"/>` + R(24, 22, 52, 66, m.body, 'rx="16"') + R(34, 50, 32, 34, m.belly, 'rx="10"') +
        `<path d="M30 24 L26 6 L40 20 Z M70 24 L74 6 L60 20 Z" fill="#fff"/><path d="M14 46 L24 36 L24 64 Z M86 46 L76 36 L76 64Z" fill="#c4581a"/>` +
        eyes.replace(/y="40"/g, 'y="32"').replace(/y="44"/g, 'y="36"').replace(/M30 34 L46 38 M70 34 L54 38/, 'M30 26 L46 30 M70 26 L54 30') +
        `<path d="M40 50 L45 46 L50 50 L55 46 L60 50" stroke="#1f2433" stroke-width="3.5" fill="none"/>` + R(30, 88, 14, 8, '#c4581a') + R(56, 88, 14, 8, '#c4581a'); break;
    case 'english':
      s = `<path d="M20 92 L20 44 Q20 14 50 14 Q80 14 80 44 L80 92 L70 84 L60 92 L50 84 L40 92 L30 84 Z" fill="${m.body}" stroke="#8fa3e6" stroke-width="3"/>` + eyes + mouth +
        `<text x="10" y="30" font-size="16" font-weight="900" fill="#7b4fd6" font-family="Arial">A</text><text x="82" y="26" font-size="16" font-weight="900" fill="#e5484d" font-family="Arial">B</text><text x="86" y="62" font-size="16" font-weight="900" fill="#2f80ed" font-family="Arial">C</text>`; break;
    default:
      s = R(18, 24, 64, 64, m.body, 'rx="12"') + `<path d="M24 26 L18 4 L36 22 Z M76 26 L82 4 L64 22 Z" fill="${m.belly}"/>` + eyes + mouth +
        R(30, 70, 40, 8, m.belly, 'rx="4"') + R(26, 88, 16, 8, '#1f2433') + R(58, 88, 16, 8, '#1f2433') +
        `<path d="M38 2 L44 12 L50 0 L56 12 L62 2 L62 16 L38 16Z" fill="#ffd36e" stroke="#1f2433" stroke-width="2"/>`;
  }
  const z = size || 96;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${z}" height="${z}" role="img" aria-label="${m.name}">${s}</svg>`;
}

/* ---------- 音效與背景音樂（Web Audio 即時合成，不需要音檔） ---------- */
var SFX = (function () {
  let ctx = null, on = true, music = true, bgmTimer = null, bgmStep = 0, master = null, want = null, cur = null, unlocked = false;
  try { on = localStorage.getItem('sfx') !== 'off'; music = localStorage.getItem('bgm') !== 'off'; } catch (e) {}
  function ac() {
    if (!ctx) { ctx = new (window.AudioContext || window.webkitAudioContext)(); master = ctx.createGain(); master.gain.value = .9; master.connect(ctx.destination); }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  // 平板需要使用者先點過畫面才能出聲
  ['pointerdown', 'touchstart', 'keydown'].forEach(ev => window.addEventListener(ev, () => { try { ac(); if (!unlocked) { unlocked = true; if (want) setTimeout(() => api.playMusic(want), 50); } } catch (e) {} }, { passive: true }));
  function startTrack(name) {
    bgmStep = 0;
    if (name === 'menu') {
      // EDM：128 BPM，四拍大鼓、反拍 hi-hat、低音、和弦、琶音
      const chords = [[220, 262, 330], [175, 220, 262], [262, 330, 392], [196, 247, 294]];
      const bass = [55, 44, 65.4, 49];
      bgmTimer = setInterval(() => {
        if (document.hidden) return;
        const st = bgmStep % 16, bar = Math.floor(bgmStep / 16) % 4, ch = chords[bar];
        if (st % 4 === 0) { tone(150, .18, 'sine', .32, 45); }
        if (st === 4 || st === 12) noise(.12, .09, 'bandpass', 1800, 0, .8);
        if (st % 4 === 2) { noise(.04, .05, 'highpass', 8000); tone(bass[bar] * 2, .12, 'sawtooth', .05); }
        if (st === 0 || st === 3 || st === 6 || st === 10) ch.forEach(f => tone(f * 2, .16, 'sawtooth', .014));
        tone(ch[st % 3] * 4 * (st % 8 < 4 ? 1 : 1.5), .07, 'square', .011);
        bgmStep++;
      }, 117);
    } else {
      // 闖關音樂：較快的 8-bit 旋律加鼓
      const mel = [659, 0, 784, 880, 784, 0, 659, 587, 523, 0, 587, 659, 587, 0, 494, 523, 587, 0, 698, 880, 784, 0, 659, 587, 659, 784, 880, 988, 1047, 0, 0, 0];
      const bass = [110, 110, 131, 131, 98, 98, 123, 123];
      bgmTimer = setInterval(() => {
        if (document.hidden) return;
        const i = bgmStep % mel.length;
        if (mel[i]) tone(mel[i], .12, 'square', .02);
        if (i % 4 === 0) { tone(bass[(i / 4) % bass.length], .25, 'triangle', .06); tone(120, .12, 'sine', .18, 50); }
        if (i % 4 === 2) noise(.08, .05, 'bandpass', 1500, 0, .8);
        if (i % 2 === 1) noise(.03, .025, 'highpass', 7000);
        bgmStep++;
      }, 140);
    }
  }
  function tone(freq, dur, type, vol, slide, delay, dest) {
    try {
      const c = ac(), t = c.currentTime + (delay || 0), o = c.createOscillator(), g = c.createGain();
      o.type = type || 'square'; o.frequency.setValueAtTime(freq, t);
      if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + dur);
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol || .08, t + .008); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
      o.connect(g); g.connect(dest || master); o.start(t); o.stop(t + dur + .03);
    } catch (e) {}
  }
  function noise(dur, vol, filterType, freq, delay, q) {
    try {
      const c = ac(), t = c.currentTime + (delay || 0), len = Math.floor(c.sampleRate * dur), buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
      src.buffer = buf; f.type = filterType || 'lowpass'; f.frequency.value = freq || 1000; f.Q.value = q || 1;
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
      src.connect(f); f.connect(g); g.connect(master); src.start(t); src.stop(t + dur + .02);
    } catch (e) {}
  }
  // 模擬人聲「啊」：鋸齒波 + 兩個共振峰濾波器，音高往下掉
  function voice(f0, f1, dur, delay, vol) {
    try {
      const c = ac(), t = c.currentTime + (delay || 0), o = c.createOscillator(), g = c.createGain();
      o.type = 'sawtooth'; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
      const vib = c.createOscillator(), vg = c.createGain(); vib.frequency.value = 6; vg.gain.value = 6; vib.connect(vg); vg.connect(o.frequency);
      const out = c.createGain(); out.gain.value = 1;
      [[800, 8, 1], [1200, 10, .6], [2600, 12, .25]].forEach(([fr, q, gv]) => { const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = fr; bp.Q.value = q; const gg = c.createGain(); gg.gain.value = gv; o.connect(bp); bp.connect(gg); gg.connect(out); });
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol || .5, t + .04); g.gain.setValueAtTime(vol || .5, t + dur * .6); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
      out.connect(g); g.connect(master); o.start(t); vib.start(t); o.stop(t + dur + .05); vib.stop(t + dur + .05);
    } catch (e) {}
  }
  const api = {
    get on() { return on; }, get music() { return music; },
    toggle() { on = !on; try { localStorage.setItem('sfx', on ? 'on' : 'off'); } catch (e) {} if (!on) api.bgmStop(); else api.playMusic(want); return on; },
    toggleMusic() { music = !music; try { localStorage.setItem('bgm', music ? 'on' : 'off'); } catch (e) {} if (music) api.playMusic(want); else { const w = want; api.bgmStop(); want = w; } return music; },
    // 金幣入帳：叮～叮！
    coin(delay) { if (!on) return; const d = delay || 0; tone(988, .08, 'square', .09, null, d); tone(1319, .35, 'square', .09, null, d + .08); tone(2637, .25, 'sine', .03, null, d + .08); },
    // 揍人：低沉的撞擊 + 啪的雜訊
    punch() { if (!on) return; noise(.12, .55, 'lowpass', 1800); tone(140, .16, 'sine', .5, 45); noise(.05, .3, 'highpass', 3000, .005); },
    // 答錯：嗡嗡的錯誤音
    wrong() { if (!on) return; tone(196, .18, 'square', .07); tone(147, .32, 'square', .07, 110, .17); },
    // 被打到：啊～嘶
    ouch() { if (!on) return; voice(420, 260, .32, .05, .55); noise(.32, .18, 'highpass', 4500, .36, .7); },
    // 扣分（家長打 ✕）：啊…
    ah() { if (!on) return; voice(330, 200, .45, 0, .5); },
    hit(combo, noCoin) { api.launch(); api.explode(.42); if (!noCoin) api.coin(.7); },
    miss() { api.wrong(); setTimeout(() => api.ouch(), 200); },
    win() { if (!on) return; [523, 659, 784, 1046, 784, 1046].forEach((f, i) => tone(f, i > 3 ? .4 : .16, 'square', .07, null, i * .13)); [0, .3, .55].forEach(d => api.coin(.8 + d)); },
    tap() { if (!on) return; tone(700, .05, 'triangle', .05); },
    // 背景音樂：menu＝EDM、battle＝闖關音樂
    playMusic(name) { want = name; if (cur === name && bgmTimer) return; api.bgmStop(); cur = name; if (!name || !on || !music || !unlocked) return; startTrack(name); },
    bgmStart() { api.playMusic(want || 'battle'); },
    bgmStop() { if (bgmTimer) { clearInterval(bgmTimer); bgmTimer = null; } cur = null; },
    // 榮譽頒獎音樂：小號風格的號角 fanfare + 和弦 + 鈸聲
    honor() {
      if (!on) return;
      const prev = cur; api.bgmStop(); want = prev;
      const brass = (f, t, d, v) => { tone(f, d, 'sawtooth', (v || .05), null, t); tone(f * 2, d, 'square', (v || .05) * .35, null, t); tone(f / 2, d, 'triangle', (v || .05) * .8, null, t); };
      const seq = [[392, 0, .14], [392, .15, .14], [392, .3, .14], [523, .45, .55], [466, 1.05, .2], [523, 1.28, .2], [587, 1.5, .2], [659, 1.75, 1.2]];
      seq.forEach(([f, t, d]) => brass(f, t, d, .055));
      [[262, 330, 392], [262, 330, 392]].forEach((ch, i) => ch.forEach(f => tone(f, i ? 1.3 : .5, 'sawtooth', .02, null, i ? 1.75 : .45)));
      [0, .45, 1.75].forEach(t => { tone(70, .4, 'sine', .35, 35, t); noise(.18, .06, 'bandpass', 1200, t, .6); });
      noise(1.6, .08, 'highpass', 6000, 1.75);
      [2.9, 3.1, 3.3].forEach(t => api.coin(t));
      setTimeout(() => { if (want && !bgmTimer) api.playMusic(want); }, 3800);
    },
    die() { if (!on) return; [523, 466, 415, 349, 262].forEach((f, i) => tone(f, .22, 'square', .08, null, i * .14)); tone(110, .9, 'sawtooth', .08, 40, .7); voice(300, 150, .6, .3, .45); },
    launch() { if (!on) return; noise(.35, .12, 'bandpass', 2500, 0, 2); tone(300, .35, 'sawtooth', .04, 1200); },
    explode(delay) { if (!on) return; const d = delay || 0; noise(.7, .7, 'lowpass', 900, d); noise(.25, .35, 'lowpass', 3000, d); tone(90, .6, 'sine', .6, 30, d); tone(60, .8, 'triangle', .3, 25, d + .05); }
  };
  return api;
})();

/* ---------- 戰鬥面板 ---------- */
function createBattle(opts) {
  const { subject, maxHP, kidAvatar, kidName, label, onDeath } = opts;
  const m = MONSTERS[subject] || MONSTERS.math;
  let hp = maxHP, hearts = 5, combo = 0, dead = false, over = false;
  const wrap = document.createElement('div'); wrap.className = 'arena';
  wrap.innerHTML = `
    <div class="fighter me"><div class="sprite">${avatarSVG(kidAvatar || 'knight')}</div>
      <div class="stat"><b>${kidName || '勇者'}</b><div class="hearts"></div></div></div>
    <div class="vs"><div class="combo"></div><div class="vsx">VS</div><div class="sfxrow"><button class="sfxbtn" type="button" title="音效">${SFX.on ? '🔊' : '🔇'}</button><button class="bgmbtn sfxbtn" type="button" title="音樂">${SFX.music ? '🎵' : '🚫'}</button></div></div>
    <div class="fighter foe"><div class="stat"><b>${label || '關主'}・${m.name}</b><div class="hpbar"><i></i><span></span></div></div>
      <div class="sprite">${monsterSVG(subject)}</div></div>`;
  const heartsEl = wrap.querySelector('.hearts'), bar = wrap.querySelector('.hpbar i'), hpTxt = wrap.querySelector('.hpbar span'),
        foe = wrap.querySelector('.foe .sprite'), me = wrap.querySelector('.me .sprite'), comboEl = wrap.querySelector('.combo');
  wrap.querySelector('.sfxbtn').onclick = e => { e.currentTarget.textContent = SFX.toggle() ? '🔊' : '🔇'; };
  wrap.querySelector('.bgmbtn').onclick = e => { e.currentTarget.textContent = SFX.toggleMusic() ? '🎵' : '🚫'; };
  SFX.playMusic('battle');
  function draw() {
    heartsEl.innerHTML = ICON('heart', 22).repeat(hearts) + ICON('heartE', 22).repeat(5 - hearts);
    const pct = maxHP ? Math.max(0, hp / maxHP * 100) : 0;
    bar.style.width = pct + '%'; bar.className = pct < 30 ? 'low' : pct < 60 ? 'mid' : '';
    hpTxt.textContent = `HP ${Math.max(0, Math.round(hp * 10) / 10)} / ${maxHP}`;
    comboEl.textContent = combo >= 2 ? `${combo} 連擊！` : '';
    comboEl.classList.toggle('show', combo >= 2);
  }
  function pop(target, text, cls) {
    const r = target.getBoundingClientRect(), p = document.createElement('div');
    p.className = 'dmg ' + (cls || ''); p.textContent = text;
    p.style.left = (r.left + r.width / 2) + 'px'; p.style.top = (r.top + 10) + 'px';
    document.body.append(p); setTimeout(() => p.remove(), 900);
  }
  function anim(elm, cls) { elm.classList.remove(cls); void elm.offsetWidth; elm.classList.add(cls); }
  draw();
  return {
    el: wrap,
    hit(dmg, from, noCoin) {
      if (dead || over) return;
      combo++; const bonus = combo >= 3 ? 1.5 : 1, d = Math.round(dmg * 10) / 10;
      hp -= dmg; SFX.hit(combo, noCoin);
      anim(me, 'lunge'); missile(me, foe);
      setTimeout(() => { anim(foe, 'hurt'); boom(foe); pop(foe, `-${d}${bonus > 1 ? ' 爆擊!' : ''}`, bonus > 1 ? 'crit' : ''); }, 420);
      draw();
      if (hp <= 0.001) { dead = true; setTimeout(() => { foe.classList.add('dead'); SFX.playMusic(null); SFX.win(); pop(foe, '擊敗！', 'ko'); }, 700); }
    },
    miss(kind) {
      if (over) return;
      combo = 0; if (hearts > 0) hearts--;
      if (kind === 'timeout') SFX.die(); else SFX.miss();
      anim(foe, 'lunge-l'); setTimeout(() => { anim(me, 'hurt'); pop(me, kind === 'timeout' ? '時間到！-1' : '-1', 'bad'); anim(document.body, 'shake'); }, 120);
      draw();
      if (hearts <= 0 && !dead) {
        over = true;
        setTimeout(() => { me.classList.add('dead'); SFX.playMusic(null); SFX.die(); }, 500);
        setTimeout(() => onDeath && onDeath(), 1500);
      }
    },
    get over() { return over; },
    get defeated() { return dead; },
    get hearts() { return hearts; }
  };
}
function missile(from, to) {
  const a = from.getBoundingClientRect(), b = to.getBoundingClientRect(), m = document.createElement('div');
  const x0 = a.left + a.width / 2, y0 = a.top + a.height / 2, dx = b.left + b.width / 2 - x0, dy = b.top + b.height / 2 - y0;
  const ang = Math.atan2(dy, dx) * 180 / Math.PI + 45;
  m.className = 'missile'; m.textContent = '🚀';
  m.style.left = x0 + 'px'; m.style.top = y0 + 'px'; m.style.transform = `rotate(${ang}deg)`;
  document.body.append(m);
  requestAnimationFrame(() => requestAnimationFrame(() => { m.style.transform = `translate(${dx}px, ${dy}px) rotate(${ang}deg) scale(1.3)`; }));
  setTimeout(() => m.remove(), 430);
}
function boom(target) {
  const r = target.getBoundingClientRect(), b = document.createElement('div');
  b.className = 'boom'; b.textContent = '💥';
  b.style.left = (r.left + r.width / 2) + 'px'; b.style.top = (r.top + r.height / 2) + 'px';
  document.body.append(b); setTimeout(() => b.remove(), 650);
}
function shoot() {}

/* ===== 戰場模式：關主怪獸、血條、攻擊動畫、音效 ===== */
var MONSTERS = {
  chinese: { name: '墨淚紙鬼', body: '#e9e4d6' },
  math:    { name: '裂鐘怪', body: '#cfc6b0' },
  science: { name: '枯樹魔', body: '#3b2f2a' },
  social:  { name: '破燈籠鬼', body: '#c7442e' },
  english: { name: '裂瓷面具', body: '#ecebe6' },
  _mist:   { name: '百眼黑影', body: '#0d0a12' }
};
function monsterSVG(sid, size) {
  const m = MONSTERS[sid] || MONSTERS.math;
  const K = '#0b0810', uid = 'h' + Math.random().toString(36).slice(2, 7);
  const st = `stroke="${K}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"`;
  const defs = `<defs>
    <filter id="${uid}g" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="1.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <radialGradient id="${uid}v" cx="50%" cy="40%" r="65%"><stop offset=".45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".55"/></radialGradient></defs>`;
  // 空洞的黑眼窩＋發光小瞳孔
  const hollow = (x, y, rx, ry, c, tilt) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${K}" transform="rotate(${tilt || 0} ${x} ${y})"/><circle cx="${x}" cy="${y + 1}" r="${Math.max(1.4, rx * .22)}" fill="${c || '#ff2a2a'}" filter="url(#${uid}g)"/>`;
  const drip = (x, y, len, c) => `<path d="M${x - 2.4} ${y} L${x - 1.6} ${y + len} Q${x} ${y + len + 4} ${x + 1.6} ${y + len} L${x + 2.4} ${y}Z" fill="${c || K}"/>`;
  const crack = (d) => `<path d="${d}" fill="none" stroke="${K}" stroke-width="1.6" opacity=".85"/>`;
  // 長長的不整齊尖牙嘴
  const maw = (x, y, w, h) => { let t = `M${x} ${y}`, b2 = ''; const n = 7, sw = w / n;
    for (let i = 0; i < n; i++) t += ` L${x + sw * i + sw / 2} ${y + h * (.45 + (i % 2) * .2)} L${x + sw * (i + 1)} ${y}`;
    for (let i = n; i > 0; i--) b2 += ` L${x + sw * i - sw / 2} ${y + h * (.5 - (i % 2) * .15)} L${x + sw * (i - 1)} ${y + h}`;
    return `<path d="M${x} ${y} Q${x + w / 2} ${y - 3} ${x + w} ${y} L${x + w} ${y + h} Q${x + w / 2} ${y + h + 3} ${x} ${y + h}Z" fill="#2a0508" ${st}/>` +
      `<path d="${t}Z" fill="#e8e2cf" stroke="${K}" stroke-width="1.2"/><path d="M${x + w} ${y + h}${b2}Z" fill="#e8e2cf" stroke="${K}" stroke-width="1.2"/>`; };
  let s = defs;
  switch (sid) {
    case 'chinese': { // 皺皺的宣紙臉，墨汁眼淚一直流，嘴巴被縫起來
      const face = 'M20 14 Q34 8 50 12 Q66 6 80 14 Q88 30 84 50 Q90 70 80 88 Q66 94 50 90 Q34 96 20 88 Q12 70 16 50 Q10 30 20 14Z';
      s += `<path d="${face}" fill="${m.body}" ${st}/>` + crack('M24 22 L32 30 L28 38 M74 20 L70 30 M80 60 L72 66 L76 74 M22 70 L30 74') +
        `<path d="${face}" fill="url(#${uid}v)"/>` +
        hollow(36, 40, 8, 11, '#fff', -8) + hollow(64, 40, 8, 11, '#fff', 8) +
        drip(34, 50, 26) + drip(38, 50, 16) + drip(62, 50, 30) + drip(66, 50, 12) +
        `<path d="M32 74 Q50 68 68 74" fill="none" stroke="${K}" stroke-width="2.6"/>` +
        [36, 42, 48, 54, 60, 66].map(x => `<path d="M${x} 68 L${x + 1} 79" stroke="#7a0f14" stroke-width="2"/>`).join('') +
        drip(50, 90, 8) + drip(24, 88, 6); break; }
    case 'math': { // 裂開的老時鐘，指針亂轉，數字掉下來
      s += `<circle cx="50" cy="50" r="42" fill="#3a2a1e" ${st}/><circle cx="50" cy="50" r="35" fill="${m.body}" ${st}/>` +
        `<g font-family="Georgia,serif" font-size="8" font-weight="700" fill="#2a2018" text-anchor="middle"><text x="50" y="23">12</text><text x="77" y="53">3</text><text x="23" y="53">9</text><text x="64" y="92" transform="rotate(30 64 88)">6</text><text x="73" y="34" transform="rotate(-20 73 32)">1</text></g>` +
        crack('M50 15 L46 30 L54 40 L48 50 M80 40 L66 46 L70 58 M30 74 L40 64 L36 56') +
        `<circle cx="50" cy="50" r="35" fill="url(#${uid}v)"/>` +
        hollow(36, 42, 7, 9, '#ff2a2a', -12) + hollow(64, 42, 7, 9, '#ff2a2a', 12) +
        `<path d="M50 50 L28 30 M50 50 L78 72" stroke="${K}" stroke-width="3"/><circle cx="50" cy="50" r="3" fill="${K}"/>` +
        maw(32, 60, 36, 14) + drip(40, 74, 10, '#7a0f14') + drip(58, 74, 14, '#7a0f14'); break; }
    case 'science': { // 枯樹，樹幹上有一張扭曲的臉，樹枝像爪子
      s += `<path d="M30 30 Q18 18 8 20 M8 20 L4 12 M8 20 L2 24 M70 30 Q82 16 92 18 M92 18 L98 10 M92 18 L98 26 M40 20 Q36 6 28 2 M60 20 Q66 6 74 4" fill="none" stroke="${m.body}" stroke-width="5" stroke-linecap="round"/>` +
        `<path d="M30 30 Q18 18 8 20 M70 30 Q82 16 92 18 M40 20 Q36 6 28 2 M60 20 Q66 6 74 4" fill="none" stroke="${K}" stroke-width="1.2"/>` +
        `<path d="M26 98 Q30 70 28 50 Q24 28 40 18 Q50 14 60 18 Q76 28 72 50 Q70 70 74 98 Q66 92 60 98 Q54 90 50 98 Q46 90 40 98 Q34 92 26 98Z" fill="${m.body}" ${st}/>` +
        `<path d="M34 30 Q36 50 32 70 M66 28 Q62 46 68 66 M50 22 L48 36" fill="none" stroke="#1a1310" stroke-width="2"/>` +
        hollow(40, 44, 7, 10, '#b6ff3b', 15) + hollow(60, 44, 7, 10, '#b6ff3b', -15) +
        `<path d="M36 66 Q50 58 64 66 Q62 84 50 86 Q38 84 36 66Z" fill="${K}"/><circle cx="50" cy="74" r="2" fill="#b6ff3b" filter="url(#${uid}g)"/>` +
        `<path d="M30 30 Q50 26 70 30 Q70 70 70 98 L30 98Z" fill="url(#${uid}v)" opacity=".7"/>`; break; }
    case 'social': { // 破掉的紙燈籠，裡面的火變成眼睛，舌頭垂下來
      s += `<rect x="38" y="4" width="24" height="8" rx="2" fill="#1a1310" ${st}/><path d="M50 0 L50 4" ${st}/>` +
        `<path d="M24 14 Q10 50 24 86 L76 86 Q90 50 76 14Z" fill="${m.body}" ${st}/>` +
        `<path d="M20 28 Q50 24 80 28 M15 44 Q50 40 85 44 M15 60 Q50 56 85 60 M20 76 Q50 72 80 76" fill="none" stroke="#7a1e14" stroke-width="2"/>` +
        `<path d="M66 18 L80 30 L72 34 L82 44 L70 40Z" fill="${K}"/>` + crack('M30 20 L36 34 L30 40') +
        `<path d="M24 14 Q10 50 24 86 L76 86 Q90 50 76 14Z" fill="url(#${uid}v)"/>` +
        `<path d="M30 34 Q38 22 46 34 Q38 44 30 34Z" fill="#ffcf3b" filter="url(#${uid}g)"/><path d="M54 34 Q62 22 70 34 Q62 44 54 34Z" fill="#ffcf3b" filter="url(#${uid}g)"/>` +
        `<circle cx="38" cy="34" r="2.4" fill="${K}"/><circle cx="62" cy="34" r="2.4" fill="${K}"/>` +
        maw(28, 52, 44, 14) +
        `<path d="M46 64 Q44 84 50 98 Q58 88 54 64Z" fill="#a8142c" ${st}/>` +
        `<rect x="38" y="86" width="24" height="6" rx="2" fill="#1a1310" ${st}/>`; break; }
    case 'english': { // 裂開的白瓷面具，眼洞流黑水，臉上刻著字母
      const mask = 'M50 6 Q82 8 84 40 Q86 70 66 88 Q58 96 50 96 Q42 96 34 88 Q14 70 16 40 Q18 8 50 6Z';
      s += `<path d="${mask}" fill="${m.body}" ${st}/>` +
        crack('M50 6 L46 20 L54 30 L48 44 M84 40 L72 46 L76 56 L66 62 M26 70 L36 66') +
        `<path d="M48 44 L56 52 L50 58" fill="none" stroke="${K}" stroke-width="1.6"/>` +
        `<path d="${mask}" fill="url(#${uid}v)"/>` +
        `<path d="M24 38 Q34 30 44 40 Q34 50 24 38Z" fill="${K}"/><path d="M56 40 Q66 30 76 38 Q66 50 56 40Z" fill="${K}"/>` +
        `<circle cx="34" cy="40" r="1.8" fill="#fff" filter="url(#${uid}g)"/><circle cx="66" cy="40" r="1.8" fill="#fff" filter="url(#${uid}g)"/>` +
        drip(34, 46, 22) + drip(66, 46, 30) +
        `<path d="M36 74 Q50 82 64 74 Q50 78 36 74Z" fill="${K}" ${st}/>` +
        `<g font-family="Georgia,serif" font-style="italic" font-size="9" fill="#7a0f14" opacity=".85"><text x="20" y="62">A</text><text x="72" y="70">Z</text><text x="44" y="18">?</text></g>`; break; }
    default: { // 百眼黑影：一團影子上長滿眼睛和大嘴
      s += `<path d="M12 96 Q2 60 14 34 Q24 8 50 6 Q76 8 86 34 Q98 60 88 96 Q80 86 74 96 Q66 84 58 96 Q50 86 42 96 Q34 84 26 96 Q20 86 12 96Z" fill="${m.body}" stroke="#3a0a14" stroke-width="2.4"/>` +
        hollow(36, 34, 6, 8, '#ff2a2a', -10) + hollow(64, 34, 6, 8, '#ff2a2a', 10) +
        [[50, 20, 3.5], [24, 52, 3], [78, 52, 3], [30, 20, 2.5], [72, 18, 2.5], [18, 74, 2.5], [84, 76, 2.5], [50, 42, 2.5]].map(([x, y, r]) => `<ellipse cx="${x}" cy="${y}" rx="${r * 1.4}" ry="${r}" fill="#fff"/><circle cx="${x}" cy="${y}" r="${r * .6}" fill="#c4001a"/>`).join('') +
        maw(30, 56, 40, 20);
    }
  }
  const z = size || 96;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 108 104" width="${z}" height="${z}" role="img" aria-label="${m.name}" class="mon">${s}</svg>`;
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
      // 原創「搖滾 × EDM 混音」：128 BPM，D 小調 Dm – B♭ – C – A，整體音域壓低、高頻收掉，不刺耳
      // 結構（16 小節）：0–3 主歌（悶音吉他＋貝斯＋輕鼓）→ 4–5 漸強（EDM 往上衝）→ 6–13 副歌（破音吉他和弦＋四拍大鼓＋抽動低音＋吉他主旋律）→ 14–15 間奏（吉他 riff）
      const c = ac();
      if (!api._dist2) {                                                      // 溫暖的破音（濾掉刺耳高頻）
        const ws = c.createWaveShaper(), n = 1024, cv = new Float32Array(n);
        for (let i = 0; i < n; i++) { const x = i * 2 / n - 1; cv[i] = Math.tanh(x * 4); }
        ws.curve = cv; const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1700; lp.Q.value = .5;
        const g = c.createGain(); g.gain.value = .5; ws.connect(lp); lp.connect(g); g.connect(master); api._dist2 = ws;
      }
      if (!api._warm) {                                                       // 合成器也過一層低通，聲音比較圓
        const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1400; lp.connect(master); api._warm = lp;
      }
      const D = api._dist2, W = api._warm;
      const roots = [73.42, 58.27, 65.41, 55.0];                              // D – B♭ – C – A
      const chords = [[146.8, 174.6, 220], [116.5, 146.8, 174.6], [130.8, 164.8, 196], [138.6, 164.8, 220]];
      const _ = 0, A3 = 220, Bb3 = 233.1, C4 = 261.6, Cs4 = 277.2, D4 = 293.7, E4 = 329.6, F4 = 349.2, G4 = 392, A4 = 440, Bb4 = 466.2, C5 = 523.3;
      const verse = [                                                         // 主歌（原創，低一個八度）
        [D4, _, _, A3, D4, _, E4, _, F4, _, _, E4, D4, _, _, _],
        [F4, _, _, D4, F4, _, G4, _, A4, _, _, G4, F4, _, _, _],
        [E4, _, _, C4, E4, _, F4, _, G4, _, A4, _, G4, _, E4, _],
        [Cs4, _, _, E4, A4, _, G4, _, F4, _, E4, _, Cs4, _, _, _]];
      const hook = [                                                          // 副歌（原創）
        [A4, _, _, _, F4, _, A4, _, D4, _, F4, _, A4, _, G4, _],
        [Bb4, _, _, _, A4, _, F4, _, D4, _, F4, _, Bb4, _, A4, _],
        [C5, _, _, _, G4, _, E4, _, G4, _, C5, _, Bb4, _, A4, _],
        [A4, _, _, _, G4, _, F4, _, E4, _, Cs4, _, E4, _, _, _]];
      const riff = [D4, _, D4, F4, _, D4, G4, _, F4, _, D4, _, C4, _, D4, _];     // 間奏吉他 riff（原創）
      const len = (arr, i) => { let k = i + 1; while (k < 16 && !arr[k]) k++; return Math.min(k - i, 4) * .117; };
      const power = (r, d, v) => { tone(r * 2, d, 'sawtooth', v, null, 0, D); tone(r * 3, d, 'sawtooth', v * .7, null, 0, D); tone(r, d, 'sawtooth', v * .6, null, 0, D); };
      const gtr = (f, d, v) => { tone(f, d, 'sawtooth', v, null, 0, D); tone(f * 1.003, d, 'square', v * .4, null, 0, D); };
      const synth = (f, d, v) => { tone(f, d, 'sawtooth', v, null, 0, W); tone(f * 1.007, d, 'sawtooth', v * .7, null, 0, W); };
      // 亮亮的聲音：鐘琴／音樂盒般的鈴聲（正弦波＋泛音，很快消失，不刺耳）
      const bell = (f, v, dl) => { tone(f, .45, 'sine', v, null, dl || 0, W); tone(f * 2, .2, 'sine', v * .2, null, dl || 0, W); };   // 柔和鈴聲（走溫暖濾波，融進背景）
      // 亮亮的長音光暈：和弦高八度、慢慢浮出來再消失，像光從背景透出來
      const glow = (ch, d, v) => ch.forEach(f => { try { const cc = ac(), t = cc.currentTime, o = cc.createOscillator(), g = cc.createGain(); o.type = 'triangle'; o.frequency.value = f * 2; g.gain.setValueAtTime(.0001, t); g.gain.linearRampToValueAtTime(v, t + d * .4); g.gain.linearRampToValueAtTime(.0001, t + d); o.connect(g); g.connect(W); o.start(t); o.stop(t + d + .05); } catch (e) {} });
      const kick = (v) => { tone(150, .26, 'sine', v, 40); tone(60, .3, 'sine', v * .5, 38, .01); };
      const snare = (v) => { noise(.14, v, 'bandpass', 1300, 0, .6); tone(180, .08, 'triangle', v * .6, 140); };
      const hat = (v) => noise(.03, v, 'bandpass', 5000, 0, 1.5);                       // 偏暗的 hi-hat，不刺耳
      bgmTimer = setInterval(() => {
        if (document.hidden) return;
        const st = bgmStep % 16, bar = Math.floor(bgmStep / 16) % 16, ci = bar % 4, ch = chords[ci], r = roots[ci];
        const verseP = bar < 4, pre = bar === 4 || bar === 5, chorus = bar >= 6 && bar < 14, inter = bar >= 14;
        if (verseP) {
          if (st % 2 === 0) power(r, .07, .035);                                     // 悶音吉他
          if (st % 2 === 0) tone(r, .12, 'triangle', .16);                           // 貝斯
          if (st === 0 || st === 10) kick(.45); if (st === 4 || st === 12) snare(.09); if (st % 4 === 2) hat(.03);
          if (bar >= 1) { const n = verse[ci][st]; if (n) synth(n, len(verse[ci], st), .022); }
          if (bar >= 2 && st === 0) glow(ch, 1.8, .012);                           // 淡淡的亮光長音
        }
        if (pre) {
          const k = bar - 4;
          if (st % 4 === 0) kick(.5);
          const roll = k === 0 ? 4 : st < 8 ? 2 : 1; if (st % roll === 0) snare(.05 + k * .03 + st * .003);
          if (st % 2 === 0) power(r, .09, .035 + k * .012);
          if (st % 2 === 1) synth(ch[(st >> 1) % 3] * 2, .08, .012 + k * .006);       // EDM 琶音（中音域）
          tone(r, .1, 'triangle', .12 + k * .03);
          if (k === 1 && st === 0) tone(120, 1.8, 'sawtooth', .02, 900, 0, W);         // 往上衝（不尖）
          if (st % 4 === 0) bell(ch[(st >> 2) % 3] * 2, .012 + k * .006);              // 輕輕的鈴聲跟著和弦走
          if (st === 0) glow(ch, 1.8, .01 + k * .006);
        }
        if (chorus) {
          if (st % 4 === 0) kick(.75);                                               // EDM 四拍
          if (st === 4 || st === 12) snare(.2);                                      // 搖滾 2、4 拍
          if (st % 4 === 2) hat(.045);
          if (st % 2 === 0) power(r, st % 8 === 0 ? .25 : .1, st % 8 === 0 ? .055 : .038);   // 破音吉他和弦
          if (st % 4 !== 0) tone(r, .1, 'sawtooth', .06, r * .99, 0, W);             // EDM 抽動低音
          if (st % 4 === 0) tone(r / 2 * 2, .2, 'sine', .25);                         // 重低音
          if (st === 2 || st === 10) ch.forEach(f => synth(f * 2, .1, .008));         // EDM 和弦
          const n = hook[ci][st]; if (n) { gtr(n, len(hook[ci], st), .03); if (st === 0 || st === 8) bell(n, .014); }  // 吉他主旋律＋重拍淡淡鈴聲
          if (st === 0) glow(ch, 1.85, .016);                                        // 亮光長音墊在副歌底下
        }
        if (inter) {
          if (st % 4 === 0) kick(.55); if (st === 4 || st === 12) snare(.12); if (st % 4 === 2) hat(.03);
          const n = riff[st]; if (n) gtr(n, .12, .032);
          if (st === 0) glow(ch, 1.8, .012);
          tone(r, .1, 'triangle', .13);
          if (bar === 15 && st >= 12) snare(.1 + (st - 12) * .04);
        }
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
  // 柔和弦樂小提琴：三角波為主＋一點點鋸齒波、慢慢拉起來、延遲才出現的輕顫音、低通濾波，再送進一點空間回音
  let vbus = null;
  function vBus() {
    if (vbus) return vbus;
    const c = ac(), inp = c.createGain(), lp = c.createBiquadFilter(), dl = c.createDelay(), fb = c.createGain(), wet = c.createGain();
    lp.type = 'lowpass'; lp.frequency.value = 1500; lp.Q.value = .4;
    dl.delayTime.value = .23; fb.gain.value = .32; wet.gain.value = .35;
    inp.connect(lp); lp.connect(master); lp.connect(dl); dl.connect(fb); fb.connect(dl); dl.connect(wet); wet.connect(master);
    return (vbus = inp);
  }
  function violin(freq, dur, vol, delay) {
    try {
      const c = ac(), t = c.currentTime + (delay || 0), bus = vBus(), g = c.createGain(), lfo = c.createOscillator(), lg = c.createGain();
      const oscs = [['triangle', 1, 1], ['triangle', 1.004, .7], ['sawtooth', .998, .12]].map(([ty, m, gv]) => { const o = c.createOscillator(), og = c.createGain(); o.type = ty; o.frequency.value = freq * m; og.gain.value = gv; o.connect(og); og.connect(g); return o; });
      lfo.frequency.value = 5; lg.gain.setValueAtTime(0, t); lg.gain.linearRampToValueAtTime(0, t + .3); lg.gain.linearRampToValueAtTime(freq * .004, t + .6);
      lfo.connect(lg); oscs.forEach(o => lg.connect(o.frequency));
      const v = vol * .55, at = Math.min(.35, dur * .4);
      g.gain.setValueAtTime(.0001, t); g.gain.linearRampToValueAtTime(v, t + at); g.gain.setValueAtTime(v, t + dur * .7); g.gain.linearRampToValueAtTime(.0001, t + dur + .25);
      g.connect(bus);
      [...oscs, lfo].forEach(x => { x.start(t); x.stop(t + dur + .35); });
    } catch (e) {}
  }
  // 8-bit 方波（25% 佔空比，老遊戲機的聲音）
  let pw25 = null;
  function pulse(freq, dur, vol, delay, slide) {
    try {
      const c = ac(), t = c.currentTime + (delay || 0);
      if (!pw25) { const n = 32, re = new Float32Array(n), im = new Float32Array(n); for (let k = 1; k < n; k++) im[k] = (2 / (k * Math.PI)) * Math.sin(k * Math.PI * .25); pw25 = c.createPeriodicWave(re, im); }
      const o = c.createOscillator(), g = c.createGain(); o.setPeriodicWave(pw25); o.frequency.setValueAtTime(freq, t);
      if (slide) o.frequency.linearRampToValueAtTime(slide, t + dur);
      g.gain.setValueAtTime(vol, t); g.gain.setValueAtTime(vol, t + dur * .8); g.gain.linearRampToValueAtTime(.0001, t + dur);
      o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + .02);
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
    // 背景音樂：menu＝搖滾 EDM 混音、battle＝闖關音樂
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
    urgent(x) { if (!on) return; const v = .35 + x * .4; tone(140, .18, 'sine', v, 38); noise(.02, v * .5, 'highpass', 3000); tone(55, .22, 'square', .05 + x * .06, 45); if (x > .45) noise(.08, .1 + x * .15, 'bandpass', 1700, .02, .8); if (x > .75) tone(880 + x * 400, .05, 'square', .04, null, .04); },
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

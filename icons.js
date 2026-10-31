/* ===== 像素風圖示（自繪 SVG，不用 emoji） ===== */
var PIX = {
  heart: { pal: { R: '#ff4d5e', r: '#c22c3c', W: '#ffd0d6', K: '#4a1020' }, rows: [
    '.KK...KK.', 'KRRK.KRRK', 'KRWRKRRrK', 'KRRRRRRrK', '.KRRRRrK.', '..KRRrK..', '...KrK...', '....K....'] },
  heartE: { pal: { G: '#3b3550', K: '#1f1a2e' }, rows: [
    '.KK...KK.', 'KGGK.KGGK', 'KGGGKGGGK', 'KGGGGGGGK', '.KGGGGGK.', '..KGGGK..', '...KGK...', '....K....'] },
  coin: { pal: { Y: '#ffc83d', y: '#e09a00', W: '#fff4c2', K: '#7a4b00' }, rows: [
    '..KKKK..', '.KYYYYK.', 'KYWYYyYK', 'KYWYyYyK', 'KYYYyYyK', 'KYYYYyyK', '.KyyyyK.', '..KKKK..'] },
  gem: { pal: { C: '#6fd3ff', c: '#2f9bd6', W: '#ffffff', K: '#1d4f8a' }, rows: [
    '..KKKKK..', '.KCWCCcK.', 'KCWCCCCcK', 'KKKKKKKKK', '.KCCCCcK.', '..KCCcK..', '...KcK...', '....K....'] },
  medal: { pal: { R: '#e5484d', B: '#2f80ed', Y: '#ffc83d', y: '#e09a00', W: '#fff4c2', K: '#5a3a00' }, rows: [
    '.RR..BB.', '.RR..BB.', '..RRBB..', '...KK...', '..KYYK..', '.KYWYyK.', '.KYYYyK.', '.KyYyyK.', '..KyyK..', '...KK...'] },
  star: { pal: { Y: '#ffd84d', y: '#f0a800', W: '#fffbe0', K: '#7a4b00' }, rows: [
    '....K....', '...KYK...', '...KWK...', 'KKKYWYKKK', 'KYYWYYYyK', '.KYYYYyK.', '..KYYyK..', '.KYyKyyK.', '.KyK.KyK.', '.KK...KK.'] },
  cart: { pal: { K: '#1f2433', G: '#ffc83d', g: '#e09a00', W: '#ffffff' }, rows: [
    'KK........', '.K........', '.KKKKKKKKK', '.KGGGGGGK.', '.KGgGgGgK.', '..KKKKKKK.', '..K.....K.', '...KK.KK..', '...KK.KK..'] },
  sword: { pal: { W: '#e8eef9', w: '#a9b6cc', Y: '#ffc83d', K: '#3a2a10' }, rows: [
    '.......WW', '......WWw', '.....WWw.', '....WWw..', 'Y..WWw...', '.YYWw....', '..YY.....', '.K..Y....', 'K........'] },
  pencil: { pal: { Y: '#ffc83d', y: '#e09a00', P: '#ff8ac6', S: '#f2c9a0', K: '#1f2433' }, rows: [
    '......PP', '.....PPP', '....YYP.', '...YyY..', '..YyY...', '.SyY....', '.SS.....', 'K.......'] },
  book: { pal: { B: '#2f80ed', b: '#1f5fbf', W: '#ffffff', K: '#1f2433' }, rows: [
    'KKKKKKKKK', 'KBBBKWWWK', 'KBBBKWKWK', 'KBbBKWWWK', 'KBBBKWKWK', 'KBbBKWWWK', 'KBBBKWWWK', 'KKKKKKKKK'] },
  skull: { pal: { W: '#f4f4f8', w: '#c9cbd6', K: '#1f2433' }, rows: [
    '..KKKKK..', '.KWWWWWK.', 'KWWWWWWwK', 'KWKKWKKwK', 'KWKKWKKwK', 'KWWWKWWwK', '.KWWWWwK.', '..KWKWK..', '..KKKKK..'] },
  target: { pal: { R: '#e5484d', W: '#ffffff', K: '#1f2433' }, rows: [
    '..KKKKK..', '.KRRRRRK.', 'KRWWWWWRK', 'KRWRRRWRK', 'KRWRKRWRK', 'KRWRRRWRK', 'KRWWWWWRK', '.KRRRRRK.', '..KKKKK..'] },
  ticket: { pal: { B: '#7fc8ff', b: '#3f8fd6', W: '#ffffff', K: '#1f2433' }, rows: [
    'KKKKKKKKKK', 'KBBBWBBBBK', '.KBBWBbbK.', 'KBBBWBBBBK', '.KBBWBbbK.', 'KBBBWBBBBK', 'KKKKKKKKKK'] },
  lock: { pal: { G: '#9aa3b2', g: '#6b7280', K: '#1f2433', Y: '#ffc83d' }, rows: [
    '..KKKK..', '.K....K.', '.K....K.', 'KKKKKKKK', 'KGGGGGgK', 'KGGKKGgK', 'KGGKKGgK', 'KGGGGGgK', 'KKKKKKKK'] },
  bulb: { pal: { Y: '#ffe066', y: '#f0b400', W: '#fffbe0', G: '#9aa3b2', K: '#1f2433' }, rows: [
    '..KKKK..', '.KYWYYK.', 'KYWYYYyK', 'KYYYYYyK', '.KYYYyK.', '..KYyK..', '..KGGK..', '..KGGK..', '...KK...'] }
};
function ICON(name, size, cls) {
  const d = PIX[name]; if (!d) return '';
  const h = d.rows.length, w = Math.max(...d.rows.map(r => r.length));
  let s = '';
  d.rows.forEach((r, y) => { for (let x = 0; x < r.length; x++) { const c = d.pal[r[x]]; if (c) s += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${c}"/>`; } });
  const z = size || 22;
  return `<svg class="pix ${cls || ''}" viewBox="0 0 ${w} ${h}" width="${z * w / Math.max(w, h)}" height="${z * h / Math.max(w, h)}" shape-rendering="crispEdges" aria-hidden="true">${s}</svg>`;
}

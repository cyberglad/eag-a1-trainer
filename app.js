(function () {
  const app = document.getElementById('app');
  const timerEl = document.getElementById('timer');
  const titleEl = document.getElementById('test-title');
  const progressEl = document.getElementById('progress');
  const LETTERS = 'ABCDEFGH';
  const SQ = [
    { sym: '− −', bg: '#ff1a1a' }, { sym: '−', bg: '#ffa500' }, { sym: '+ −', bg: '#a6a6a6' },
    { sym: '+', bg: '#7ed957' }, { sym: '+ +', bg: '#078a07' }
  ];
  const S = { test: null, idx: 0, answers: [], deadline: 0, tick: null, fs: 13, timedOut: false };

  /* ---------- stockage local (meilleur effort) ---------- */
  const store = {
    get() { try { return JSON.parse(localStorage.getItem('eag-history') || '{}'); } catch (e) { return {}; } },
    set(id, rec) { try { const h = store.get(); h[id] = rec; localStorage.setItem('eag-history', JSON.stringify(h)); } catch (e) { /* ignore */ } }
  };

  /* ordre des carrés colorés mélangé par question, comme dans le test réel, mais stable */
  function order5(seed) {
    const a = [0, 1, 2, 3, 4];
    let x = (seed * 9301 + 49297) % 233280;
    for (let i = a.length - 1; i > 0; i--) {
      x = (x * 9301 + 49297) % 233280;
      const j = Math.floor((x / 233280) * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function setHeader(title, showTimer) {
    titleEl.textContent = title;
    timerEl.hidden = !showTimer;
  }
  function stopTimer() { clearInterval(S.tick); S.tick = null; }
  function fmt(ms) {
    const s = Math.max(0, Math.ceil(ms / 1000));
    return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  }
  function updateTimer() {
    const left = S.deadline - Date.now();
    timerEl.textContent = fmt(left);
    timerEl.classList.toggle('low', left <= 60000);
    if (left <= 0) { S.timedOut = true; finish(); }
  }

  /* ---------- accueil ---------- */
  function home() {
    stopTimer();
    setHeader('EAG A1 — Entraînement', false);
    progressEl.style.width = '0';
    const hist = store.get();
    app.innerHTML = `
      <section class="home">
        <h2>Épreuve d'aptitude générale — groupe A1</h2>
        <p class="lead">Choisissez un test. Le chronomètre démarre dès la première question ; à la fin du temps, le test se termine automatiquement et le corrigé s'affiche.</p>
        <div class="test-list">
          ${window.TESTS.map((t, i) => {
            const h = hist[t.id];
            return `<div class="test-row">
              <div>
                <h3>${t.title}</h3>
                <div class="meta">${t.kind} · ${t.items.length} questions · ${t.minutes} min</div>
                ${h ? `<div class="last">Dernier résultat : ${h.pct} % (${h.date})</div>` : ''}
              </div>
              <button class="btn" data-open="${i}">Ouvrir</button>
            </div>`;
          }).join('')}
        </div>
        <p class="note">Время для Scales Verbal (49 вопросов за 12 минут) взято из инструкции теста; для остальных блоков оно выбрано ориентировочно. Корректные ответы и объяснения на русском показываются после завершения теста.</p>
      </section>`;
    app.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => intro(window.TESTS[+b.dataset.open])));
  }

  /* ---------- consignes ---------- */
  function intro(t) {
    stopTimer();
    setHeader(t.title, false);
    app.innerHTML = `
      <section class="intro">
        <h2>Veuillez lire très attentivement les instructions suivantes</h2>
        ${t.intro}
        <div class="facts"><div><strong>${t.items.length}</strong>questions</div><div><strong>${t.minutes} min</strong>temps imparti</div></div>
        <button class="btn" id="start">Commencer le test</button>
        <button class="btn ghost" id="back">Retour</button>
      </section>`;
    document.getElementById('start').onclick = () => start(t);
    document.getElementById('back').onclick = home;
  }

  function start(t) {
    S.test = t; S.idx = 0; S.answers = new Array(t.items.length).fill(null); S.timedOut = false;
    S.deadline = Date.now() + t.minutes * 60000;
    setHeader(t.title, true);
    stopTimer();
    S.tick = setInterval(updateTimer, 250);
    updateTimer();
    question();
  }

  /* ---------- page de question ---------- */
  function optionsHTML(item, qi) {
    const cur = S.answers[qi];
    if (item.type === 'sjt' && item.scale === 5) {
      return order5(qi + 7).map((v, k) => `
        <button class="opt ${cur === v ? 'sel' : ''}" data-v="${v}" aria-label="${SQ[v].sym}">
          <span class="letter">${LETTERS[k]}</span>
          <span class="sq" style="background:${SQ[v].bg}">${SQ[v].sym.replace(/ /g, '')}</span>
        </button>`).join('');
    }
    if (item.type === 'sjt') {
      return window.SCALE4.map((lab, k) => `
        <button class="opt ${cur === k + 1 ? 'sel' : ''}" data-v="${k + 1}">
          <span class="letter">${LETTERS[k]}</span>
          <span class="label s4"><b>${k + 1}</b><small>${lab}</small></span>
        </button>`).join('');
    }
    return item.options.map((o, k) => `
      <button class="opt ${cur === k ? 'sel' : ''}" data-v="${k}">
        <span class="letter">${LETTERS[k]}</span>
        <span class="label">${o}</span>
      </button>`).join('');
  }

  function question() {
    const t = S.test, i = S.idx, item = t.items[i], n = t.items.length;
    progressEl.style.width = ((i + 1) / n * 100) + '%';
    const hasText = !!item.text;
    const keepScroll = app.querySelector('.pane.left .text');
    const prevScroll = keepScroll && keepScroll.dataset.src === String(item.text && item.text.length) ? keepScroll.parentElement.scrollTop : 0;
    app.innerHTML = `
      <div class="qbar">
        <h2>Question Numéro ${i + 1}</h2>
        <button class="round" id="reset" title="Effacer la réponse" aria-label="Effacer la réponse">⟳</button>
        <button class="round" id="fplus" title="Agrandir le texte">A+</button>
        <button class="round" id="fminus" title="Réduire le texte">A-</button>
      </div>
      <div class="qbody ${hasText ? 'split' : ''}" style="--fs:${S.fs}px">
        ${hasText ? `<div class="pane left"><span class="pill">Texte</span><div class="text" data-src="${item.text.length}">${item.text}</div></div>` : ''}
        <div class="pane right">
          <span class="pill">Question</span>
          <p class="prompt">${item.cat ? `<span class="cat">${item.cat}</span>` : ''}${item.type === 'sjt' ? item.reaction : item.prompt}</p>
          ${item.figure ? `<div class="figure">${item.figure}</div>` : ''}
          <div class="options">${optionsHTML(item, i)}</div>
        </div>
      </div>
      <div class="navbar">
        <button class="btn ghost" id="prev" ${i === 0 ? 'disabled' : ''}>Précédent</button>
        <span class="count">${i + 1} / ${n} · ${S.answers.filter(a => a !== null).length} réponses</span>
        ${i < n - 1 ? `<button class="btn" id="next">Suivant</button>` : ''}
        <button class="btn ${i < n - 1 ? 'ghost' : ''}" id="finish">Terminer le test</button>
      </div>`;
    if (prevScroll) app.querySelector('.pane.left').scrollTop = prevScroll;
    app.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
      S.answers[i] = +b.dataset.v;
      app.querySelectorAll('.opt').forEach(x => x.classList.toggle('sel', x === b));
      app.querySelector('.count').textContent = `${i + 1} / ${n} · ${S.answers.filter(a => a !== null).length} réponses`;
    }));
    document.getElementById('reset').onclick = () => { S.answers[i] = null; question(); };
    document.getElementById('fplus').onclick = () => { S.fs = Math.min(20, S.fs + 1); app.querySelector('.qbody').style.setProperty('--fs', S.fs + 'px'); };
    document.getElementById('fminus').onclick = () => { S.fs = Math.max(11, S.fs - 1); app.querySelector('.qbody').style.setProperty('--fs', S.fs + 'px'); };
    document.getElementById('prev').onclick = () => { if (S.idx > 0) { S.idx--; question(); } };
    const nx = document.getElementById('next');
    if (nx) nx.onclick = () => { S.idx++; question(); };
    document.getElementById('finish').onclick = () => {
      const left = S.answers.filter(a => a === null).length;
      if (left && !confirm(`${left} question(s) sans réponse. Terminer quand même ?`)) return;
      finish();
    };
  }

  /* ---------- correction ---------- */
  function scoreItem(item, a) {
    if (a === null) return 0;
    if (item.type !== 'sjt') return a === item.answer ? 1 : 0;
    if (a === item.answer || (item.accept || []).includes(a)) return 1;
    return Math.abs(a - item.answer) === 1 ? 0.5 : 0;
  }
  function answerLabel(item, a) {
    if (a === null) return '—';
    if (item.type === 'sjt') return item.scale === 5 ? SQ[a].sym : `${a} — ${window.SCALE4[a - 1]}`;
    if (item.figures) return `Figure ${LETTERS[a]}`;
    const raw = item.options[a];
    return /<table/.test(raw) ? `Option ${LETTERS[a]}` : `${LETTERS[a]}. ${raw}`;
  }

  function finish() {
    stopTimer();
    const t = S.test;
    const pts = t.items.map((it, k) => scoreItem(it, S.answers[k]));
    const total = pts.reduce((x, y) => x + y, 0);
    const pct = Math.round(total / t.items.length * 100);
    store.set(t.id, { pct, date: new Date().toLocaleDateString('fr-LU') });
    setHeader(t.title, false);
    progressEl.style.width = '100%';
    const isSJT = t.items[0].type === 'sjt';
    app.innerHTML = `
      <section class="results">
        ${S.timedOut ? `<div class="timeout">Temps écoulé : le test a été terminé automatiquement.</div>` : ''}
        <h2>Résultats</h2>
        <div class="score"><b>${pct} %</b><span>${Number.isInteger(total) ? total : total.toFixed(1)} / ${t.items.length} points</span></div>
        <p class="sub">${isSJT ? 'Note exacte (ou variante admise) = 1 point, écart d’un cran = 0,5 point.' : 'Une bonne réponse = 1 point, pas de pénalité pour une erreur.'}</p>
        <div class="actions">
          <button class="btn" id="again">Recommencer</button>
          <button class="btn ghost" id="toHome">Tous les tests</button>
        </div>
        <table class="review">
          <thead><tr><th>N°</th><th>Question</th><th>Votre réponse</th><th>Bonne réponse</th><th>Объяснение</th></tr></thead>
          <tbody>
            ${t.items.map((it, k) => {
              const p = pts[k];
              const cls = p === 1 ? 'ok' : p === 0.5 ? 'half' : 'bad';
              const mark = p === 1 ? '✓' : p === 0.5 ? '½' : '✗';
              const q = it.type === 'sjt' ? it.reaction : it.prompt;
              return `<tr>
                <td class="${cls}">${k + 1} ${mark}</td>
                <td class="q">${q}</td>
                <td>${answerLabel(it, S.answers[k])}</td>
                <td>${answerLabel(it, it.answer)}</td>
                <td class="expl">${it.explain}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </section>`;
    document.getElementById('again').onclick = () => intro(t);
    document.getElementById('toHome').onclick = home;
    window.scrollTo(0, 0);
  }

  document.getElementById('home-link').addEventListener('click', () => {
    if (S.tick && !confirm('Quitter le test en cours ?')) return;
    home();
  });
  window.addEventListener('beforeunload', e => { if (S.tick) { e.preventDefault(); e.returnValue = ''; } });

  home();
})();

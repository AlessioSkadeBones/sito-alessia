const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReduced) {
  initFadeUp();
  initStagger();
  initCountUp();
  initLines();
}

/* ─── Fade up ─────────────────────────────────────────── */
function initFadeUp() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.animate-fade-up').forEach((el) => obs.observe(el));
}

/* ─── Stagger ─────────────────────────────────────────── */
function initStagger() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.animate-stagger-item');
          items.forEach((item, i) => {
            item.style.setProperty('--stagger-delay', `${i * 100}ms`);
            item.classList.add('is-visible');
          });
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.animate-stagger').forEach((el) => obs.observe(el));
}

/* ─── Count up ────────────────────────────────────────── */
function initCountUp() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.animate-count').forEach((el) => obs.observe(el));
}

function runCount(el) {
  const target = parseFloat(el.dataset.countTarget ?? '0');
  const prefix = el.dataset.countPrefix ?? '';
  const suffix = el.dataset.countSuffix ?? '';
  const duration = 1500;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.floor(eased * target);
    el.textContent = prefix + current + suffix;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = prefix + target + suffix;
    }
  }

  requestAnimationFrame(step);
}

/* ─── Line expand ─────────────────────────────────────── */
function initLines() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.animate-line').forEach((el) => obs.observe(el));
}

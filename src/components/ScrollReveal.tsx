'use client';
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('gx-in'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const run = () =>
      document.querySelectorAll('.gx-reveal,.gx-depth,.gx-left,.gx-right')
        .forEach(el => io.observe(el));
    const t = setTimeout(run, 80);
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);
  return null;
}

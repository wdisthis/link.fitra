// Petals
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('bgLayer');
  if (!container) return;

  const count = window.innerWidth < 480 ? 12 : 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    const left = Math.random() * 100;
    const duration = 9 + Math.random() * 9;
    const delay = Math.random() * 10;
    const scale = 0.6 + Math.random() * 0.8;

    // Crimson
    if (Math.random() > 0.4) {
      p.style.background = 'radial-gradient(circle at 30% 30%, #ff6b6b, #b82727 75%)';
      p.style.boxShadow = '0 0 8px rgba(184, 39, 39, 0.45)';
    }

    p.style.left = left + 'vw';
    p.style.animationDuration = duration + 's';
    p.style.animationDelay = '-' + delay + 's';
    p.style.transform = `scale(${scale})`;
    container.appendChild(p);
  }
});

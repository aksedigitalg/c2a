/* ─── ALPINE GLOBAL STORE ─── */
document.addEventListener('alpine:init', () => {
  Alpine.store('app', {
    currentPage: 'home',
    user: { name: 'Ahmet Yılmaz', email: 'ahmet@email.com' },
    cartCount: 0,
    notificationCount: 3,
    incrementCart() { this.cartCount++; },
    decrementCart() { if (this.cartCount > 0) this.cartCount--; },
    setCartCount(n) { this.cartCount = n; }
  });
});

/* ─── LUCIDE INIT ─── */
function initLucide() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/* ─── PAGE INIT ─── */
function initPage(container) {
  initLucide();
  if (container && typeof Alpine !== 'undefined') {
    Alpine.initTree(container);
  }
}

/* ─── BARBA.JS INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  initLucide();

  if (typeof barba !== 'undefined') {
    barba.init({
      preventRunning: true,
      transitions: [{
        name: 'fade-slide',
        leave(data) {
          return new Promise(resolve => {
            const el = data.current.container;
            el.style.transition = 'opacity 200ms ease, transform 200ms ease';
            el.style.opacity = '0';
            el.style.transform = 'translateY(-8px)';
            setTimeout(resolve, 200);
          });
        },
        enter(data) {
          const el = data.next.container;
          el.style.opacity = '0';
          el.style.transform = 'translateY(8px)';
          return new Promise(resolve => {
            requestAnimationFrame(() => {
              el.style.transition = 'opacity 300ms ease, transform 300ms ease';
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
              setTimeout(resolve, 300);
            });
          });
        },
        after(data) {
          initPage(data.next.container);
          window.scrollTo(0, 0);
        }
      }]
    });
  }
});

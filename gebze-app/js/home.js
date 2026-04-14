document.addEventListener('alpine:init', () => {
  Alpine.data('homeScreen', () => ({
    activeSlide: 0,
    showCategoriesPopup: false,

    slides: [
      { id: 1, title: 'Gebze\'yi Keşfet', desc: 'Şehrin en iyi mekanları sende' },
      { id: 2, title: 'Yemek Siparişi', desc: 'Favori restoranlarından sipariş ver' },
      { id: 3, title: 'Kampanyalar', desc: 'Özel fırsatları kaçırma' },
      { id: 4, title: 'Etkinlikler', desc: 'Bu haftaki etkinlikleri gör' }
    ],

    nearbyItems: [
      { id: 1, name: 'Eczane', icon: 'pill', slug: 'eczane' },
      { id: 2, name: 'Benzinlik', icon: 'fuel', slug: 'benzinlik' },
      { id: 3, name: 'Market', icon: 'shopping-cart', slug: 'market' },
      { id: 4, name: 'ATM', icon: 'landmark', slug: 'atm' },
      { id: 5, name: 'Hastane', icon: 'heart-pulse', slug: 'hastane' },
      { id: 6, name: 'Otopark', icon: 'parking-circle', slug: 'otopark' },
      { id: 7, name: 'Banka', icon: 'building-2', slug: 'banka' },
      { id: 8, name: 'Kargo', icon: 'package', slug: 'kargo' }
    ],

    exploreItems: [
      { id: 1, name: 'Eczaneler', icon: 'pill', desc: 'Nöbetçi ve en yakın eczaneler', slug: 'eczane' },
      { id: 2, name: 'Parklar', icon: 'tree-pine', desc: 'Yeşil alanlar ve mesire yerleri', slug: 'park' },
      { id: 3, name: 'Tarihi Yerler', icon: 'landmark', desc: 'Gebze\'nin tarihi mekanları', slug: 'tarihi' },
      { id: 4, name: 'Müzeler', icon: 'building-2', desc: 'Kültür ve sanat mekanları', slug: 'muze' },
      { id: 5, name: 'Restoranlar', icon: 'utensils-crossed', desc: 'Lezzetli mekanları keşfet', slug: 'restoran' },
      { id: 6, name: 'Oteller', icon: 'bed-double', desc: 'Konaklama seçenekleri', slug: 'otel' },
      { id: 7, name: 'Camiler', icon: 'moon', desc: 'İbadethaneler ve camiler', slug: 'cami' },
      { id: 8, name: 'Spor Alanları', icon: 'dumbbell', desc: 'Spor tesisleri ve sahalar', slug: 'spor' }
    ],

    newsItems: [
      { id: 1, category: 'Şehir', title: 'Gebze\'de yeni metro hattı güzergahı açıklandı', date: '2 saat önce' },
      { id: 2, category: 'Kültür', title: 'Gebze Kültür Merkezi yaz etkinlikleri başlıyor', date: '5 saat önce' },
      { id: 3, category: 'Spor', title: 'Gebze Belediyespor Süper Lig\'e çıktı', date: 'dün' },
      { id: 4, category: 'Eğitim', title: 'Gebze Teknik Üniversitesi yeni bölüm açıyor', date: '12 Nisan 2026' }
    ],

    categories: [
      { id: 1, name: 'Gebzem AI', icon: 'bot', link: 'gebzem-ai.html' },
      { id: 2, name: 'Yemek Siparişi', icon: 'utensils-crossed', link: 'food-order.html' },
      { id: 3, name: 'Restoranlar', icon: 'chef-hat', link: 'restaurant-list.html' },
      { id: 4, name: 'İlanlar', icon: 'megaphone', link: 'ads-home.html' },
      { id: 5, name: 'Alışveriş', icon: 'shopping-bag', link: 'shopping.html' },
      { id: 6, name: 'İş İlanları', icon: 'briefcase', link: 'jobs.html' },
      { id: 7, name: 'Hizmetler', icon: 'wrench', link: 'services.html' },
      { id: 8, name: 'Etkinlikler', icon: 'calendar-days', link: 'events.html' },
      { id: 9, name: 'Emlak', icon: 'building', link: 'ads-home.html' },
      { id: 10, name: 'Ulaşım', icon: 'bus', link: 'map.html' },
      { id: 11, name: 'Eğitim', icon: 'graduation-cap', link: 'map.html' },
      { id: 12, name: 'Sağlık', icon: 'heart-pulse', link: 'services.html' }
    ],

    updateSlide() {
      const slider = this.$refs.slider;
      if (!slider) return;
      const index = Math.round(slider.scrollLeft / slider.offsetWidth);
      this.activeSlide = index;
    },

    init() {
      // Nav kategoriler butonu
      setTimeout(() => {
        const navBtn = document.getElementById('nav-categories-btn');
        if (navBtn) {
          navBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.showCategoriesPopup = true;
          });
        }
      }, 100);

      // Auto slide
      setInterval(() => {
        const slider = this.$refs.slider;
        if (!slider || this.showCategoriesPopup) return;
        const maxScroll = slider.scrollWidth - slider.offsetWidth;
        if (slider.scrollLeft >= maxScroll - 10) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
        }
      }, 4000);
    }
  }));
});

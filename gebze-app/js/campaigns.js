document.addEventListener('alpine:init', () => {
  Alpine.data('campaignsScreen', () => ({
    activeFilter: 'Tümü',
    filters: ['Tümü', 'Yemek', 'Alışveriş', 'Hizmet', 'Eğlence', 'Güzellik'],

    campaigns: [
      { id: 1, brand: 'Gebze Pizza House', title: '2 Al 1 Öde — Her Cumartesi', discount: '2 Al 1 Öde', validity: '30 Nisan 2026\'ya kadar', category: 'Yemek' },
      { id: 2, brand: 'Çayırova AVM', title: 'Tüm Giyim Ürünlerinde Sezon Sonu İndirimi', discount: '%50\'ye Varan İndirim', validity: '15 Mayıs 2026\'ya kadar', category: 'Alışveriş' },
      { id: 3, brand: 'Güzellik Merkezi Gebze', title: 'Yeni Müşterilere İlk Seans İndirimi', discount: '%30 İndirim', validity: '31 Mayıs 2026\'ya kadar', category: 'Güzellik' },
      { id: 4, brand: 'FitGebze Spor Salonu', title: 'Yıllık Üyelikte 2 Ay Bedava', discount: '2 Ay Hediye', validity: '30 Haziran 2026\'ya kadar', category: 'Hizmet' },
      { id: 5, brand: 'Gebze Sinema', title: 'Her Salı Özel Gün — İndirimli Bilet', discount: '%40 İndirim', validity: 'Geçerli her Salı', category: 'Eğlence' },
      { id: 6, brand: 'Lezzet Durağı', title: '50 TL ve üzeri siparişte ücretsiz tatlı', discount: 'Tatlı Hediye', validity: '30 Nisan 2026\'ya kadar', category: 'Yemek' }
    ],

    get filtered() {
      if (this.activeFilter === 'Tümü') return this.campaigns;
      return this.campaigns.filter(c => c.category === this.activeFilter);
    }
  }));
});

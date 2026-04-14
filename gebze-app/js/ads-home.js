document.addEventListener('alpine:init', () => {
  Alpine.data('adsHome', () => ({
    activeFilter: 'Tümü',
    filters: ['Tümü', 'Vasıta', 'Emlak', 'Telefon & Tablet', 'Bilgisayar', 'Beyaz Eşya', 'Mobilya & Dekorasyon', 'Giyim', 'Hobi & Oyun', 'Diğer'],

    featuredAds: [
      { id: 1, price: '₺48.000', title: 'iPhone 15 Pro 256GB Natural Titanium', location: 'Gebze', date: '2 gün önce' },
      { id: 2, price: '₺1.250.000', title: '2020 Volkswagen Golf 1.5 TSI', location: 'Çayırova', date: '1 gün önce' },
      { id: 3, price: '₺3.200.000', title: 'Sahibinden 3+1 Daire Merkezi Konum', location: 'Gebze', date: '3 saat önce' }
    ],

    recentAds: [
      { id: 1, price: '₺48.000', title: 'iPhone 15 Pro 256GB Natural Titanium', location: 'Gebze', date: '2 gün önce', category: 'Telefon & Tablet' },
      { id: 2, price: '₺3.200.000', title: 'Sahibinden Satılık Daire', location: 'Gebze', date: '3 saat önce', category: 'Emlak' },
      { id: 3, price: '₺1.250.000', title: '2020 Golf GTI', location: 'Çayırova', date: '1 gün önce', category: 'Vasıta' },
      { id: 4, price: '₺38.000', title: 'MacBook Air M2 16GB 512GB', location: 'Gebze', date: '5 saat önce', category: 'Bilgisayar' },
      { id: 5, price: '₺8.500', title: 'Samsung Çamaşır Makinesi 8kg', location: 'Dilovası', date: 'dün', category: 'Beyaz Eşya' },
      { id: 6, price: '₺12.000', title: 'Chester L Koltuk Takımı', location: 'Gebze', date: '3 gün önce', category: 'Mobilya & Dekorasyon' },
      { id: 7, price: '₺18.000', title: 'PlayStation 5 + 3 Oyun', location: 'Gebze', date: '4 gün önce', category: 'Hobi & Oyun' },
      { id: 8, price: '₺4.500', title: 'Trek Marlin 5 Bisiklet', location: 'Çayırova', date: '1 hafta önce', category: 'Diğer' }
    ],

    get filtered() {
      if (this.activeFilter === 'Tümü') return this.recentAds;
      return this.recentAds.filter(a => a.category === this.activeFilter);
    }
  }));
});

document.addEventListener('alpine:init', () => {
  Alpine.data('adDetail', () => ({
    activeImage: 0,
    isFavorite: false,
    showFullDescription: false,
    images: [1, 2, 3, 4, 5],

    ad: {
      price: '₺48.000',
      title: 'iPhone 15 Pro 256GB Natural Titanium — Sıfır Gibi',
      location: 'Gebze, Kocaeli',
      date: '2 gün önce',
      description: 'Telefon 3 ay kullanıldı, hiçbir çizik veya hasar yok. Ekran koruyucu ve kılıf ile kullanıldı. Tüm aksesuarları (kutu, şarj aleti, kablo) mevcuttur. Fatura ve garanti belgesi ile birlikte satılmaktadır. Takas düşünülmez. Ciddi alıcılar yazsın.',
      details: [
        { label: 'İlan No', value: '123456789' },
        { label: 'Tarih', value: '12 Nisan 2026' },
        { label: 'Kategori', value: 'Telefon & Tablet > iPhone' },
        { label: 'Durum', value: 'İkinci El' },
        { label: 'Renk', value: 'Natural Titanium' },
        { label: 'Hafıza', value: '256 GB' }
      ],
      seller: {
        name: 'Mehmet K.',
        since: 'Ocak 2020',
        adsCount: 12
      }
    },

    similarAds: [
      { id: 1, price: '₺45.000', title: 'iPhone 15 128GB Black' },
      { id: 2, price: '₺52.000', title: 'iPhone 15 Pro Max 256GB' },
      { id: 3, price: '₺38.000', title: 'iPhone 14 Pro 256GB' },
      { id: 4, price: '₺29.000', title: 'iPhone 13 Pro 128GB' }
    ]
  }));
});

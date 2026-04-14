document.addEventListener('alpine:init', () => {
  Alpine.data('restaurantDetail', () => ({
    activeTab: 'Menü',
    isFavorite: false,
    tabs: ['Menü', 'Fotoğraflar', 'Yorumlar', 'Bilgi'],

    restaurant: {
      name: 'Tarihi Çınar Et Lokantası',
      cuisine: 'Türk Mutfağı, Kebap',
      rating: '4.6',
      reviewCount: 312,
      hours: '11:00–23:00',
      distance: '2.3 km',
      area: 'Gebze Merkez',
      phone: '0262 641 12 34',
      fullAddress: 'Cumhuriyet Mah. Atatürk Cad. No:45, Gebze/Kocaeli',
      tags: ['Türk Mutfağı', 'Kebap', 'Izgara'],
      features: ['WiFi', 'Otopark', 'Vale', 'Açık Alan', 'Canlı Müzik', 'Çocuk Dostu']
    },

    menuCategories: ['Başlangıçlar', 'Ana Yemekler', 'Içecekler'],

    menuItems: [
      { id: 1, name: 'Acılı Ezme', desc: 'Taze sebze ezme', price: 60, category: 'Başlangıçlar' },
      { id: 2, name: 'Patlıcan Salatası', desc: 'Közde pişmiş patlıcan', price: 70, category: 'Başlangıçlar' },
      { id: 3, name: 'Adana Kebap', desc: 'El yapımı baharatlı kıyma kebabı', price: 280, category: 'Ana Yemekler' },
      { id: 4, name: 'Karışık Izgara', desc: 'Tavuk, köfte, şiş tabağı', price: 320, category: 'Ana Yemekler' },
      { id: 5, name: 'Kuzu Tandır', desc: 'Fırında tandır kuzu', price: 380, category: 'Ana Yemekler' },
      { id: 6, name: 'Ayran', desc: 'El yapımı soğuk ayran', price: 40, category: 'Içecekler' },
      { id: 7, name: 'Şalgam', desc: 'Sert fermente içecek', price: 35, category: 'Içecekler' }
    ],

    reviews: [
      { id: 1, name: 'Mehmet K.', date: '2 gün önce', rating: 5, text: 'Muhteşem bir deneyimdi. Adana kebabı gerçekten eşsizdi, kesinlikle tekrar geleceğim.' },
      { id: 2, name: 'Ayşe T.', date: '1 hafta önce', rating: 4, text: 'Yemekler lezzetliydi ama servis biraz yavaştı. Ambiyans çok güzeldi.' },
      { id: 3, name: 'Ali B.', date: '2 hafta önce', rating: 5, text: 'Gebze\'nin en iyi et lokantası. Fiyat-performans açısından da çok iyi.' },
      { id: 4, name: 'Fatma Y.', date: '1 ay önce', rating: 4, text: 'Özel günümüzde geldik, personel çok ilgiliydi. Yemekler tazeydi.' }
    ],

    workingHours: [
      { day: 'Pazartesi', hours: '11:00–23:00' },
      { day: 'Salı', hours: '11:00–23:00' },
      { day: 'Çarşamba', hours: '11:00–23:00' },
      { day: 'Perşembe', hours: '11:00–23:00' },
      { day: 'Cuma', hours: '11:00–00:00' },
      { day: 'Cumartesi', hours: '11:00–00:00' },
      { day: 'Pazar', hours: '12:00–22:00' }
    ]
  }));
});

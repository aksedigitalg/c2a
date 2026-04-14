document.addEventListener('alpine:init', () => {
  Alpine.data('favoritesScreen', () => ({
    activeTab: 'restoranlar',

    tabs: [
      { id: 'restoranlar', label: 'Restoranlar' },
      { id: 'ilanlar', label: 'İlanlar' },
      { id: 'mekanlar', label: 'Mekanlar' }
    ],

    restaurants: [
      { id: 1, name: 'Tarihi Çınar Kebap', cuisine: 'Kebap, Izgara', rating: '4.6', distance: '1.2 km' },
      { id: 2, name: 'Yelken Balık', cuisine: 'Balık, Deniz Ürünleri', rating: '4.8', distance: '3.5 km' },
      { id: 3, name: 'Kahve Durağı', cuisine: 'Kafe, Tatlı', rating: '4.5', distance: '0.8 km' }
    ],

    ads: [
      { id: 1, price: '₺48.000', title: 'iPhone 15 Pro 256GB' },
      { id: 2, price: '₺38.000', title: 'MacBook Air M2' }
    ],

    places: [
      { id: 1, name: 'Bayraktar Eczanesi', address: 'Cumhuriyet Mah. Gebze', icon: 'pill' },
      { id: 2, name: 'Migros Gebze', address: 'İstasyon Cad. Gebze', icon: 'shopping-cart' },
      { id: 3, name: 'Gebze Merkez Parkı', address: 'Merkez, Gebze', icon: 'tree-pine' }
    ]
  }));
});

document.addEventListener('alpine:init', () => {
  Alpine.data('foodOrder', () => ({
    activeFilter: 'Tümü',
    favorites: [],

    filters: ['Tümü', 'Kebap & Izgara', 'Pizza', 'Burger', 'Döner', 'Pide & Lahmacun', 'Ev Yemekleri', 'Tatlı & Dondurma', 'Kahvaltı', 'İçecek'],

    promoRestaurants: [
      { id: 1, name: 'Gebze Pizza House', discount: '%30 İndirim', rating: '4.3', time: '25-35 dk', minOrder: '₺100' },
      { id: 2, name: 'Burger King Gebze', discount: '%20 İndirim', rating: '4.1', time: '20-30 dk', minOrder: '₺80' },
      { id: 3, name: 'Sultan Sofrası', discount: '%15 İndirim', rating: '4.6', time: '30-45 dk', minOrder: '₺150' }
    ],

    nearbyRestaurants: [
      { id: 1, name: 'Tarihi Çınar Kebap', cuisine: 'Kebap, Izgara, Türk Mutfağı', rating: '4.5', time: '25-35 dk', distance: '1.2 km', category: 'Kebap & Izgara' },
      { id: 2, name: 'Lezzet Durağı', cuisine: 'Türk Mutfağı, Ev Yemekleri', rating: '4.3', time: '20-30 dk', distance: '0.8 km', category: 'Ev Yemekleri' },
      { id: 3, name: 'Gebze Pide Salonu', cuisine: 'Pide, Lahmacun, Kebap', rating: '4.4', time: '15-25 dk', distance: '0.5 km', category: 'Pide & Lahmacun' },
      { id: 4, name: 'Sultan Sofrası', cuisine: 'Türk Mutfağı, Kebap', rating: '4.6', time: '30-40 dk', distance: '1.8 km', category: 'Kebap & Izgara' },
      { id: 5, name: 'Anadolu Lezzetleri', cuisine: 'Ev Yemekleri, Türk Mutfağı', rating: '4.2', time: '25-35 dk', distance: '2.1 km', category: 'Ev Yemekleri' },
      { id: 6, name: 'Sahil Balık', cuisine: 'Balık, Deniz Ürünleri', rating: '4.7', time: '35-50 dk', distance: '2.5 km', category: 'Diğer' }
    ],

    get filtered() {
      if (this.activeFilter === 'Tümü') return this.nearbyRestaurants;
      return this.nearbyRestaurants.filter(r => r.category === this.activeFilter);
    },

    toggleFavorite(id) {
      const idx = this.favorites.indexOf(id);
      if (idx >= 0) {
        this.favorites.splice(idx, 1);
      } else {
        this.favorites.push(id);
      }
    }
  }));
});

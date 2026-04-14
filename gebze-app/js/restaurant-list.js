document.addEventListener('alpine:init', () => {
  Alpine.data('restaurantList', () => ({
    activeFilter: 'Tümü',
    sortBy: 'rating',
    searchQuery: '',
    favorites: [],

    filters: ['Tümü', 'Türk Mutfağı', 'Balık', 'İtalyan', 'Fast Food', 'Kafe & Bistro', 'Tatlıcı', 'Meyhane'],

    restaurants: [
      { id: 1, name: 'Tarihi Çınar Et Lokantası', cuisine: 'Türk Mutfağı, Kebap', rating: 4.6, address: 'Gebze Merkez', hours: '11:00–23:00', phone: '0262 641 12 34', priceLevel: 3, category: 'Türk Mutfağı' },
      { id: 2, name: 'Yelken Balık Restaurant', cuisine: 'Balık, Deniz Ürünleri', rating: 4.8, address: 'Darıca Sahil', hours: '12:00–23:30', phone: '0262 641 56 78', priceLevel: 4, category: 'Balık' },
      { id: 3, name: 'Gebze Pizza House', cuisine: 'İtalyan, Pizza, Makarna', rating: 4.2, address: 'Çayırova', hours: '10:00–22:00', phone: '0262 641 90 12', priceLevel: 2, category: 'İtalyan' },
      { id: 4, name: 'Kahve Durağı', cuisine: 'Kafe, Sandviç, Tatlı', rating: 4.5, address: 'Gebze Çarşı', hours: '07:00–22:00', phone: '0262 641 34 56', priceLevel: 1, category: 'Kafe & Bistro' },
      { id: 5, name: 'Çayırova Köftecisi', cuisine: 'Köfte, Fast Food', rating: 4.3, address: 'Çayırova Merkez', hours: '09:00–22:00', phone: '0262 641 78 90', priceLevel: 1, category: 'Fast Food' },
      { id: 6, name: 'Liman Meyhanesi', cuisine: 'Meyhane, Balık, Meze', rating: 4.7, address: 'Gebze Sahil', hours: '14:00–00:00', phone: '0262 641 11 22', priceLevel: 3, category: 'Meyhane' }
    ],

    get filtered() {
      let list = this.restaurants;
      if (this.activeFilter !== 'Tümü') list = list.filter(r => r.category === this.activeFilter);
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        list = list.filter(r => r.name.toLowerCase().includes(q));
      }
      if (this.sortBy === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
      return list;
    },

    toggleSort() {
      this.sortBy = this.sortBy === 'rating' ? 'distance' : 'rating';
    },

    toggleFav(id) {
      const idx = this.favorites.indexOf(id);
      if (idx >= 0) this.favorites.splice(idx, 1);
      else this.favorites.push(id);
    }
  }));
});

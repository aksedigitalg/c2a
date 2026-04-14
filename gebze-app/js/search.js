document.addEventListener('alpine:init', () => {
  Alpine.data('searchScreen', () => ({
    query: '',
    recentSearches: ['Nöbetçi eczane', 'Çayırova park', 'Gebze kebapçı', 'Oto yıkama'],
    popularSearches: ['Gebze Teknik Üniversitesi', 'AVM', 'Çamlıca Camii', 'Darıca Hayvanat Bahçesi', 'Nöbetçi eczane', 'Sahil'],

    allItems: [
      { id: 1, name: 'Tarihi Çınar Kebap', category: 'Restoran', icon: 'utensils-crossed', link: 'restaurant-detail.html' },
      { id: 2, name: 'Gebze Teknik Üniversitesi', category: 'Eğitim', icon: 'graduation-cap', link: 'map.html' },
      { id: 3, name: 'Darıca Hayvanat Bahçesi', category: 'Eğlence', icon: 'tree-pine', link: 'map.html' },
      { id: 4, name: 'Çamlıca Camii', category: 'İbadet', icon: 'moon', link: 'map.html' },
      { id: 5, name: 'Gebze AVM', category: 'Alışveriş', icon: 'shopping-bag', link: 'shopping.html' },
      { id: 6, name: 'Lezzet Durağı', category: 'Restoran', icon: 'utensils-crossed', link: 'restaurant-detail.html' },
      { id: 7, name: 'Çayırova Belediyesi Parkı', category: 'Park', icon: 'tree-pine', link: 'map.html' },
      { id: 8, name: 'Bayraktar Eczanesi', category: 'Eczane', icon: 'pill', link: 'map.html' },
      { id: 9, name: 'Sahil Balık Restaurant', category: 'Restoran', icon: 'utensils-crossed', link: 'restaurant-detail.html' },
      { id: 10, name: 'Gebze Merkez Parkı', category: 'Park', icon: 'tree-pine', link: 'map.html' }
    ],

    get showResults() {
      return this.query.length >= 2;
    },

    get results() {
      if (!this.showResults) return [];
      const q = this.query.toLowerCase();
      return this.allItems.filter(i => i.name.toLowerCase().includes(q));
    },

    removeRecent(index) {
      this.recentSearches.splice(index, 1);
    },

    clearRecents() {
      this.recentSearches = [];
    },

    init() {
      this.$nextTick(() => {
        if (this.$refs.searchInput) {
          this.$refs.searchInput.focus();
        }
      });
    }
  }));
});

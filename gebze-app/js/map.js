document.addEventListener('alpine:init', () => {
  Alpine.data('mapScreen', () => ({
    activeCategory: null,
    selectedPlace: null,

    categories: [
      { id: 1, name: 'Eczane', icon: 'pill' },
      { id: 2, name: 'Benzinlik', icon: 'fuel' },
      { id: 3, name: 'Market', icon: 'shopping-cart' },
      { id: 4, name: 'ATM', icon: 'landmark' },
      { id: 5, name: 'Restoran', icon: 'utensils-crossed' },
      { id: 6, name: 'Otopark', icon: 'parking-circle' }
    ],

    places: [
      { id: 1, name: 'Bayraktar Eczanesi', address: 'Cumhuriyet Mah. Gebze', distance: '250m', icon: 'pill', categoryId: 1, top: 35, left: 40 },
      { id: 2, name: 'Shell Benzin', address: 'Atatürk Cad. Gebze', distance: '600m', icon: 'fuel', categoryId: 2, top: 50, left: 60 },
      { id: 3, name: 'Migros Gebze', address: 'İstasyon Cad. Gebze', distance: '800m', icon: 'shopping-cart', categoryId: 3, top: 25, left: 55 },
      { id: 4, name: 'İş Bankası ATM', address: 'Merkez Gebze', distance: '400m', icon: 'landmark', categoryId: 4, top: 60, left: 35 },
      { id: 5, name: 'Tarihi Çınar Kebap', address: 'Çarşı Mah. Gebze', distance: '350m', icon: 'utensils-crossed', categoryId: 5, top: 45, left: 48 },
      { id: 6, name: 'AVM Otoparkı', address: 'Gebze Center Altı', distance: '900m', icon: 'parking-circle', categoryId: 6, top: 70, left: 65 }
    ],

    get filteredPlaces() {
      if (!this.activeCategory) return this.places;
      return this.places.filter(p => p.categoryId === this.activeCategory);
    }
  }));
});

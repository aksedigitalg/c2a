document.addEventListener('alpine:init', () => {
  Alpine.data('foodOrderDetail', () => ({
    activeMenuTab: 'Popüler',
    cart: [],

    restaurant: {
      name: 'Tarihi Çınar Kebap',
      cuisine: 'Kebap, Izgara, Türk Mutfağı',
      rating: '4.5',
      reviewCount: 234,
      time: '25-35 dk',
      delivery: 'Ücretsiz (₺150+)',
      isOpen: true
    },

    menuTabs: ['Popüler', 'Izgara', 'Kebaplar', 'Pideler', 'Salatalar', 'İçecekler', 'Tatlılar'],

    menuItems: [
      { id: 1, name: 'Adana Kebap', desc: 'El yapımı baharatlı kıyma kebabı, közde pişirilmiş', price: 280, category: 'Popüler' },
      { id: 2, name: 'Urfa Kebap', desc: 'Sade baharatlı kıyma, lezzetli garnitür ile', price: 260, category: 'Popüler' },
      { id: 3, name: 'Karışık Izgara', desc: 'Tavuk, köfte, şiş, Adana kebap tabağı', price: 320, category: 'Popüler' },
      { id: 4, name: 'Kanat Izgara', desc: 'Tavuk kanat, özel marine, közde', price: 200, category: 'Izgara' },
      { id: 5, name: 'Kuzu Şiş', desc: 'Taze kuzu eti, özel baharatlar', price: 340, category: 'Izgara' },
      { id: 6, name: 'Lahmacun', desc: 'İnce açılmış hamur, kıymalı lezzet', price: 80, category: 'Kebaplar' },
      { id: 7, name: 'Kıymalı Pide', desc: 'Pide hamuru üzerinde özel kıyma harcı', price: 150, category: 'Pideler' },
      { id: 8, name: 'Kaşarlı Pide', desc: 'Bol kaşar peyniri ile sıcak pide', price: 130, category: 'Pideler' },
      { id: 9, name: 'Mevsim Salatası', desc: 'Taze sebzeler, zeytinyağı limon sos', price: 80, category: 'Salatalar' },
      { id: 10, name: 'Ayran', desc: 'El yapımı soğuk ayran', price: 40, category: 'İçecekler' },
      { id: 11, name: 'Sütlaç', desc: 'Fırında pişirilmiş geleneksel sütlaç', price: 90, category: 'Tatlılar' }
    ],

    get filteredMenu() {
      return this.menuItems.filter(i => i.category === this.activeMenuTab);
    },

    get cartCount() {
      return this.cart.reduce((sum, i) => sum + i.qty, 0);
    },

    get cartTotal() {
      return this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    },

    addToCart(item) {
      const existing = this.cart.find(c => c.id === item.id);
      if (existing) {
        existing.qty++;
        this.cart = [...this.cart];
      } else {
        this.cart.push({ ...item, qty: 1 });
      }
      this.$store.app.setCartCount(this.cartCount);
    }
  }));
});

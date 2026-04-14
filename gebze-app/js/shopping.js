document.addEventListener('alpine:init', () => {
  Alpine.data('shoppingHome', () => ({
    activeCategory: 'Elektronik',

    mainCategories: [
      { name: 'Elektronik', icon: 'smartphone' },
      { name: 'Giyim', icon: 'shirt' },
      { name: 'Ev & Yaşam', icon: 'sofa' },
      { name: 'Kozmetik', icon: 'sparkles' },
      { name: 'Spor', icon: 'dumbbell' },
      { name: 'Kitap', icon: 'book-open' },
      { name: 'Oyuncak', icon: 'gamepad-2' },
      { name: 'Oto', icon: 'car' }
    ],

    subCategories: {
      'Elektronik': ['Telefon', 'Bilgisayar', 'Tablet', 'Kulaklık', 'Kamera', 'Akıllı Saat', 'TV', 'Aksesuar'],
      'Giyim': ['Kadın', 'Erkek', 'Çocuk', 'Ayakkabı', 'Çanta', 'Saat', 'Takı'],
      'Ev & Yaşam': ['Mobilya', 'Dekorasyon', 'Mutfak', 'Banyo', 'Yatak', 'Aydınlatma', 'Bahçe'],
      'Kozmetik': ['Cilt Bakım', 'Makyaj', 'Saç Bakım', 'Parfüm', 'Erkek', 'Çocuk'],
      'Spor': ['Outdoor', 'Fitness', 'Futbol', 'Bisiklet', 'Yüzme', 'Yoga', 'Koşu'],
      'Kitap': ['Roman', 'Bilim', 'Tarih', 'Kişisel Gelişim', 'Çocuk', 'Ders'],
      'Oyuncak': ['Bebek', '0-3 Yaş', '4-7 Yaş', '8+ Yaş', 'LEGO', 'Ahşap'],
      'Oto': ['Lastik', 'Aksesuar', 'Yedek Parça', 'Bakım', 'Ses Sistemi']
    },

    products: [
      { id: 1, name: 'Samsung Galaxy S24 128GB', discount: '-%20', oldPrice: '₺32.000', newPrice: '₺25.600', store: 'MediaMarkt Gebze' },
      { id: 2, name: 'Apple AirPods Pro 2. Nesil', discount: '-%15', oldPrice: '₺6.500', newPrice: '₺5.525', store: 'iStore Gebze AVM' },
      { id: 3, name: 'Nike Air Max 90 Spor Ayakkabı', discount: '-%30', oldPrice: '₺3.200', newPrice: '₺2.240', store: 'Nike Factory Gebze' },
      { id: 4, name: 'Philips Airfryer XL', discount: '-%25', oldPrice: '₺4.800', newPrice: '₺3.600', store: 'Teknosa Çayırova' },
      { id: 5, name: 'Zara Keten Gömlek', discount: '-%40', oldPrice: '₺1.500', newPrice: '₺900', store: 'Zara Gebze Center' },
      { id: 6, name: 'Logitech MX Master 3 Mouse', discount: '-%18', oldPrice: '₺2.200', newPrice: '₺1.804', store: 'Vatan Gebze' }
    ],

    get currentSubCategories() {
      return this.subCategories[this.activeCategory] || [];
    }
  }));
});

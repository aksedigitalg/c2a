document.addEventListener('alpine:init', () => {
  Alpine.data('categoriesPage', () => ({
    categories: [
      { id: 1, name: 'Gebzem AI', icon: 'bot', link: 'gebzem-ai.html' },
      { id: 2, name: 'Yemek Siparişi', icon: 'utensils-crossed', link: 'food-order.html' },
      { id: 3, name: 'Restoranlar', icon: 'chef-hat', link: 'restaurant-list.html' },
      { id: 4, name: 'İlanlar', icon: 'megaphone', link: 'ads-home.html' },
      { id: 5, name: 'Alışveriş', icon: 'shopping-bag', link: 'shopping.html' },
      { id: 6, name: 'İş İlanları', icon: 'briefcase', link: 'jobs.html' },
      { id: 7, name: 'Hizmetler', icon: 'wrench', link: 'services.html' },
      { id: 8, name: 'Etkinlikler', icon: 'calendar-days', link: 'events.html' },
      { id: 9, name: 'Emlak', icon: 'building', link: 'ads-home.html' },
      { id: 10, name: 'Ulaşım', icon: 'bus', link: 'map.html' },
      { id: 11, name: 'Eğitim', icon: 'graduation-cap', link: 'map.html' },
      { id: 12, name: 'Sağlık', icon: 'heart-pulse', link: 'services.html' }
    ]
  }));
});

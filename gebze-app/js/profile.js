document.addEventListener('alpine:init', () => {
  Alpine.data('profileScreen', () => ({
    menuItems: [
      { id: 1, label: 'Hesap Bilgileri', icon: 'user', link: 'edit-profile.html' },
      { id: 2, label: 'Favorilerim', icon: 'heart', link: 'favorites.html' },
      { id: 3, label: 'İlanlarım', icon: 'megaphone', link: 'ads-home.html' },
      { id: 4, label: 'Siparişlerim', icon: 'package', link: 'food-order.html' },
      { id: 5, label: 'Adreslerim', icon: 'map-pin', link: 'map.html' },
      { id: 6, label: 'Bildirim Ayarları', icon: 'bell', link: 'notifications.html' },
      { id: 7, label: 'Gizlilik & Güvenlik', icon: 'shield', link: '#' },
      { id: 8, label: 'Yardım & Destek', icon: 'help-circle', link: '#' },
      { id: 9, label: 'Hakkında', icon: 'info', link: '#' }
    ]
  }));
});

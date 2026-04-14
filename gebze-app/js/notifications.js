document.addEventListener('alpine:init', () => {
  Alpine.data('notificationsScreen', () => ({
    notifications: [
      { id: 1, title: 'Siparişiniz yola çıktı', desc: 'Tarihi Çınar Kebap siparişiniz kargoya verildi, 30 dakika içinde kapınızda.', time: '15 dk önce', icon: 'truck', isRead: false, group: 'today' },
      { id: 2, title: 'Yeni kampanya: %50 indirim', desc: 'Çayırova AVM\'de sezon sonu indirimleri başladı, kaçırmayın!', time: '2 saat önce', icon: 'tag', isRead: false, group: 'today' },
      { id: 3, title: 'İlanınıza mesaj geldi', desc: 'iPhone 15 Pro ilanınıza Mehmet K. mesaj gönderdi.', time: '5 saat önce', icon: 'message-circle', isRead: true, group: 'today' },
      { id: 4, title: 'Gebze Koşusu yaklaşıyor', desc: '21 Nisan\'da başlayacak Gebze Koşusu için kayıtlar devam ediyor.', time: 'dün', icon: 'calendar', isRead: true, group: 'week' },
      { id: 5, title: 'Favori restoranınızda kampanya', desc: 'Tarihi Çınar Kebap\'ta bu hafta sonu özel menü fiyatları.', time: '3 gün önce', icon: 'utensils-crossed', isRead: true, group: 'week' }
    ],

    get todayItems() {
      return this.notifications.filter(n => n.group === 'today');
    },

    get weekItems() {
      return this.notifications.filter(n => n.group === 'week');
    },

    markAllRead() {
      this.notifications.forEach(n => n.isRead = true);
      this.notifications = [...this.notifications];
      this.$store.app.notificationCount = 0;
    }
  }));
});

document.addEventListener('alpine:init', () => {
  Alpine.data('eventsList', () => ({
    activeFilter: 'Tümü',
    selectedDate: null,
    filters: ['Tümü', 'Konser', 'Sergi', 'Tiyatro', 'Spor', 'Festival', 'Workshop', 'Çocuk'],

    dates: (() => {
      const dayNames = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
      const result = [];
      const today = new Date();
      for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() + i);
        result.push({
          value: d.toISOString().split('T')[0],
          day: d.getDate(),
          dayName: dayNames[d.getDay()],
          isToday: i === 0
        });
      }
      return result;
    })(),

    events: [
      { id: 1, title: 'Gebze Kültür Merkezi Piyano Resitali', location: 'Gebze Kültür Merkezi', time: '20:00', category: 'Konser', month: 'NİS', day: 18, date: '2026-04-18' },
      { id: 2, title: 'Şehir Fotoğrafçıları Sergisi', location: 'Gebze Sanat Galerisi', time: '10:00', category: 'Sergi', month: 'NİS', day: 19, date: '2026-04-19' },
      { id: 3, title: 'Çocuk Tiyatrosu: Orman Masalı', location: 'Belediye Tiyatrosu', time: '14:00', category: 'Çocuk', month: 'NİS', day: 20, date: '2026-04-20' },
      { id: 4, title: 'Gebze Koşusu 10K', location: 'Gebze Merkez Park', time: '08:00', category: 'Spor', month: 'NİS', day: 21, date: '2026-04-21' },
      { id: 5, title: 'Web Geliştirme Workshop', location: 'Gebze Teknopark', time: '18:00', category: 'Workshop', month: 'NİS', day: 22, date: '2026-04-22' },
      { id: 6, title: 'Gebze Bahar Festivali', location: 'Merkez Meydan', time: '11:00', category: 'Festival', month: 'NİS', day: 23, date: '2026-04-23' }
    ],

    get filtered() {
      let list = this.events;
      if (this.selectedDate) {
        list = list.filter(e => e.date === this.selectedDate);
      }
      if (this.activeFilter !== 'Tümü') {
        list = list.filter(e => e.category === this.activeFilter);
      }
      return list;
    },

    init() {
      this.selectedDate = this.dates[0]?.value || null;
    }
  }));
});

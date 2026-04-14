document.addEventListener('alpine:init', () => {
  Alpine.data('jobsList', () => ({
    activeFilter: 'Tümü',
    searchQuery: '',
    savedJobs: [],
    filters: ['Tümü', 'Tam Zamanlı', 'Yarı Zamanlı', 'Stajyer', 'Uzaktan', 'Serbest'],

    jobs: [
      { id: 1, position: 'Frontend Developer', company: 'TechGebze A.Ş.', location: 'Gebze', type: 'Tam Zamanlı', posted: '2 gün önce', salary: '₺35.000 - ₺50.000', category: 'Tam Zamanlı' },
      { id: 2, position: 'Satış Danışmanı', company: 'Gebze Center AVM', location: 'Gebze', type: 'Tam Zamanlı', posted: '1 gün önce', salary: '₺22.000 - ₺28.000', category: 'Tam Zamanlı' },
      { id: 3, position: 'Grafik Tasarımcı', company: 'Dijital Ajans Gebze', location: 'Uzaktan', type: 'Uzaktan', posted: '3 gün önce', salary: '₺25.000 - ₺35.000', category: 'Uzaktan' },
      { id: 4, position: 'Aşçıbaşı', company: 'Lezzet Grubu', location: 'Gebze', type: 'Tam Zamanlı', posted: '5 saat önce', salary: '₺30.000 - ₺40.000', category: 'Tam Zamanlı' },
      { id: 5, position: 'Muhasebe Stajyeri', company: 'Mali Müşavirlik Ofisi', location: 'Gebze', type: 'Stajyer', posted: '1 hafta önce', salary: '₺12.000', category: 'Stajyer' },
      { id: 6, position: 'Garson', company: 'Sahil Restaurant', location: 'Gebze', type: 'Yarı Zamanlı', posted: '2 gün önce', salary: '₺15.000', category: 'Yarı Zamanlı' }
    ],

    get filtered() {
      let list = this.jobs;
      if (this.activeFilter !== 'Tümü') list = list.filter(j => j.category === this.activeFilter);
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        list = list.filter(j => j.position.toLowerCase().includes(q) || j.company.toLowerCase().includes(q));
      }
      return list;
    },

    toggleSave(id) {
      const idx = this.savedJobs.indexOf(id);
      if (idx >= 0) this.savedJobs.splice(idx, 1);
      else this.savedJobs.push(id);
    }
  }));
});

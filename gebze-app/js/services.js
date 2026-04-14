document.addEventListener('alpine:init', () => {
  Alpine.data('servicesHome', () => ({
    categories: [
      { id: 1, name: 'Doktor', icon: 'stethoscope' },
      { id: 2, name: 'Avukat', icon: 'scale' },
      { id: 3, name: 'Elektrikçi', icon: 'zap' },
      { id: 4, name: 'Tesisatçı', icon: 'wrench' },
      { id: 5, name: 'Boyacı', icon: 'paintbrush' },
      { id: 6, name: 'Nakliyat', icon: 'truck' },
      { id: 7, name: 'Temizlik', icon: 'spray-can' },
      { id: 8, name: 'Oto Tamir', icon: 'car' },
      { id: 9, name: 'Kuaför', icon: 'scissors' },
      { id: 10, name: 'Diş Hekimi', icon: 'smile' },
      { id: 11, name: 'Veteriner', icon: 'paw-print' },
      { id: 12, name: 'Tadilat', icon: 'ruler' }
    ],

    featuredProviders: [
      { id: 1, name: 'Ahmet Yıldız', specialty: 'Elektrik Teknisyeni', rating: '4.9', reviews: 156 },
      { id: 2, name: 'Fatma Şahin', specialty: 'Temizlik Uzmanı', rating: '4.8', reviews: 234 },
      { id: 3, name: 'Mehmet Demir', specialty: 'Tesisatçı', rating: '4.7', reviews: 89 },
      { id: 4, name: 'Ayşe Kaya', specialty: 'İç Mimar', rating: '4.9', reviews: 67 },
      { id: 5, name: 'Hasan Öztürk', specialty: 'Boyacı', rating: '4.6', reviews: 112 }
    ]
  }));
});

document.addEventListener('alpine:init', () => {
  Alpine.data('serviceProfile', () => ({
    showAllReviews: false,

    provider: {
      name: 'Ahmet Yıldız',
      title: 'Elektrik Teknisyeni',
      location: 'Gebze, Kocaeli',
      rating: '4.9',
      reviewCount: 156,
      experience: '12 Yıl',
      about: 'Gebze\'de 12 yıldır hizmet veren, lisanslı elektrik teknisyeniyim. Ev ve işyeri elektrik tesisatı, arıza tespiti, aydınlatma sistemleri konularında uzmanlaşmış deneyimli bir ustayım.',
      services: ['Elektrik Tesisatı', 'Arıza Tespiti', 'Aydınlatma', 'Sayaç İşlemleri', 'Tadilat', 'Acil Müdahale'],
      hours: [
        { days: 'Pazartesi – Cuma', time: '08:00 – 18:00' },
        { days: 'Cumartesi', time: '09:00 – 15:00' },
        { days: 'Pazar', time: 'Kapalı' }
      ]
    },

    reviews: [
      { id: 1, name: 'Kemal T.', date: '1 hafta önce', rating: 5, text: 'Çok hızlı ve profesyonel hizmet. Evimin elektrik arızasını kısa sürede çözdü.' },
      { id: 2, name: 'Selin A.', date: '2 hafta önce', rating: 5, text: 'Fiyatlar makul, iş kalitesi çok iyi. Kesinlikle tavsiye ederim.' },
      { id: 3, name: 'Murat B.', date: '1 ay önce', rating: 4, text: 'Biraz geç geldi ama işi çok iyi yaptı. Tekrar tercih ederim.' },
      { id: 4, name: 'Elif K.', date: '1 ay önce', rating: 5, text: 'İşyerimizin komple elektrik tesisatını yaptı, mükemmel bir iş çıkardı.' },
      { id: 5, name: 'Ali C.', date: '2 ay önce', rating: 5, text: 'Akşam saatinde acil çağrıya da geldi, çok memnun kaldık.' }
    ]
  }));
});

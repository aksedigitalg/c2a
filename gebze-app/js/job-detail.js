document.addEventListener('alpine:init', () => {
  Alpine.data('jobDetail', () => ({
    isSaved: false,

    job: {
      position: 'Frontend Developer',
      company: 'TechGebze A.Ş.',
      sector: 'Teknoloji & Yazılım',
      location: 'Gebze, Kocaeli',
      type: 'Tam Zamanlı',
      experience: '2-5 Yıl',
      salary: '₺35.000 - ₺50.000',
      description: 'TechGebze A.Ş. olarak büyüyen ekibimize katılacak deneyimli bir Frontend Developer arıyoruz. React, Vue.js veya Angular konusunda deneyimli, modern web teknolojilerine hakim, takım çalışmasına yatkın adaylar başvurabilir. Esnek çalışma saatleri ve uzaktan çalışma imkânı mevcuttur.',
      qualifications: [
        'React, Vue.js veya Angular\'da 2+ yıl deneyim',
        'HTML5, CSS3, JavaScript (ES6+) konularında ileri düzey bilgi',
        'RESTful API entegrasyonu deneyimi',
        'Git/GitHub versiyon kontrol bilgisi',
        'UI/UX prensiplerini anlama ve uygulama becerisi',
        'Agile/Scrum metodolojisine aşinalık'
      ],
      benefits: ['Yemek Kartı', 'Servis', 'Özel Sağlık Sigortası', 'Prim', 'Uzaktan Çalışma', 'Eğitim Desteği']
    }
  }));
});

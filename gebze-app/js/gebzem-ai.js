document.addEventListener('alpine:init', () => {
  Alpine.data('gebzemAI', () => ({
    messages: [],
    inputText: '',
    isTyping: false,

    suggestions: [
      'Gebze\'de ne yenir?',
      'Yakınımda eczane var mı?',
      'Bu hafta etkinlik var mı?',
      'Gebze\'nin tarihi',
      'Hava durumu nasıl?'
    ],

    aiResponses: {
      default: 'Gebze hakkında daha fazla bilgi almak için daha spesifik bir soru sorabilirsin.',
      "gebze'de ne yenir?": 'Gebze\'de mutlaka denemeniz gereken lezzetler: Gebze pidesi, İskender kebap, taze balık... Çarşı bölgesinde birçok seçenek bulabilirsiniz. Size yakın restoranları görmek ister misiniz?',
      "yakınımda eczane var mı?": 'Şu anda konumunuza en yakın nöbetçi eczaneler:\n1. Bayraktar Eczanesi (250m) — 0262 641 XX XX\n2. Şifa Eczanesi (400m) — 0262 641 YY YY\n3. Merkez Eczanesi (650m)',
      "bu hafta etkinlik var mı?": 'Bu hafta Gebze\'de:\n📍 Piyano Resitali — 18 Nisan, 20:00\n📍 Fotoğraf Sergisi — 19 Nisan, 10:00\n📍 Gebze Koşusu 10K — 21 Nisan, 08:00\nDetaylar için Etkinlikler sayfasına bakabilirsiniz.',
      "gebze'nin tarihi": 'Gebze, tarih boyunca önemli bir yerleşim merkezi olmuştur. Hannibal\'ın mezarı ve Osmanlı dönemi eserleriyle zengin bir tarihe sahiptir. Müzeler ve tarihi mekanlar için Harita ekranını kullanabilirsiniz.',
      'hava durumu nasıl?': 'Bugün Gebze\'de hava parçalı bulutlu, 18°C. Öğleden sonra hafif yağmur bekleniyor. Yarın ise güneşli ve 22°C olması tahmin ediliyor.'
    },

    sendMessage() {
      const text = this.inputText.trim();
      if (!text) return;
      this.messages.push({ type: 'user', text });
      this.inputText = '';
      this.simulateReply(text);
      this.scrollToBottom();
    },

    simulateReply(userText) {
      this.isTyping = true;
      setTimeout(() => {
        this.isTyping = false;
        const key = userText.toLowerCase();
        const reply = this.aiResponses[key] || this.aiResponses['default'];
        this.messages.push({ type: 'ai', text: reply });
        this.scrollToBottom();
      }, 1200);
    },

    useSuggestion(text) {
      this.inputText = text;
      this.sendMessage();
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const area = this.$refs.chatArea;
        if (area) area.scrollTop = area.scrollHeight;
      });
    },

    init() {
      // Başlangıç mesajları yok, öneriler gösterilir
    }
  }));
});

document.addEventListener('alpine:init', () => {
  Alpine.data('otpScreen', () => ({
    digits: ['', '', '', '', '', ''],
    timer: 45,
    canResend: false,
    _timerInterval: null,

    get code() {
      return this.digits.join('');
    },

    get isComplete() {
      return this.digits.every(d => d !== '');
    },

    startTimer() {
      this.timer = 45;
      this.canResend = false;
      clearInterval(this._timerInterval);
      this._timerInterval = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          clearInterval(this._timerInterval);
          this.canResend = true;
        }
      }, 1000);
    },

    resend() {
      this.digits = ['', '', '', '', '', ''];
      this.startTimer();
      const first = document.getElementById('otp-0');
      if (first) first.focus();
    },

    handleInput(index, event) {
      const val = event.target.value.replace(/\D/g, '').slice(-1);
      this.digits[index] = val;
      this.digits = [...this.digits];
      event.target.value = val;
      if (val && index < 5) {
        const next = document.getElementById('otp-' + (index + 1));
        if (next) next.focus();
      }
    },

    handleBackspace(index, event) {
      if (!this.digits[index] && index > 0) {
        this.digits[index - 1] = '';
        this.digits = [...this.digits];
        const prev = document.getElementById('otp-' + (index - 1));
        if (prev) prev.focus();
      } else {
        this.digits[index] = '';
        this.digits = [...this.digits];
      }
    },

    handlePaste(event) {
      event.preventDefault();
      const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
      for (let i = 0; i < 6; i++) {
        this.digits[i] = pasted[i] || '';
      }
      this.digits = [...this.digits];
    },

    handleVerify() {
      if (!this.isComplete) return;
      window.location.href = 'home.html';
    },

    init() {
      this.startTimer();
      setTimeout(() => {
        const first = document.getElementById('otp-0');
        if (first) first.focus();
      }, 100);
    }
  }));
});

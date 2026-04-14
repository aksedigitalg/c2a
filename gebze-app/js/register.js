document.addEventListener('alpine:init', () => {
  Alpine.data('registerForm', () => ({
    name: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirm: '',
    showPassword: false,
    showPasswordConfirm: false,
    termsAccepted: false,

    get isValid() {
      return this.name.trim() !== ''
        && this.email.trim() !== ''
        && this.phone.trim() !== ''
        && this.password.length >= 8
        && this.password === this.passwordConfirm
        && this.termsAccepted;
    },

    handleRegister() {
      if (!this.isValid) return;
      window.location.href = 'otp.html';
    }
  }));
});

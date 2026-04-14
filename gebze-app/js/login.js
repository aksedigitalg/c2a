document.addEventListener('alpine:init', () => {
  Alpine.data('loginForm', () => ({
    email: '',
    password: '',
    showPassword: false,
    isLoading: false,

    handleLogin() {
      if (!this.email || !this.password) return;
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        window.location.href = 'home.html';
      }, 1200);
    }
  }));
});

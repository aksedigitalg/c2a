document.addEventListener('alpine:init', () => {
  Alpine.data('editProfile', () => ({
    name: 'Ahmet',
    surname: 'Yılmaz',
    email: 'ahmet@email.com',
    phone: '+90 532 XXX XX XX',
    birthDate: '1990-05-15',

    saveProfile() {
      this.$store.app.user.name = this.name + ' ' + this.surname;
      this.$store.app.user.email = this.email;
      window.history.back();
    }
  }));
});

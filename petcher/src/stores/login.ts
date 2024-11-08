import { defineStore } from 'pinia';

export const useUserlogStore = defineStore('user', {
  state: () => ({
    login: localStorage.getItem('login') || '',
    password: localStorage.getItem('password') || '',
    isAuthenticated: false,
    profileImage: localStorage.getItem('profileImage') || null,
    // другие данные профиля
  }),
  actions: {
    setLogin(login: string) {
      this.login = login;
      localStorage.setItem('login', login);
    },
    setPassword(password: string) {
      this.password = password;
      localStorage.setItem('password', password);
    },
    authenticate() {
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
      this.login = '';
      this.password = '';
      localStorage.removeItem('login');
      localStorage.removeItem('password');
    },
  },
});
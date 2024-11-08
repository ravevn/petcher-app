// stores/registration.ts
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    login: '', // Логин всегда строка
    password: '', // Пароль всегда строка
    isAuthenticated: false, // Флаг аутентификации
    profileImage: null as string | null, // Изображение профиля может быть строкой или null
    name: '', // Имя всегда строка
    specialty: '', // Специальность всегда строка
    aboutMe: '' // О себе всегда строка
  }),
  actions: {
    setLogin(login: string) {
      this.login = login;
    },
    setPassword(password: string) {
      this.password = password;
    },
    setAuthenticated(isAuthenticated: boolean) {
      this.isAuthenticated = isAuthenticated;
    },
    setProfileImage(profileImage: string | null) {
      this.profileImage = profileImage;
    },
    setName(name: string) {
      this.name = name;
    },
    setSpecialty(specialty: string) {
      this.specialty = specialty;
    },
    setAboutMe(aboutMe: string) {
      this.aboutMe = aboutMe;
    },
    logout() {
      this.isAuthenticated = false;
      this.login = '';
      this.password = '';
      this.name = '';
      this.specialty = '';
      this.aboutMe = '';
      this.profileImage = null;
    }
  }
});
<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-blue-500 mb-6">Вход в систему</h2>
        
        <form @submit.prevent="loginUser">
          <!-- Поле логина -->
          <div class="mb-4">
            <label for="login" class="block text-sm text-gray-600">Логин</label>
            <input 
              v-model="login"
              id="login"
              type="text"
              class="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Введите логин"
              required
            />
          </div>
  
          <!-- Поле пароля -->
          <div class="mb-4">
            <label for="password" class="block text-sm text-gray-600">Пароль</label>
            <input 
              v-model="password"
              id="password"
              type="password"
              class="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Введите пароль"
              required
            />
          </div>
  
          <div class="flex justify-between">
            <button 
              type="submit"
              class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useUserStore } from '@/stores/registration';  // Импортируем Pinia store
  import { useRouter } from 'vue-router';
  
  const store = useUserStore();
  const router = useRouter();
  
  // Состояния для логина и пароля
  const login = ref('');
  const password = ref('');
  
  // Логика авторизации
  const loginUser = () => {
    if (login.value && password.value) {
      // Здесь вы можете добавить свою логику для аутентификации
      // Если логин и пароль правильные, устанавливаем состояние аутентификации
      store.setLogin(login.value);  // Сохраняем логин в store
      store.setPassword(password.value);  // Сохраняем пароль в store (если нужно)
  
      // Сохраняем флаг аутентификации
      store.setAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');  // Сохраняем флаг в localStorage
  
      // Перенаправляем на страницу профиля
      router.push('/profile');
    } else {
      alert('Введите правильный логин и пароль');
    }
  };
  </script>
  
  <style scoped>
  /* Стили для страницы логина */
  input {
    font-size: 1rem;
  }
  </style>
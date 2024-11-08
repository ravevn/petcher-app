<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-background">
      <div class="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-center text-primary mb-6">Шаг 1: Введите имя и логин</h2>
        <form @submit.prevent="nextStep" class="space-y-4">
          <input
            v-model="name"
            type="text"
            placeholder="Введите свое имя"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <input
            v-model="login"
            type="text"
            placeholder="Введите свой логин"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            :disabled="!name || !login"
            class="w-full px-4 py-2 bg-blue text-blue rounded-md disabled:bg-gray-300 enabled:bg-blue-400"
          >
            Далее
          </button>
        </form>
  
        <!-- Кнопка для перехода на страницу входа -->
        <div class="mt-4 text-center">
          <button
            @click="goToLogin"
            class="text-primary hover:underline"
          >
            Уже есть аккаунт? Войти
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const name = ref('');
  const login = ref('');
  
  // Метод для сохранения данных в localStorage
  const saveDataToLocalStorage = () => {
    localStorage.setItem('name', name.value);
    localStorage.setItem('login', login.value);
  };
  
  // Переход на следующий шаг
  const nextStep = () => {
    saveDataToLocalStorage(); // Сохраняем данные в localStorage
    router.push('/registration2'); // Переход на второй шаг регистрации
  };
  
  // Метод для перехода на страницу входа
  const goToLogin = () => {
    router.push('/login'); // Переход на страницу входа
  };
  </script>
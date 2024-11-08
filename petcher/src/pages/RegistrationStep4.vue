<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-blue-500 mb-6">Выберите свою специальность</h2>
  
        <!-- Выпадающий список специальностей -->
        <select v-model="specialty" class="mb-4 p-2 w-full border rounded">
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <!-- Добавьте другие специальности при необходимости -->
        </select>
  
        <div class="flex justify-between">
          <button @click="$router.push('/registration3')" class="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500">
            Назад
          </button>
          <button @click="nextStep" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Завершить
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useUserStore } from '@/stores/registration';  // Подключение Pinia
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const store = useUserStore();
  
  const specialty = ref('');  // Состояние для выбранной специальности
  
  // Завершение регистрации и переход к профилю
  const nextStep = () => {
    // Сохраняем выбранную специальность в store
    store.setSpecialty(specialty.value);
  
    // Устанавливаем флаг аутентификации, предполагая, что пользователь завершил регистрацию
    store.setAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');  // Сохраняем флаг аутентификации в localStorage
  
    // Переход к профилю
    router.push('/profile');
  };
  </script>
  
  <style scoped>
  /* Стили для страницы */
  </style>
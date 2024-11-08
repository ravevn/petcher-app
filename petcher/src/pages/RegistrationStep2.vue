<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-blue-500 mb-6">Регистрация - Шаг 2</h2>
  
        <label class="block mb-2">Введите email</label>
        <input 
          type="email" 
          v-model="email"
          placeholder="Email" 
          class="mb-4 p-2 w-full border rounded" 
          required
        />
  
        <label class="block mb-2">Введите пароль</label>
        <div class="relative">
          <input 
            v-model="password" 
            :type="passwordVisible ? 'text' : 'password'" 
            placeholder="Пароль" 
            class="mb-4 p-2 w-full border rounded"
            required
          />
          <button @click="togglePasswordVisibility" class="absolute right-2 top-2">
            <span v-if="passwordVisible">👁</span>
            <span v-else>🙈</span>
          </button>
        </div>
  
        <label class="block mb-2">Повторите пароль</label>
        <input 
          v-model="confirmPassword" 
          :type="passwordVisible ? 'text' : 'password'" 
          placeholder="Повторите пароль" 
          class="mb-4 p-2 w-full border rounded"
          required
        />
  
        <div class="flex justify-between">
          <button 
            @click="$router.push('/registration')" 
            class="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
          >
            Назад
          </button>
          <button 
            @click="nextStep" 
            :disabled="!isFormValid" 
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  // Состояние для поля пароля и его видимости
  const passwordVisible = ref(false);
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  
  const router = useRouter();
  
  // Функция для переключения видимости пароля
  const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value;
  };
  
  // Проверка на валидность формы
  const isFormValid = computed(() => {
    return email.value !== '' && password.value !== '' && confirmPassword.value !== '' && password.value === confirmPassword.value;
  });
  
  // Сохранение данных в localStorage
  const saveDataToLocalStorage = () => {
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value); // Вы можете захешировать пароль перед сохранением, если нужно
  };
  
  // Функция для перехода на следующий шаг
  const nextStep = () => {
    if (isFormValid.value) {
      saveDataToLocalStorage(); // Сохраняем данные в localStorage
      router.push('/registration3'); // Переход на следующий шаг
    } else {
      alert('Пожалуйста, заполните все поля и убедитесь, что пароли совпадают.');
    }
  };
  </script>
  
  <style scoped>
  /* Можно добавить дополнительные стили, если нужно */
  </style>
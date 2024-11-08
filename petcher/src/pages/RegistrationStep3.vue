<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold text-blue-500 mb-6">Шаг 3: Добавьте фотографию</h2>
        
        <div class="flex flex-col items-center mb-4">
          <img 
            :src="profileImage || defaultImage" 
            alt="Фото профиля" 
            class="w-32 h-32 rounded-full border mb-4"
          />
          <input 
            type="file" 
            @change="handleImageUpload" 
            accept="image/*"
            class="mb-4"
          />
          <button 
            @click="nextStep" 
            :disabled="!profileImage" 
            class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useUserStore } from '@/stores/registration';
  import { useRouter } from 'vue-router';
  
  const store = useUserStore();
  const router = useRouter();
  
  // Путь к изображению по умолчанию
  const defaultImage = '/default-profile-image.jpg';
  
  // Проверка, есть ли изображение в localStorage
  const savedProfileImage = localStorage.getItem('profileImage');
  const profileImage = ref<string | null>(savedProfileImage || null);
  
  // Функция для обработки загрузки изображения
  const handleImageUpload = (event: Event) => {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        profileImage.value = reader.result as string;
        // Сохраняем изображение в localStorage
        localStorage.setItem('profileImage', profileImage.value);
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  };
  
  // Функция для перехода на следующий шаг
  const nextStep = () => {
    if (profileImage.value) {
      // Сохраняем изображение в store и localStorage
      localStorage.setItem('profileImage', profileImage.value);
      router.push('/registration4');
    }
  };
  </script>
  
  <style scoped>
  /* Дополнительные стили */
  </style>
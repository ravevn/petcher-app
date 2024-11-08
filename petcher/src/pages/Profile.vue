<template>
  <div v-if="isAuthenticated" class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-blue-500 mb-6">Ваш Профиль</h2>
  
      <!-- Фото профиля -->
      <div class="mb-4">
        <img 
          :src="profileImage || defaultImage" 
          alt="Фото профиля"
          class="w-32 h-32 rounded-full border mb-4"
        />
        <!-- Кнопка для смены фото -->
        <input 
          type="file" 
          @change="changeProfileImage" 
          class="mt-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-100 hover:file:bg-blue-200"
        />
      </div>
  
      <!-- Логин (не редактируем) -->
      <p class="text-sm text-gray-500 mb-2">{{ login }}</p>
    
      <!-- Имя (редактируем) -->
      <div class="mb-4">
        <label for="name" class="block text-sm text-gray-500">Имя</label>
        <input 
          id="name"
          v-model="name" 
          @blur="updateName" 
          class="mt-1 p-2 w-full border rounded"
        />
      </div>
  
      <!-- Специальность (редактируем) -->
      <div class="mb-4">
        <label for="specialty" class="block text-sm text-gray-500">Специальность</label>
        <select 
          id="specialty"
          v-model="specialty" 
          @change="updateSpecialty"
          class="mt-1 p-2 w-full border rounded"
        >
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <!-- Добавьте другие специальности при необходимости -->
        </select>
      </div>
  
      <!-- Описание (редактируем) -->
      <div class="mb-4">
        <label for="aboutMe" class="block text-sm text-gray-500">О себе</label>
        <textarea
          id="aboutMe"
          v-model="aboutMe"
          @blur="updateAboutMe"
          rows="5"
          class="mt-1 p-2 w-full border rounded"
        ></textarea>
      </div>
  
      <!-- Кнопка перехода на главную страницу -->
      <button 
        @click="goToHomePage"
        class="bg-blue-500 text-white py-2 px-4 w-full rounded hover:bg-blue-600 mt-2 mb-2"
      >
        На главную
      </button>

      <!-- Кнопка выхода -->
      <button 
        @click="logout"
        class="bg-red-500 text-white py-1.5 px-3 w-full rounded hover:bg-red-600"
      >
        Выйти
      </button>
    </div>
  </div>
  
  <div v-else class="flex justify-center items-center min-h-screen bg-gray-100">
    <p class="text-lg">Пожалуйста, войдите в систему, чтобы увидеть профиль.</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/registration';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const store = useUserStore();
const router = useRouter();

// Состояние авторизации
const isAuthenticated = computed(() => store.isAuthenticated || localStorage.getItem('isAuthenticated') === 'true');

// Данные профиля
const profileImage = computed(() => store.profileImage);
const login = computed(() => store.login);
const name = ref(store.name);
const specialty = ref(store.specialty);
const aboutMe = ref(store.aboutMe);

const defaultImage = '/default-profile-image.jpg';

// Загружаем данные из localStorage при монтировании компонента
onMounted(() => {
  const savedProfileImage = localStorage.getItem('profileImage');
  if (savedProfileImage) {
    store.setProfileImage(savedProfileImage);
  }
  const savedName = localStorage.getItem('name');
  if (savedName) {
    store.setName(savedName);
  }
  const savedSpecialty = localStorage.getItem('specialty');
  if (savedSpecialty) {
    store.setSpecialty(savedSpecialty);
  }
  const savedAboutMe = localStorage.getItem('aboutMe');
  if (savedAboutMe) {
    store.setAboutMe(savedAboutMe);
  }
});

// Обновление данных в Pinia и localStorage
const updateName = () => {
  store.setName(name.value);
  localStorage.setItem('name', name.value);
};

const updateSpecialty = () => {
  store.setSpecialty(specialty.value);
  localStorage.setItem('specialty', specialty.value);
};

const updateAboutMe = () => {
  store.setAboutMe(aboutMe.value);
  localStorage.setItem('aboutMe', aboutMe.value);
};

// Функция для изменения фото профиля
const changeProfileImage = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result as string;
      store.setProfileImage(imageUrl); // Сохраняем изображение в Pinia
      localStorage.setItem('profileImage', imageUrl); // Сохраняем изображение в localStorage
    };
    reader.readAsDataURL(file);
  }
};

// Логика выхода
const logout = () => {
  store.logout(); // Очищаем данные в Pinia и localStorage
  localStorage.clear(); // Очищаем localStorage
  router.push('/login'); // Перенаправляем на страницу логина
};

// Логика перехода на главную страницу
const goToHomePage = () => {
  router.push('/'); // Переход на главную страницу
};
</script>

<style scoped>
/* Стили для страницы профиля */
img {
  max-width: 100%;
  height: auto;
}

textarea {
  resize: vertical;
}
</style>

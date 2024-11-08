<template>
  <header class="w-full h-[96px] bg-white shadow-header flex items-center justify-between px-8 relative">
    <!-- Иконка меню для мобильных устройств -->
    <div v-if="isMobile" class="lg:hidden flex items-center cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2" @click="toggleMenu">
      <div class="w-[20px] h-[20px] flex flex-col justify-between items-center">
        <div class="h-[4px] w-full bg-[#067CFF]"></div>
        <div class="h-[4px] w-full bg-[#067CFF]"></div>
        <div class="h-[4px] w-full bg-[#067CFF]"></div>
      </div>
    </div>

    <!-- Логотип или текст "Petcher" -->
    <div class="flex items-center justify-between w-full">
      <router-link to="/">
        <img
          v-if="!isMobile"
          src="@/assets/images/logo (1).png"
          alt="Logo"
          class="w-[91px] h-[27px] object-contain"
        />
        <span v-else class="text-[#067CFF] font-Unbounded text-[16px] font-[400] leading-[19.84px] ml-[24px]">Petcher</span>
      </router-link>
    </div>

    <!-- Кнопки по центру (скрытые на мобильных) -->
    <nav class="hidden lg:flex gap-[64px] absolute left-[50%] transform -translate-x-[50%]">
      <router-link to="/"><button class="w-[86px] h-[20px] text-black font-Unbounded text-[16px] font-[400] leading-[19.84px] text-left">Главная</button></router-link>
      <router-link to="/projectlist"><button class="w-[86px] h-[20px] text-black font-Unbounded text-[16px] font-[400] leading-[19.84px] text-left">Проекты</button></router-link>
      <router-link to="/about">
        <button class="w-[86px] h-[20px] text-black font-Unbounded text-[16px] font-[400] leading-[19.84px] text-left">О нас</button>
      </router-link>
    </nav>

    <!-- Выпадающее меню для мобильных -->
    <div v-if="isMobile && isMenuOpen" class="absolute top-[96px] left-0 w-full bg-white shadow-lg z-10">
      <!-- Ссылка на Главную страницу -->
      <router-link to="/" @click="toggleMenu">
        <button class="w-full text-black font-Unbounded text-[16px] font-[400] leading-[19.84px] text-left py-2 px-4 border-b">
          Главная
        </button>
      </router-link>
      <router-link to="/projectlist" @click="toggleMenu">
        <button class="w-full text-black font-Unbounded text-[16px] font-[400] leading-[19.84px] text-left py-2 px-4 border-b">
          Проекты
        </button>
      </router-link>
      <router-link to="/about" @click="toggleMenu">
        <button class="w-full text-black font-Unbounded text-[16px] font-[400] leading-[19.84px] text-left py-2 px-4">
          О нас
        </button>
      </router-link>
    </div>

    <!-- Кнопка "Зарегистрироваться" или "Войти" для мобильных -->
    <router-link v-if="!isAuthenticated" to="/registration">
      <button
        v-if="!isMobile"
        class="border-2 border-[#067CFF] text-[#067CFF] bg-white py-2 px-4 rounded-[16px] text-[12px] font-[400] leading-[14.88px] absolute right-[16px] top-[34px] w-[208px] h-[31px]"
      >
        Зарегистрироваться
      </button>
    </router-link>
    
    <!-- Иконка профиля, если пользователь вошел -->
    <div v-if="isAuthenticated" class="absolute right-[16px] top-[34px]">
      <router-link to="/profile">
        <img
          v-if="profileImage"
          :src="profileImage"
          alt="Profile"
          class="w-8 h-8 rounded-full border"
        />
        <span v-else class="w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center text-white">П</span>
      </router-link>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, onBeforeUnmount } from 'vue';
import { useUserStore } from '@/stores/registration';
import { useRouter } from 'vue-router';

const store = useUserStore();
const router = useRouter();

// Состояние для отслеживания мобильного экрана
const isMobile = ref(false);
const isMenuOpen = ref(false); // Состояние для отображения меню

// Проверяем, авторизован ли пользователь
const isAuthenticated = computed(() => store.isAuthenticated || localStorage.getItem('isAuthenticated') === 'true');

// Профиль пользователя
const profileImage = computed(() => store.profileImage);

// Отслеживаем изменения размера экрана
onMounted(() => {
  isMobile.value = window.innerWidth <= 1024;
});

window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 1024;
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 1024;
  });
});

// Функция для переключения состояния меню
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.shadow-header {
  box-shadow: 0px 0px 4px 0px rgba(0, 104, 255, 0.25);
}
</style>

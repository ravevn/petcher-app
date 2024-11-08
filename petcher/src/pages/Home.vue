<template>
  <div class="bg-white text-gray-900 font-sans">
    <!-- Header Section -->
    <section class="flex flex-col items-center justify-center py-10 md:flex-row md:items-start md:justify-center md:space-x-8">
      <!-- Контейнер для изображения -->
      <div class="w-full md:w-72 h-96 bg-blue-100 rounded-xl flex items-center justify-center">
        <img 
          :src="imageSrc" 
          alt="Phone Mockup" 
          class="w-full h-auto object-cover"  
        />
      </div>
      
      <!-- Текстовая часть -->
      <div class="text-center md:text-left mt-4 md:mt-0 md:w-auto">
        <!-- Заголовок Petcher -->
        <h1 class="text-blue-500 mb-2 text-left md:text-left font-unbounded font-medium text-[32px] leading-[39.68px] font-[500]">
          Petcher
        </h1>
        
        <!-- Подзаголовок под заголовком -->
        <p class="text-[16px] font-wix font-semibold leading-[20.16px] text-blue-500 mb-4 text-left">
          (pet-проект + кетчер)
        </p>

        <!-- Описание с новыми стилями -->
        <p class="text-gray-600 font-unbounded text-[16px] font-normal leading-[20.16px] text-left max-w-sm mb-4">
          Petcher — это платформа, которая позволяет находить релевантность, подходящую пользователю.
        </p>

        <!-- Кнопка Зарегистрироваться -->
        <button class="text-blue-500 font-unbounded text-[12px] leading-[14.88px] hover:underline">
          Зарегистрироваться
        </button>
      </div>
    </section>

    <!-- Блок "Кому это нужно?" с компонентом People -->
    <section class="text-center py-10">
      <h2 class="text-3xl font-bold mb-6 text-blue-500">Кому это нужно?</h2>
      <People /> <!-- Использование компонента People -->
    </section>

    <!-- Блок "Наши преимущества" -->
    <section class="text-center py-10 bg-white">
      <h2 class="text-3xl font-bold mb-6 text-blue-500">Наши преимущества</h2>
      <Advantages />
    </section>

    <!-- Блок "Как начать?" с картинкой и свайп-меню -->
    <section class="text-center py-10">
      <h2 class="text-3xl font-bold mb-6 text-blue-500">Как начать?</h2>
      <!-- Вставляем компонент Slider, чтобы он был видим на странице -->
      <Slider :slides="slides" :currentSlide="currentSlide" @changeSlide="updateSlide" />
    </section>

  </div>

  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';
import image5 from '@/assets/images/image 5.png'; // Изображение для больших экранов
import mockupLight from '@/assets/images/mockup + light.png'; // Изображение для мобильных экранов
import People from '@/entities/People.vue'; // Импорт компонента People
import Advantages from '@/entities/Advantages.vue'; // Импорт компонента Advantages
import Slider from '@/entities/Slider.vue'; // Импорт компонента Slider
import image8 from '@/assets/images/image8.png';
import image8_1 from '@/assets/images/image8_1.png';
import image8_2 from '@/assets/images/image8_2.png';

export default {
  name: 'Home',
  components: {
    People,
    Advantages,
    Slider,
    Footer, // Регистрируем Footer
  },
  data() {
    return {
      imageSrc: image5, // По умолчанию для больших экранов
      currentSlide: 0, // Индекс текущего слайда
      slides: [image8, image8_1, image8_2], // Массив с импортированными изображениями
    };
  },
  mounted() {
    this.updateImage(); // Обновление изображения при монтировании
    window.addEventListener('resize', this.updateImage); // Добавление слушателя на изменение размера экрана
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateImage); // Убираем слушатель при уничтожении компонента
  },
  methods: {
    updateImage() {
      // Проверяем размер экрана и меняем изображение в зависимости от этого
      if (window.innerWidth < 768) {
        this.imageSrc = mockupLight; // Для экранов менее 768px
      } else {
        this.imageSrc = image5; // Для экранов 768px и больше
      }
    },
    updateSlide(newIndex) {
      // Обновляем индекс слайда
      this.currentSlide = newIndex;
    },
  },
};
</script>

<style scoped>
/* Стили для картинки на мобильных экранах */
@media (max-width: 767px) {
  img {
    object-fit: cover; /* Обрезаем изображение */
    width: 100%; /* Растягиваем на всю ширину */
    height: 100%; /* Высота подгоняется */
  }
}

/* Стили для картинок на экранах 768px и больше */
@media (min-width: 768px) {
  .image8-style {
    max-width: 1242px; /* Ограничиваем максимальную ширину */
    height: auto; /* Высота пропорциональна */
    margin: 0 auto; /* Центрируем изображение */
    opacity: 1; /* Убираем прозрачность */
  }
}

/* Стили для слайдера */
.slider {
  position: relative;
}

.dot {
  transition: background-color 0.3s;
}

.dot:hover {
  background-color: #4b6bff;
}

/* Стили для кнопок переключения слайдов */
button {
  background: transparent;
  border: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.7;
}

div.flex {
  display: flex;
  gap: 10px;
}
</style>

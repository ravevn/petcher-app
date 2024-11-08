<template>
    <div class="advantages-section flex flex-col items-center py-10 px-4">
      <!-- Изображение, которое меняется в зависимости от ширины экрана -->
      <img :src="currentImage" alt="Преимущества" class="w-full max-w-lg mb-6" />
    </div>
  </template>
  
  <script>
  import advantagesImage from '@/assets/images/преимущества.png';
  import advantagesImageSmall from '@/assets/images/преимущества1.png';
  
  export default {
    name: 'Advantages',
    data() {
      return {
        windowWidth: window.innerWidth, // Следим за шириной окна
      };
    },
    computed: {
      currentImage() {
        // Выбираем изображение в зависимости от ширины экрана
        return this.windowWidth < 768 ? advantagesImageSmall : advantagesImage;
      },
    },
    mounted() {
      // Добавляем обработчик изменения размера экрана
      window.addEventListener('resize', this.updateWindowWidth);
    },
    beforeDestroy() {
      // Удаляем обработчик при уничтожении компонента
      window.removeEventListener('resize', this.updateWindowWidth);
    },
    methods: {
      updateWindowWidth() {
        this.windowWidth = window.innerWidth;
      },
    },
  };
  </script>
  
  <style scoped>
  .advantages-section {
    background-color: #f5f9ff; /* Фон секции */
  }
  </style>
  
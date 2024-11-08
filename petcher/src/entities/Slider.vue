<template>
  <div
    class="relative w-full max-w-2xl mx-auto"
    @touchstart="handleTouchStart"
    @touchmove.prevent="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <!-- Слайды -->
    <div class="flex overflow-hidden">
      <img :src="slides[currentSlide]" class="w-full object-cover rounded-xl" alt="Slide" />
    </div>

    <!-- Точки навигации -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        :class="[
          'w-3 h-3 rounded-full',
          index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
        ]"
        @click="goToSlide(index)"
      />
    </div>

    <!-- Кнопки переключения слайдов -->
    <button
      class="absolute bottom-4 left-0 transform -translate-y-1/2 p-3 text-white bg-gray-600 bg-opacity-50 rounded-full"
      @click="previousSlide"
    >
      <!-- Стрелка влево -->
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      class="absolute bottom-4 right-0 transform -translate-y-1/2 p-3 text-white bg-gray-600 bg-opacity-50 rounded-full"
      @click="nextSlide"
    >
      <!-- Стрелка вправо -->
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true
    },
    currentSlide: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      touchStartX: 0, // Начальная позиция при касании
      touchEndX: 0, // Конечная позиция при касании
    };
  },
  methods: {
    // Переключение на следующий слайд
    nextSlide() {
      const nextIndex = (this.currentSlide + 1) % this.slides.length;
      this.$emit('changeSlide', nextIndex); // Изменение текущего слайда
    },
    // Переключение на предыдущий слайд
    previousSlide() {
      const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.$emit('changeSlide', prevIndex); // Изменение текущего слайда
    },
    // Переключение на выбранный слайд
    goToSlide(index) {
      this.$emit('changeSlide', index); // Изменение текущего слайда
    },

    // Обработчик события касания: начало
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX; // Сохраняем начальную позицию по оси X
    },

    // Обработчик события касания: движение
    handleTouchMove(event) {
      this.touchEndX = event.touches[0].clientX; // Обновляем конечную позицию по оси X
    },

    // Обработчик события касания: завершение
    handleTouchEnd() {
      const swipeThreshold = 50; // Порог для сдвига в пикселях

      // Если сдвиг был вправо (перемещение вправо), переключаем на следующий слайд
      if (this.touchStartX - this.touchEndX > swipeThreshold) {
        this.nextSlide(); // Следующий слайд
      }

      // Если сдвиг был влево (перемещение влево), переключаем на предыдущий слайд
      if (this.touchEndX - this.touchStartX > swipeThreshold) {
        this.previousSlide(); // Предыдущий слайд
      }
    }
  }
};
</script>

<style scoped>
/* Стрелки */
button svg {
  width: 1.5rem; /* Устанавливаем размер стрелок */
  height: 1.5rem;
  stroke: #fff; /* Цвет стрелок */
  stroke-width: 2;
}
</style>

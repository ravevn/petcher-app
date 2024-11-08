<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <!-- Заголовок -->
      <h1 class="text-blue-500 text-3xl sm:text-4xl md:text-5xl font-medium mb-6 sm:mb-8 md:mb-10">
        О нас
      </h1>
    
      <!-- Логотип -->
      <img 
        src="@/assets/images/Ресурс 4 1.png" 
        alt="Логотип" 
        class="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6 sm:mb-8 md:mb-10"
      />
    
      <!-- Текстовый блок -->
      <div class="text-center text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl space-y-4">
        <p>
          Мы - команда студентов из Владивостока, разработавшая данный сервис всего за день уже по окончании третьего курса ИТ-Колледжа.
        </p>
        <p>
          Petcher мы начали разрабатывать в марте 2024 года и продолжаем до сих пор.
        </p>
        <p>
          Также, мы получили грант от Росмолодёжи на разработку данного проекта и успешно его реализовали.
        </p>
      </div>
    
      <!-- Ссылка для связи -->
      <a href="mailto:contact@example.com" class="text-blue-500 underline mt-8 text-lg sm:text-xl md:text-2xl">
        Связаться с нами
      </a>
    </div>
  </template>
  
  <script>
  export default {
    name: "About",
  };
  </script>
  
  <style scoped>
  /* Для минимизации и улучшения отображения на мобильных устройствах */
  html, body {
    height: 100%;
    margin: 0;
  }
  </style>
  
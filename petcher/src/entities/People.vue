<template>
    <div class="flex flex-col items-center gap-6 py-10">
      <!-- Верхний ряд: Компаниям и Людям -->
      <div class="flex flex-wrap justify-center gap-6">
        <div class="people-card p-6 rounded-lg w-[350px] h-[160px] bg-[#D6EFFD]">
          <h3 class="text-[24px] font-medium leading-[29.76px] text-[rgba(6,124,255,1)] text-left mb-2">Компаниям,</h3>
          <p class="text-gray-600 text-center">которые ищут талантливых разработчиков для своих проектов.</p>
        </div>
        <div class="people-card p-6 rounded-lg w-[250px] h-[160px] bg-[#D6EFFD]">
          <h3 class="text-[24px] font-medium leading-[29.76px] text-[rgba(6,124,255,1)] text-left mb-2">Людям,</h3>
          <p class="text-gray-600 text-center">тем, кто хочет участвовать в проекте в качестве волонтера.</p>
        </div>
      </div>
  
      <!-- Нижний ряд: Инвесторам и Студентам -->
      <div class="flex flex-wrap justify-center gap-6">
        <div class="people-card p-6 rounded-lg w-[250px] h-[160px] bg-[#D6EFFD]">
          <h3 class="text-[24px] font-medium leading-[29.76px] text-[rgba(6,124,255,1)] text-left mb-2">Инвесторам,</h3>
          <p class="text-gray-600 text-center">Petcher может стать источником интересных pet-проектов для инвестирования.</p>
        </div>
        <div class="people-card p-6 rounded-lg w-[350px] h-[160px] bg-[#D6EFFD]">
          <h3 class="text-[24px] font-medium leading-[29.76px] text-[rgba(6,124,255,1)] text-left mb-2">Студентам,</h3>
          <p class="text-gray-600 text-center">Для них площадка может стать возможностью найти интересные проекты для практики.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'People',
  };
  </script>
  
  <style scoped>
  @media (max-width: 768px) {
    .people-card {
      width: 300px !important;
    }
  }
  </style>
  
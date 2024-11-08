<template>
    <div class="flex flex-col items-center p-4 min-h-screen bg-gray-100">
      <h1 class="text-lg font-semibold text-blue-600 mb-4">Добрый день, Саня! Проекты для вас.</h1>
  
      <div class="w-full max-w-md space-y-4">
        <!-- Карточка проекта -->
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white p-4 rounded-lg shadow-sm border border-gray-200"
        >
          <div class="flex justify-between items-center">
            <div>
              <p class="text-gray-600 font-semibold">{{ project.author }}</p>
              <p class="text-blue-600 font-bold text-lg">{{ project.name }}</p>
            </div>
            <button class="text-blue-500">
              <i class="fas fa-heart"></i>
            </button>
          </div>
  
          <div class="flex flex-wrap mt-2 space-x-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="bg-blue-100 text-blue-500 text-xs font-medium px-2 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
  
          <div v-if="project.tools" class="mt-2">
            <p class="text-xs text-gray-500 font-semibold">Инструменты:</p>
            <p class="text-xs text-gray-700">{{ project.tools.join(", ") }}</p>
          </div>
        </div>
  
        <!-- Кнопка для загрузки еще -->
        <button class="text-blue-500 font-semibold mt-4">Посмотреть ещё</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const projects = [
    {
      id: 1,
      author: "Кузнецов Константин",
      name: "Spons - создать свой ИИ",
      tags: ["Web-разработка", "Frontend-разработчик", "Backend-разработчик", "DevOps"],
      tools: ["React", "Photoshop", "UI/UX"],
    },
    {
      id: 2,
      author: "Сидоров Руслан",
      name: "Petcher",
      tags: ["Web-разработка", "Frontend-разработчик", "Backend-разработчик", "DevOps"],
    },
    {
      id: 3,
      author: "Плотников Кирилл",
      name: "Filmora",
      tags: ["Web-разработка", "Frontend-разработчик"],
      tools: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 4,
      author: "Кузнецов Константин",
      name: "Spons - создать свой ИИ",
      tags: ["DevOps"],
    },
  ];
  </script>
  
  <style scoped>
  /* Дополнительные стили для иконок */
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
  </style>
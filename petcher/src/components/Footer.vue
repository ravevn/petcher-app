<template>
  <footer class="py-6 w-full custom-footer">
    <div class="container mx-auto flex justify-between items-center px-4">
      <!-- Логотип слева -->
      <div class="flex items-center gap-6">
        <img src="@/assets/images/logo.png" alt="Petcher Logo" class="w-[91px] h-[27px]" />
        <!-- Ссылки с отступом справа от логотипа -->
        <div class="flex flex-col gap-2 text-left">
          <a href="#" class="text-white hover:text-gray-300">О нас</a>
          <a href="#" class="text-white hover:text-gray-300">Главная</a>
          <a href="#" class="text-white hover:text-gray-300">Связаться с нами</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Здесь можно добавить скрипты, если нужно
</script>

<style scoped>
/* Стили для футера */
.custom-footer {
  background-color: #13181f; /* Темный фон, установлен цвет #020302 */
}

/* Адаптивные стили для мобильных устройств */
@media (max-width: 1024px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
    margin-left: 0;  /* Убираем отрицательный отступ */
  }

  .flex {
    /* Изменяем расположение на вертикальное */
    flex-direction: column;
    align-items: flex-start; /* Элементы выравниваем по левому краю */
    text-align: left;
  }

  /* Для футера добавляем отступ слева */
  .custom-footer {
    padding-left: 16px; /* Добавляем отступ слева */
  }

  /* Стили для ссылок в футере, чтобы выровнять их по левому краю */
  .custom-footer .flex-col {
    text-align: left;
  }
}
</style>

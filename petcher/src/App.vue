<template>
  <div class="flex flex-col min-h-screen">

    <Header />
    <router-view />
    
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const showFooter = ref(true);

const updateFooterVisibility = () => {
  // Условие для скрытия футера на странице "/home"
  showFooter.value = !['/registration'].includes(route.path);
};

// Вызываем функцию при инициализации
updateFooterVisibility();

// Следим за изменениями маршрута
watch(route, updateFooterVisibility);

</script>


<style scoped>

.container {
  padding: 20px;
  flex-grow: 1; 
}
</style>

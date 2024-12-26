<template>
  <div class="min-h-screen w-full bg-emerald-100 flex">
    <DashboardSidebar :is-open="isOpen" />
    <main class="flex flex-col w-full">
      <div class="bg-white p-2 lg:p-4">
        <DashboardToggleButton :toggle-open="toggleOpen" />
      </div>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref<boolean>(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

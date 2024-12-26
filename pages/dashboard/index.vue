<template>
  <div class="p-2 lg:p-4">
    <select
      class="bg-white text-base text-neutral-800 p-2 rounded-md mb-2 lg:mb-4 cursor-pointer"
    >
      <option value="">Periode:</option>
      <option value="">Hari ini</option>
      <option value="">Minggu ini</option>
      <option value="">Bulan ini</option>
      <option value="">Tahun ini</option>
    </select>
    <DashboardOverview />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});
</script>

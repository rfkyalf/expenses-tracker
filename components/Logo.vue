<template>
  <h1
    class="bg-gradient-to-r from-[#175fab] to-[#3be06d] bg-clip-text text-lg lg:text-xl text-transparent font-bold flex items-center gap-x-1"
    :class="class"
  >
    <IconsMoney class="size-6 lg:size-7 text-emerald-600" />
    ExpenseTracker
  </h1>
</template>

<script setup lang="ts">
defineProps<{
  class?: string;
}>();
</script>

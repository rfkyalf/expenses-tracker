<template>
  <button
    @click="toggleOpen"
    class="flex items-center justify-center hover:scale-105"
  >
    <IconsMenu class="size-5 lg:size-6 text-neutral-700" />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  toggleOpen: () => void;
}>();
</script>

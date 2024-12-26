<template>
  <div class="bg-white flex flex-col gap-y-2 p-4 rounded-md">
    <h2 class="text-base text-neutral-800 flex items-center gap-x-1 lg:gap-x-2">
      <component :is="titleIcon" class="size-5" :class="titleIconClass" />{{
        title
      }}
    </h2>
    <span class="text-2xl font-bold text-neutral-700">{{
      formatRupiah(amount)
    }}</span>
    <span
      v-if="title === 'Total Pengeluaran'"
      class="text-red-600 text-sm flex items-center gap-x-1 mt-2"
    >
      <IconsArrowRightDown class="size-4" />{{ percentage }}%
    </span>
    <span
      v-else
      class="text-emerald-600 text-sm flex items-center gap-x-1 mt-2"
    >
      <IconsArrowRightUp class="size-4" />{{ percentage }}%
    </span>
  </div>
</template>

<script setup lang="ts">
import { formatRupiah } from '~/helpers/utils';

defineProps<{
  title: string;
  amount: number;
  percentage: number;
  titleIcon: string | object;
  titleIconClass: string;
  percentageIcon: string | object;
}>();
</script>

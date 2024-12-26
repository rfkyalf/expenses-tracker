<template>
  <aside
    class="min-h-screen bg-white flex flex-col justify-between rounded-br-xl"
    :class="{ hidden: !isOpen }"
  >
    <Logo class="p-2 lg:p-4" />
    <nav>
      <ul class="flex flex-col gap-y-4">
        <li v-for="nav in DASHBOARD_NAV_LIST" :key="nav.id">
          <NuxtLink
            :to="nav.path"
            class="flex items-center gap-x-1 lg:gap-x-2 py-2 rounded-l-lg ml-2 pl-2 text-neutral-400 hover:text-emerald-700"
            active-class="bg-emerald-100 !text-emerald-700"
          >
            <component :is="nav.icon" class="size-4 lg:size-5" />
            <span class="text-sm lg:text-base">{{ nav.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <p class="text-sm text-neutral-800 p-2">Created by Rifky Alfarez</p>
  </aside>
</template>

<script setup lang="ts">
import { DASHBOARD_NAV_LIST } from '~/helpers/constants/dashboard';

defineProps<{ isOpen: boolean }>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:gap-4 gap-2">
    <DashboardOverviewCard
      title="Total Saldo"
      :amount="5000000"
      :percentage="15"
      :title-icon="Wallet"
      title-icon-class="text-blue-500"
      :percentage-icon="ArrowRightUp"
    />
    <DashboardOverviewCard
      title="Total Pemasukan"
      :amount="10000"
      :percentage="15"
      :title-icon="Income"
      title-icon-class="text-emerald-500"
      :percentage-icon="ArrowRightUp"
    />
    <DashboardOverviewCard
      title="Total Pengeluaran"
      :amount="50000"
      :percentage="15"
      :title-icon="Outcome"
      title-icon-class="text-red-500"
      :percentage-icon="ArrowRightUp"
    />
  </div>
</template>

<script setup lang="ts">
import ArrowRightUp from '~/components/Icons/ArrowRightUp.vue';
import Income from '~/components/Icons/Income.vue';
import Outcome from '~/components/Icons/Outcome.vue';
import Wallet from '~/components/Icons/Wallet.vue';
</script>

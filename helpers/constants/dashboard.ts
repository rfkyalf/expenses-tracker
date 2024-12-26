import IconDashboard from '~/components/Icons/Dashboard.vue';
import IconWallet from '~/components/Icons/Wallet.vue';
import IconOutcome from '~/components/Icons/Outcome.vue';
import IconIncome from '~/components/Icons/Income.vue';
import IconCategory from '~/components/Icons/Category.vue';
import IconUser from '~/components/Icons/User.vue';

export const DASHBOARD_NAV_LIST = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/dashboard',
    icon: IconDashboard,
  },
  {
    id: 2,
    name: 'Saldo',
    path: '/dashboard/saldo',
    icon: IconWallet,
  },
  {
    id: 3,
    name: 'Pengeluaran',
    path: '/dashboard/pengeluaran',
    icon: IconOutcome,
  },
  {
    id: 4,
    name: 'Pemasukan',
    path: '/dashboard/pemasukan',
    icon: IconIncome,
  },
  {
    id: 5,
    name: 'Kategori',
    path: '/dashboard/kategori',
    icon: IconCategory,
  },
  {
    id: 6,
    name: 'User',
    path: '/dashboard/user',
    icon: IconUser,
  },
];

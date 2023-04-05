import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  meta: {
    orderNo: 1,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  redirect: '/dashboard/index',
  children: [
    {
      path: 'index',
      name: 'DashboardPage',
      component: () => import('/@/views/dashboard/index.vue'),
      meta: {
        title: t('routes.dashboard.dashboard'),
        hideMenu: true,
        currentActiveMenu: '/dashboard',
        hideBreadcrumb: true,
      },
    },
  ],
};

export default dashboard;

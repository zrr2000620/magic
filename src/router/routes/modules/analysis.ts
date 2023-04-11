import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const analysis: AppRouteModule = {
  path: '/analysis',
  name: 'Analysis',
  component: LAYOUT,
  redirect: '/analysis/user',
  meta: {
    icon: 'simple-icons:about-dot-me',
    title: t('analysis.menus.analysis'),
    orderNo: 4,
  },
  children: [
    {
      path: 'user',
      name: 'UserMMRAnalysis',
      component: () => import('/@/views/analysis/UserMRRAnalysis/index.vue'),
      meta: {
        title: t('analysis.menus.userMMR'),
      },
    },
    {
      path: 'life/time',
      name: 'LifeTimeAnalysis',
      component: () => import('/@/views/analysis/LifeTimeAnalysis/index.vue'),
      meta: {
        title: t('analysis.menus.lifeTime'),
      },
    },
  ],
};

export default analysis;

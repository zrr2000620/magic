import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
const financial: AppRouteModule = {
  path: '/financial',
  name: 'Financial',
  component: LAYOUT,
  redirect: '/financial',
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.config.financial'),
    orderNo: 5,
  },
  children: [
    {
      path: 'statement',
      name: 'Financial statement',
      component: () => import('/@/views/financial/statement/index.vue'),
      meta: {
        // affix: true,
        title: t('financial.financialStatement'),
      },
    },
    {
      path: 'flow',
      name: 'Financial flow',
      component: () => import('/@/views/financial/flow/index.vue'),
      meta: {
        // affix: true,
        title: t('financial.finacialFlow'),
      },
    },
  ],
};
export default financial;

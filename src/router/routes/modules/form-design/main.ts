import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
const permission: AppRouteModule = {
  path: '/form-designer',
  name: 'Form-designer',
  component: LAYOUT,
  meta: {
    orderNo: 10000,
    icon: 'ion:build-outline',
    title: t('routes.campaign.management'),
  },
  children: [
    {
      path: 'design',
      name: 'Design',
      meta: {
        title: t('routes.campaign.template'),
      },
      component: () => import('/@/views/campaign-template/index.vue'),
    },
    {
      path: 'example1',
      name: 'Example1',
      meta: {
        title: t('routes.campaign.SMStemplate'),
      },
      component: () => import('/@/views/sms-template/index.vue'),
    },
  ],
};

export default permission;

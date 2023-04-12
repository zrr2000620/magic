import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
const permission: AppRouteModule = {
  path: '/campaign',
  name: 'Campaign-template',
  component: LAYOUT,
  redirect: '/campaign/campaign-template',
  meta: {
    orderNo: 10000,
    icon: 'ion:build-outline',
    title: t('routes.campaign.management'),
  },
  children: [
    {
      path: 'campaign-template',
      name: 'Campaign-template',
      meta: {
        title: t('routes.campaign.template'),
      },
      component: () => import('/@/views/campaign/campaign-template/index.vue'),
    },
    {
      path: 'sms-template',
      name: 'sms-template',
      meta: {
        title: t('routes.campaign.SMStemplate'),
      },
      component: () => import('/@/views/campaign/sms-template/index.vue'),
    },
  ],
};

export default permission;

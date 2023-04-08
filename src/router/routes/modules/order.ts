import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
const order: AppRouteModule = {
  path: '/order',
  name: 'Order',
  component: LAYOUT,
  redirect: '/order',
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.order.order'),
    orderNo: 5,
  },
  children: [
    {
      path: 'subscription',
      name: 'Subscription Record',
      component: () => import('/@/views/order/subscription/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.order.subscription'),
      },
      children: [
        {
          path: 'SubscriptionDetails',
          name: 'SubscriptionDetails',
          component: () => import('/@/views/order/subscription/SubscriptionDetails.vue'),
          meta: {
            title: 'Order number',
            hideMenu: true,
          },
        },
      ],
    },
    {
      path: 'campaign',
      name: 'Campaign Payment Record',
      component: () => import('/@/views/order/campaign/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.order.campaign'),
      },
      children: [
        {
          path: 'CampaignDetails',
          name: 'CampaignDetails',
          component: () => import('/@/views/order/campaign/CamponentsDetails.vue'),
          meta: {
            title: 'Order number',
            hideMenu: true,
          },
        },
      ],
    },
  ],
};
export default order;

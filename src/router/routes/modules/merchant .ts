import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
const merchant: AppRouteModule = {
  path: '/merchant',
  name: 'Merchant',
  component: LAYOUT,
  redirect: '/merchant-list',
  meta: {
    icon: 'ion:grid-outline',
    title: t('merchant.menus.merchant'),
    orderNo: 3,
  },
  children: [
    {
      path: 'list',
      name: 'List',
      component: () => import('/@/views/merchant/list/index.vue'),
      meta: {
        // affix: true,
        title: t('merchant.menus.merchantList'),
      },
    },
    {
      path: ':id',
      name: 'MerchantDetail',
      component: () => import('/@/views/merchant/detail/index.vue'),
      meta: {
        // affix: true,
        title: t('merchant.menus.merchantDetail'),
        hideMenu: true,
        currentActiveMenu: '/merchant/list',
      },
    },
    {
      path: 'merchant/stats',
      name: 'Stats',
      component: () => import('/@/views/merchant/stats/index.vue'),
      meta: {
        // affix: true,
        title: t('merchant.menus.merchatStats'),
      },
    },
  ],
};

export default merchant;

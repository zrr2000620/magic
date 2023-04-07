import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/config',
  name: 'Config',
  component: LAYOUT,
  redirect: '/config/channel',
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.config.config'),
    orderNo: 3,
  },
  children: [
    {
      path: 'channel',
      name: 'Channel',
      component: () => import('/@/views/config/channel/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.config.channel'),
      },
    },
    {
      path: 'trial',
      name: 'Trial',
      component: () => import('/@/views/config/trial/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.config.trail'),
      },
    },
    {
      path: 'message',
      name: 'Message',
      component: () => import('/@/views/system/admin-list/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.config.message'),
      },
    },
    {
      path: 'subscribe',
      name: 'Subscribe',
      component: () => import('/@/views/system/admin-list/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.config.subscribe'),
      },
    },
    {
      path: 'merchant/tag',
      name: 'MerchantTag',
      component: () => import('/@/views/config/tag/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.config.tag'),
      },
    },
    {
      path: 'faq/list',
      name: 'FAQList',
      component: () => import('/@/views/config/faq/FAQList.vue'),
      meta: {
        // affix: true,
        title: t('routes.config.faq'),
      },
    },
    {
      path: 'faq/category/list',
      name: 'FAQCategoryList',
      component: () => import('/@/views/config/faq/CategoryList.vue'),
      meta: {
        title: t('routes.config.faqCategory'),
        hideMenu: true,
        currentActiveMenu: '/config/faq/list',
      },
    },
    {
      path: 'faq/:id(\\d+)?',
      name: 'FAQForm',
      component: () => import('/@/views/config/faq/FAQForm.vue'),
      meta: {
        title: t('routes.config.addFAQ'),
        hideMenu: true,
        currentActiveMenu: '/config/faq/list',
      },
    },
    {
      path: 'protocol',
      name: 'Protocol configuration',
      component: () => import('/@/views/config/protocol/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.config.protocol'),
      },
    },
    {
      path: 'country',
      name: 'Country',
      component: () => import('/@/views/config/country/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.config.country'),
      },
    },
  ],
};

export default dashboard;

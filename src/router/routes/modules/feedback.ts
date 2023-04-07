import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const about: AppRouteModule = {
  path: '/feedback-list',
  name: 'About',
  component: LAYOUT,
  // redirect: '/feedback-list/index',
  meta: {
    // hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: t('merchant.feedback.merchantFeedbackRecord'),
    orderNo: 500,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('/@/views/feedback-list/index.vue'),
      meta: {
        title: t('merchant.feedback.feedbackList'),
        icon: 'simple-icons:about-dot-me',
        // hideMenu: true,
      },
    },
  ],
};

export default about;

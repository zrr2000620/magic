import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import { RoleEnum } from '/@/enums/roleEnum';

const dashboard: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/admin/list',
  meta: {
    icon: 'ion:grid-outline',
    title: t('routes.system.systemManager'),
    orderNo: 2,
    roles: [RoleEnum.SYSTEM],
  },
  children: [
    {
      path: 'admin/list',
      name: 'AdminList',
      component: () => import('/@/views/system/admin-list/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.system.userList'),
        roles: [RoleEnum.ADMIN_LIST],
      },
    },
    {
      path: 'admin/:id(\\d+)?',
      name: 'AdminForm',
      component: () => import('/@/views/system/admin-form/index.vue'),
      meta: {
        ignoreKeepAlive: true,
        hideMenu: true,
        currentActiveMenu: '/system/admin/list',
        title: t('system.admin.addAdminTitle'),
        roles: [RoleEnum.ADMIN_ADD, RoleEnum.ADMIN_EDIT],
      },
      beforeEnter: (to, _, next) => {
        if (to.params.id) {
          to.meta.title = t('system.admin.editAdminTitle');
        }
        next();
      },
    },
    {
      path: 'role/list',
      name: 'RoleList',
      component: () => import('/@/views/system/role-list/index.vue'),
      meta: {
        title: t('routes.system.roleList'),
        roles: [RoleEnum.ROLE_LIST],
      },
    },
    {
      path: 'role/:id(\\d+)?',
      name: 'RoleForm',
      component: () => import('/@/views/system/role-form/index.vue'),
      meta: {
        ignoreKeepAlive: true,
        hideMenu: true,
        currentActiveMenu: '/system/role/list',
        title: t('system.role.addRoleTitle'),
        roles: [RoleEnum.ROLE_ADD, RoleEnum.ROLE_EDIT],
      },
      beforeEnter: (to, _, next) => {
        if (to.params.id) {
          to.meta.title = t('system.role.editRoleTitle');
        }
        next();
      },
    },
    {
      path: 'operation/log/list',
      name: 'OperationLog',
      component: () => import('/@/views/system/operation-log/index.vue'),
      meta: {
        title: t('routes.system.operateLog'),
        roles: [RoleEnum.LOG_LIST],
      },
    },
  ],
};

export default dashboard;

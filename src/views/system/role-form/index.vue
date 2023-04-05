<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { PageWrapper, PageFooter } from '/@/components/Page';
  import { Card, Space } from 'ant-design-vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form';
  import { computed, watch } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useGlobSetting } from '/@/hooks/setting';
  import { useTitle } from '@vueuse/core';

  const route = useRoute();
  const adminId = computed(() => route.params.id);
  const { title } = useGlobSetting();
  const pageTitle = useTitle();
  const { t } = useI18n();
  const schemas: FormSchema[] = [
    {
      field: 'field',
      component: 'Input',
      label: t('system.role.roleNameLabel'),
      colProps: {
        span: 24,
      },
      componentProps: {
        style: {
          width: '50%',
        },
      },
    },
    {
      field: 'role',
      component: 'InputTextArea',
      label: t('system.role.roleDescLabel'),
      colProps: {
        span: 24,
      },
      componentProps: {
        style: {
          width: '50%',
        },
      },
    },
    {
      field: 'auth',
      component: 'ApiTree',
      label: t('system.role.permissionsLabel'),
      colProps: {
        span: 24,
      },
      componentProps: {
        style: {
          width: '50%',
        },
        treeData: [
          {
            title: 'Home page',
            key: 'home',
          },
        ],
        checkable: true,
        selectable: false,
      },
    },
  ];

  const [register] = useForm({
    labelWidth: 160,
    schemas,
    showActionButtonGroup: false,
  });

  watch(
    adminId,
    (newId) => {
      if (newId) {
        route.meta.title = t('system.role.editRoleTitle');
      } else {
        route.meta.title = t('system.role.addRoleTitle');
      }

      pageTitle.value = `${route.meta.title}-${title}`;
    },
    {
      immediate: true,
    },
  );
</script>

<template>
  <PageWrapper contentFullHeight>
    <Card :title="t('system.admin.userInfo')" style="margin-bottom: 10px">
      <BasicForm @register="register" />
    </Card>

    <PageFooter>
      <template #right>
        <Space>
          <AButton>{{ t('common.cancelText') }}</AButton>
          <AButton type="primary">{{ t('common.saveText') }}</AButton>
        </Space>
      </template>
    </PageFooter>
  </PageWrapper>
</template>

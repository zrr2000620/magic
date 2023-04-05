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
  const userFormSchemas: FormSchema[] = [
    {
      field: 'field',
      component: 'Input',
      label: t('system.admin.nameLabel'),
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
      component: 'ApiSelect',
      label: t('system.admin.rolesLabel'),
      colProps: {
        span: 24,
      },
      componentProps: {
        style: {
          width: '50%',
        },
      },
    },
  ];

  const accountFormSchemas: FormSchema[] = [
    {
      field: 'field',
      component: 'Input',
      label: t('system.admin.mobileLabel'),
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
      field: 'email',
      component: 'Input',
      label: t('system.admin.emailLabel'),
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
      field: 'account',
      component: 'Input',
      label: t('system.admin.accountLabel'),
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
      field: 'password',
      component: 'Input',
      label: t('system.admin.passwordLabel'),
      colProps: {
        span: 24,
      },
      componentProps: {
        style: {
          width: '50%',
        },
      },
    },
  ];
  const [userFormRegister] = useForm({
    labelWidth: 120,
    schemas: userFormSchemas,
    showActionButtonGroup: false,
  });

  const [accountFormRegister] = useForm({
    labelWidth: 120,
    schemas: accountFormSchemas,
    showActionButtonGroup: false,
  });

  watch(
    adminId,
    (newId) => {
      if (newId) {
        route.meta.title = t('system.admin.editAdminTitle');
      } else {
        route.meta.title = t('system.admin.addAdminTitle');
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
      <BasicForm @register="userFormRegister" />
    </Card>
    <Card :title="t('system.admin.accountInfo')">
      <BasicForm @register="accountFormRegister" />
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

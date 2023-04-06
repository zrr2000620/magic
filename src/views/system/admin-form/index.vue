<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { PageWrapper, PageFooter } from '/@/components/Page';
  import { Card, Space } from 'ant-design-vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form';
  import { computed, ref, watch } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useGlobSetting } from '/@/hooks/setting';
  import { useTitle } from '@vueuse/core';
  import { getAdmin } from '/@/api/system/admin';
  import { getRoleList } from '/@/api/system/role';
  import { useGo } from '/@/hooks/web/usePage';

  const loading = ref(false);
  const route = useRoute();
  const go = useGo();
  const adminId = computed(() => Number(route.params.id));
  const { title } = useGlobSetting();
  const pageTitle = useTitle();
  const { t } = useI18n();

  const userFormSchemas: FormSchema[] = [
    {
      field: 'adminName',
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
      rules: [
        {
          required: true,
          message: t('system.admin.namePlaceholder'),
        },
      ],
    },
    {
      field: 'roleId',
      component: 'ApiSelect',
      label: t('system.admin.rolesLabel'),
      colProps: {
        span: 24,
      },
      componentProps: {
        style: {
          width: '50%',
        },
        api: getRoleList,
        labelField: 'roleName',
        valueField: 'id',
      },
      rules: [
        {
          required: true,
          message: t('system.admin.rolePlaceholder'),
        },
      ],
    },
  ];

  const accountFormSchemas: FormSchema[] = [
    {
      field: 'phone',
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
      rules: [
        {
          required: true,
          message: t('system.admin.mobilePlaceholder'),
        },
      ],
    },
    {
      field: 'mail',
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
      rules: [
        {
          required: true,
          message: t('system.admin.emailPlaceholder'),
        },
      ],
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
      rules: [
        {
          required: true,
          message: t('system.admin.passwordPlaceholder'),
        },
      ],
    },
    {
      field: 'pwd',
      component: 'InputPassword',
      label: t('system.admin.passwordLabel'),
      colProps: {
        span: 24,
      },
      componentProps: {
        style: {
          width: '50%',
        },
      },
      rules: [
        {
          required: true,
          message: t('system.admin.emailPlaceholder'),
        },
      ],
    },
  ];
  const [userFormRegister, { setFieldsValue: setUserForm }] = useForm({
    labelWidth: 120,
    schemas: userFormSchemas,
    showActionButtonGroup: false,
  });

  const [accountFormRegister, { setFieldsValue: setAccountForm }] = useForm({
    labelWidth: 120,
    schemas: accountFormSchemas,
    showActionButtonGroup: false,
  });

  watch(
    adminId,
    (newId) => {
      if (newId) {
        route.meta.title = t('system.admin.editAdminTitle');
        loadFormValues();
      } else {
        route.meta.title = t('system.admin.addAdminTitle');
      }

      pageTitle.value = `${route.meta.title}-${title}`;
    },
    {
      immediate: true,
    },
  );

  async function loadFormValues() {
    try {
      loading.value = true;
      const data = await getAdmin(adminId.value);
      if (!data) return;
      setUserForm({
        adminName: data.adminName,
        roleId: data.roleId,
      });
      setAccountForm({
        account: data.account,
        pwd: data.pwd,
        phone: data.phone,
        mail: data.mail,
      });
    } finally {
      loading.value = false;
    }
  }

  async function handlerSave() {}
</script>

<template>
  <PageWrapper contentFullHeight v-loading="loading">
    <Card :title="t('system.admin.userInfo')" style="margin-bottom: 10px">
      <BasicForm @register="userFormRegister" />
    </Card>
    <Card :title="t('system.admin.accountInfo')">
      <BasicForm @register="accountFormRegister" />
    </Card>

    <PageFooter>
      <template #right>
        <Space>
          <AButton
            @click="
              go({
                name: 'AdminList',
                replace: true,
              })
            "
            >{{ t('common.cancelText') }}</AButton
          >
          <AButton type="primary" @click="handlerSave" :loading="loading">{{
            t('common.saveText')
          }}</AButton>
        </Space>
      </template>
    </PageFooter>
  </PageWrapper>
</template>

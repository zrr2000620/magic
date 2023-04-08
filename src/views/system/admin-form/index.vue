<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { PageWrapper, PageFooter } from '/@/components/Page';
  import { Card, Space } from 'ant-design-vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form';
  import { computed, ref, watch } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { editAdmin, getAdmin, addAdmin } from '/@/api/system/admin';
  import { getRoleList } from '/@/api/system/role';
  import { useGo } from '/@/hooks/web/usePage';

  const loading = ref(false);
  const route = useRoute();
  const go = useGo();
  const adminId = computed(() =>
    route.params.id && !isNaN(Number(route.params.id)) ? Number(route.params.id) : null,
  );
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
        placeholder: t('system.admin.namePlaceholder'),
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
        placeholder: t('system.admin.rolePlaceholder'),
      },
      rules: [],
      itemProps: {
        autoLink: false,
        required: true,
      },
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
        placeholder: t('system.admin.mobilePlaceholder'),
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
        placeholder: t('system.admin.emailPlaceholder'),
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
        placeholder: t('system.admin.accountPlaceholder'),
      },
      rules: [
        {
          required: true,
          message: t('system.admin.accountPlaceholder'),
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
        placeholder: t('system.admin.passwordPlaceholder'),
      },
      rules: [
        {
          required: true,
          message: t('system.admin.passwordPlaceholder'),
        },
      ],
    },
  ];
  const [userFormRegister, { validate: userValid, setFieldsValue: setUserForm }] = useForm({
    labelWidth: 120,
    schemas: userFormSchemas,
    showActionButtonGroup: false,
  });

  const [accountFormRegister, { validate: accountValid, setFieldsValue: setAccountForm }] = useForm(
    {
      labelWidth: 120,
      schemas: accountFormSchemas,
      showActionButtonGroup: false,
    },
  );

  watch(
    adminId,
    (newId) => {
      if (newId) {
        loadFormValues(newId);
      }
    },
    {
      immediate: true,
    },
  );

  async function loadFormValues(id: number) {
    try {
      loading.value = true;
      const data = await getAdmin(id);
      if (!data) return;
      const { adminName, roleId, account, pwd, phone, mail } = data;
      setUserForm({ adminName, roleId });
      setAccountForm({ account, pwd, phone, mail });
    } finally {
      loading.value = false;
    }
  }

  async function handlerSave() {
    const userForm = await userValid();
    const accountForm = await accountValid();
    const formValues = { ...userForm, ...accountForm, id: adminId.value };
    if (adminId.value) {
      await editAdmin(formValues);
    } else {
      await addAdmin(formValues);
    }
    go({ name: 'AdminList', replace: true });
  }
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

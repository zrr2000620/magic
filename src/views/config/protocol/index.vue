<template>
  <PageWrapper dense :title="t($route.meta.title)">
    <template #headerContent>
      <div style="margin-bottom: 10px">{{ t('config.protocol.headerContent') }}</div>
      <Button @click="handlerSave" type="primary" size="middle" :loading="loading">{{
        t('config.protocol.save')
      }}</Button>
    </template>
    <Card v-loading="loading">
      <BasicForm @register="registerForm" />
      <!-- <div class="card">
        <div class="lg:flex">
          <span style="width: 80px">{{ t('config.protocol.serviceAgreement') }}</span>
          <Tinymce v-model="value" @change="handleChange" width="100%" />
        </div>
        <div class="lg:flex">
          <span style="width: 80px">{{ t('config.protocol.privacyPolicy') }}</span>
          <Tinymce v-model="value" @change="handleChange" width="100%" />
        </div>
        <div class="lg:flex">
          <span style="width: 80px">{{ t('config.protocol.subscribePolicy') }}</span>
          <Tinymce v-model="value" @change="handleChange" width="100%" />
        </div>
      </div> -->
    </Card>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { Button, Card } from 'ant-design-vue';
  import { Tinymce } from '/@/components/Tinymce/index';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { h, ref } from 'vue';
  import { saveProtocol, getProtocol } from '/@/api/config/protocol';
  const { t } = useI18n();
  const loading = ref(false);
  const schemas: FormSchema[] = [
    {
      field: 'serviceAgreement',
      component: 'Input',
      label: t('config.protocol.serviceAgreement'),
      colProps: {
        span: 24,
      },
      render: ({ model, field }) =>
        h(Tinymce, {
          modelValue: model[field],
          onChange: (e) => {
            model[field] = e;
          },
        }),
    },
    {
      field: 'privacyPolicy',
      component: 'Input',
      label: t('config.protocol.privacyPolicy'),
      colProps: {
        span: 24,
      },
      render: ({ model, field }) =>
        h(Tinymce, {
          modelValue: model[field],
          onChange: (e) => {
            model[field] = e;
          },
        }),
    },
    {
      field: 'subscriptionAgreement',
      component: 'Input',
      label: t('config.protocol.subscribePolicy'),
      colProps: {
        span: 24,
      },
      render: ({ model, field }) =>
        h(Tinymce, {
          modelValue: model[field],
          onChange: (e) => {
            model[field] = e;
          },
        }),
    },
  ];
  const [
    registerForm,
    {
      // setFieldsValue,
      // setProps
      getFieldsValue,
      setFieldsValue,
    },
  ] = useForm({
    labelWidth: 140,
    schemas,
    showActionButtonGroup: false,
  });

  async function handlerSave() {
    try {
      loading.value = true;
      await saveProtocol({ ...getFieldsValue() });
    } finally {
      loading.value = false;
    }
  }

  async function loadProtocol() {
    try {
      loading.value = true;
      const data = await getProtocol();
      setFieldsValue(data);
    } finally {
      loading.value = false;
    }
  }

  loadProtocol();
</script>
<style scoped lang="less">
  .card {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>

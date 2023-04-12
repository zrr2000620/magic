<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import { PageWrapper, PageFooter } from '/@/components/Page';
  import { Card, Space } from 'ant-design-vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form';
  import { computed, ref, watch, h } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useGlobSetting } from '/@/hooks/setting';
  import { useTitle } from '@vueuse/core';
  import { useGo } from '/@/hooks/web/usePage';
  import { getFAQ, getFAQCategoryList } from '/@/api/config/faq';
  import { editFAQ } from '/@/api/config/faq';
  import { addFAQ } from '/@/api/config/faq';
  import { Tinymce } from '/@/components/Tinymce';
  import { upload } from '/@/api/upload';

  const loading = ref(false);
  const route = useRoute();
  const go = useGo();
  const faqId = computed(() =>
    route.params.id && !isNaN(Number(route.params.id)) ? Number(route.params.id) : null,
  );
  const { title } = useGlobSetting();
  const pageTitle = useTitle();
  const { t } = useI18n();

  const infoSchemas: FormSchema[] = [
    {
      field: 'orderNumber',
      component: 'InputNumber',
      label: t('config.faq.sequenceLabel'),
      colProps: {
        span: 24,
      },
      componentProps: {
        style: {
          width: '50%',
        },
        placeholder: t('config.faq.sequencePlaceholder'),
      },
      rules: [
        {
          required: true,
          message: t('config.faq.sequencePlaceholder'),
        },
      ],
    },
    {
      field: 'classifyId',
      component: 'ApiSelect',
      label: t('config.faq.categoryLabel'),
      colProps: {
        span: 24,
      },
      componentProps: {
        style: {
          width: '50%',
        },
        api: getFAQCategoryList,
        labelField: 'classifyName',
        valueField: 'id',
        placeholder: t('config.faq.categoryPlaceholder'),
      },
      itemProps: {
        required: true,
      },
    },
    {
      field: 'isShow',
      component: 'Switch',
      label: t('config.faq.displayLabel'),
      itemProps: {
        extra: t('config.faq.displayLabelPlaceholder'),
        required: true,
      },
      defaultValue: true,
    },
  ];

  const contentSchemas: FormSchema[] = [
    {
      field: 'question',
      component: 'Input',
      label: t('config.faq.titleLabel'),
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
        },
      ],
    },
    {
      field: 'video',
      component: 'Upload',
      label: t('config.faq.videoLabel'),
      colProps: {
        span: 24,
      },
      componentProps: {
        placeholder: t('system.admin.emailPlaceholder'),
        maxSize: 10,
        maxNumber: 1,
        accept: ['.mp4'],
        api: upload,
      },
      rules: [
        {
          required: true,
          message: t('config.faq.videoPlaceholder'),
        },
      ],
    },
    {
      field: 'detail',
      component: 'InputTextArea',
      label: t('config.faq.detailLabel'),
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
        },
      ],
      render: ({ model, field }) =>
        h(Tinymce, {
          modelValue: model[field],
          onChange: (e) => {
            model[field] = e;
          },
        }),
    },
  ];
  const [infoRegister, { validate: infoValid, setFieldsValue: setInfoForm }] = useForm({
    labelWidth: 120,
    schemas: infoSchemas,
    showActionButtonGroup: false,
    colon: true,
  });

  const [contentRegister, { validate: contentValid, setFieldsValue: setContentForm }] = useForm({
    labelWidth: 120,
    schemas: contentSchemas,
    showActionButtonGroup: false,
    colon: true,
  });

  watch(
    faqId,
    (newId) => {
      if (newId) {
        route.meta.title = t('config.faq.editFaq');
        loadFormValues(newId);
      } else {
        route.meta.title = t('config.faq.addFaq');
      }

      pageTitle.value = `${route.meta.title}-${title}`;
    },
    {
      immediate: true,
    },
  );

  async function loadFormValues(id: number) {
    try {
      loading.value = true;
      const data = await getFAQ(id);
      if (!data) return;
      const { orderNumber, classifyId, isShow, videoUrl, question, detail } = data;
      setInfoForm({ orderNumber, classifyId, isShow: !!isShow });
      setContentForm({ video: [videoUrl], question, detail });
    } finally {
      loading.value = false;
    }
  }

  async function handlerSave() {
    const infoForm = await infoValid();
    const contentForm = await contentValid();
    const formValues = {
      ...infoForm,
      ...contentForm,
      id: faqId.value,
      isShow: infoForm.isShow ? 1 : 0,
      videoUrl: contentForm.video?.[0],
    };
    if (faqId.value) {
      await editFAQ(formValues);
    } else {
      await addFAQ(formValues);
    }
    go({ name: 'FAQList', replace: true });
  }
</script>

<template>
  <PageWrapper contentFullHeight v-loading="loading">
    <Card :title="t('config.faq.FAQFormTitle')" style="margin-bottom: 10px">
      <BasicForm @register="infoRegister" />
    </Card>
    <Card :title="t('config.faq.FAQContentTitle')">
      <BasicForm @register="contentRegister" />
    </Card>

    <PageFooter>
      <template #right>
        <Space>
          <AButton
            @click="
              go({
                name: 'FAQList',
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

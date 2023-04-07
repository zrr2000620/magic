<template>
  <BasicModal v-bind="$attrs" @register="register" @ok="handerSave">
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" />
    </div>
  </BasicModal>
</template>
<script setup lang="ts">
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { ref } from 'vue';
  import { addFAQCategory, editFAQCategory } from '/@/api/config/faq';
  import { useI18n } from '/@/hooks/web/useI18n';
  const emit = defineEmits(['success']);
  const editId = ref();
  const { t } = useI18n();
  const schemas: FormSchema[] = [
    {
      field: 'orderNumber',
      component: 'InputNumber',
      label: t('config.faq.sequence'),
      colProps: {
        span: 24,
      },
      componentProps: {
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
      field: 'classifyName',
      component: 'Input',
      label: t('config.faq.category'),
      colProps: {
        span: 24,
      },
      componentProps: {
        placeholder: t('config.faq.categoryPlaceholder'),
      },
      rules: [
        {
          required: true,
          message: t('config.faq.categoryPlaceholder'),
        },
      ],
    },
  ];
  const [
    registerForm,
    {
      // setFieldsValue,
      // setProps
      setFieldsValue,
      validate,
    },
  ] = useForm({
    labelWidth: 120,
    schemas,
    showActionButtonGroup: false,
    actionColOptions: {
      span: 24,
    },
  });

  const [register, { closeModal }] = useModalInner((data) => {
    if (data) {
      editId.value = data.id;
      setFieldsValue({ ...data });
    }
  });

  async function handerSave() {
    const formValue = await validate();
    if (editId.value) {
      await editFAQCategory({ ...formValue, id: editId.value });
    } else {
      await addFAQCategory({ ...formValue });
    }
    emit('success');
    closeModal();
  }
</script>

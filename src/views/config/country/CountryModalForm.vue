<template>
  <BasicModal v-bind="$attrs" @register="register" @ok="handerSave">
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" />
    </div>
  </BasicModal>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { addCountry, editCountry } from '/@/api/config/country';
  const emit = defineEmits(['success']);
  const { t } = useI18n();
  const schemas: FormSchema[] = [
    {
      field: 'orderNumber',
      component: 'InputNumber',
      label: t('config.country.sequence'),
      colProps: {
        span: 24,
      },
      componentProps: {
        placeholder: t('config.country.sequencePlaceholder'),
      },
      rules: [
        {
          required: true,
          message: t('config.country.sequencePlaceholder'),
        },
      ],
    },
    {
      field: 'countryName',
      component: 'Input',
      label: t('config.country.country'),
      colProps: {
        span: 24,
      },
      componentProps: {
        placeholder: t('config.country.countryPlaceholder'),
      },
      rules: [
        {
          required: true,
          message: t('config.country.countryPlaceholder'),
        },
      ],
    },
  ];
  const editId = ref<number>();
  const [
    registerForm,
    {
      // setFieldsValue,
      // setProps
      validate,
      resetFields,
      setFieldsValue,
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
    resetFields();
    if (data) {
      editId.value = data.id;
      setFieldsValue({
        ...data,
      });
    }
  });

  async function handerSave() {
    const formValue = await validate();
    if (editId.value) {
      await editCountry({ ...formValue, id: editId.value });
    } else {
      await addCountry(formValue);
    }
    emit('success');
    closeModal();
  }
</script>

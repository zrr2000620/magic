<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    @visible-change="handleVisibleChange"
    @ok="handerSave"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="modelRef" />
    </div>
  </BasicModal>
</template>
<script setup lang="ts">
  import { ref, nextTick, defineProps } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { addCountry, editCountry } from '/@/api/config/country';
  const props = defineProps<{ userData: any }>();
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
  const modelRef = ref();
  const [
    registerForm,
    {
      // setFieldsValue,
      // setProps
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
    data && onDataReceive(data);
  });

  function onDataReceive(data) {
    console.log('Data Received', data);
    // 方式1;
    // setFieldsValue({
    //   field2: data.data,
    //   field1: data.info,
    // });

    // // 方式2
    modelRef.value = { ...data };

    // setProps({
    //   model:{ field2: data.data, field1: data.info }
    // })
  }

  function handleVisibleChange(v) {
    v && props.userData && nextTick(() => onDataReceive(props.userData));
  }

  async function handerSave() {
    const formValue = await validate();
    if (modelRef.value.id) {
      await editCountry({ ...formValue, id: modelRef.value.id });
    } else {
      await addCountry(formValue);
    }
    emit('success');
    closeModal();
  }
</script>

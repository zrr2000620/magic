<template>
  <BasicModal
    @register="register"
    title="Add Template"
    :draggable="false"
    okText="Confirm"
    :min-height="0"
    cancelText="Delete"
    :canFullscreen="false"
    width="1000px"
    :labelCol="{ span: 30, offset: 12 }"
    centered
    @ok="
      () => {
        closeModal();
      }
    "
  >
    <BasicForm @register="registerForm" :model="model" />
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useI18n } from '/@/hooks/web/useI18n';
  const { t } = useI18n();
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: t('campaign.sequenceM'),
      required: true,
      colProps: {
        span: 24,
      },
      defaultValue: '111',
    },
    {
      field: 'field2',
      component: 'Select',
      label: t('campaign.categoryM'),
      required: true,
      colProps: {
        span: 24,
      },
    },
    {
      field: 'field3',
      component: 'Input',
      label: t('campaign.TemplateName'),
      required: true,
      colProps: {
        span: 24,
      },
    },
    {
      field: 'field4',
      component: 'Input',
      label: t('campaign.ShortDescription'),
      required: true,
      colProps: {
        span: 24,
      },
    },
    {
      field: 'field4',
      component: 'InputTextArea',
      label: t('campaign.TemplateContent'),
      required: true,
      colProps: {
        span: 24,
      },
    },
  ];
  export default defineComponent({
    name: '',
    components: { BasicModal, BasicForm },
    setup() {
      const modelRef = ref({});
      const [
        registerForm,
        {
          // setFieldsValue,
          // setProps
        },
      ] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
      });
      const [register, { closeModal, setModalProps }] = useModalInner();
      return {
        t,
        register,
        closeModal,
        model: modelRef,
        registerForm,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
      };
    },
  });
</script>
<style scoped></style>

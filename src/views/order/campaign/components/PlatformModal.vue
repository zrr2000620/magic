<template>
  <BasicModal
    @register="register"
    :title="t('financial.table.note')"
    :draggable="false"
    okText="Confirm"
    :min-height="0"
    cancelText="Cancel"
    :canFullscreen="false"
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
      component: 'InputTextArea',
      label: '',
      required: true,
      colProps: {
        span: 24,
      },
      defaultValue: '111',
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

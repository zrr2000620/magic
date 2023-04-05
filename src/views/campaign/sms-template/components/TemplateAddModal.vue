<template>
  <BasicModal
    @register="register"
    title="Add Template"
    :draggable="false"
    :min-height="0"
    okText="Confirm"
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
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: 'sequence：',
      required: true,
      colProps: {
        span: 24,
      },
      defaultValue: '111',
    },
    {
      field: 'field2',
      component: 'Select',
      label: 'Category：',
      required: true,
      colProps: {
        span: 24,
      },
    },
    {
      field: 'field3',
      component: 'Input',
      label: 'Template name：',
      required: true,
      colProps: {
        span: 24,
      },
    },
    {
      field: 'field4',
      component: 'Input',
      label: 'Short description：',
      required: true,
      colProps: {
        span: 24,
      },
    },
    {
      field: 'field4',
      component: 'InputTextArea',
      label: 'Template content：',
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

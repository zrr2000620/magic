<template>
  <BasicModal v-bind="$attrs" @register="register" @ok="handleOk">
    <Alert
      show-icon
      type="info"
      message="If it is not an abnormal situation, please do not change the subscription"
    />
    <div class="pt-3px pr-3px">
      <Description @register="registerDesc" />
      <BasicForm @register="registerForm" />
    </div>
  </BasicModal>
</template>

<script lang="ts" setup>
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form';
  import { Description, DescItem, useDescription } from '/@/components/Description';
  import { handleFeedback } from '/@/api/feedback';
  import { ref } from 'vue';
  import { Alert } from 'ant-design-vue';
  const emit = defineEmits(['success']);
  const id = ref();
  const schemas: FormSchema[] = [
    {
      label: 'Choose to change plan',
      field: 'remarks',
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: 'Basic plan',
            value: 1,
          },
          {
            label: 'Essential plan',
            value: 1,
          },
        ],
      },
      colProps: {
        span: 24,
      },
    },
    {
      label: 'Choose an expiration time',
      field: '',
      component: 'DatePicker',
      colProps: {
        span: 24,
      },
    },
  ];
  const descSchemas: DescItem[] = [
    {
      label: 'Merchant name',
      field: '',
    },
    {
      label: 'Current Plan',
      field: '',
    },
    {
      label: 'Expire date',
      field: '',
    },
    {
      label: 'Locations',
      field: '',
    },
  ];

  const [registerForm, { setFieldsValue, getFieldsValue }] = useForm({
    labelWidth: 120,
    schemas,
    showActionButtonGroup: false,
    actionColOptions: {
      span: 24,
    },
  });

  const [register, { closeModal, setModalProps }] = useModalInner((data) => {
    if (data) {
      id.value = data.id;
      setFieldsValue({ ...data });
    }
  });

  const [registerDesc] = useDescription({
    column: 1,
    schema: descSchemas,
    bordered: false,
  });

  async function handleOk() {
    setModalProps({
      loading: true,
    });
    try {
      await handleFeedback({ ...getFieldsValue() });
      emit('success');
      closeModal();
    } finally {
      setModalProps({
        loading: false,
      });
    }
  }
</script>

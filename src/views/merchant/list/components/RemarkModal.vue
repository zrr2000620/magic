<template>
  <BasicModal v-bind="$attrs" @register="register" @ok="handleOk">
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" />
    </div>
  </BasicModal>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form';
  import { handleFeedback } from '/@/api/feedback';
  import { ref } from 'vue';
  const emit = defineEmits(['success']);
  const id = ref();
  const { t } = useI18n();
  const schemas: FormSchema[] = [
    {
      label: t('feedback.remark'),
      field: 'remarks',
      component: 'InputTextArea',
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

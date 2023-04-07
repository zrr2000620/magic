<template>
  <BasicModal
    @register="register"
    v-bind="$attrs"
    @ok="handleOk"
    :ok-text="t('feedback.handleConfirm')"
  >
    <TypographyTitle :level="4">{{ t('feedback.handleConfirmHeader') }}</TypographyTitle>
    <TypographyParagraph>
      {{ t('feedback.handleConfirmTitle') }}
    </TypographyParagraph>
    <TypographyParagraph>
      {{ t('feedback.handleConfirmContent') }}
    </TypographyParagraph>
  </BasicModal>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { TypographyTitle, TypographyParagraph } from 'ant-design-vue';
  import { handleFeedback } from '/@/api/feedback';
  import { ref } from 'vue';
  const emit = defineEmits(['success']);
  const id = ref();
  const { t } = useI18n();
  const [register, { closeModal, setModalProps }] = useModalInner((data) => {
    if (data) {
      id.value = data.id;
    }
  });

  async function handleOk() {
    setModalProps({
      loading: true,
    });
    try {
      await handleFeedback({
        id: id.value,
        processingStatus: 1,
      });
      emit('success');
      closeModal();
    } finally {
      setModalProps({
        loading: false,
      });
    }
  }
</script>
<style scoped></style>

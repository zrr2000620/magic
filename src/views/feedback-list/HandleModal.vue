<template>
  <BasicModal
    @register="register"
    :draggable="false"
    :title="t('feedback.Reminder')"
    :okText="t('feedback.confirm')"
    :cancelText="t('feedback.cancel')"
    :min-height="0"
    :canFullscreen="false"
    centered
    :height="200"
    @ok="
      () => {
        closeModal();
      }
    "
  >
    <h1>Are you sure you want to mark it as "processed"? </h1>
    <span
      >After marking, it means that you have finished processing the feedback of this customer
    </span>
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  export default defineComponent({
    name: '',
    components: { BasicModal },
    setup() {
      const { t } = useI18n();
      const [register, { closeModal, setModalProps }] = useModalInner();
      return {
        register,
        closeModal,
        t,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
      };
    },
  });
</script>
<style scoped></style>

<template>
  <BasicModal
    @register="register"
    :title="t('feedback.Note')"
    :draggable="false"
    :okText="t('feedback.confirm')"
    :cancelText="t('feedback.cancel')"
    :canFullscreen="false"
    centered
    @ok="
      () => {
        closeModal();
      }
    "
  >
    <a-textarea
      v-model:value="value1"
      placeholder="please enter"
      :auto-size="{ minRows: 10, maxRows: 50 }"
    />
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
      const value1 = '';
      return {
        register,
        closeModal,
        t,
        value1,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
      };
    },
  });
</script>
<style scoped></style>

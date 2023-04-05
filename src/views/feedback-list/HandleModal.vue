<template>
  <BasicModal
    @register="register"
    :draggable="false"
    title="Reminder"
    okText="Confirm"
    cancelText="Cancel"
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
  import { BasicModal, useModalInner } from '/@/components/Modal';
  export default defineComponent({
    name: '',
    components: { BasicModal },
    setup() {
      const [register, { closeModal, setModalProps }] = useModalInner();
      return {
        register,
        closeModal,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
      };
    },
  });
</script>
<style scoped></style>

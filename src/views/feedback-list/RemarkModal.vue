<template>
  <BasicModal
    @register="register"
    title="Note"
    :draggable="false"
    okText="Confirm"
    cancelText="Cancel"
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
  import { BasicModal, useModalInner } from '/@/components/Modal';
  export default defineComponent({
    name: '',
    components: { BasicModal },
    setup() {
      const [register, { closeModal, setModalProps }] = useModalInner();
      const value1 = '';
      return {
        register,
        closeModal,
        value1,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
      };
    },
  });
</script>
<style scoped></style>

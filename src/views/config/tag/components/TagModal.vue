<template>
  <BasicModal
    @register="register2"
    :okText="t('config.tag.buttonList.save')"
    :min-height="0"
    :cancelText="t('config.tag.buttonList.cancel')"
    :canFullscreen="false"
    centered
    @submit="handleSubmit"
    @ok="
      () => {
        closeModal();
      }
    "
    :title="t('config.tag.addTagGroup')"
  >
    <div>
      <span>{{ t('config.tag.tagGroupName') }}</span>
      <Input style="width: 280px" />
    </div>
    <div class="addTag">
      <div style="width: 115px">{{ t('config.tag.tagNameE') }}</div>
      <BasicForm
        @register="register"
        @submit="handleSubmit"
        :showResetButton="false"
        :showSubmitButton="false"
        class="form"
      >
        <template #add="{ field }">
          <Button v-if="Number(field) === 0" @click="add" type="link">{{
            t('config.tag.addTag')
          }}</Button>
          <Button v-if="field > 0" @click="del(field)">-</Button>
        </template>
      </BasicForm>
    </div>
  </BasicModal>
</template>

<script lang="ts" setup>
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { Button, Input } from 'ant-design-vue';
  import { ref } from 'vue';
  const { t } = useI18n();
  const n = ref(1);
  const [register2, { closeModal }] = useModalInner();
  const [register, { appendSchemaByField, removeSchemaByField, validate }] = useForm({
    labelAlign: 'left',
    schemas: [
      {
        field: '0',
        component: 'Input',
        label: ' ',
        slot: 'add',
      },
    ],
    actionColOptions: { span: 20 },
    colon: true,
  });
  async function handleSubmit() {
    try {
      const data = await validate();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  function add() {
    appendSchemaByField(
      {
        field: `${n.value}`,
        component: 'Input',
        label: '',
        slot: 'add',
      },
      '',
      true,
    );
    appendSchemaByField(
      {
        field: `field${n.value}a`,
        component: 'Input',
        label: '',
        required: true,
        colProps: {
          span: 100,
        },
      },
      '',
      true,
    );

    n.value++;
  }

  function del(field) {
    removeSchemaByField([`field${field}a`, `field${field}b`, `${field}`]);
    n.value--;
  }
</script>
<style scoped lang="less">
  .addTag {
    margin-top: 10px;
    display: flex;
  }

  .form {
    flex: 1;
  }
</style>

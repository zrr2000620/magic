<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :okText="t('config.tag.buttonList.save')"
    :min-height="0"
    :cancelText="t('config.tag.buttonList.cancel')"
    :canFullscreen="false"
    centered
    :title="t('config.tag.addTagGroup')"
    @ok="handleSubmit"
    @cancel="
      () => {
        delAll(arrlength);
      }
    "
  >
    <div class="addTag">
      <BasicForm @register="registerForm" class="form">
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
  import { BasicForm, FormSchema, useForm } from '/@/components/Form';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { Button } from 'ant-design-vue';
  import { ref } from 'vue';
  import { addTag, editTag } from '/@/api/config/tag';
  const { t } = useI18n();
  const n = ref(1);
  const editId = ref<number>();
  const defaultData = ref({});
  const emit = defineEmits(['success']);
  const arrlength = ref(0);
  const schema: FormSchema[] = [
    {
      field: 'merchantGroupName',
      component: 'Input',
      label: t('config.tag.tagGroupName'),
      required: true,
      colProps: {
        span: 20,
      },
    },
    {
      field: '0',
      component: 'Input',
      label: t('config.tag.tagNameE'),
      required: true,
      colProps: {
        span: 15,
      },
    },
    {
      field: '0',
      component: 'Input',
      label: '',
      slot: 'add',
    },
  ];
  const [
    registerForm,
    { resetFields, setFieldsValue, getFieldsValue, appendSchemaByField, removeSchemaByField },
  ] = useForm({
    labelAlign: 'right',
    schemas: schema,
    labelWidth: 120,
    actionColOptions: { span: 20 },
    showActionButtonGroup: false,
    baseColProps: { span: 7 },
  });
  const [register, { closeModal }] = useModalInner((data) => {
    console.log(data);
    resetFields();
    if (data) {
      editId.value = data.id;
      const arr = data.label.split(',');
      arrlength.value = arr.length;
      console.log(arr);
      let obj = {};
      for (let i in arr) {
        obj[i] = arr[i];
      }
      defaultData.value = { ...obj, merchantGroupName: data.merchantGroupName };
      if (arr.length) {
        for (let index = 0; index < arr.length - 1; index++) {
          console.log('+++');
          add();
        }
      }
      setFieldsValue({ ...defaultData.value });
    }
  });
  function add() {
    appendSchemaByField(
      {
        field: `${n.value}`,
        component: 'Input',
        label: ' ',
        required: true,
        colProps: {
          span: 50,
        },
      },
      '',
    );
    appendSchemaByField(
      {
        field: `${n.value}`,
        component: 'Input',
        label: '',
        slot: 'add',
      },
      '',
    );

    n.value++;
  }

  function del(field) {
    removeSchemaByField([`${field}`, `${field}`]);
    n.value--;
  }
  async function handleSubmit() {
    try {
      const data = getFieldsValue();
      const groupName = data.merchantGroupName;
      if (data.merchantGroupName) {
        delete data.merchantGroupName;
      }
      const newData = Object.values(data).join(',');
      if (!editId.value) {
        await addTag({ merchantGroupName: groupName, label: newData });
      } else {
        await editTag({ id: editId.value, merchantGroupName: groupName, label: newData });
      }
      emit('success');
      delAll(arrlength.value);
      closeModal();
    } catch (error) {}
  }

  function delAll(num: number) {
    for (let index = 1; index < num; index++) {
      del(index);
    }
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

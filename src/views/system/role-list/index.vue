<script setup lang="ts">
  import { reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';

  const go = useGo();
  const { t } = useI18n();
  const searchInfo = reactive<Recordable>({});
  const [registerTable, { reload, updateTableDataRecord }] = useTable({
    rowKey: 'id',
    columns: [
      {
        title: t('common.indexText'),
        width: 100,
      },
      {
        title: t('system.role.roleName'),
        width: 150,
        ellipsis: true,
      },
      {
        title: t('system.role.roleDesc'),
        width: 300,
        ellipsis: true,
      },
      {
        title: t('system.role.owner'),
        width: 200,
      },
      {
        title: t('system.role.createTime'),
        width: 150,
      },
    ],
    showIndexColumn: false,
    formConfig: {
      labelWidth: 120,
      schemas: [
        {
          label: t('system.role.nameSearchLabel'),
          component: 'Input',
          field: 'role',
          colProps: { span: '8' },
        },
        {
          label: t('system.role.createTimeSearchLabel'),
          field: 'range',
          component: 'RangePicker',
          colProps: { span: '8' },
        },
      ],
      autoSubmitOnEnter: true,
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    handleSearchInfoFn(info) {
      console.log('handleSearchInfoFn', info);
      return info;
    },
    actionColumn: {
      width: 200,
      title: t('common.operateText'),
    },
  });

  function handleCreate() {
    go({ name: 'RoleForm' });
  }

  function handleEdit(record: Recordable) {
    console.log(record);
  }

  function handleDelete(record: Recordable) {
    console.log(record);
  }

  function handleResetPassword() {}

  function handlerEditEnd() {}
</script>

<script lang="ts">
  export default {
    name: 'RoleList',
  };
</script>

<template>
  <PageWrapper dense contentFullHeight>
    <BasicTable @edit-end="handlerEditEnd" @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" preIcon="material-symbols:add-rounded">{{
          t('system.role.addRole')
        }}</a-button>

        <a-button>{{ t('system.admin.exportExcel') }}</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                onClick: handleEdit.bind(null, record),
                label: t('common.editText'),
              },
              {
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
                label: t('common.delText'),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </PageWrapper>
</template>

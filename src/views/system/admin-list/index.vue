<script setup lang="ts">
  import { reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';
  import { getAccountList } from '../../../api/demo/system';

  const { t } = useI18n();
  const go = useGo();
  const searchInfo = reactive<Recordable>({});
  const [registerTable, { reload, updateTableDataRecord }] = useTable({
    api: getAccountList,
    rowKey: 'id',
    columns: [
      {
        title: t('common.indexText'),
        width: 100,
      },
      {
        title: t('system.admin.account'),
        width: 150,
        ellipsis: true,
      },
      {
        title: t('system.admin.adminName'),
        width: 150,
        ellipsis: true,
      },
      {
        title: t('system.admin.mobile'),
        width: 200,
      },
      {
        title: t('system.admin.email'),
        width: 200,
      },
      {
        title: t('system.admin.role'),
        width: 150,
        ellipsis: true,
      },
      {
        title: t('system.admin.createTime'),
        width: 150,
      },
      {
        title: t('system.admin.lastLoginTime'),
        width: 150,
      },
      {
        title: t('system.admin.status'),
        width: 150,
        edit: true,
        dataIndex: 'createTime',
        editComponent: 'Select',
        editComponentProps: {
          options: [
            {
              label: 'available',
              value: 'available',
            },
          ],
        },
      },
    ],
    showIndexColumn: false,
    formConfig: {
      labelWidth: 120,
      schemas: [
        {
          field: 'account',
          component: 'FieldInput',
          colProps: { span: '8' },
          label: '',
        },
        {
          label: t('system.admin.roleSearchLabel'),
          component: 'ApiSelect',
          field: 'role',
          colProps: { span: '8' },
        },
        {
          label: t('system.admin.createTimeSearchLabel'),
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
      width: 220,
      title: t('common.operateText'),
      dataIndex: 'action',
      fixed: 'right',
      // slots: { customRender: 'action' },
    },
    scroll: {
      x: 1650,
    },
  });

  function handleCreate() {
    go({ name: 'AdminForm' });
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
    name: 'AdminList',
  };
</script>

<template>
  <PageWrapper dense contentFullHeight>
    <BasicTable @edit-end="handlerEditEnd" @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate" preIcon="material-symbols:add-rounded">{{
          t('system.admin.addUser')
        }}</a-button>

        <a-button>{{ t('system.admin.exportExcel') }}</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: t('system.admin.resetPassword'),
              },
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

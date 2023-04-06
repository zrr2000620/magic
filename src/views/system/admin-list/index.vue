<script setup lang="ts">
  import { ref } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';
  import { changeStatus, delAdmin, getAdminList } from '/@/api/system/admin';
  import { searchDateTimeRangeCover, searchFieldInputCover } from '/@/utils/table';
  import { getRoleList } from '/@/api/system/role';

  const { t } = useI18n();
  const go = useGo();
  const type = ref();
  const [registerTable, { reload }] = useTable({
    api: getAdminList,
    rowKey: 'id',
    columns: [
      {
        title: t('system.admin.account'),
        width: 150,
        ellipsis: true,
        dataIndex: 'account',
      },
      {
        title: t('system.admin.adminName'),
        width: 150,
        ellipsis: true,
        dataIndex: 'adminName',
      },
      {
        title: t('system.admin.mobile'),
        width: 200,
        dataIndex: 'phone',
      },
      {
        title: t('system.admin.email'),
        width: 200,
        dataIndex: 'mail',
      },
      {
        title: t('system.admin.role'),
        width: 150,
        ellipsis: true,
        dataIndex: 'roleName',
      },
      {
        title: t('system.admin.createTime'),
        width: 150,
        dataIndex: 'createTime',
      },
      {
        title: t('system.admin.lastLoginTime'),
        width: 150,
        dataIndex: 'lastLoginTime',
      },
      {
        title: t('system.admin.status'),
        width: 200,
        edit: true,
        dataIndex: 'bizState',
        editComponent: 'Select',
        editComponentProps: {
          options: [
            {
              label: t('system.admin.availableOption'),
              value: 1,
            },
            {
              label: t('system.admin.invalidOption'),
              value: 0,
            },
          ],
        },
        editValueMap: (v) =>
          v === 1 ? t('system.admin.availableOption') : t('system.admin.invalidOption'),
      },
    ],
    indexColumnProps: {
      title: t('common.indexText'),
      width: 100,
    },
    formConfig: {
      labelWidth: 120,
      schemas: [
        {
          field: 'keywords',
          colProps: { span: '8' },
          label: '',
          component: 'FieldInput',
          componentProps: {
            options: [
              {
                label: t('system.admin.adminName'),
                value: 'adminName',
              },
              {
                label: t('system.admin.mobile'),
                value: 'phone',
              },
              {
                label: t('system.admin.email'),
                value: 'mail',
              },
            ],
            onTypeChange: (e) => {
              type.value = e;
            },
          },
        },
        {
          label: t('system.admin.roleSearchLabel'),
          component: 'ApiSelect',
          field: 'roleId',
          colProps: { span: '8' },
          componentProps: {
            api: getRoleList,
            labelField: 'roleName',
            valueField: 'id',
          },
        },
        {
          label: t('system.admin.createTimeSearchLabel'),
          field: 'range',
          component: 'RangePicker',
          colProps: { span: '8' },
          componentProps: {
            format: 'YYYY-MM-DD',
          },
        },
      ],
      autoSubmitOnEnter: true,
      showAdvancedButton: false,
      actionColOptions: {
        span: 24,
      },
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    beforeFetch: (params) =>
      searchDateTimeRangeCover(searchFieldInputCover(params, type.value, 'keywords'), 'range'),
    actionColumn: {
      width: 220,
      title: t('common.operateText'),
      dataIndex: 'action',
      fixed: 'right',
      // slots: { customRender: 'action' },
    },
    scroll: {
      x: 1700,
    },
  });

  function handleCreate() {
    go({ name: 'AdminForm' });
  }

  function handleEdit(record: Recordable) {
    console.log(record);
    go({
      name: 'AdminForm',
      params: {
        id: record.id,
      },
    });
  }

  async function handleDelete(record: Recordable) {
    console.log(record);
    await delAdmin({ id: record.id });
    reload();
  }

  // async function handleResetPassword() {}

  async function handlerEditEnd({ record, key, value }) {
    try {
      await changeStatus({
        id: record.id,
        [key]: value,
      });
    } catch {
      reload();
    }
  }
</script>

<script lang="ts">
  export default {
    name: 'AdminList',
  };
</script>

<template>
  <PageWrapper dense contentFullHeight>
    <BasicTable @edit-end="handlerEditEnd" @register="registerTable">
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
                  title: t('system.admin.confirmDelAdmin'),
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

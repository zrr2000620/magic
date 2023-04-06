<script setup lang="ts">
  import { reactive } from 'vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { useGo } from '/@/hooks/web/usePage';
  import { delRole, getRoleList } from '/@/api/system/role';
  import { searchDateTimeRangeCover } from '/@/utils/table';

  const go = useGo();
  const { t } = useI18n();
  const searchInfo = reactive<Recordable>({});
  const [registerTable, { reload }] = useTable({
    api: getRoleList,
    rowKey: 'id',
    columns: [
      {
        title: t('system.role.roleName'),
        width: 150,
        ellipsis: true,
        dataIndex: 'roleName',
      },
      {
        title: t('system.role.roleDesc'),
        width: 300,
        ellipsis: true,
        dataIndex: 'roleDesc',
      },
      {
        title: t('system.role.owner'),
        width: 200,
        dataIndex: 'creater',
      },
      {
        title: t('system.role.createTime'),
        width: 150,
        dataIndex: 'createTime',
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
      showAdvancedButton: false,
      actionColOptions: {
        span: 8,
      },
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    beforeFetch: (params) => searchDateTimeRangeCover(params, 'range'),
    actionColumn: {
      width: 200,
      title: t('common.operateText'),
      dataIndex: 'action',
    },
    pagination: false,
  });

  function handleCreate() {
    go({ name: 'RoleForm' });
  }

  function handleEdit(record: Recordable) {
    console.log(record);
    go({
      name: 'RoleForm',
      params: {
        id: record.id,
      },
    });
  }

  async function handleDelete(record: Recordable) {
    console.log(record);
    await delRole({ id: record.id });
    reload();
  }
</script>

<script lang="ts">
  export default {
    name: 'RoleList',
  };
</script>

<template>
  <PageWrapper dense contentFullHeight>
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
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
                  title: t('system.role.confirmDelRole'),
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

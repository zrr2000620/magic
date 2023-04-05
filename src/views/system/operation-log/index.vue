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
        title: t('system.log.account'),
        width: 150,
        ellipsis: true,
      },
      {
        title: t('system.log.account'),
        width: 150,
        ellipsis: true,
      },
      {
        title: t('system.log.ip'),
        width: 150,
      },
      {
        title: t('system.log.operationTime'),
        width: 150,
      },
    ],
    showIndexColumn: false,
    formConfig: {
      labelWidth: 120,
      schemas: [
        {
          label: t('system.log.operationStaffLabel'),
          component: 'ApiSelect',
          field: 'role',
          colProps: { span: '8' },
        },
        {
          label: t('system.log.operationTimeLabel'),
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
  });
</script>

<script lang="ts">
  export default {
    name: 'RoleList',
  };
</script>

<template>
  <PageWrapper dense contentFullHeight>
    <BasicTable @register="registerTable" :searchInfo="searchInfo" />
  </PageWrapper>
</template>

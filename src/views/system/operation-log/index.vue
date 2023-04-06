<script setup lang="ts">
  import { reactive } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { getLogList, getOperateUserList } from '/@/api/system/log';
  import { searchDateTimeRangeCover } from '/@/utils/table';

  const { t } = useI18n();
  const searchInfo = reactive<Recordable>({});
  const [registerTable] = useTable({
    api: getLogList,
    rowKey: 'id',
    columns: [
      {
        title: t('system.log.account'),
        width: 150,
        ellipsis: true,
        dataIndex: 'account',
      },
      {
        title: t('system.log.name'),
        width: 150,
        ellipsis: true,
        dataIndex: 'userName',
      },
      {
        title: t('system.log.ip'),
        width: 150,
        dataIndex: 'ip',
      },
      {
        title: t('system.log.type'),
        width: 150,
        dataIndex: 'operateType',
      },
      {
        title: t('system.log.desc'),
        width: 300,
        dataIndex: 'operateDesc',
        ellipsis: true,
      },
      {
        title: t('system.log.operationTime'),
        width: 150,
        dataIndex: 'createTime',
      },
    ],
    formConfig: {
      labelWidth: 150,
      schemas: [
        {
          label: t('system.log.operationStaffLabel'),
          component: 'ApiSelect',
          field: 'operateUserId',
          colProps: { span: '8' },
          componentProps: {
            api: getOperateUserList,
            labelField: 'userName',
            valueField: 'userId',
          },
        },
        {
          label: t('system.log.operationTimeLabel'),
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
    beforeFetch: (params) => searchDateTimeRangeCover(params, 'range'),
    bordered: true,
    indexColumnProps: {
      title: t('common.indexText'),
      width: 100,
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

<script setup lang="ts">
  import { BasicTable, useTable } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  const { t } = useI18n();

  const [register] = useTable({
    dataSource: [{}, {}, {}],
    useSearchForm: true,
    showIndexColumn: false,
    bordered: true,
    rowKey: 'id',
    columns: [
      {
        title: 'Location ID',
        dataIndex: 'question',
        width: 150,
      },
      {
        title: 'Location',
        dataIndex: 'classifyName',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Phone number',
        dataIndex: 'showTimes',
        width: 200,
      },
      {
        title: 'Address Line 1',
        dataIndex: 'tags',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Address Line 2',
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'City',
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Nation',
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: 'province / State',
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Zip code',
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: 'Website address',
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Remaining message sending times',
        dataIndex: 'isShow',
        width: 300,
      },
      {
        title: 'Subscription plan',
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Expire date',
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: 'Number of employees',
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Number of contacts',
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: 'Linked platform',
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: 'Linked review site',
        dataIndex: 'isShow',
        width: 200,
      },
    ],
    formConfig: {
      labelWidth: 140,
      colon: true,
      schemas: [
        {
          field: 'keywords',
          colProps: { span: '8' },
          label: '',
          component: 'Input',
        },
      ],
      showAdvancedButton: false,
      actionColOptions: {
        span: 16,
      },
    },
  });
</script>
<template>
  <BasicTable v-bind="$attrs" @register="register">
    <template #toolbar>
      <AButton>{{ t('merchant.actions.excelExport') }}</AButton>
    </template>
  </BasicTable>
</template>

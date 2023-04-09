<script setup lang="ts">
  import { BasicTable, useTable } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  import TableTags from '/@/components/TableTags/index.vue';
  const { t } = useI18n();

  const [register] = useTable({
    dataSource: [{}, {}, {}],
    useSearchForm: true,
    showIndexColumn: false,
    bordered: true,
    rowKey: 'id',
    columns: [
      {
        title: 'User name',
        dataIndex: 'question',
        width: 150,
        ellipsis: true,
      },
      {
        title: 'Phone number',
        dataIndex: 'classifyName',
        width: 200,
      },
      {
        title: 'E-mail',
        dataIndex: 'showTimes',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Connected platform',
        dataIndex: 'createTime',
        width: 200,
      },
      {
        title: 'subscription status',
        dataIndex: 'createdBy',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Location',
        dataIndex: 'tags',
        width: 200,
      },
      {
        title: 'User tag',
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: 'Merchant Remarks',
        dataIndex: 'isShow',
        width: 300,
        ellipsis: true,
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
          },
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

    <template #bodyCell="{ column }">
      <template v-if="column.key === 'tags'">
        <TableTags />
      </template>
    </template>
  </BasicTable>
</template>

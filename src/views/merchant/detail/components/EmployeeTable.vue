<script setup lang="ts">
  import { BasicTable, useTable } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { Tooltip } from 'ant-design-vue';
  const { t } = useI18n();

  const [register] = useTable({
    dataSource: [{}, {}, {}],
    useSearchForm: true,
    showIndexColumn: false,
    bordered: true,
    rowKey: 'id',
    columns: [
      {
        title: "Employee's name",
        dataIndex: 'question',
        width: 150,
        ellipsis: true,
      },
      {
        title: 'E-mail',
        dataIndex: 'classifyName',
        width: 200,
      },
      {
        title: 'Phone number',
        dataIndex: 'showTimes',
        width: 200,
      },
      {
        title: 'Location',
        dataIndex: 'tags',
        width: 200,
      },
      {
        title: 'Roles and Permissions',
        dataIndex: 'isShow',
        width: 200,
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

    <template #bodyCell="{ column }">
      <template v-if="column.key === 'tags'">
        <Tooltip>
          <template #title>
            <div class="text-lg w-[200px]">Location</div>
            <div class="text-sm pl-2">
              <p>- Wynyard</p>
              <p>- Broadway</p>
              <p>- Broadway</p>
              <p>- Broadway</p>
              <p>- Broadway</p>
              <p>- Broadway</p>
            </div>
          </template>
          <span>2</span>
        </Tooltip>
      </template>
    </template>
  </BasicTable>
</template>

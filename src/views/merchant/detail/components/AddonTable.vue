<script setup lang="ts">
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useModal } from '/@/components/Modal';
  import { RemarkModal } from '.';
  const { t } = useI18n();

  const [registerRemark, { openModal: openRemark }] = useModal();

  const [registerAddon] = useTable({
    dataSource: [{}, {}, {}],
    useSearchForm: true,
    showIndexColumn: false,
    bordered: true,
    rowKey: 'id',
    columns: [
      {
        title: 'Order number',
        dataIndex: 'question',
        width: 150,
        ellipsis: true,
      },
      {
        title: 'Purchase time',
        dataIndex: 'classifyName',
        width: 150,
        ellipsis: true,
      },
      {
        title: 'Location',
        dataIndex: 'showTimes',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Number of purchases',
        dataIndex: 'createTime',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Payment amount',
        dataIndex: 'createdBy',
        width: 200,
        ellipsis: true,
      },
      {
        title: 'Payment status',
        dataIndex: 'tags',
        width: 200,
      },
      {
        title: 'Expire date',
        dataIndex: 'isShow',
        width: 150,
      },
      {
        title: 'Payment method',
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: 'Subscribe Notes',
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
          field: `range`,
          label: 'Expire date',
          component: 'RangePicker',
          colProps: {
            span: 8,
          },
          componentProps: {
            style: {
              width: '100%',
            },
          },
        },
        {
          field: `range`,
          label: 'Purchase time',
          component: 'RangePicker',
          colProps: {
            span: 8,
          },
          componentProps: {
            style: {
              width: '100%',
            },
          },
        },
        {
          field: `range`,
          label: 'Platform',
          component: 'Select',
          colProps: {
            span: 8,
          },
        },
      ],
      showAdvancedButton: false,
      actionColOptions: {
        span: 24,
      },
    },
    actionColumn: {
      dataIndex: 'action',
      width: 200,
      fixed: 'right',
      title: t('common.operateText'),
    },
  });
</script>
<template>
  <BasicTable v-bind="$attrs" @register="registerAddon">
    <template #toolbar>
      <AButton>{{ t('merchant.actions.excelExport') }}</AButton>
    </template>
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'action'">
        <TableAction
          :actions="[
            {
              label: t('merchant.actions.platformRemark'),
              onClick: () => openRemark(),
              // ifShow: record.FeedbackID === 'FK643261',
              // placement: 'left',
              // confirm: handlerChangeStatus.bind(null, record),
            },
            {
              label: 'Details',
            },
          ]"
        >
          <template #more>
            <Button type="link">
              <span class="mr-2">{{ t('merchant.actions.action') }}</span>
              <CaretDownOutlined />
            </Button>
          </template>
        </TableAction>
      </template>
    </template>
  </BasicTable>
  <RemarkModal @register="registerRemark" />
</template>

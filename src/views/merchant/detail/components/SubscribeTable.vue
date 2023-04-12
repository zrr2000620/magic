<script setup lang="ts">
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useModal } from '/@/components/Modal';
  import { RemarkModal } from '.';
  const { t } = useI18n();

  const [registerRemark, { openModal: openRemark }] = useModal();

  const [registerSubscribe] = useTable({
    dataSource: [{}, {}, {}],
    useSearchForm: true,
    showIndexColumn: false,
    bordered: true,
    rowKey: 'id',
    columns: [
      {
        title: t('merchant.texts.orderNumber'),
        dataIndex: 'question',
        width: 150,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.subTime'),
        dataIndex: 'classifyName',
        width: 150,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.subLocation'),
        dataIndex: 'showTimes',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.subPlan'),
        dataIndex: 'createTime',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.subMethod'),
        dataIndex: 'createdBy',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.payAmount'),
        dataIndex: 'tags',
        width: 200,
      },
      {
        title: t('merchant.texts.balanceDeduction'),
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.refundBalance'),
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: t('merchant.texts.payStatus'),
        dataIndex: 'isShow',
        width: 150,
      },
      {
        title: t('merchant.texts.subStatus'),
        dataIndex: 'isShow',
        width: 150,
      },
      {
        title: t('merchant.texts.subWay'),
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.expireDate'),
        dataIndex: 'isShow',
        width: 150,
      },
      {
        title: t('merchant.texts.payMethod'),
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: t('merchant.texts.subRemark'),
        dataIndex: 'isShow',
        width: 300,
      },
    ],
    formConfig: {
      labelWidth: 140,
      colon: true,
      schemas: [
        {
          field: `industry`,
          label: t('merchant.texts.subMethod'),
          component: 'Select',
          componentProps: {
            options: [
              {
                label: t('config.faq.enableOption'),
                value: 1,
              },
              {
                label: t('config.faq.disableOption'),
                value: 0,
              },
            ],
          },
          colProps: {
            span: 8,
          },
        },
        {
          field: `range`,
          label: t('merchant.texts.subTime'),
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
          label: t('merchant.texts.subPlan'),
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
  <BasicTable v-bind="$attrs" @register="registerSubscribe">
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
              label: t('merchant.actions.detail'),
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

<template>
  <PageWrapper dense>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: t('routes.order.table.remake'),
                onClick: remake.bind(null, record),
              },
              {
                label: t('routes.order.table.details'),
                onClick: detail.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <RemakeModal @register="register2" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { useTable, BasicTable, TableAction, FormSchema, BasicColumn } from '/@/components/Table';
  import RemakeModal from './components/RemakeModal.vue';
  import { useModal } from '/@/components/Modal';
  import { useGo } from '/@/hooks/web/usePage';
  const { t } = useI18n();
  const go = useGo();
  const [register2, { openModal: remake }] = useModal();
  const columns: BasicColumn[] = [
    {
      title: t('routes.order.table.orderNum'),
      dataIndex: 'orderNum',
      width: 150,
    },
    {
      title: t('routes.order.table.subTime'),
      dataIndex: 'subTime',
      width: 150,
    },
    {
      title: t('routes.order.table.merchantName'),
      dataIndex: 'account',
      width: 150,
      ellipsis: true,
    },
    {
      title: t('routes.order.table.phone'),
      dataIndex: 'account',
      width: 200,
    },
    {
      title: t('routes.order.table.location'),
      dataIndex: 'account',
      width: 200,
      ellipsis: true,
    },
    {
      title: t('routes.order.table.subPlan'),
      dataIndex: 'account',
      width: 200,
      ellipsis: true,
    },
    {
      title: t('routes.order.table.subType'),
      dataIndex: 'account',
      width: 200,
      ellipsis: true,
    },
    {
      title: t('routes.order.table.balance'),
      dataIndex: 'account',
      width: 200,
    },
    {
      title: t('routes.order.table.refund'),
      dataIndex: 'account',
      width: 200,
      ellipsis: true,
    },
    {
      title: t('routes.order.table.payStatus'),
      dataIndex: 'account',
      width: 150,
    },
    {
      title: t('routes.order.table.subStatus'),
      dataIndex: 'account',
      width: 150,
    },
    {
      title: t('routes.order.table.subWay'),
      dataIndex: 'account',
      width: 200,
      ellipsis: true,
    },
    {
      title: t('routes.order.table.expireDate'),
      dataIndex: 'account',
      width: 200,
    },
    {
      title: t('routes.order.table.payMethod'),
      dataIndex: 'account',
      width: 150,
    },
    {
      title: t('routes.order.table.subNote'),
      dataIndex: 'account',
      width: 300,
      ellipsis: true,
    },
  ];
  const searchForm: FormSchema[] = [
    {
      field: `question`,
      label: '',
      component: 'FieldInput',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: t('merchant.texts.merchantID'),
            value: '1',
          },
          {
            label: t('merchant.texts.merchantName'),
            value: '1',
          },
          {
            label: t('merchant.texts.holder'),
            value: '1',
          },
          {
            label: t('merchant.texts.mobile'),
            value: '1',
          },
          {
            label: t('merchant.texts.email'),
            value: '1',
          },
        ],
      },
    },
    {
      field: 'time',
      label: t('routes.order.orderDes.payTime'),
      component: 'DatePicker',
      colProps: { span: 8 },
      componentProps: {
        style: {
          width: '100%',
        },
      },
    },
    {
      field: 'time1',
      label: t('routes.order.table.expiration'),
      component: 'Input',
      colProps: { span: 8 },
    },
    {
      field: 'time1',
      label: t('routes.order.table.subPlan'),
      component: 'Select',
      colProps: { span: 8 },
      componentProps: {
        options: [
          {
            label: '123',
            value: 0,
          },
          {
            label: '1234',
            value: 1,
          },
        ],
      },
    },
    {
      field: 'time1',
      label: t('routes.order.table.subType'),
      component: 'Select',
      colProps: { span: 8 },
      componentProps: {
        options: [
          {
            label: '123',
            value: 0,
          },
          {
            label: '1234',
            value: 1,
          },
        ],
      },
    },
    {
      field: 'time1',
      label: t('routes.order.table.subWay'),
      component: 'Select',
      colProps: { span: 8 },
      componentProps: {
        options: [
          {
            label: '123',
            value: 0,
          },
          {
            label: '1234',
            value: 1,
          },
        ],
      },
    },
    {
      field: 'time1',
      label: t('routes.order.table.subStatus'),
      component: 'Select',
      colProps: { span: 8 },
      componentProps: {
        options: [
          {
            label: '123',
            value: 0,
          },
          {
            label: '1234',
            value: 1,
          },
        ],
      },
    },
  ];
  const [registerTable] = useTable({
    dataSource: [{}, {}, {}],
    useSearchForm: true,
    columns: columns,
    formConfig: {
      colon: true,
      labelWidth: 140,
      schemas: searchForm,
      showAdvancedButton: false,
      actionColOptions: {
        span: 16,
      },
    },
    showIndexColumn: false,
    bordered: true,
    rowKey: 'id',
    actionColumn: {
      dataIndex: 'action',
      width: 250,
      fixed: 'right',
      title: t('common.operateText'),
    },
  });
  const detail = () => {
    go('subscription/SubscriptionDetails');
  };
</script>
<style scoped></style>

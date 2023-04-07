<template>
  <PageWrapper dense contentFullHeight>
    <BasicTable @register="registerTable" @fetch-success="(e) => (total = e.toal)">
      <template #toolbar>
        <Button type="primary">+ {{ t('config.faq.addFaq') }}</Button>
        <Button>{{ t('config.faq.FAQCategory') }}</Button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: record.isShow ? t('config.faq.disable') : t('config.faq.enable'),
                // ifShow: record.FeedbackID === 'FK643261',
                // placement: 'left',
                // confirm: handlerChangeStatus.bind(null, record),
              },
              {
                label: t('config.faq.edit'),
                // onClick: handleEdit.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
      <template #title>123</template>
    </BasicTable>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { useTable, BasicTable, TableAction } from '/@/components/Table';
  import { Button } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { ref, computed } from 'vue';
  const { t } = useI18n();
  const total = ref(0);
  const selectedRowKeys = ref<number[]>([]);
  const chooseTotalText = computed(() =>
    t('merchant.texts.chooseTotal', { total: total.value, num: selectedRowKeys.value.length }),
  );
  const [registerTable] = useTable({
    dataSource: [{}, {}, {}],
    useSearchForm: true,
    showIndexColumn: false,
    bordered: true,
    rowKey: 'id',
    columns: [
      {
        title: t('merchant.texts.merchantID'),
        dataIndex: 'question',
        width: 150,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.merchantName'),
        dataIndex: 'classifyName',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.holder'),
        dataIndex: 'showTimes',
        width: 150,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.mobile'),
        dataIndex: 'createTime',
        width: 200,
      },
      {
        title: t('merchant.texts.email'),
        dataIndex: 'createdBy',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.merchantTag'),
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: t('merchant.texts.industry'),
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.businessLocation'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('merchant.texts.revenueAmount'),
        dataIndex: 'isShow',
        width: 300,
      },
      {
        title: t('merchant.texts.averageScore'),
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: t('merchant.texts.contactNum'),
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: t('merchant.texts.subscribeContactNum'),
        dataIndex: 'isShow',
        width: 300,
      },
      {
        title: t('merchant.texts.registrationTime'),
        dataIndex: 'isShow',
        width: 150,
      },
      {
        title: t('merchant.texts.subscribePlan'),
        dataIndex: 'isShow',
        width: 300,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.expireDate'),
        dataIndex: 'isShow',
        width: 150,
      },
      {
        title: t('merchant.texts.subscribePayAmount'),
        dataIndex: 'isShow',
        width: 300,
      },
      {
        title: t('merchant.texts.messageNumAmount'),
        dataIndex: 'isShow',
        width: 300,
      },
      {
        title: t('merchant.texts.status'),
        dataIndex: 'isShow',
        width: 150,
      },
      {
        title: t('merchant.texts.remark'),
        dataIndex: 'isShow',
        width: 300,
        ellipsis: true,
      },
    ],
    formConfig: {
      labelWidth: 100,
      colon: true,
      schemas: [
        {
          field: `question`,
          label: t('config.faq.keyWord'),
          component: 'Input',
          colProps: {
            span: 6,
          },
        },
        {
          field: `range`,
          label: t('config.faq.creatieTime'),
          component: 'RangePicker',
          colProps: {
            span: 6,
          },
        },
        {
          field: `industry`,
          label: t('merchant.texts.industry'),
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
            span: 6,
          },
        },
        {
          field: `range`,
          label: t('merchant.texts.registrationTime'),
          component: 'RangePicker',
          colProps: {
            span: 6,
          },
        },
        {
          field: `question`,
          label: t('merchant.texts.payment'),
          component: 'Input',
          colProps: {
            span: 6,
          },
        },
        {
          field: `range`,
          label: t('config.faq.creatieTime'),
          component: 'RangePicker',
          colProps: {
            span: 6,
          },
        },
        {
          field: `question`,
          label: t('config.faq.keyWord'),
          component: 'Input',
          colProps: {
            span: 6,
          },
        },
        {
          field: `range`,
          label: t('config.faq.creatieTime'),
          component: 'RangePicker',
          colProps: {
            span: 6,
          },
        },
        {
          field: `question`,
          label: t('config.faq.keyWord'),
          component: 'Input',
          colProps: {
            span: 6,
          },
        },
        {
          field: `range`,
          label: t('config.faq.creatieTime'),
          component: 'RangePicker',
          colProps: {
            span: 6,
          },
        },
      ],
      showAdvancedButton: false,
    },
    actionColumn: {
      dataIndex: 'action',
      width: 200,
      fixed: 'right',
      title: t('common.operateText'),
    },
    rowSelection: {
      onChange: (keys) => {
        selectedRowKeys.value = keys as number[];
      },
    },
    title: chooseTotalText,
  });
</script>
<style scoped></style>

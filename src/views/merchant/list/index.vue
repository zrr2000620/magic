<template>
  <PageWrapper dense>
    <BasicTable @register="registerTable"
      ><template #toolbar>
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
    </BasicTable>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { useTable, BasicTable, TableAction } from '/@/components/Table';
  import { Button } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  const { t } = useI18n();
  const [registerTable] = useTable({
    useSearchForm: true,
    rowKey: 'id',
    columns: [
      {
        title: t('routes.merchant.texts.merchantID'),
        dataIndex: 'question',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('routes.merchant.texts.merchantName'),
        dataIndex: 'classifyName',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('routes.merchant.texts.holder'),
        dataIndex: 'showTimes',
        width: 150,
      },
      {
        title: t('routes.merchant.texts.mobile'),
        dataIndex: 'createTime',
        width: 150,
      },
      {
        title: t('routes.merchant.texts.email'),
        dataIndex: 'createdBy',
        width: 200,
      },
      {
        title: t('routes.merchant.texts.merchantTag'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.industry'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.businessLocation'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.revenueAmount'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.averageScore'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.contactNum'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.subscribeContactNum'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.registrationTime'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.subscribePlan'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.expireDate'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.subscribePayAmount'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.messageNumAmount'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.status'),
        dataIndex: 'isShow',
        width: 100,
      },
      {
        title: t('routes.merchant.texts.remark'),
        dataIndex: 'isShow',
        width: 100,
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
          label: t('routes.merchant.texts.industry'),
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
          label: t('routes.merchant.texts.registrationTime'),
          component: 'RangePicker',
          colProps: {
            span: 6,
          },
        },
        {
          field: `question`,
          label: t('routes.merchant.texts.payment'),
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
    },
  });
</script>
<style scoped></style>

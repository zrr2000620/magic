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
        title: t('merchant.texts.locationId'),
        dataIndex: 'question',
        width: 150,
      },
      {
        title: t('merchant.texts.locationName'),
        dataIndex: 'classifyName',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.mobile'),
        dataIndex: 'showTimes',
        width: 200,
      },
      {
        title: t('merchant.texts.addr1'),
        dataIndex: 'tags',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.addr2'),
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.city'),
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.nation'),
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: t('merchant.texts.province'),
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.zipCode'),
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: t('merchant.texts.website'),
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.messageSendTimes'),
        dataIndex: 'isShow',
        width: 300,
      },
      {
        title: t('merchant.texts.subPlan'),
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.expireDate'),
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: t('merchant.texts.employerNum'),
        dataIndex: 'isShow',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.contactNum'),
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: t('merchant.texts.linkedPlatform'),
        dataIndex: 'isShow',
        width: 200,
      },
      {
        title: t('merchant.texts.linkedReviewSite'),
        dataIndex: 'isShow',
        width: 200,
      },
    ],
    formConfig: {
      labelWidth: 140,
      colon: true,
      schemas: [
        {
          field: t('config.tag.keyWord'),
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

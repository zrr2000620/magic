<template>
  <PageWrapper dense>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <Button @click="addFAQ" type="primary">+ {{ t('config.faq.addFaq') }}</Button>
        <Button @click="FAQCategory">{{ t('config.faq.FAQCategory') }}</Button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'isShow'">
          {{ record.isShow === 1 ? t('config.faq.enabled') : t('config.faq.disabled') }}
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: record.isShow ? t('config.faq.disable') : t('config.faq.enable'),
                // ifShow: record.FeedbackID === 'FK643261',
                popConfirm: {
                  title: t('config.faq.changeStatusMsg', {
                    status: record.isShow ? 'hide' : 'show',
                  }),
                  placement: 'left',
                  confirm: handlerChangeStatus.bind(null, record),
                },
              },
              {
                label: t('config.faq.edit'),
                onClick: handleEdit.bind(null, record),
              },
              {
                label: t('config.faq.delete'),
                popConfirm: {
                  title: t('config.faq.delMsg'),
                  placement: 'left',
                  confirm: handlerDel.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { PageWrapper } from '/@/components/Page';
  import { useTable, BasicTable, TableAction } from '/@/components/Table';
  import { Button } from 'ant-design-vue';
  import { useGo } from '/@/hooks/web/usePage';
  import { getFAQList, getFAQCategoryList, delFAQ, editFAQ } from '/@/api/config/faq';
  import { searchDateTimeRangeCover } from '/@/utils/table';
  const { t } = useI18n();
  const go = useGo();
  const [registerTable, { reload }] = useTable({
    api: getFAQList,
    rowKey: 'id',
    columns: [
      {
        title: t('config.faq.title'),
        dataIndex: 'question',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('config.faq.categoryM'),
        dataIndex: 'classifyName',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('config.faq.viewTimes'),
        dataIndex: 'showTimes',
        width: 150,
      },
      {
        title: t('config.faq.createTime'),
        dataIndex: 'createTime',
        width: 150,
      },
      {
        title: t('config.faq.creator'),
        dataIndex: 'createdBy',
        width: 200,
      },
      {
        title: t('config.faq.stateM'),
        dataIndex: 'isShow',
        width: 100,
      },
    ],
    actionColumn: {
      width: 200,
      title: t('config.faq.operate'),
      dataIndex: 'action',
      fixed: 'right',
      // slots: { customRender: 'action' },
    },
    indexColumnProps: {
      title: t('common.indexText'),
      width: 100,
    },
    formConfig: {
      labelWidth: 120,
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
          field: 'classifyId',
          label: t('config.faq.category'),
          component: 'ApiSelect',
          colProps: {
            span: 6,
          },
          componentProps: {
            api: getFAQCategoryList,
            labelField: 'classifyName',
            valueField: 'id',
          },
        },
        {
          field: `isShow`,
          label: t('config.faq.state'),
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
      ],
      actionColOptions: {
        span: 24,
      },
      showAdvancedButton: false,
    },
    useSearchForm: true,
    bordered: true,
    beforeFetch: (params) => searchDateTimeRangeCover(params, 'range'),
  });

  async function handlerDel(record) {
    await delFAQ({ id: record.id });
    reload();
  }

  function handleEdit(record) {
    go({
      name: 'FAQForm',
      params: {
        id: record.id,
      },
    });
  }

  async function handlerChangeStatus(record) {
    await editFAQ({
      id: record.id,
      isShow: record.isShow ? 0 : 1,
    });
    reload();
  }

  const addFAQ = () => {
    // go();
    go({
      name: 'FAQForm',
    });
  };
  const FAQCategory = () => {
    console.log('FAQCategory');
    // go();
    go({
      name: 'FAQCategoryList',
    });
  };
</script>
<style scoped lang="less"></style>

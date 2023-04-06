<template>
  <PageWrapper dense>
    <template #headerContent>
      <BasicTable :dataSource="[{}, {}]" @register="registerTable">
        <template #toolbar>
          <Button @click="addFAQ" type="primary">+ {{ t('config.faq.addFaq') }}</Button>
          <Button @click="FAQCategory">{{ t('config.faq.FAQCategory') }}</Button>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
                {
                  label: t('config.faq.disable'),
                  onClick: handle.bind(null, record),
                  // ifShow: record.FeedbackID === 'FK643261',
                },
                {
                  label: t('config.faq.edit'),
                  onClick: edit.bind(null, record),
                },
                {
                  label: t('config.faq.delete'),
                  onClick: del.bind(null, record),
                },
              ]"
            />
          </template>
        </template>
      </BasicTable>
    </template>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { PageWrapper } from '/@/components/Page';
  import { useTable, BasicTable, TableAction } from '/@/components/Table';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Button } from 'ant-design-vue';
  import { useGo } from '/@/hooks/web/usePage';
  const { t } = useI18n();
  const go = useGo();
  const { createConfirm } = useMessage();
  const [registerTable] = useTable({
    columns: [
      {
        title: t('config.faq.no'),
        dataIndex: 'id',
        fixed: 'left',
        width: 200,
      },
      {
        title: t('config.faq.title'),
        dataIndex: 'idd',
        fixed: 'left',
        width: 200,
      },
      {
        title: t('config.faq.categoryM'),
        dataIndex: 'idd',
        fixed: 'left',
        width: 200,
      },
      {
        title: t('config.faq.viewTimes'),
        dataIndex: 'idd',
        fixed: 'left',
        width: 200,
      },
      {
        title: t('config.faq.createTime'),
        dataIndex: 'idd',
        fixed: 'left',
        width: 200,
      },
      {
        title: t('config.faq.categoryM'),
        dataIndex: 'idd',
        fixed: 'left',
        width: 200,
      },
      {
        title: t('config.faq.stateM'),
        dataIndex: 'idd',
        fixed: 'left',
        width: 200,
      },
    ],
    actionColumn: {
      width: 250,
      title: t('config.faq.operate'),
      dataIndex: 'action',
      // slots: { customRender: 'action' },
    },
    formConfig: {
      labelWidth: 120,
      schemas: [
        {
          field: `field`,
          label: t('config.faq.keyWord'),
          component: 'Input',
        },
        {
          field: `field1`,
          label: t('config.faq.creatieTime'),
          component: 'Input',
        },
        {
          field: `field2`,
          label: t('config.faq.category'),
          component: 'Input',
        },
        {
          field: `field3`,
          label: t('config.faq.state'),
          component: 'Input',
        },
      ],
    },
    showIndexColumn: false,
    useSearchForm: true,
    rowKey: 'id',
  });
  const del = () => {
    createConfirm({
      iconType: 'error',
      content: t('config.faq.delMsg'),
    });
  };
  const handle = () => {
    createConfirm({
      iconType: 'error',
      content: t('config.faq.disMsg'),
    });
  };
  const edit = () => {
    console.log(123213);
  };
  const addFAQ = () => {
    console.log('123123');
    // go();
    go('faq/faq/addFAQ');
  };
  const FAQCategory = () => {
    console.log('FAQCategory');
    // go();
    go('faq/category/list');
  };
</script>
<style scoped lang="less">
  .magic-basic-table-header__toolbar {
    justify-content: space-between !important;
  }
</style>

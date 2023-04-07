<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary"> {{ t('common.exportExcel') }}</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: t('feedback.handle'),
                onClick: handleFeedback.bind(null, record),
                ifShow: record.processingStatus === 0,
              },
              {
                label: t('feedback.remark'),
                onClick: handleRemark.bind(null, record),
              },
              {
                label: t('feedback.delete'),
                popConfirm: {
                  title: t('system.admin.confirmDelAdmin'),
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'processingStatus'">
          {{ record.processingStatus ? t('feedback.processed') : t('feedback.noProcess') }}
        </template>
      </template>
    </BasicTable>
    <HandleModal @register="register" @success="() => reload()" />
    <RemarkModal @register="register2" @success="() => reload()" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicColumn, BasicTable, useTable, TableAction } from '/@/components/Table';
  import HandleModal from './HandleModal.vue';
  import RemarkModal from './RemarkModal.vue';
  import { useModal } from '/@/components/Modal';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { delFeedback, getFeedbackList } from '/@/api/feedback';
  import { ref } from 'vue';
  import { searchDateTimeRangeCover } from '/@/utils/table';
  const { t } = useI18n();
  const searchInfo = ref<Recordable>({});
  const columns: BasicColumn[] = [
    {
      title: t('feedback.feedbackID'),
      dataIndex: 'id',
      width: 120,
    },
    {
      title: t('feedback.merchantName'),
      dataIndex: 'merchantName',
      width: 200,
    },
    {
      title: t('feedback.Name'),
      dataIndex: 'messageName',
      width: 200,
    },
    {
      title: t('feedback.PhoneNumber'),
      dataIndex: 'messagePhoneNumber',
      width: 200,
    },
    {
      title: t('feedback.FeedbackContent'),
      dataIndex: 'feedbackContent',
      width: 300,
      ellipsis: true,
    },
    {
      title: t('feedback.FeedbackTime'),
      dataIndex: 'feedbackTime',
      width: 150,
    },
    {
      title: t('feedback.FeedbackStatus'),
      dataIndex: 'processingStatus',
      width: 150,
    },
    {
      title: t('feedback.ProcessEmployees'),
      dataIndex: 'processedBy',
      width: 200,
    },
    {
      title: t('feedback.Note'),
      dataIndex: 'remarks',
      width: 300,
      ellipsis: true,
    },
  ];
  const [registerTable, { reload }] = useTable({
    api: getFeedbackList,
    rowKey: 'id',
    columns: columns,
    searchInfo,
    useSearchForm: true,
    formConfig: {
      labelWidth: 120,
      schemas: [
        {
          field: 'keywords',
          colProps: { span: '8' },
          label: '',
          component: 'FieldInput',
          componentProps: {
            options: [
              {
                label: t('feedback.MerchantID'),
                value: 1,
              },
              {
                label: t('feedback.merchantName'),
                value: 2,
              },
              {
                label: t('feedback.Owner'),
                value: 3,
              },
              {
                label: t('feedback.phoneNumber'),
                value: 4,
              },
              {
                label: t('feedback.EMail'),
                value: 5,
              },
            ],
            onTypeChange: (e) => {
              searchInfo.value.type = e;
            },
          },
        },
        {
          label: t('feedback.FeedbackStatus'),
          component: 'Select',
          field: 'processingStatus',
          colProps: { span: '8' },
          componentProps: {
            options: [
              {
                label: t('feedback.processed'),
                value: 1,
              },
              {
                label: t('feedback.noProcess'),
                value: 0,
              },
            ],
          },
        },
        {
          label: t('feedback.FeedbackTime'),
          field: 'range',
          component: 'RangePicker',
          colProps: { span: '8' },
          componentProps: {
            format: 'YYYY-MM-DD',
          },
        },
      ],
      autoSubmitOnEnter: true,
      showAdvancedButton: false,
      actionColOptions: {
        span: 24,
      },
    },
    showIndexColumn: false,
    actionColumn: {
      width: 250,
      title: 'operate',
      dataIndex: 'action',
    },
    scroll: {
      x: 1600,
    },
    beforeFetch: (params) => searchDateTimeRangeCover(params, 'range'),
    bordered: true,
  });
  const [register, { openModal: openHandle }] = useModal();
  const [register2, { openModal: openRemark, setModalProps: setRemarkProps }] = useModal();
  // const [register3, { openModal: del }] = useModal();
  async function handleDelete(record: Recordable) {
    console.log(record);
    await delFeedback({ id: record.id });
    reload();
  }

  async function handleRemark(record) {
    setRemarkProps({
      title: t('feedback.Note'),
    });
    openRemark(true, record);
  }

  function handleFeedback(record) {
    openHandle(true, record);
  }
</script>

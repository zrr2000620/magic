<template>
  <div class="p-4">
    <BasicTable
      @register="registerTable"
      :columns="columns"
      :dataSource="data"
      useSearchForm
      getForm=""
      :pagination="{ pageSize: 20 }"
    >
      <template #form-custom>
        <div style="display: flex">
          <a-select ref="select" value="choose a type" style="width: 120px">
            <a-select-option value="choose a type">Jack</a-select-option>
            <a-select-option value="Merchant ID">Lucy</a-select-option>
            <a-select-option value="Merchant name">Lucy</a-select-option>
            <a-select-option value="Owner">Lucy</a-select-option>
            <a-select-option value="Phone number">Lucy</a-select-option>
            <a-select-option value="E-mail">Lucy</a-select-option>
          </a-select>
          <a-input />
        </div>
      </template>

      <template #toolbar>
        <a-button type="primary"> Export CSV </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: 'handle',
                onClick: handle.bind(null, record),
                ifShow: record.FeedbackID === 'FK643261',
              },
              {
                label: 'remark',
                onClick: remark.bind(null, record),
              },
              {
                label: 'delete',
                onClick: del.bind(null, record),
              },
            ]"
          />
        </template>
        <template v-if="column.key === 'FeedbackStatus'"
          ><span v-if="record.FeedbackStatus == 'Pending'" style="color: red">{{
            record.FeedbackStatus
          }}</span>
        </template>
      </template>
    </BasicTable>
    <HandleModal @register="register" />
    <RemarkModal @register="register2" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicColumn, BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getFormConfig } from './tableData';
  import HandleModal from './HandleModal.vue';
  import RemarkModal from './RemarkModal.vue';
  import { useModal } from '/@/components/Modal';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Select, SelectOption, Input } from 'ant-design-vue';
  const columns: BasicColumn[] = [
    {
      title: 'id',
      dataIndex: 'name',
      auth: 'test', // 根据权限控制是否显示: 无权限，不显示
    },
    {
      title: 'Feedback ID',
      dataIndex: 'FeedbackID',
      auth: 'super', // 同时根据权限控制是否显示
    },
    {
      title: 'Merchant name',
      dataIndex: 'MerchantName',
      auth: 'super', // 同时根据权限控制是否显示
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      auth: 'super', // 同时根据权限控制是否显示
    },
    {
      title: 'Phone number',
      dataIndex: 'PhoneNumber',
      auth: 'super', // 同时根据权限控制是否显示
    },
    {
      title: 'Feedback content',
      dataIndex: 'FeedbackContent',
      auth: 'super', // 同时根据权限控制是否显示
    },
    {
      title: 'Feedback time',
      dataIndex: 'FeedbackTime',
      auth: 'super', // 同时根据权限控制是否显示
    },
    {
      title: 'Feedback status',
      dataIndex: 'FeedbackStatus',
      auth: 'super', // 同时根据权限控制是否显示
      type: 'radio',
      enmu: [{ 1: '123123' }, { 2: 'alsdhal' }],
    },
    {
      title: 'Process employees',
      dataIndex: 'ProcessEmployees',
      auth: 'super', // 同时根据权限控制是否显示
    },
    {
      title: 'Note',
      dataIndex: 'Note',
      auth: 'super', // 同时根据权限控制是否显示
    },
  ];
  export default defineComponent({
    components: {
      BasicTable,
      [Select.name]: Select,
      // eslint-disable-next-line vue/no-unused-components
      SelectOption,
      [Input.name]: Input,
      TableAction,
      HandleModal,
      RemarkModal,
    },
    setup() {
      const [registerTable] = useTable({
        // api: demoListApi,
        columns: columns,
        useSearchForm: true,
        formConfig: getFormConfig(),
        columns: columns,
        showIndexColumn: false,
        actionColumn: {
          width: 250,
          title: 'operate',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });
      const [register, { openModal: handle }] = useModal();
      const [register2, { openModal: remark }] = useModal();
      const { createConfirm } = useMessage();
      // const [register3, { openModal: del }] = useModal();
      function del() {
        createConfirm({
          iconType: 'error',
          content: '你确定要删除这行内容吗？',
        });
      }
      return {
        registerTable,
        // getFormValues,
        columns: columns,
        del,
        remark,
        handle,
        register,
        register2,
        // register3,
        data: [
          {
            FeedbackID: 'FK643261',
            Name: 'Joel',
            MerchantName: 'Tencent',
            PhoneNumber: '(086)13412341234',
            FeedbackContent: '个人觉得很适合这个项目',
            FeedbackTime: '2022/10/10 18:00:00',
            FeedbackStatus: 'Pending',
            ProcessEmployees: '无',
            Note: '',
          },
          {
            FeedbackID: 'FK643262',
            Name: 'Joel',
            MerchantName: 'Apple',
            PhoneNumber: '(086)13412341234',
            FeedbackContent: '个人觉得很适合这个项目',
            FeedbackTime: '2022/10/10 18:00:00',
            FeedbackStatus: 'Processed',
            ProcessEmployees: 'admin',
            Note: '你好，已收到您的通知，我们将尽快处理',
          },
          {
            FeedbackID: 'FK643263',
            Name: 'Joel',
            MerchantName: 'Amazon',
            PhoneNumber: '(086)13412341234',
            FeedbackContent: '个人觉得很适合这个项目',
            FeedbackTime: '2022/10/10 18:00:00',
            FeedbackStatus: 'Processed',
            ProcessEmployees: 'admin',
            Note: '你好，已收到您的通知，我们将尽快处理',
          },
          {
            FeedbackID: 'FK643264',
            Name: 'Joel',
            MerchantName: 'Tesla',
            PhoneNumber: '(086)13412341234',
            FeedbackContent: '个人觉得很适合这个项目',
            FeedbackTime: '2022/10/10 18:00:00',
            FeedbackStatus: 'Processed',
            ProcessEmployees: 'admin',
            Note: '你好，已收到您的通知，我们将尽快处理',
          },
          {
            FeedbackID: 'FK643265',
            Name: 'Joel',
            MerchantName: 'eBay',
            PhoneNumber: '(086)13412341234',
            FeedbackContent: '个人觉得很适合这个项目',
            FeedbackTime: '2022/10/10 18:00:00',
            FeedbackStatus: 'Processed',
            ProcessEmployees: 'admin',
            Note: '你好，已收到您的通知，我们将尽快处理',
          },
        ],
      };
    },
  });
</script>

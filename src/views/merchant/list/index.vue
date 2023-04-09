<template>
  <PageWrapper dense contentFullHeight>
    <BasicTable @register="registerTable" @fetch-success="(e) => (total = e.toal)">
      <template #toolbar>
        <Button type="primary" @click="openTagModal()">{{ t('merchant.actions.batchTag') }}</Button>
        <Button>{{ t('merchant.actions.excelExport') }}</Button>
      </template>
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'isShow'">
          <Switch checked-children="normal" un-checked-children="banned" />
        </template>
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: t('merchant.actions.platformRemark'),
                onClick: () => openRemarkModal(),
                // ifShow: record.FeedbackID === 'FK643261',
                // placement: 'left',
                // confirm: handlerChangeStatus.bind(null, record),
              },
            ]"
            :dropDownActions="[
              {
                label: t('merchant.actions.detail'),
                onClick: () =>
                  go({
                    name: 'MerchantDetail',
                    params: {
                      id: 1,
                    },
                  }),
              },
              {
                label: t('merchant.actions.modifySubscribe'),
                onClick: () => openChangeSubscribeModal(),
              },
              {
                label: t('merchant.actions.giveAppendMessage'),
                onClick: () => openAddonsModal(),
              },
              {
                label: t('merchant.actions.modifyExpirationTime'),
                onClick: () => openChangeExpireDateModal(),
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

        <template v-if="column.key === 'tags'">
          <TableTags />
        </template>
      </template>
    </BasicTable>

    <TagsModal @register="registerTagModal" />
    <RemarkModal @register="registerRemarkModal" />
    <AddonsMessageModal @register="registerAddonsMessageModal" />
    <ChangeExpireDateModal @register="registerChangeExpireDateModal" />
    <ChangeSubscribeModal @register="registerChangeSubscribeModal" />
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { useTable, BasicTable, TableAction } from '/@/components/Table';
  import { Button, Input, Switch } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import {
    RangeSelect,
    TagsModal,
    RemarkModal,
    AddonsMessageModal,
    ChangeExpireDateModal,
    ChangeSubscribeModal,
  } from './components';
  import { ref, computed, h } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { DownOutlined, CaretDownOutlined } from '@ant-design/icons-vue';
  import TableTags from '/@/components/TableTags/index.vue';
  import { useGo } from '/@/hooks/web/usePage';
  const go = useGo();
  const { t } = useI18n();
  const total = ref(0);
  const selectedRowKeys = ref<number[]>([]);
  const chooseTotalText = computed(() =>
    t('merchant.texts.chooseTotal', { total: total.value, num: selectedRowKeys.value.length }),
  );

  const [registerTagModal, { openModal: openTagModal, setModalProps: setTagModal }] = useModal();
  const [registerRemarkModal, { openModal: openRemarkModal }] = useModal();
  const [registerAddonsMessageModal, { openModal: openAddonsModal }] = useModal();
  const [registerChangeExpireDateModal, { openModal: openChangeExpireDateModal }] = useModal();
  const [registerChangeSubscribeModal, { openModal: openChangeSubscribeModal }] = useModal();
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
        dataIndex: 'tags',
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
      labelWidth: 150,
      colon: true,
      schemas: [
        {
          field: `question`,
          label: 'keywords',
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
          field: `Input`,
          label: t('merchant.texts.tagFilter'),
          component: 'Input',
          colProps: {
            span: 8,
          },
          render: () =>
            h(Input, {
              readonly: true,
              suffix: h(DownOutlined),
              onClick: () => {
                setTagModal({
                  title: 'Select tag',
                });
                openTagModal();
              },
              placeholder: 'Please choose tags',
            }),
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
            span: 8,
          },
        },
        {
          field: `range`,
          label: t('merchant.texts.registrationTime'),
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
          field: `question`,
          label: t('merchant.texts.payment'),
          component: 'Input',
          colProps: {
            span: 8,
          },
          render: ({ model, field }) =>
            h(RangeSelect, {
              value: model[field],
              onChange: (e) => {
                model[field] = e;
              },
              placeholder: 'Please enter the amount range',
            }),
        },
        {
          field: `range`,
          label: t('merchant.texts.contactNum'),
          component: 'RangePicker',
          colProps: {
            span: 8,
          },
          render: ({ model, field }) =>
            h(RangeSelect, {
              value: model[field],
              onChange: (e) => {
                model[field] = e;
              },
              placeholder: 'Please enter the number of contacts',
            }),
        },
        {
          field: `question`,
          label: t('merchant.texts.subscribePlan'),
          component: 'Input',
          colProps: {
            span: 8,
          },
        },
        {
          field: `range`,
          label: t('merchant.texts.subscribePayment'),
          component: 'RangePicker',
          colProps: {
            span: 8,
          },
          render: ({ model, field }) =>
            h(RangeSelect, {
              value: model[field],
              onChange: (e) => {
                model[field] = e;
              },
              placeholder: 'Please enter the amount range',
            }),
        },
        {
          field: `question`,
          label: t('merchant.texts.campaignPayment'),
          component: 'Input',
          colProps: {
            span: 8,
          },
          render: ({ model, field }) =>
            h(RangeSelect, {
              value: model[field],
              onChange: (e) => {
                model[field] = e;
              },
              placeholder: 'Please enter the amount range',
            }),
        },
        {
          field: `range`,
          label: t('merchant.texts.status'),
          component: 'Select',
          colProps: {
            span: 8,
          },
        },
      ],
      showAdvancedButton: false,
      actionColOptions: {
        span: 16,
      },
    },
    actionColumn: {
      dataIndex: 'action',
      width: 250,
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

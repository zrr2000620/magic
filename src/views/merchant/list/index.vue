<template>
  <PageWrapper dense contentFullHeight>
    <BasicTable @register="registerTable" @fetch-success="(e) => (total = e.toal)">
      <template #toolbar>
        <Button type="primary" @click="openTagModal()">{{ t('merchant.actions.batchTag') }}</Button>
        <Button>{{ t('merchant.actions.excelExport') }}</Button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'merchantStatus'">
          <Switch
            :checked-children="t('merchant.texts.statusNormal')"
            :un-checked-children="t('merchant.texts.statusBanned')"
            :checked="!!record.merchantStatus"
          />
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

    <TagsModal @register="registerTagModal" @confirm="(e) => (tagValue = e)" />
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
  import { getMerchantList } from '/@/api/merchant';
  import { searchDateTimeRangeCover, searchFieldInputCover } from '/@/utils/table';
  const go = useGo();
  const { t } = useI18n();
  const type = ref();
  const total = ref(0);
  const tagValue = ref<{ type?: number; tags?: string[] }>({});
  const selectedRowKeys = ref<number[]>([]);
  const chooseTotalText = computed(() =>
    t('merchant.texts.chooseTotal', { total: total.value, num: selectedRowKeys.value.length }),
  );
  const tagsText = computed(() => tagValue.value.tags?.join(',') ?? '');

  const [registerTagModal, { openModal: openTagModal, setModalProps: setTagModal }] = useModal();
  const [registerRemarkModal, { openModal: openRemarkModal }] = useModal();
  const [registerAddonsMessageModal, { openModal: openAddonsModal }] = useModal();
  const [registerChangeExpireDateModal, { openModal: openChangeExpireDateModal }] = useModal();
  const [registerChangeSubscribeModal, { openModal: openChangeSubscribeModal }] = useModal();
  const [registerTable] = useTable({
    api: getMerchantList,
    useSearchForm: true,
    showIndexColumn: false,
    bordered: true,
    rowKey: 'uid',
    columns: [
      {
        title: t('merchant.texts.merchantID'),
        dataIndex: 'uid',
        width: 150,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.merchantName'),
        dataIndex: 'MerchantName',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.holder'),
        dataIndex: 'name',
        width: 150,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.mobile'),
        dataIndex: 'RegisterPhoneNumber',
        width: 200,
      },
      {
        title: t('merchant.texts.email'),
        dataIndex: 'mail',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.merchantTag'),
        dataIndex: '',
        width: 200,
      },
      {
        title: t('merchant.texts.industry'),
        dataIndex: 'industryName',
        width: 200,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.businessLocation'),
        dataIndex: 'businessLocation',
        width: 100,
      },
      {
        title: t('merchant.texts.revenueAmount'),
        dataIndex: '',
        width: 300,
      },
      {
        title: t('merchant.texts.averageScore'),
        dataIndex: 'averageScore',
        width: 200,
      },
      {
        title: t('merchant.texts.contactNum'),
        dataIndex: 'contacts',
        width: 200,
      },
      {
        title: t('merchant.texts.subscribeContactNum'),
        dataIndex: 'subscribedContacts',
        width: 300,
      },
      {
        title: t('merchant.texts.registrationTime'),
        dataIndex: 'registrationTime',
        width: 150,
      },
      {
        title: t('merchant.texts.subscribePlan'),
        dataIndex: 'subscriptionPackage',
        width: 300,
        ellipsis: true,
      },
      {
        title: t('merchant.texts.expireDate'),
        dataIndex: 'expirationTime',
        width: 150,
      },
      {
        title: t('merchant.texts.subscribePayAmount'),
        dataIndex: '',
        width: 300,
      },
      {
        title: t('merchant.texts.messageNumAmount'),
        dataIndex: '',
        width: 300,
      },
      {
        title: t('merchant.texts.status'),
        dataIndex: 'merchantStatus',
        width: 150,
      },
      {
        title: t('merchant.texts.remark'),
        dataIndex: '',
        width: 300,
        ellipsis: true,
      },
    ],
    formConfig: {
      labelWidth: 150,
      colon: true,
      schemas: [
        {
          field: `keywords`,
          label: t('merchant.texts.keywords'),
          component: 'FieldInput',
          colProps: {
            span: 8,
          },
          componentProps: {
            options: [
              {
                label: t('merchant.texts.merchantID'),
                value: 'userId',
              },
              {
                label: t('merchant.texts.merchantName'),
                value: 'merchantName',
              },
              {
                label: t('merchant.texts.holder'),
                value: 'name',
              },
              {
                label: t('merchant.texts.mobile'),
                value: 'phone',
              },
              {
                label: t('merchant.texts.email'),
                value: 'mail',
              },
            ],
            onTypeChange: (e) => {
              type.value = e;
            },
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
                  title: t('merchant.texts.tagsSelectTitgle'),
                });
                openTagModal();
              },
              placeholder: t('merchant.texts.tagFilterPlaceholder'),
              value: tagsText.value,
            }),
        },
        {
          field: `industryName`,
          label: t('merchant.texts.industry'),
          component: 'Select',
          componentProps: {
            options: [
              {
                label: t('config.faq.汽车'),
                value: '汽车',
              },
              {
                label: t('config.faq.牙科'),
                value: '牙科',
              },
              {
                label: t('config.faq.金融服务'),
                value: '金融服务',
              },
              {
                label: t('config.faq.美发美容'),
                value: '美发&美容',
              },
              {
                label: t('config.faq.卫生保健'),
                value: '卫生保健',
              },
              {
                label: t('config.faq.家政服务'),
                value: '家政服务',
              },
              {
                label: t('config.faq.专项服务'),
                value: '专项服务',
              },
              {
                label: t('config.faq.零售'),
                value: '零售',
              },
              {
                label: t('config.faq.其他行业'),
                value: '其他行业',
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
              placeholder: t('merchant.texts.rangeAmount'),
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
              placeholder: t('merchant.texts.rangeConcatNum'),
            }),
        },
        {
          field: `question`,
          label: t('merchant.texts.subscribePlan'),
          component: 'Select',
          colProps: {
            span: 8,
          },
          componentProps: {
            options: [
              {
                label: t('merchant.texts.shiyong14'),
                value: 1,
              },
              {
                label: t('merchant.texts.basicPlan'),
                value: 2,
              },
              {
                label: t('merchant.texts.essentialPlan'),
                value: 3,
              },
            ],
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
              placeholder: t('merchant.texts.rangeAmount'),
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
              placeholder: t('merchant.texts.rangeAmount'),
            }),
        },
        {
          field: `range`,
          label: t('merchant.texts.status'),
          component: 'Select',
          colProps: {
            span: 8,
          },
          componentProps: {
            options: [
              {
                label: t('merchant.texts.statusNormal'),
                value: 1,
              },
              {
                label: t('merchant.texts.statusBanned'),
                value: 0,
              },
            ],
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
    beforeFetch: (params) =>
      searchDateTimeRangeCover(searchFieldInputCover(params, type.value, 'keywords'), 'range'),
  });
</script>
<style scoped></style>

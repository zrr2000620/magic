<template>
  <PageWrapper dense :title="t($route.meta.title)" class="index">
    <template #headerContent>
      <div style="margin-bottom: 20px">{{ t('financial.overViewContent') }}</div>
      <Row :gutter="12">
        <Col :span="12">
          <Card>
            <div class="lg:flex" style="align-items: center; gap: 20px">
              <div><DollarCircleFilled style="font-size: 60px" /></div>
              <div style="flex: 1">
                <h1>{{ t('financial.today') }}</h1>
                <div
                  class="lg:flex"
                  style="gap: 10px; align-items: baseline; justify-content: space-between"
                >
                  <span style="font-size: 40px">$3,693</span>
                  <div>
                    <span style="color: rgb(192 207 227)">{{ t('financial.yesterday') }}</span>
                    <span style="color: red; margin-left: 5px">
                      <ArrowDownOutlined />
                      <span>5.38%</span>
                    </span>
                  </div>
                  <span style="color: rgb(192 207 227)">{{ t('financial.yesterdayT') }}</span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
        <Col :span="12">
          <Card>
            <div class="lg:flex" style="align-items: center; gap: 20px">
              <div><DollarCircleFilled style="font-size: 60px" /></div>
              <div style="flex: 1">
                <h1>{{ t('financial.addOnTody') }}</h1>
                <div
                  class="lg:flex"
                  style="gap: 10px; align-items: baseline; justify-content: space-between"
                >
                  <span style="font-size: 40px">$3,693</span>
                  <div>
                    <span style="color: rgb(192 207 227)">{{ t('financial.yesterday') }}</span>
                    <span style="color: red; margin-left: 5px">
                      <ArrowDownOutlined />
                      <span>5.38%</span>
                    </span>
                  </div>
                  <span style="color: rgb(192 207 227)">{{ t('financial.yesterdayT') }}</span>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </template>
    <Card>
      <BasicTable :dataSource="[{}]" @register="register">
        <template #tableTitle>
          <div>
            <span style="font-size: 20px; font-weight: 600">{{ t('financial.table.name') }}</span>
          </div>
        </template>
        <template #toolbar>
          <div class="lg:flex" style="gap: 10px">
            <Button type="primary">{{ t('financial.day') }}</Button>
            <Button>{{ t('financial.week') }}</Button>
            <Button>{{ t('financial.month') }}</Button>
            <DatePicker />
          </div>
        </template>
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <TableAction
              :actions="[
                {
                  label: t('financial.table.remake'),
                  onClick: remake.bind(null, record),
                },
              ]"
            />
          </template>
          <template v-if="column.key === 'processingStatus'">
            {{ record.processingStatus ? t('feedback.processed') : t('feedback.noProcess') }}
          </template>
        </template>
      </BasicTable>
    </Card>
    <FlowModal @register="register2" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Row, Col, Button, DatePicker } from 'ant-design-vue';
  import { DollarCircleFilled, ArrowDownOutlined } from '@ant-design/icons-vue';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import FlowModal from './conponents/FlowModal.vue';
  import { useModal } from '/@/components/Modal';
  const { t } = useI18n();
  const [register2, { openModal: remake }] = useModal();
  const [register] = useTable({
    rowKey: 'id',
    title: t('financial.table.name'),
    showIndexColumn: false,
    columns: [
      {
        title: t('financial.table.serial'),
        width: 150,
        ellipsis: true,
        dataIndex: 'serial',
      },
      {
        title: t('financial.table.time'),
        width: 150,
        ellipsis: true,
        dataIndex: 'time',
      },
      {
        title: t('financial.table.orderNumber'),
        width: 150,
        ellipsis: true,
        dataIndex: 'orderNumber',
      },
      {
        title: t('financial.table.merchant'),
        width: 150,
        ellipsis: true,
        dataIndex: 'merchant',
      },
      {
        title: t('financial.table.phone'),
        width: 150,
        ellipsis: true,
        dataIndex: 'phone',
      },
      {
        title: t('financial.table.type'),
        width: 150,
        ellipsis: true,
        dataIndex: 'type',
      },
      {
        title: t('financial.table.amount'),
        width: 150,
        ellipsis: true,
        dataIndex: 'amount',
      },
      {
        title: t('financial.table.discount'),
        width: 150,
        ellipsis: true,
        dataIndex: 'discount',
      },
      {
        title: t('financial.table.method'),
        width: 150,
        ellipsis: true,
        dataIndex: 'method',
      },
      {
        title: t('financial.table.cardNumber'),
        width: 150,
        ellipsis: true,
        dataIndex: 'cardNumber',
      },
      {
        title: t('financial.table.notes'),
        width: 150,
        ellipsis: true,
        dataIndex: 'notes',
      },
    ],
    actionColumn: {
      width: 250,
      title: t('financial.operate'),
      dataIndex: 'action',
    },
  });
</script>
<style scoped>
  .index {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>

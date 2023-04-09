<script setup lang="ts">
  import { Card, Row, Col, Avatar, Divider, Statistic } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { Description, DescItem, useDescription } from '/@/components/Description';
  import {
    PaidItemChart,
    RatingChart,
    SubscribeTable,
    AddonTable,
    ConcatTable,
    EmployeeTable,
    LocationTable,
    RolePermissiomTable,
  } from './components';
  import { ref } from 'vue';
  import { useI18n } from '/@/hooks/web/useI18n';

  const { t } = useI18n();
  t('');
  const currentKey = ref('1');

  const descSchemas: DescItem[] = [
    {
      label: 'Merchant name',
      field: '',
    },
    {
      label: 'Owner',
      field: '',
    },
    {
      label: 'Phone number',
      field: '',
    },
    {
      label: 'E-mail',
      field: '',
    },
    {
      label: 'Registration time',
      field: '',
    },
    {
      label: 'Industry',
      field: '',
    },
    {
      label: 'Location',
      field: '',
    },
    {
      label: 'Rating',
      field: '',
    },
    {
      label: 'Number of contacts',
      field: '',
    },
    {
      label: 'Number of contacts subscribed',
      field: '',
    },
    {
      label: 'Cumulative income amount',
      field: '',
    },
    {
      label: 'Review amount',
      field: '',
    },
    {
      label: 'Total purchases of subscriptions',
      field: '',
    },
    {
      label: 'Total add-on purchases',
      field: '',
    },
    {
      label: 'Merchant Status',
      field: '',
    },
  ];

  const descSchemas2: DescItem[] = [
    {
      label: 'Merchant tag',
      field: '',
    },
    {
      label: 'Remark',
      field: '',
    },
  ];

  const tabs = [
    {
      key: '1',
      tab: 'Review rating',
    },
    {
      key: '2',
      tab: 'Subscription record',
    },
    {
      key: '3',
      tab: 'Add-on purchase record',
    },
    {
      key: '4',
      tab: 'Concat',
    },
    {
      key: '5',
      tab: 'Employee list',
    },
    {
      key: '6',
      tab: 'Locations',
    },
    {
      key: '7',
      tab: 'Roles and Perimissions',
    },
  ];

  const [registerDesc] = useDescription({
    column: 3,
    schema: descSchemas,
    bordered: false,
  });

  const [registerDesc2] = useDescription({
    column: 1,
    schema: descSchemas2,
    bordered: false,
  });
</script>

<template>
  <PageWrapper contentFullHeight>
    <Card style="margin-bottom: 20px">
      <Row :gutter="50">
        <Col>
          <div class="text-center">
            <Avatar :size="80" />
            <p>ID:445addsaddadad65</p>
          </div>
        </Col>

        <Col flex="1 0 0">
          <Description @register="registerDesc" />
          <Divider />
          <Description @register="registerDesc2" />
          <Divider />

          <Row align="middle">
            <Col flex="1 0 0" class="w-0">
              <PaidItemChart />
            </Col>
            <Col>
              <Row :gutter="[0, 40]">
                <Col span="12">
                  <Statistic title="Last payment date" value="2022-06-13" />
                </Col>
                <Col span="12">
                  <Statistic title="Total paid times" value="8" />
                </Col>
                <Col span="12">
                  <Statistic title="Total consumption" value="$11,475.00" />
                </Col>
                <Col span="12">
                  <Statistic title="Average cost per charge" value="$11,475.00" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>

    <Card :tabList="tabs" @tab-change="(e) => (currentKey = e)">
      <template v-if="currentKey === '1'">
        <Row :gutter="[20, 20]">
          <Col span="12">
            <RatingChart />
          </Col>
          <Col span="12">
            <RatingChart />
          </Col>
          <Col span="12">
            <RatingChart />
          </Col>
          <Col span="12">
            <RatingChart />
          </Col>
        </Row>
      </template>

      <template v-if="currentKey === '2'">
        <SubscribeTable />
      </template>

      <template v-if="currentKey === '3'">
        <AddonTable />
      </template>

      <template v-if="currentKey === '4'">
        <ConcatTable />
      </template>

      <template v-if="currentKey === '5'">
        <EmployeeTable />
      </template>

      <template v-if="currentKey === '6'">
        <LocationTable />
      </template>

      <template v-if="currentKey === '7'">
        <RolePermissiomTable />
      </template>

      <template #extra v-if="currentKey === '7'">
        <AButton type="primary">Save</AButton>
      </template>
    </Card>
  </PageWrapper>
</template>

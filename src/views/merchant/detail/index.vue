<script setup lang="ts">
  import { Card, Row, Col, Avatar, Divider, Statistic } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { Description, DescItem, useDescription } from '/@/components/Description';
  import PaidItemChart from './components/PaidItemChart.vue';
  import RatingChart from './components/RatingChart.vue';

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
      key: 'as',
      tab: 'Review rating',
    },
    {
      key: 'Subscription record',
      tab: 'Subscription record',
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

    <Card :tabList="tabs">
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
    </Card>
  </PageWrapper>
</template>

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
  import { useRootSetting } from '/@/hooks/setting/useRootSetting';
  import { useRouter } from 'vue-router';

  const { currentRoute } = useRouter();
  const { setRootSetting } = useRootSetting();
  const { t } = useI18n();
  const currentKey = ref('1');
  currentRoute.value.meta.title = t(currentRoute.value.meta.title) + ' | asdsda';
  setRootSetting({
    showBreadCrumb: false,
  });
  setRootSetting({
    showBreadCrumb: true,
  });

  const descSchemas: DescItem[] = [
    {
      label: t('merchant.texts.merchantName'),
      field: '',
    },
    {
      label: t('merchant.texts.holder'),
      field: '',
    },
    {
      label: t('merchant.texts.mobile'),
      field: '',
    },
    {
      label: t('merchant.texts.email'),
      field: '',
    },
    {
      label: t('merchant.texts.registrationTime'),
      field: '',
    },
    {
      label: t('merchant.texts.industry'),
      field: '',
    },
    {
      label: t('merchant.texts.businessLocation'),
      field: '',
    },
    {
      label: t('merchant.texts.rate'),
      field: '',
    },
    {
      label: t('merchant.texts.contactNum'),
      field: '',
    },
    {
      label: t('merchant.texts.subscribeContactNum'),
      field: '',
    },
    {
      label: t('merchant.texts.revenueAmount'),
      field: '',
    },
    {
      label: t('merchant.texts.commentNum'),
      field: '',
    },
    {
      label: t('merchant.texts.subscribePayAmount'),
      field: '',
    },
    {
      label: t('merchant.texts.messageNumAmount'),
      field: '',
    },
    {
      label: t('merchant.texts.status'),
      field: '',
    },
  ];

  const descSchemas2: DescItem[] = [
    {
      label: t('merchant.texts.merchantTag'),
      field: '',
    },
    {
      label: t('merchant.texts.remark'),
      field: '',
    },
  ];

  const tabs = [
    {
      key: '1',
      tab: t('merchant.texts.reviewRating'),
    },
    {
      key: '2',
      tab: t('merchant.texts.subRecord'),
    },
    {
      key: '3',
      tab: t('merchant.texts.addonRecord'),
    },
    {
      key: '4',
      tab: t('merchant.texts.concat'),
    },
    {
      key: '5',
      tab: t('merchant.texts.employerList'),
    },
    {
      key: '6',
      tab: t('merchant.texts.locations'),
    },
    {
      key: '7',
      tab: t('merchant.texts.roleAndPerimission'),
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
                  <Statistic :title="t('merchant.texts.lastPaymentDate')" value="2022-06-13" />
                </Col>
                <Col span="12">
                  <Statistic :title="t('merchant.texts.totalPaidTotal')" value="8" />
                </Col>
                <Col span="12">
                  <Statistic :title="t('merchant.texts.totalConsumption')" value="$11,475.00" />
                </Col>
                <Col span="12">
                  <Statistic
                    :title="t('merchant.texts.averageConstPerCharge')"
                    value="$11,475.00"
                  />
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
        <AButton type="primary">{{ t('common.saveText') }}</AButton>
      </template>
    </Card>
  </PageWrapper>
</template>

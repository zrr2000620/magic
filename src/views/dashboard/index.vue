<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import {
    Card,
    RadioGroup,
    RadioButton,
    RangePicker,
    Space,
    Divider,
    Statistic,
    TypographyText,
    Row,
    Col,
    List,
    ListItem,
  } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { BasicTitle } from '/@/components/Basic';
  import { BasicTable, useTable } from '/@/components/Table';
  import { reactive, ref } from 'vue';
  import { PickerMode } from 'ant-design-vue/es/vc-picker/interface';
  import Trend from './components/Trend.vue';
  import Chart from './components/Chart.vue';
  import { getAccountList } from '/@/api/demo/system';

  interface SearchInfo {
    picker: PickerMode;
  }

  type Key = 'sheet' | 'chart';

  const currentKey = ref<Key>('chart');
  const { t } = useI18n();
  const salesCardSearchInfo = reactive<SearchInfo>({
    picker: 'month',
  });
  const trendCardSearchInfo = reactive<SearchInfo>({
    picker: 'month',
  });
  const moneyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const [registerTable] = useTable({
    api: getAccountList,
    rowKey: 'id',
    columns: [
      {
        title: t('dashboard.date'),
        width: 150,
      },
      {
        title: t('dashboard.trialMerchant'),
        width: 150,
      },
      {
        title: t('dashboard.payMerchant'),
        width: 150,
      },
      {
        title: t('dashboard.sales'),
        width: 150,
      },
      {
        title: t('dashboard.atv'),
        width: 150,
      },
    ],
    showIndexColumn: false,
    scroll: {
      x: true,
    },
    // maxHeight: 300,
    inset: true,
    pagination: false,
    resizeHeightOffset: 100,
  });
</script>
<script lang="ts">
  export default {
    name: 'DashboardPage',
  };
</script>
<template>
  <PageWrapper>
    <div class="mb-5">
      <Card>
        <template #title>
          <BasicTitle :help-message="t('dashboard.salesCardTip')">{{
            t('dashboard.salesCardTitle')
          }}</BasicTitle>
        </template>

        <template #extra>
          <Space>
            <RadioGroup v-model:value="salesCardSearchInfo.picker">
              <RadioButton value="month">{{ t('dashboard.monthRadio') }}</RadioButton>
              <RadioButton value="year">{{ t('dashboard.yearRadio') }}</RadioButton>
            </RadioGroup>

            <RangePicker :picker="salesCardSearchInfo.picker" />
          </Space>
        </template>
        <Row :gutter="50">
          <Col :span="6">
            <Statistic :title="t('dashboard.totalSales')">
              <template #suffix>
                <span class="text-sm">M</span>
              </template>
            </Statistic>
            <Trend />
            <Divider style="margin-top: 0.5rem; margin-bottom: 0.5rem" />
            <div>
              <TypographyText type="secondary">
                {{ t('dashboard.averageDailySales') }}
              </TypographyText>
              <span class="text-blue-400 ml-1"> {{ moneyFormat.format(1200) }} </span>
            </div>
          </Col>
          <Col :span="6">
            <Statistic :title="t('dashboard.payMerchantNum')" />
            <Trend />
            <Divider style="margin-top: 0.5rem; margin-bottom: 0.5rem" />
            <div>
              <TypographyText type="secondary">
                {{ t('dashboard.averageReturn') }}
              </TypographyText>
              <span class="text-blue-400 ml-1"> {{ moneyFormat.format(1200) }} </span>
            </div>
          </Col>
          <Col :span="6">
            <Statistic :title="t('dashboard.trailMerchantNum')" />
            <Trend />
            <Divider style="margin-top: 0.5rem; margin-bottom: 0.5rem" />
            <div>
              <TypographyText type="secondary">
                {{ t('dashboard.averageTrail') }}
              </TypographyText>
              <span class="text-blue-400 ml-1"> {{ moneyFormat.format(1200) }} </span>
            </div>
          </Col>
          <Col :span="6">
            <Statistic :title="t('dashboard.merchantRate')">
              <template #suffix>
                <span class="text-sm">%</span>
              </template>
            </Statistic>
            <Trend />
          </Col>
        </Row>
      </Card>
    </div>

    <Card>
      <template #title>
        <BasicTitle>{{ t('dashboard.orderTrendTitle') }}</BasicTitle>
      </template>

      <template #extra>
        <Space>
          <RadioGroup v-model:value="trendCardSearchInfo.picker">
            <RadioButton value="month">{{ t('dashboard.monthRadio') }}</RadioButton>
            <RadioButton value="year">{{ t('dashboard.yearRadio') }}</RadioButton>
          </RadioGroup>

          <RangePicker :picker="trendCardSearchInfo.picker" />
        </Space>
      </template>

      <Row :gutter="20">
        <Col flex="1 0 0" class="w-0">
          <div class="text-right mb-2">
            <span
              class="cursor-pointer hover:text-blue-400"
              :class="{ 'text-blue-400': currentKey === 'chart' }"
              @click="currentKey = 'chart'"
              >{{ t('dashboard.chart') }}
            </span>
            <Divider type="vertical" />
            <span
              class="cursor-pointer hover:text-blue-400"
              :class="{ 'text-blue-400': currentKey === 'sheet' }"
              @click="currentKey = 'sheet'"
              >{{ t('dashboard.sheet') }}</span
            >
          </div>
          <div class="h-[400px]">
            <Chart v-if="currentKey === 'chart'" />
            <BasicTable v-else @register="registerTable" />
          </div>
        </Col>
        <Col flex="0 0 300px" style="overflow: hidden">
          <BasicTitle>{{ t('dashboard.subscribeRank') }}</BasicTitle>
          <List :data-source="[1, 2, 3]" :split="false">
            <template #renderItem>
              <ListItem>
                <div class="flex overflow-hidden">
                  <div class="mr-2"> 1 </div>
                  <TypographyText ellipsis class="mr-1"> Basic Pro plan </TypographyText>
                </div>

                <template #extra>
                  {{ moneyFormat.format(12000) }}
                </template>
              </ListItem>
            </template>
          </List>
        </Col>
      </Row>
    </Card>
  </PageWrapper>
</template>

<style lang="less" scoped>
  .rounded {
    width: 20px;
    height: 20px;
  }
</style>

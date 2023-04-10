<template>
  <PageWrapper dense :title="t($route.meta.title)">
    <template #headerContent>
      <div class="lg:flex" style="justify-content: flex-end; gap: 20px">
        <Button type="primary">{{ t('financial.day') }}</Button>
        <Button>{{ t('financial.week') }}</Button>
        <Button>{{ t('financial.month') }}</Button>
        <DatePicker />
      </div>
    </template>
    <Card>
      <div class="lg:flex" style="gap: 20px">
        <Card style="flex: 5">
          <div style="font-size: 20px; font-weight: 500; margin: -15px 0 10px"
            >{{ t('financial.incomeName') }}
          </div>
          <Row :gutter="10" justify="space-around">
            <Col :span="5">
              <div class="textTitle">{{ t('financial.income') }}</div>
              <div class="text"> 45000.00</div>
            </Col>
            <Col :span="5">
              <div class="textTitle">{{ t('financial.revenue') }}</div>
              <div class="text">4500.00</div></Col
            >
            <Col :span="5">
              <div class="textTitle">{{ t('financial.addRevenue') }}</div>
              <div class="text">50000.00</div></Col
            >
          </Row>
        </Card>
        <Card style="flex: 1">
          <div style="font-size: 20px; font-weight: 500; margin: -15px 0 10px">{{
            t('financial.ATVname')
          }}</div>
          <div>
            <div class="textTitle">{{ t('financial.ATVContent') }}</div
            ><div class="text">2113.66</div>
          </div>
        </Card>
      </div>
      <div style="margin-top: 20px; font-size: 20px; font-weight: 600"
        >{{ t('financial.analysis') }}
        <div ref="chartRef" :style="{ height: 'calc(100vh - 78px)', width: '100%' }"></div>
      </div>
    </Card>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { Button, DatePicker, Card, Row, Col } from 'ant-design-vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  import { onMounted, ref, Ref } from 'vue';
  import { getLineData } from '../../demo/charts/data';
  const { t } = useI18n();
  const chartRef = ref<HTMLDivElement | null>(null);
  const { setOptions, echarts } = useECharts(chartRef as Ref<HTMLDivElement>);
  const { barData, lineData, category } = getLineData;
  onMounted(() => {
    setOptions({
      backgroundColor: '#ffffff',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#333',
          },
        },
      },
      legend: {
        data: ['line', 'bar'],
        textStyle: {
          color: '#ccc',
        },
      },
      xAxis: {
        data: category,
        axisLine: {
          lineStyle: {
            color: '#ccc',
          },
        },
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: '#ccc',
          },
        },
      },
      series: [
        {
          name: 'line',
          type: 'line',
          smooth: true,
          showAllSymbol: 'auto',
          symbol: 'emptyCircle',
          symbolSize: 15,
          data: lineData,
        },
        {
          name: 'bar',
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            borderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#14c8d4' },
              { offset: 1, color: '#43eec6' },
            ]),
          },
          data: barData,
        },
        {
          name: 'line',
          type: 'bar',
          barGap: '-100%',
          barWidth: 10,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(20,200,212,0.5)' },
              { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
              { offset: 1, color: 'rgba(20,200,212,0)' },
            ]),
          },
          z: -12,
          data: lineData,
        },
        {
          name: 'dotted',
          type: 'pictorialBar',
          symbol: 'rect',
          itemStyle: {
            color: '#0f375f',
          },
          symbolRepeat: true,
          symbolSize: [12, 4],
          symbolMargin: 1,
          z: -10,
          data: lineData,
        },
      ],
    });
  });
</script>
<style scoped>
  .textTitle {
    font-size: 12px;
    color: rgb(127 147 193);
  }

  .text {
    font-size: 18px;
    font-weight: 500;
  }
</style>

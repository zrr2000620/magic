<template>
  <PageWrapper contentFullHeight>
    <Card>
      <CardGrid style="width: 50%; height: 250px" :hoverable="false">
        <Row justify="space-between">
          <Col>
            <TypographyTitle :level="5">
              {{ t('merchant.texts.merchantTotalDesc') }}
            </TypographyTitle>
            <TypographyText type="secondary">
              {{ t('merchant.texts.platformMerchant') }}
            </TypographyText>
          </Col>

          <Col>
            <TypographyText type="secondary">
              {{ t('merchant.texts.Calculated') }} 2021-07-28 00:18:28
            </TypographyText>
          </Col>
        </Row>
        <Space class="mt-5" :size="20">
          <Avatar :size="80" />
          <Statistic title="7-28(Wed)" value="319" />
          <Space direction="vertical">
            <div>
              <span> {{ t('merchant.texts.YoY') }}</span>
              <Icon color="rgb(248, 113, 113)" icon="material-symbols:arrow-downward-rounded" />
              <span class="text-red-400">5.38%</span>
            </div>
            <div>
              <span> {{ t('merchant.texts.MoM') }}</span>
              <Icon color="rgb(52, 211, 153)" icon="ic:baseline-arrow-upward" />
              <span class="text-green-400">5.38%</span>
            </div>
          </Space>
        </Space>
      </CardGrid>

      <CardGrid style="width: 50%; height: 250px" :hoverable="false">
        <Row justify="space-between">
          <Col>
            <TypographyTitle :level="5"> {{ t('merchant.texts.merchantStruct') }} </TypographyTitle>
            <TypographyText type="secondary">
              {{ t('merchant.texts.platformMerchantType') }}
            </TypographyText>
          </Col>

          <Col>
            <TypographyText type="secondary">
              {{ t('merchant.texts.Calculated') }}: 2021-07-28 00:18:28
            </TypographyText>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col>
            <div class="text-lg my-5"> 34,640 </div>
            <TypographyParagraph type="secondary"> Trial merchants: 100 </TypographyParagraph>
            <TypographyParagraph type="secondary"> Trial merchants: 100 </TypographyParagraph>
          </Col>

          <Col>
            <div class="w-[300px] h-[150px]" ref="structChartRef"></div>
          </Col>
        </Row>
      </CardGrid>

      <CardGrid style="width: 50%; height: 500px" :hoverable="false">
        <Row justify="space-between" class="mb-5">
          <Col>
            <TypographyTitle :level="5">
              {{ t('merchant.texts.merchantSubTimes') }}
            </TypographyTitle>
          </Col>

          <Col>
            <TypographyText type="secondary">
              {{ t('merchant.texts.past90Days') }}
            </TypographyText>
          </Col>
        </Row>
        <Row :gutter="[50, 20]">
          <Col>
            <span class="mr-5">0:</span>
            <span>1000</span>
          </Col>
          <Col>
            <span class="mr-5">1:</span>
            <span>1000</span>
          </Col>
          <Col>
            <span class="mr-5">2:</span>
            <span>1000</span>
          </Col>
          <Col>
            <span class="mr-5">3:</span>
            <span>1000</span>
          </Col>
          <Col>
            <span class="mr-5">4+:</span>
            <span>1000</span>
          </Col>
        </Row>

        <div class="h-[400px]" ref="subscribeTimeChartRef"> </div>
      </CardGrid>

      <CardGrid style="width: 50%; height: 500px" :hoverable="false">
        <Row justify="space-between">
          <Col>
            <TypographyTitle :level="5">
              {{ t('merchant.texts.merchantIndustry') }}
            </TypographyTitle>
          </Col>

          <Col>
            <TypographyText type="secondary">
              {{ t('merchant.texts.merchantIndustryDesc') }}
            </TypographyText>
          </Col>
        </Row>
        <div class="h-[400px]" ref="businessChartRef"> </div>
      </CardGrid>

      <CardGrid style="width: 50%; height: 500px" :hoverable="false">
        <Row justify="space-between" class="mb-5">
          <Col>
            <TypographyTitle :level="5">
              {{ t('merchant.texts.businessLocationNum') }}
            </TypographyTitle>
          </Col>

          <Col>
            <TypographyText type="secondary">
              {{ t('merchant.texts.businessLocationNumDesc') }}
            </TypographyText>
          </Col>
        </Row>
        <Row :gutter="[50, 20]">
          <Col>
            <span class="mr-5">0:</span>
            <span>1000</span>
          </Col>
          <Col>
            <span class="mr-5">1:</span>
            <span>1000</span>
          </Col>
          <Col>
            <span class="mr-5">2:</span>
            <span>1000</span>
          </Col>
          <Col>
            <span class="mr-5">3:</span>
            <span>1000</span>
          </Col>
          <Col>
            <span class="mr-5">4+:</span>
            <span>1000</span>
          </Col>
        </Row>

        <div class="h-[400px]" ref="locationChartRef"> </div>
      </CardGrid>

      <CardGrid style="width: 50%; height: 500px" :hoverable="false">
        <Row justify="space-between" class="mb-5">
          <Col>
            <TypographyTitle :level="5">
              {{ t('merchant.texts.companyDistribution') }}
            </TypographyTitle>
          </Col>

          <Col>
            <TypographyText type="secondary">
              {{ t('merchant.texts.companyDistributionDesc') }}
            </TypographyText>
          </Col>
        </Row>
        <Row :gutter="[50, 20]">
          <Col>
            <span class="mr-5">0:</span>
            <span>1000</span>
          </Col>
          <Col>
            <span class="mr-5">1:</span>
            <span>1000</span>
          </Col>
          <Col>
            <span class="mr-5">2:</span>
            <span>1000</span>
          </Col>
          <Col>
            <span class="mr-5">3:</span>
            <span>1000</span>
          </Col>
          <Col>
            <span class="mr-5">4+:</span>
            <span>1000</span>
          </Col>
        </Row>

        <div class="h-[400px]" ref="companyChartRef"> </div>
      </CardGrid>

      <CardGrid style="width: 50%; height: 500px" :hoverable="false">
        <Row justify="space-between">
          <Col>
            <TypographyTitle :level="5">
              {{ t('merchant.texts.useDistribution') }}
            </TypographyTitle>
          </Col>

          <Col>
            <TypographyText type="secondary">
              {{ t('merchant.texts.useMagicCause') }}
            </TypographyText>
          </Col>
        </Row>
        <div class="h-[400px]" ref="useChartRef"> </div>
      </CardGrid>

      <CardGrid style="width: 50%; height: 500px" :hoverable="false">
        <Row justify="space-between">
          <Col>
            <TypographyTitle :level="5">
              {{ t('merchant.texts.channelDistribution') }}
            </TypographyTitle>
          </Col>

          <Col>
            <TypographyText type="secondary">
              {{ t('merchant.texts.channelDistributionDesc') }}
            </TypographyText>
          </Col>
        </Row>
        <div class="h-[400px]" ref="channelChartRef"> </div>
      </CardGrid>
    </Card>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import {
    Card,
    Row,
    Col,
    TypographyTitle,
    TypographyText,
    Space,
    Avatar,
    Statistic,
    CardGrid,
    TypographyParagraph,
  } from 'ant-design-vue';
  import { Icon } from '/@/components/Icon';
  import { ref, onMounted } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const structChartRef = ref();
  const { setOptions: setStructOptions } = useECharts(structChartRef);
  const subscribeTimeChartRef = ref();
  const { setOptions: setSubscribeTimeOptions } = useECharts(subscribeTimeChartRef);
  const businessChartRef = ref();
  const { setOptions: setBusinessOptions } = useECharts(businessChartRef);
  const locationChartRef = ref();
  const { setOptions: setLocationOptions } = useECharts(locationChartRef);
  const companyChartRef = ref();
  const { setOptions: setCompanyOptions } = useECharts(companyChartRef);
  const useChartRef = ref();
  const { setOptions: setUseOptions } = useECharts(useChartRef);
  const channelChartRef = ref();
  const { setOptions: setChannelOptions } = useECharts(channelChartRef);

  onMounted(() => {
    setStructOptions({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        right: 'right',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          label: {
            show: false,
          },
          center: ['25%', '50%'],
        },
      ],
    });

    setSubscribeTimeOptions({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    });

    setBusinessOptions({
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['70%', '100%'],
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    });

    setLocationOptions({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    });

    setCompanyOptions({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    });

    setUseOptions({
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['70%', '100%'],
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    });

    setChannelOptions({
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['70%', '100%'],
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    });
  });
</script>
<style scoped></style>

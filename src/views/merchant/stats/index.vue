<template>
  <PageWrapper contentFullHeight>
    <Card>
      <CardGrid style="width: 50%; height: 250px" :hoverable="false">
        <Row justify="space-between">
          <Col>
            <TypographyTitle :level="5">
              Description of the total number of merchants
            </TypographyTitle>
            <TypographyText type="secondary">
              An overview of the overall number of merchants on the platform
            </TypographyText>
          </Col>

          <Col>
            <TypographyText type="secondary"> Calculated on: 2021-07-28 00:18:28 </TypographyText>
          </Col>
        </Row>
        <Space class="mt-5" :size="20">
          <Avatar :size="80" />
          <Statistic title="7-28(Wed)" value="319" />
          <Space direction="vertical">
            <div>
              <span>YoY</span>
              <Icon color="rgb(248, 113, 113)" icon="material-symbols:arrow-downward-rounded" />
              <span class="text-red-400">5.38%</span>
            </div>
            <div>
              <span>MoM</span>
              <Icon color="rgb(52, 211, 153)" icon="ic:baseline-arrow-upward" />
              <span class="text-green-400">5.38%</span>
            </div>
          </Space>
        </Space>
      </CardGrid>

      <CardGrid style="width: 50%; height: 250px" :hoverable="false">
        <Row justify="space-between">
          <Col>
            <TypographyTitle :level="5"> Merchant composition structure </TypographyTitle>
            <TypographyText type="secondary">
              Type composition of platform merchants
            </TypographyText>
          </Col>

          <Col>
            <TypographyText type="secondary"> Calculated on: 2021-07-28 00:18:28 </TypographyText>
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
            <TypographyTitle :level="5"> Merchant Subscription times </TypographyTitle>
          </Col>

          <Col>
            <TypographyText type="secondary">
              Percentage of merchant payment times in the past 90 days
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
            <TypographyTitle :level="5"> Business industry distribution </TypographyTitle>
          </Col>

          <Col>
            <TypographyText type="secondary"> The Merchant Industry </TypographyText>
          </Col>
        </Row>
        <div class="h-[400px]" ref="businessChartRef"> </div>
      </CardGrid>

      <CardGrid style="width: 50%; height: 500px" :hoverable="false">
        <Row justify="space-between" class="mb-5">
          <Col>
            <TypographyTitle :level="5"> Number of business locations </TypographyTitle>
          </Col>

          <Col>
            <TypographyText type="secondary"> The number of business locations </TypographyText>
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
            <TypographyTitle :level="5"> Company population distribution </TypographyTitle>
          </Col>

          <Col>
            <TypographyText type="secondary"> Business population distribution </TypographyText>
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
            <TypographyTitle :level="5"> Use distribution </TypographyTitle>
          </Col>

          <Col>
            <TypographyText type="secondary">
              Distribution of reasons why merchants use Magic
            </TypographyText>
          </Col>
        </Row>
        <div class="h-[400px]" ref="useChartRef"> </div>
      </CardGrid>

      <CardGrid style="width: 50%; height: 500px" :hoverable="false">
        <Row justify="space-between">
          <Col>
            <TypographyTitle :level="5"> Channel distribution </TypographyTitle>
          </Col>

          <Col>
            <TypographyText type="secondary"> How did merchants hear about Magic? </TypographyText>
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

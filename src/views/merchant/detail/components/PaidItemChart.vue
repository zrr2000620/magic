<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  const chartRef = ref();
  const { setOptions } = useECharts(chartRef);

  onMounted(() => {
    setOptions({
      title: {
        text: 'Proportion of paid items',
        bottom: 'bottom',
      },
      legend: {
        orient: 'vertical',
        top: 'middle',
        right: 50,
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
          center: ['25%', '50%'],
          labelLine: {
            show: false,
          },
          label: {
            show: false,
          },
        },
      ],
    });
  });
</script>

<template>
  <div ref="chartRef" class="w-[500px] h-[300px]"></div>
</template>

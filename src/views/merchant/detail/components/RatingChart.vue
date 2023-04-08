<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  const chartRef = ref();
  const { setOptions } = useECharts(chartRef);

  onMounted(() => {
    setOptions({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
      title: {
        text: 'Rating',
      },
    });
  });
</script>

<template>
  <div ref="chartRef" class="w-full h-[300px]"></div>
</template>

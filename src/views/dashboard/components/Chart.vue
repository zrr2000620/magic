<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useECharts } from '/@/hooks/web/useECharts';
  const chartRef = ref<HTMLDivElement>();
  const { setOptions } = useECharts(chartRef as any);

  onMounted(() => {
    setOptions({
      series: [
        {
          type: 'line',
          data: [10, 20, 30, 40, 50],
        },

        {
          type: 'bar',
          data: [10, 20, 30, 40, 50],
        },
      ],
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
    });
  });
</script>

<template>
  <div ref="chartRef" class="h-full"></div>
</template>

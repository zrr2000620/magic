<script setup lang="ts">
  import { BasicTable, useTable } from '/@/components/Table';

  const [register] = useTable({
    dataSource: [{}, {}, {}],
    showIndexColumn: false,
    bordered: true,
    rowKey: 'id',
    columns: [
      {
        title: '',
        dataIndex: 'a',
      },
      {
        title: 'Jan 2019',
        dataIndex: 'b',
      },
      {
        title: 'Feb 2019',
        dataIndex: 'c',
      },
      {
        title: 'Mar 2019',
        dataIndex: 'd',
      },
      {
        title: 'Apr 2019',
        dataIndex: 'e',
      },
      {
        title: 'May 2019',
        dataIndex: 'f',
      },
      {
        title: 'Jun 2019',
        dataIndex: 'g',
      },
    ],
    showSummary: true,
    pagination: false,
    summaryData: [
      {
        a: 'total',
        b: '$269',
        c: '$269',
        d: '$269',
        e: '$269',
        f: '$269',
        g: '$269',
      },
    ],
  });
</script>

<template>
  <BasicTable @register="register" />
</template>

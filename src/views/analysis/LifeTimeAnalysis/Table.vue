<script setup lang="ts">
  import { BasicTable, useTable } from '/@/components/Table';

  const [register] = useTable({
    dataSource: [{}, {}, {}],
    showIndexColumn: false,
    bordered: true,
    rowKey: 'id',
    columns: [
      {
        title: 'Date',
        dataIndex: 'a',
      },
      {
        title: 'Month 0',
        dataIndex: 'b',
      },
      {
        title: 'Month 1',
        dataIndex: 'c',
      },
      {
        title: 'Month 2',
        dataIndex: 'd',
      },
      {
        title: 'Month 3',
        dataIndex: 'e',
      },
      {
        title: 'Month 4',
        dataIndex: 'f',
      },
    ],
    pagination: false,
  });
</script>

<template>
  <BasicTable @register="register" />
</template>

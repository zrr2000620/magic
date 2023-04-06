<template>
  <BasicTree :treeData="treeData" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { BasicTree, TreeItem } from '/@/components/Tree';
  const treeData = ref<TreeItem[]>([]);
</script>
<style scoped></style>

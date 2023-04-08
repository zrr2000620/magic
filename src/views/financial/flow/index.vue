<template>
  <PageWrapper dense :title="t($route.meta.title)" class="index">
    <template #headerContent>
      <div>{{ t('financial.overViewContent') }}</div>
      <Row>
        <Card>1</Card>
        <Card>2</Card>
      </Row>
    </template>
    <Card>123</Card>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { Card } from 'ant-design-vue';
  const { t } = useI18n();
</script>
<style scoped>
  .index {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>

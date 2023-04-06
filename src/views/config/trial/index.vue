<template>
  <PageWrapper dense :title="t('config.trial.header')">
    <template #headerContent>
      <div style="margin-bottom: 10px">{{ t('config.trial.headerContent') }}</div>
      <Button type="primary">{{ t('config.trial.save') }}</Button>
    </template>
    <TiralForm />
    <!-- <TiraTree /> -->
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { Button } from 'ant-design-vue';
  import TiralForm from './components/TrialForm.vue';
  // import TiraTree from './components/TrialTree.vue';
  const { t } = useI18n();
</script>
<style scoped></style>

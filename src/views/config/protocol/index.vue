<template>
  <PageWrapper dense :title="t($route.meta.title)">
    <template #headerContent>
      <div style="margin-bottom: 10px">{{ t('config.protocol.headerContent') }}</div>
      <Button type="primary" size="middle">{{ t('config.protocol.save') }}</Button>
    </template>
    <Card>
      <div class="card">
        <div class="lg:flex">
          <span style="width: 80px">{{ t('config.protocol.serviceAgreement') }}</span>
          <Tinymce v-model="value" @change="handleChange" width="100%" />
        </div>
        <div class="lg:flex">
          <span style="width: 80px">{{ t('config.protocol.privacyPolicy') }}</span>
          <Tinymce v-model="value" @change="handleChange" width="100%" />
        </div>
        <div class="lg:flex">
          <span style="width: 80px">订阅协议</span>
          <Tinymce v-model="value" @change="handleChange" width="100%" />
        </div>
      </div>
    </Card>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { Button, Card } from 'ant-design-vue';
  import { Tinymce } from '/@/components/Tinymce/index';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { ref } from 'vue';
  const value = ref('hello world!');
  function handleChange(value: string) {
    console.log(value);
  }
  const { t } = useI18n();
</script>
<style scoped lang="less">
  .card {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>

<script setup lang="ts">
  import { useI18n } from '/@/hooks/web/useI18n';
  import { Icon } from '/@/components/Icon';
  import { Space, TypographyText } from 'ant-design-vue';
  const { t } = useI18n();
</script>
<template>
  <div>
    <Space>
      <Space>
        <TypographyText type="secondary">{{ t('dashboard.yoy') }}</TypographyText>
        <div>
          <Icon color="rgb(248, 113, 113)" icon="material-symbols:arrow-downward-rounded" />
          <span class="text-red-400">5.38%</span>
        </div>
      </Space>
      <Space>
        <TypographyText type="secondary">{{ t('dashboard.mom') }}</TypographyText>
        <div>
          <Icon color="rgb(52, 211, 153)" icon="ic:baseline-arrow-upward" />
          <span class="text-green-400">5.38%</span>
        </div>
      </Space>
    </Space>
  </div>
</template>

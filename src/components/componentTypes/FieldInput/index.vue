<script setup lang="ts">
  import { Input, Select, SelectOption } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';

  const { t } = useI18n();
</script>

<template>
  <Input :placeholder="t('component.fieldInput.placeholder')">
    <template #addonBefore>
      <Select :placeholder="t('component.fieldInput.fieldSelectPlaceholder')">
        <SelectOption value="">admin name</SelectOption>
      </Select>
    </template>
  </Input>
</template>

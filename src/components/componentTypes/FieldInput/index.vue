<script setup lang="ts">
  import { Input, Select, SelectProps } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';

  interface Props {
    options: SelectProps['options'];
    type?: number;
    onTypeChange?: (v: any) => void;
  }

  const props = defineProps<Props>();

  const { t } = useI18n();

  function handlerSelectChange(type: any) {
    props.onTypeChange?.(type);
  }

  console.log(props);
</script>

<template>
  <div>
    <Input :placeholder="t('component.fieldInput.placeholder')">
      <template #addonBefore>
        <Select
          :placeholder="t('component.fieldInput.fieldSelectPlaceholder')"
          :options="props.options"
          @change="handlerSelectChange"
        />
      </template>
    </Input>
  </div>
</template>

<script setup lang="ts">
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import {
    Input,
    List,
    ListItem,
    TypographyTitle,
    CheckableTag,
    Radio,
    RadioGroup,
  } from 'ant-design-vue';

  const [register] = useModalInner(() => {});
  const { t } = useI18n();
</script>
<template>
  <BasicModal v-bind="$attrs" @register="register" :ok-text="t('common.confirmText')" :width="560">
    <div class="pt-3px pr-3px">
      <Input class="mb-5">
        <template #prefix>
          <SearchOutlined />
        </template>
      </Input>

      <RadioGroup>
        <Radio> {{ t('merchant.texts.tagRadioByAny') }} </Radio>
        <Radio> {{ t('merchant.texts.tagRadioByAll') }} </Radio>
        <Radio> {{ t('merchant.texts.tagRadioBynotTag') }} </Radio>
      </RadioGroup>

      <List>
        <template #renderItem>
          <ListItem>
            <TypographyTitle :level="5"> Tab group name 1 </TypographyTitle>
            <CheckableTag>one</CheckableTag>
            <CheckableTag>two</CheckableTag>
            <CheckableTag>three</CheckableTag>
          </ListItem>
        </template>
      </List>
    </div>

    <template #insertFooter>
      <div class="w-[65%] text-left">
        {{ t('merchant.texts.tagSelected', { total: 0 }) }}
        <AButton type="link"> {{ t('merchant.actions.clean') }} </AButton>
      </div>
    </template>
  </BasicModal>
</template>

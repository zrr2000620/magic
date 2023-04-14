<script setup lang="ts">
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { ref, unref } from 'vue';
  import {
    Input,
    List,
    ListItem,
    TypographyTitle,
    CheckableTag,
    Radio,
    RadioGroup,
  } from 'ant-design-vue';

  const emit = defineEmits(['confirm']);
  const [register, { closeModal }] = useModalInner(() => {});
  const { t } = useI18n();
  const value = ref({
    type: 1,
    tags: [],
  });

  function handlerConfirm() {
    emit('confirm', unref(value));
    closeModal();
  }
</script>
<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :ok-text="t('common.confirmText')"
    :width="560"
    @ok="handlerConfirm"
  >
    <div class="pt-3px pr-3px">
      <Input class="mb-5">
        <template #prefix>
          <SearchOutlined />
        </template>
      </Input>

      <RadioGroup v-model:value="value.type">
        <Radio :value="1"> {{ t('merchant.texts.tagRadioByAny') }} </Radio>
        <Radio :value="2"> {{ t('merchant.texts.tagRadioByAll') }} </Radio>
        <Radio :value="3"> {{ t('merchant.texts.tagRadioBynotTag') }} </Radio>
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

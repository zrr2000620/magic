<script setup lang="ts">
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { SearchOutlined } from '@ant-design/icons-vue';
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
</script>
<template>
  <BasicModal v-bind="$attrs" @register="register" :ok-text="'Confirm'" :width="560">
    <div class="pt-3px pr-3px">
      <Input class="mb-5">
        <template #prefix>
          <SearchOutlined />
        </template>
      </Input>

      <RadioGroup>
        <Radio> Matches any tag </Radio>
        <Radio> Matches all tags at the same time </Radio>
        <Radio> Untagged user </Radio>
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
        1 tab selected
        <AButton type="link"> clean </AButton>
      </div>
    </template>
  </BasicModal>
</template>

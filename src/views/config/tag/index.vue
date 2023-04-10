<template>
  <PageWrapper dense>
    <template #headerContent>
      <div class="header">
        <Button type="primary" @click="addTag">{{ t('config.tag.tagButton') }}</Button>
        <div class="header-content">
          <span style="width: 80px">{{ t('config.tag.keyWord') }}</span>
          <InputGroup compact>
            <Select style="width: 8%" :value="rrf">
              <SelectOption value="op1">{{ t('config.tag.tagGroup') }}</SelectOption>
              <SelectOption value="op2">{{ t('config.tag.tagName') }}</SelectOption>
            </Select>
            <InputSearch style="width: 30%"
          /></InputGroup>
        </div>
      </div>
      <div class="tagList">
        <List item-layout="horizontal">
          <ListItem v-for="(item, index) in [{}]" :key="index">
            <template #actions>
              <Button class="icon" style="color: rgb(215 215 217)" type="text"
                ><MenuFoldOutlined /> <span>{{ t('config.tag.up') }}</span></Button
              >
              <Button class="icon" type="text"
                ><MenuUnfoldOutlined /><span>{{ t('config.tag.down') }}</span></Button
              >
              <Button class="icon" type="text" @click="addTag"
                ><FormOutlined /><span>{{ t('config.tag.edit') }}</span></Button
              >
            </template>
            <ListItemMeta>
              <template #title>
                <span style="font-size: 20px">Tag group 1</span>
              </template>
              <template #description>
                <template v-for="(tag, ini) in state.tags" :key="ini">
                  <Tooltip :title="tag" v-if="tag.length > 10">
                    <Tag> {{ `${tag.slice(0, 20)}...` }}</Tag>
                  </Tooltip>
                  <Tag v-else :closable="index !== 0">
                    {{ tag }}
                  </Tag>
                </template>
                <Input
                  size="small"
                  ref="inputRef"
                  v-model:value="state.inputValue"
                  type="text"
                  :style="{ width: '78px' }"
                  v-if="state.inputVisible"
                  @keyup.enter="handleInputConfirm"
                  @blur="handleInputConfirm"
                />
                <Tag v-else @click="showInput" style="background: #fff; border-style: dashed">
                  {{ t('config.tag.add') }}</Tag
                >
              </template>
              <ListItem>
                <template #actions>
                  <div>222</div>
                </template></ListItem
              >
            </ListItemMeta>
          </ListItem>
        </List>
      </div>
    </template>
    <TagModal @register="register" /> </PageWrapper
></template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { MenuFoldOutlined, MenuUnfoldOutlined, FormOutlined } from '@ant-design/icons-vue';
  import TagModal from './components/TagModal.vue';
  import {
    Tag,
    Tooltip,
    List,
    ListItem,
    ListItemMeta,
    Button,
    InputGroup,
    Select,
    SelectOption,
    InputSearch,
    Input,
  } from 'ant-design-vue';
  import { nextTick, reactive, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  const { t } = useI18n();
  const rrf = ref('op1');
  const [register, { openModal: addTag }] = useModal();
  const state = reactive({
    tags: ['Unremovable', 'Tag 2', 'Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3Tag 3'],
    inputVisible: false,
    inputValue: '',
  });
  const inputRef = ref();
  const showInput = () => {
    state.inputVisible = true;
    console.log(inputRef);

    nextTick(() => {
      inputRef.value[0].focus();
    });
  };
  const handleInputConfirm = () => {
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);

    Object.assign(state, {
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };
</script>
<style lang="less" scoped>
  .header {
    display: flex;
    align-items: center;
    gap: 40px;

    &-content {
      flex: 1;
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    align-items: center;
    gap: 5px;
  }
</style>

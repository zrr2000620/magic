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
          <TransitionGroup name="flip-list">
            <ListItem v-for="(item, index) in tagDataSource" :key="item.id">
              <template #actions>
                <Button @click="handlerUp(index)" class="icon" type="text" :disabled="index === 0"
                  ><MenuFoldOutlined /> <span>{{ t('config.tag.up') }}</span></Button
                >
                <Button
                  @click="handlerDown(index)"
                  :disabled="index === tagDataSource.length - 1"
                  class="icon"
                  type="text"
                  ><MenuUnfoldOutlined /><span>{{ t('config.tag.down') }}</span></Button
                >
                <Button class="icon" type="text" @click="updateTag(item)"
                  ><FormOutlined /><span>{{ t('config.tag.edit') }}</span></Button
                >
              </template>
              <ListItemMeta>
                <template #title>
                  <span style="font-size: 20px">{{ item.merchantGroupName }}</span>
                </template>
                <template #description>
                  <template v-for="(tag, ind) in item.label.split(',')" :key="ind">
                    <Tooltip :title="tag" v-if="tag.length > 10">
                      <Tag> {{ `${tag.slice(0, 20)}...` }}</Tag>
                    </Tooltip>
                    <Tag v-else :closable="ind !== 0">
                      {{ tag }}
                    </Tag>
                  </template>
                  <Input
                    :key="item.id"
                    size="small"
                    ref="inputRef"
                    type="text"
                    :style="{ width: '78px' }"
                    v-if="item.inputVisible"
                    @keyup.enter="handleInputConfirm(item.id)"
                    @blur="handleInputConfirm(item.id)"
                    v-model:value="state.inputValue"
                  />
                  <Tag
                    v-else
                    @click="showInput(item.id)"
                    style="background: #fff; border-style: dashed"
                  >
                    {{ t('config.tag.add') }}</Tag
                  >
                </template>
              </ListItemMeta>
            </ListItem>
          </TransitionGroup>
        </List>
      </div>
    </template>
    <TagModal
      @tagDataSource="tagDataSource"
      @register="register"
      @success="lodaingTagList"
    /> </PageWrapper
></template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { MenuFoldOutlined, MenuUnfoldOutlined, FormOutlined } from '@ant-design/icons-vue';
  import TagModal from './components/TagModal.vue';
  import { editTag, getTagList } from '/@/api/config/tag';
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
  import { reactive, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useModal } from '/@/components/Modal';
  interface tagItem {
    createTime: string;
    id: number;
    isDelete: number;
    label: string;
    merchantGroupName: string;
    updateTime: string;
    inputVisible: boolean;
    inputValue: string;
  }

  const { t } = useI18n();
  const rrf = ref('op1');
  const [register, { openModal }] = useModal();
  const tagDataSource = ref<tagItem[]>([]);
  const loading = ref(false);
  const state = reactive({
    tags: [''],
    inputVisible: false,
    inputValue: '',
  });
  const inputRef = ref();
  const showInput = (id: number) => {
    tagDataSource.value?.filter((x) => {
      if (x.id === id) {
        x.inputVisible = true;
      }
    });
  };
  const handleInputConfirm = (id: number) => {
    tagDataSource.value?.filter(async (x) => {
      if (x.id === id) {
        x.inputValue = '';
        const inputValue = state.inputValue;
        const tagLabel = x.label.split(',');
        let tags = state.tags;
        console.log(inputValue && tags.indexOf(inputValue));

        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = [...tagLabel, inputValue];
        }
        try {
          await editTag({ id: id, label: tags.toString() });
          x.inputVisible = false;
          lodaingTagList();
        } catch (error) {}
      }
    });
  };
  function addTag() {
    openModal(true);
  }
  function updateTag(record) {
    openModal(true, record);
  }
  function handlerUp(index) {
    tagDataSource.value[index] = tagDataSource.value.splice(
      index - 1,
      1,
      tagDataSource.value[index],
    )[0];
  }
  function handlerDown(index) {
    tagDataSource.value[index] = tagDataSource.value.splice(
      index + 1,
      1,
      tagDataSource.value[index],
    )[0];
  }
  async function lodaingTagList() {
    try {
      loading.value = true;
      const data = await getTagList();
      tagDataSource.value = data;
    } finally {
      loading.value = false;
    }
  }
  lodaingTagList();
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

  .tagItem {
    display: flex;
    gap: 15px;
  }

  .flip-list-move {
    transition: transform 1s;
  }
</style>

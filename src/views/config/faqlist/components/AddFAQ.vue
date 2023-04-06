<template>
  <PageWrapper dense title="基本信息">
    <template #headerContent> </template>
    <Card>
      <div class="Card">
        <div class="lg:flex">
          <span style="width: 80px">{{ t('campaign.sequenceM') }}</span>
          <Input style="width: 400px" />
        </div>
        <div class="lg:flex">
          <span style="width: 80px">{{ t('campaign.categoryM') }}</span>
          <Select style="width: 400px">
            <SelectOption value="op1" />
            <SelectOption value="op3" />
            <SelectOption value="op4" />
          </Select>
        </div>
        <div class="lg:flex" style="gap: 20px"
          ><div class="lg:flex">
            <span style="width: 100px">{{ t('campaign.displayORnot') }}</span>
            <Switch v-model:checked="checked">123</Switch></div
          ><span>After opening, the FAQ will be displayed on the front end</span>
        </div>

        <div style="font-size: 20px; font-weight: 600; margin-top: 20px">Content</div>
        <Divider />
        <div class="lg:flex">
          <span style="width: 80px">Title：</span>
          <Input style="width: 400px" />
        </div>
        <div class="lg:flex">
          <span style="width: 80px">video：</span>
          <Upload>
            <Button><UploadOutlined />upload video</Button>
          </Upload>
        </div>
        <div class="lg:flex">
          <span style="width: 80px">Detail：</span>
          <Tinymce v-model="value" @change="handleChange" width="100%" />
        </div>
      </div>
    </Card>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { Tinymce } from '/@/components/Tinymce/index';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import {
    Input,
    Button,
    Card,
    Switch,
    Select,
    SelectOption,
    Divider,
    Upload,
  } from 'ant-design-vue';
  import { ref } from 'vue';
  const { t } = useI18n();
  const checked = ref<boolean>(false);
  const value = ref('hello world!');
  function handleChange(value: string) {
    console.log(value);
  }
</script>
<style scoped>
  .Card {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>

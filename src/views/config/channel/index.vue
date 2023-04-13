<template>
  <PageWrapper dense :title="t($route.meta.title)">
    <template #headerContent>
      <span>{{ t('config.channel.headerContent') }}</span>
    </template>
    <Card :loading="loading">
      <div style="font-size: 20px; font-weight: 500; margin-bottom: 15px">{{
        t('config.channel.channelList.InboxChannel')
      }}</div>
      <Row :gutter="[20, 20]" justify="start">
        <Col v-for="item in messageItems" :key="item.id">
          <Card>
            <div class="carItem"
              ><Avatar :size="80" :src="item.icon" />
              <TypographyTitle :level="5" ellipsis>{{ item.channelName }}</TypographyTitle>
              <span style="font-size: 5px; font-weight: 400">{{
                t('config.channel.iconDes', { num: item.count })
              }}</span>
              <Switch
                :checked-children="t('config.channel.on')"
                :un-checked-children="t('config.channel.off')"
                :checked="!!item.isEnable"
                @change="handlerStatusChange(item)"
              />
            </div>
          </Card>
        </Col>
      </Row>
      <div style="font-size: 20px; font-weight: 500; margin-bottom: 15px">{{
        t('config.channel.channelList.ReviewSite')
      }}</div>
      <Row :gutter="[20, 20]" justify="start" style="margin-bottom: 20px">
        <Col v-for="(item, index) in siteItems" :key="index">
          <Card>
            <div class="carItem"
              ><Avatar :size="80" :src="item.icon" />
              <TypographyTitle :level="5" ellipsis>{{ item.channelName }}</TypographyTitle>
              <span style="font-size: 5px; font-weight: 400">{{
                t('config.channel.iconDes', { num: item.count })
              }}</span>
              <Switch
                :checked-children="t('config.channel.on')"
                :un-checked-children="t('config.channel.off')"
                :checked="!!item.isEnable"
                @change="handlerStatusChange(item)"
              />
            </div>
          </Card>
        </Col>
      </Row>
      <Card
        :bordered="false"
        :bodyStyle="{
          borderRadius: '1%',
          background: 'rgb(230,247,255)',
          border: '1px solid rgb(145 213 255)',
        }"
      >
        <div class="card"
          ><ExclamationCircleOutlined style="font-size: 30px; color: rgb(24 144 255)" />
          <div class="card-item">
            <div style="font-size: 16px; font-weight: 600">{{
              t('config.channel.channelDesc.title')
            }}</div>
            <pre style="white-space: 'pre-wrap'">{{
              t('config.channel.channelDesc.contentOne')
            }}</pre>
            <pre style="white-space: 'pre-wrap'">{{
              t('config.channel.channelDesc.contentTwo')
            }}</pre>
          </div>
        </div>
      </Card>
    </Card>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
  import { Card, Row, Col, Avatar, Switch, TypographyTitle } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { ref } from 'vue';
  import { changeChannel, getChannelList } from '/@/api/config/channel';
  interface Item {
    isEnable: number;
    icon: string;
    id: number;
    count: number;
    channelName: string;
  }

  const { t } = useI18n();
  const loading = ref(false);

  const messageItems = ref<Item[]>([]);
  const siteItems = ref<Item[]>([]);

  async function loadChannelList() {
    try {
      loading.value = true;
      const data = await getChannelList();
      messageItems.value = data.messageChannels ?? [];
      siteItems.value = data.commentSites ?? [];
    } finally {
      loading.value = false;
    }
  }

  async function handlerStatusChange(record) {
    try {
      loading.value = true;
      await changeChannel({
        id: record.id,
        isEnable: record.isEnable ? 0 : 1,
      });
      loadChannelList();
    } finally {
      loading.value = false;
    }
  }

  loadChannelList();
</script>
<style scoped lang="less">
  .carItem {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 208px;
    height: 180px;
  }

  .card {
    display: flex;
    gap: 20px;
  }
</style>

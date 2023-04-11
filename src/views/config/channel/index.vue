<template>
  <PageWrapper dense :title="t($route.meta.title)">
    <template #headerContent>
      <span>{{ t('config.channel.headerContent') }}</span>
    </template>
    <Card>
      <div style="font-size: 20px; font-weight: 500; margin-bottom: 15px">{{
        t('config.channel.channelList.InboxChannel')
      }}</div>
      <Row :gutter="20" justify="start">
        <Col
          :span="4"
          v-for="(item, index) in [
            { name: t('config.channel.iconNameList.SMS'), iconDes: t('config.channel.iconDes') },
            { name: t('config.channel.iconNameList.Email'), iconDes: t('config.channel.iconDes') },
            {
              name: t('config.channel.iconNameList.FacebookMessenger'),
              iconDes: t('config.channel.iconDes'),
            },
            {
              name: t('config.channel.iconNameList.InstagramMessenger'),
              iconDes: t('config.channel.iconDes'),
            },
            {
              name: t('config.channel.iconNameList.Webchat'),
              iconDes: t('config.channel.iconDes'),
            },
          ]"
          :key="index"
        >
          <Card>
            <div class="carItem"
              ><Avatar :size="80" />
              <span style="font-weight: 700">{{ item.name }}</span>
              <span style="font-size: 5px; font-weight: 400">{{ item.iconDes }}</span>
              <Switch
                :checked-children="t('config.channel.on')"
                :un-checked-children="t('config.channel.off')"
                v-model:checked="checked.check"
              />
            </div>
          </Card>
        </Col>
      </Row>
      <div style="font-size: 20px; font-weight: 500; margin-bottom: 15px">{{
        t('config.channel.channelList.ReviewSite')
      }}</div>
      <Row :gutter="20" justify="start" style="margin-bottom: 20px">
        <Col
          :span="4"
          v-for="(item, index) in [
            { name: t('config.channel.iconNameList.SMS'), iconDes: t('config.channel.iconDes') },
            { name: t('config.channel.iconNameList.Email'), iconDes: t('config.channel.iconDes') },
            {
              name: t('config.channel.iconNameList.FacebookMessenger'),
              iconDes: t('config.channel.iconDes'),
            },
            {
              name: t('config.channel.iconNameList.InstagramMessenger'),
              iconDes: t('config.channel.iconDes'),
            },
          ]"
          :key="index"
        >
          <Card>
            <div class="carItem"
              ><Avatar :size="80" />
              <span style="font-weight: 700">{{ item.name }}</span>
              <span style="font-size: 5px; font-weight: 400">{{ item.iconDes }}</span>
              <Switch
                :checked-children="t('config.channel.on')"
                :un-checked-children="t('config.channel.off')"
                v-model:checked="checked.check"
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
  import { Card, Row, Col, Avatar, Switch } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { reactive } from 'vue';
  // interface Item {
  //   checked: boolean;
  //   imgSrc: string;
  // }

  const { t } = useI18n();

  const checked = reactive({ check: true });
</script>
<style scoped lang="less">
  .carItem {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }

  .card {
    display: flex;
    gap: 20px;
  }
</style>

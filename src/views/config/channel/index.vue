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
        <Col :span="4" v-for="(item, index) in messageItems" :key="index">
          <Card>
            <div class="carItem"
              ><Avatar :size="80" :src="item.imgSrc" />
              <span style="font-weight: 700">{{ item.text }}</span>
              <span style="font-size: 5px; font-weight: 400">{{
                t('config.channel.iconDes', { num: item.num })
              }}</span>
              <Switch
                :checked-children="t('config.channel.on')"
                :un-checked-children="t('config.channel.off')"
                v-model:checked="item.checked"
              />
            </div>
          </Card>
        </Col>
      </Row>
      <div style="font-size: 20px; font-weight: 500; margin-bottom: 15px">{{
        t('config.channel.channelList.ReviewSite')
      }}</div>
      <Row :gutter="20" justify="start" style="margin-bottom: 20px">
        <Col :span="4" v-for="(item, index) in siteItems" :key="index">
          <Card>
            <div class="carItem"
              ><Avatar :size="80" :src="item.imgSrc" />
              <span style="font-weight: 700">{{ item.text }}</span>
              <span style="font-size: 5px; font-weight: 400">{{
                t('config.channel.iconDes', { num: item.num })
              }}</span>
              <Switch
                :checked-children="t('config.channel.on')"
                :un-checked-children="t('config.channel.off')"
                v-model:checked="item.checked"
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
  import { ref } from 'vue';
  import smsSrc from '/@/assets/images/sms-channel.png';
  import emailSrc from '/@/assets/images/email-channel.png';
  import facebookSrc from '/@/assets/images/facebook-channel.png';
  import instagramSrc from '/@/assets/images/instagram-channel.png';
  import webchartSrc from '/@/assets/images/webchar-channel.png';
  import googleBusSrc from '/@/assets/images/google-channel.svg';
  import facebookBusSrc from '/@/assets/images/facebook-bus.svg';
  import trustpilotSrc from '/@/assets/images/trustpilot-channel.svg';
  import yelpSrc from '/@/assets/images/yelp-channel.svg';
  interface Item {
    checked: boolean;
    imgSrc: string;
    num: number;
    text: string;
  }

  const { t } = useI18n();

  const messageItems = ref<Item[]>([
    {
      checked: false,
      imgSrc: smsSrc,
      num: 0,
      text: t('config.channel.iconNameList.SMS'),
    },
    {
      checked: false,
      imgSrc: emailSrc,
      num: 0,
      text: t('config.channel.iconNameList.Email'),
    },
    {
      checked: false,
      imgSrc: facebookSrc,
      num: 0,
      text: t('config.channel.iconNameList.FacebookMessenger'),
    },
    {
      checked: false,
      imgSrc: instagramSrc,
      num: 0,
      text: t('config.channel.iconNameList.InstagramMessenger'),
    },
    {
      checked: false,
      imgSrc: webchartSrc,
      num: 0,
      text: t('config.channel.iconNameList.Webchat'),
    },
  ]);
  const siteItems = ref<Item[]>([
    {
      checked: false,
      imgSrc: googleBusSrc,
      num: 0,
      text: t('config.channel.iconNameList.GoogleBusiness'),
    },
    {
      checked: false,
      imgSrc: facebookBusSrc,
      num: 0,
      text: t('config.channel.iconNameList.FacebookBusiness'),
    },
    {
      checked: false,
      imgSrc: trustpilotSrc,
      num: 0,
      text: t('config.channel.iconNameList.Trustpilot'),
    },
    {
      checked: false,
      imgSrc: yelpSrc,
      num: 0,
      text: t('config.channel.iconNameList.Yelp'),
    },
  ]);
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

<template>
  <PageWrapper>
    <Card>
      <template #title>{{ t($route.meta.title) }}</template>
      <BasicForm :labelWidth="100" :showActionButtonGroup="false" @register="registerForm">
        <template #priceSlot>
          <Row :gutter="[20, 20]">
            <Col :span="20" class="priceInput">
              <Checkbox>Monthly</Checkbox>
              <Input addon-after="USD/mouth" value=""
            /></Col>
            <Col :span="20" class="priceInput">
              <Checkbox>Annualy</Checkbox>
              <Input addon-after="USD/mouth" value=""
            /></Col>
          </Row>
        </template>
      </BasicForm>
      <h1 style="font-weight: 600; font-size: 16px">{{ t('config.subscribe.content') }}</h1>
    </Card>
    <Card>
      <BasicForm :labelWidth="100" :showActionButtonGroup="false" @register="registerForm2">
        <template #teamSlot>
          <div class="teamSlot">
            <RadioGroup v-model:value="val"
              ><Radio :value="item.value" v-for="(item, index) in option" :key="index">{{
                item.label
              }}</Radio></RadioGroup
            >
            <Input v-show="val === 1" style="width: 200px" addon-after="人" />
          </div>
        </template>
        <template #sentMsgSlot>
          <div class="teamSlot">
            <RadioGroup v-model:value="val1"
              ><Radio :value="item.value" v-for="(item, index) in option" :key="index">{{
                item.label
              }}</Radio></RadioGroup
            >
            <Input v-show="val1 === 1" style="width: 200px" addon-after="次/月" />
          </div>
        </template>
        <template #countSlot>
          <div class="teamSlot">
            <RadioGroup v-model:value="val2"
              ><Radio :value="item.value" v-for="(item, index) in option" :key="index">{{
                item.label
              }}</Radio></RadioGroup
            >
            <Input v-show="val2 === 1" style="width: 200px" addon-after="次/月" />
          </div>
        </template>
      </BasicForm>
    </Card>
    <Card style="margin: 20px 0">
      <div class="treeCard">
        <Menu mode="vertical" style="width: 200px">
          <menu-item key="1" @click="vvl = 1">{{ t('config.trial.home') }}</menu-item>
          <menu-item key="2" @click="vvl = 2">{{ t('config.trial.inbox') }}</menu-item>
          <menu-item key="3" @click="vvl = 3">{{ t('config.trial.reviews') }}</menu-item>
          <menu-item key="4" @click="vvl = 4">{{ t('config.trial.contacts') }}</menu-item>
          <menu-item key="5" @click="vvl = 5">{{ t('config.trial.home') }}</menu-item>
          <menu-item key="6" @click="vvl = 6">{{ t('config.trial.campaigns') }}</menu-item>
          <menu-item key="7" @click="vvl = 7">{{ t('config.trial.webWidget') }}</menu-item>
          <menu-item key="8" @click="vvl = 8">{{ t('config.trial.reporting') }}</menu-item>
        </Menu>
        <div class="lg:flex" style="flex: 1; flex-direction: column; gap: 10px">
          <div>Function permissions：</div>
          <div v-if="vvl === 1">
            <BasicTree checkable :treeData="treeData" />
          </div>
          <div v-if="vvl === 2">112</div>
          <div v-if="vvl === 3">113</div>
          <div v-if="vvl === 4">114</div>
          <div v-if="vvl === 5">115</div>
          <div v-if="vvl === 6">116</div>
          <div v-if="vvl === 7">117</div>
          <div v-if="vvl === 8">118</div>
        </div>
      </div>
    </Card>
    <template #rightFooter>
      <Button size="middle" style="margin-right: 20px">Cancel</Button>
      <Button size="middle" type="primary">Save</Button>
    </template>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { BasicTree, TreeItem } from '/@/components/Tree';
  import {
    Card,
    Checkbox,
    Input,
    Row,
    Col,
    Button,
    RadioGroup,
    Radio,
    Menu,
    MenuItem,
  } from 'ant-design-vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { ref } from 'vue';
  const { t } = useI18n();
  const vvl = ref(1);
  const option = [
    { label: t('config.trial.teamSize.unlimited'), value: 0 },
    { label: t('config.trial.teamSize.limit'), value: 1 },
  ];
  const val = ref(1);
  const val1 = ref(0);
  const val2 = ref(0);
  const treeData = ref<TreeItem[]>([
    {
      title: 'Overall situation',
      key: '0-01',
      icon: 'home|svg',
      children: [
        { title: 'Overall situation', key: '0-0-01' },
        {
          title: 'Notification preferences',
          key: '0-0-11',
        },
      ],
    },
    {
      title: 'Home',
      key: '0-0',
      icon: 'home|svg',
      children: [
        { title: 'leaf', key: '0-0-0' },
        { title: 'leaf', key: '0-0-0' },
        { title: 'leaf', key: '0-0-0' },
        { title: 'leaf', key: '0-0-0' },
      ],
    },
  ]);
  const [registerForm] = useForm({
    labelWidth: 120,
    colon: true,
    schemas: [
      {
        label: t('config.faq.sequenceLabel'),
        component: 'Input',
        field: 'i2',
        colProps: {
          span: 13,
        },
      },
      {
        label: t('config.subscribe.planName'),
        component: 'Input',
        field: 'i3',
        colProps: {
          span: 13,
        },
      },
      {
        label: t('config.subscribe.planDes'),
        component: 'InputTextArea',
        field: 'i4',
        colProps: {
          span: 13,
        },
      },
      {
        label: t('config.subscribe.level'),
        component: 'Select',
        field: 'i5',
        colProps: {
          span: 13,
        },
        componentProps: {
          options: [
            { label: '1', value: 0 },
            { label: '2', value: 1 },
            { label: '3', value: 2 },
            { label: '4', value: 3 },
          ],
        },
      },
      {
        label: t('config.subscribe.specification'),
        component: 'Input',
        field: 'i6',
        slot: 'teamSlot',
        colProps: {
          span: 12,
        },
      },
    ],
  });
  const [registerForm2] = useForm({
    labelWidth: 180,
    colon: true,
    schemas: [
      {
        label: t('config.subscribe.teamNumber'),
        component: 'RadioGroup',
        field: 'i61',
        slot: 'teamSlot',
        colProps: {
          span: 12,
        },
      },
      {
        label: t('config.subscribe.numberMsg'),
        component: 'RadioGroup',
        field: 'i99',
        slot: 'sentMsgSlot',
        colProps: {
          span: 12,
        },
      },
      {
        label: t('config.subscribe.count'),
        component: 'RadioGroup',
        field: 'i992',
        slot: 'countSlot',
        colProps: {
          span: 12,
        },
      },
      {
        label: t('config.subscribe.scopeReport'),
        component: 'Select',
        field: 'i9921',
        colProps: {
          span: 12,
        },
        componentProps: {
          options: [
            {
              label: '123',
              value: 0,
            },
            {
              label: '123',
              value: 1,
            },
          ],
        },
      },
    ],
  });
</script>
<style scoped>
  .priceInput {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-left: 2em;
  }

  .teamSlot {
    display: flex;
    align-items: center;
  }

  .treeCard {
    display: flex;
    gap: 10px;
  }
</style>

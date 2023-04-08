<template>
  <PageWrapper dense>
    <Card>
      <BasicForm
        autoFocusFirstItem
        :actionColOptions="{ span: 24 }"
        :labelWidth="200"
        :schemas="schemas"
        :show-submit-button="false"
        :show-reset-button="false"
      >
        <template #trialSlot>
          <div class="teamSlot">
            <Input style="width: 200px" addon-after="Day" />
          </div>
        </template>
        <template #teamSlot>
          <div class="teamSlot">
            <RadioGroup v-model:value="val"
              ><Radio :value="item.value" v-for="(item, index) in option" :key="index">{{
                item.label
              }}</Radio></RadioGroup
            >
            <Input v-show="val === 1" style="width: 200px" addon-after="person" />
          </div>
        </template>
        <template #sendSlost>
          <div class="teamSlot">
            <RadioGroup v-model:value="val2"
              ><Radio :value="item.value" v-for="(item, index) in option" :key="index">{{
                item.label
              }}</Radio></RadioGroup
            >
            <Input v-show="val2 === 1" style="width: 200px" addon-after="times" />
          </div>
        </template>
      </BasicForm>
    </Card>
    <Card>
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
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { BasicForm, FormSchema } from '/@/components/Form/index';
  import { Card, Input, RadioGroup, Menu, MenuItem, Radio } from 'ant-design-vue';
  import { BasicTree, TreeItem } from '/@/components/Tree';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { ref } from 'vue';
  const { t } = useI18n();
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
  const vvl = ref(1);
  const val = ref(0);
  const val2 = ref(1);
  const option = [
    { label: t('config.trial.teamSize.unlimited'), value: 0 },
    { label: t('config.trial.teamSize.limit'), value: 1 },
  ];

  const schemas: FormSchema[] = [
    {
      field: 'field3',
      component: 'Switch',
      label: t('config.trial.switchLabel'),
      colProps: {
        span: 12,
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: t('config.trial.trialDay'),
      slot: 'trialSlot',
      colProps: {
        span: 12,
      },
    },
    {
      field: 'field4',
      component: 'RadioGroup',
      label: t('config.trial.teamSize.title'),
      slot: 'teamSlot',
      colProps: {
        span: 12,
      },
    },
    {
      field: 'field5',
      component: 'RadioGroup',
      label: t('config.trial.teamSize.title'),
      colProps: {
        span: 12,
      },
      componentProps: {
        options: [
          {
            label: t('config.trial.teamSize.unlimited'),
            value: 1,
          },
          {
            label: t('config.trial.teamSize.limit'),
            value: 2,
          },
        ],
      },
    },
    {
      field: 'field6',
      component: 'RadioGroup',
      label: t('config.trial.sendCampaign'),
      slot: 'sendSlost',
      colProps: {
        span: 12,
      },
    },
    {
      field: 'field6',
      component: 'Select',
      label: t('config.trial.reportView'),
      colProps: {
        span: 6,
      },
      componentProps: {
        options: [
          {
            label: '12312',
            value: 1,
          },
          {
            label: '12312',
            value: 1,
          },
          {
            label: '12312',
            value: 1,
          },
        ],
      },
    },
  ];
</script>
<style lang="less" scoped>
  .teamSlot {
    display: flex;
    align-items: center;
  }

  .treeCard {
    display: flex;
    gap: 10px;
  }
</style>

<template>
  <Card>
    <div class="rowGroup">
      <Row :gutter="[25, 15]">
        <Col :span="8">
          <span>{{ t('config.trial.switchLabel') }}</span>
          <Switch class="" checked="false" type="switch|checkbox" bindchange="" />
        </Col>
        <Col :span="12">
          <span>{{ t('config.trial.trialDay') }}</span>
          <Input style="width: 200px" addon-after="Day"
        /></Col>
      </Row>
      <Row :gutter="[25, 200]">
        <Col :span="8">
          <span>{{ t('config.trial.teamSize.title') }}</span>
          <RadioGroup :options="option" :value="val" />
          <Input
            v-show="val === t('config.trial.teamSize.limit')"
            style="width: 200px"
            addon-after="person"
          />
        </Col>
        <Col :span="12">
          <span>{{ t('config.trial.messagesSent') }}</span>
          <RadioGroup :options="option" :value="val" />
        </Col>
      </Row>
      <Row :gutter="[25, 15]">
        <Col :span="8">
          <span>{{ t('config.trial.sendCampaign') }}</span>
          <RadioGroup :options="option" :value="val" />
          <Input
            v-show="val === t('config.trial.teamSize.limit')"
            style="width: 200px"
            addon-after="person"
          />
        </Col>
        <Col :span="12">
          <span>{{ t('config.trial.reportView') }}</span>
          <Select>
            <SelectOption value="op1">{{ t('config.trial.teamSize.unlimited') }}</SelectOption>
          </Select>
        </Col>
      </Row>
    </div>
  </Card>
</template>

<script lang="ts" setup>
  import { Card, Switch, Input, Row, Col, RadioGroup, Select, SelectOption } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { ref } from 'vue';
  const { t } = useI18n();
  const val = ref('');
  const option = [
    { label: t('config.trial.teamSize.unlimited'), value: t('config.trial.teamSize.unlimited') },
    { label: t('config.trial.teamSize.limit'), value: t('config.trial.teamSize.limit') },
  ];
</script>
<style lang="less" scoped></style>

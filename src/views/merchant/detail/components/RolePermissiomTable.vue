<script setup lang="ts">
  import { Row, Col, Divider, Alert, Checkbox, TypographyText } from 'ant-design-vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  const { t } = useI18n();
</script>

<template>
  <Alert
    :message="t('merchant.texts.kindTips')"
    :description="t('merchant.texts.kindTipDesc')"
    show-icon
  />
  <Row style="margin-top: 20px">
    <Col span="6"> {{ t('merchant.texts.administrative') }}</Col>
    <Col span="6" class="text-center"> {{ t('merchant.texts.accountOwner') }}</Col>
    <Col span="6" class="text-center"> {{ t('merchant.texts.teamLeader') }}</Col>
    <Col span="6" class="text-center"> {{ t('merchant.texts.teamMember') }}</Col>
  </Row>
  <Divider />
  <Row style="margin-top: 20px">
    <Col span="6">
      <TypographyText type="secondary">{{ t('merchant.texts.manageSetting') }}</TypographyText>
    </Col>
    <Col span="6" class="text-center">
      <Checkbox />
    </Col>
    <Col span="6" class="text-center">
      <Checkbox />
    </Col>
    <Col span="6" class="text-center">
      <Checkbox />
    </Col>
  </Row>
  <Row style="margin-top: 20px">
    <Col span="6">
      <TypographyText type="secondary"> {{ t('merchant.texts.manageUser') }}</TypographyText>
    </Col>
    <Col span="6" class="text-center">
      <Checkbox />
    </Col>
    <Col span="6" class="text-center">
      <Checkbox />
    </Col>
    <Col span="6" class="text-center">
      <Checkbox />
    </Col>
  </Row>
</template>

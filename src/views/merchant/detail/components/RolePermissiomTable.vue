<script setup lang="ts">
  import { Row, Col, Divider, Alert, Checkbox, TypographyText } from 'ant-design-vue';
</script>

<template>
  <Alert
    message="Kind tips"
    description="Do not directly change the permission settings of the merchant. If you need to change, please obtain the consent of the merchantbefore making adjustments"
    show-icon
  />
  <Row style="margin-top: 20px">
    <Col span="6"> Administrative</Col>
    <Col span="6" class="text-center"> Account Owner</Col>
    <Col span="6" class="text-center"> Team Leader</Col>
    <Col span="6" class="text-center"> Team Me</Col>
  </Row>
  <Divider />
  <Row style="margin-top: 20px">
    <Col span="6">
      <TypographyText type="secondary">Manage Settings</TypographyText>
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
      <TypographyText type="secondary"> Manage Users</TypographyText>
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

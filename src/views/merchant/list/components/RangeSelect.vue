<script setup lang="ts">
  import {
    Input,
    Popover,
    TypographyTitle,
    InputGroup,
    InputNumber,
    Row,
    Col,
  } from 'ant-design-vue';
  import { DownOutlined } from '@ant-design/icons-vue';
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('range-select');
</script>

<template>
  <Popover trigger="click" placement="bottomLeft">
    <template #content>
      <div class="w-[300px]">
        <TypographyTitle :level="5" type="secondary">
          Please enter the amount range
        </TypographyTitle>

        <InputGroup>
          <Row>
            <Col span="10">
              <InputNumber />
            </Col>
            <Col span="4" class="text-center"> ~ </Col>
            <Col span="10">
              <InputNumber />
            </Col>
          </Row>
        </InputGroup>

        <div class="text-right mt-5">
          <AButton type="primary">Confirm</AButton>
        </div>
      </div>
    </template>
    <Input readonly :class="prefixCls">
      <template #suffix>
        <DownOutlined />
      </template>
    </Input>
  </Popover>
</template>

<style lang="less">
  @prefix-cls: ~'@{namespace}-range-select';

  .@{prefix-cls} {
    cursor: pointer;

    input {
      cursor: pointer;
    }
  }
</style>

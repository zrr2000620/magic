<script setup lang="ts">
  import { Tag, Space, Tooltip } from 'ant-design-vue';
  import { EllipsisOutlined } from '@ant-design/icons-vue';
</script>

<template>
  <Space wrap>
    <Tag color="blue">asdsd撒旦阿森纳...</Tag>
    <Tag color="blue">asdsd撒旦阿森纳...</Tag>
    <Tag color="blue">12</Tag>
    <Tooltip>
      <template #title>
        <div class="mb-[5px]">
          <Space wrap :size="[5, 5]">
            <Tooltip title="123">
              <Tag color="blue">撒旦阿森...</Tag>
            </Tooltip>
            <Tag color="blue">森纳</Tag>
            <Tag color="blue">12</Tag>
            <Tag color="blue">12</Tag>
            <Tag color="blue">12</Tag>
            <Tag color="blue">12</Tag>
          </Space>
        </div>
      </template>
      <Tag color="blue">
        <EllipsisOutlined />
      </Tag>
    </Tooltip>
  </Space>
</template>

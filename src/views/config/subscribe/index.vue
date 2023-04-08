<template>
  <PageWrapper dense :title="t($route.meta.title)">
    <template #headerContent>{{ t('config.subscribe.headerContent') }}</template>
    <Card>
      <Row :gutter="[20, 20]">
        <Col span="5" v-for="(item, index) in [{}]" :key="index">
          <Card>
            <template #title>
              <div class="cardHeader">
                <div
                  style="
                    width: 30px;
                    height: 30px;
                    border-radius: 30px;
                    background-color: rgb(234 234 234);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <div
                    style="
                      width: 20px;
                      height: 20px;
                      border-radius: 20px;
                      background-color: rgb(179 193 205);
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                    >{{ index }}</div
                  >
                </div>
                <div>
                  <span style="font-size: 20px; color: rgb(42 103 254); margin-right: 10px"
                    >$179</span
                  >
                  <span>USD/month</span>
                </div>
              </div>
              <div class="cardHeader-content">
                <h1 style="font-weight: 700; font-size: 30px"> Basic Plan</h1>
                <span style="white-space: normal"
                  >Subscription package description (for front-end display view)</span
                >
              </div>
            </template>

            <template #extra>
              <Popover @click="handleClick" v-model:visible="visible" trigger="click">
                <template #title></template>
                <template #content>
                  <div class="lg:flex" style="flex-direction: column">
                    <Button
                      @click="
                        () => {
                          go('subscribe/edit');
                        }
                      "
                      type="link"
                      style="text-align: left; color: #c1937f"
                      ><EditOutlined /><span>{{ t('config.subscribe.edit') }}</span></Button
                    >
                    <Button type="link" style="text-align: left; color: #c1937f"
                      ><ArrowDownOutlined /><span>{{
                        t('config.subscribe.disabled')
                      }}</span></Button
                    >
                  </div>
                </template>
                <Button type="link">
                  <SettingOutlined
                    style="font-size: 20px; color: rgb(179 201 255)" /></Button></Popover
            ></template>
          </Card>
        </Col>
      </Row>
    </Card>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Row, Col, Button, Popover } from 'ant-design-vue';
  import { SettingOutlined, EditOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  import { useGo } from '/@/hooks/web/usePage';
  const { t } = useI18n();
  const visible = ref<boolean>(false);
  const go = useGo();
  function handleClick() {
    console.log(123);
  }
</script>
<style scoped>
  .cardHeader {
    display: flex;
    gap: 20px;
  }

  ::v-deep(.ant-card-head-wrapper) {
    align-items: normal;
  }
</style>

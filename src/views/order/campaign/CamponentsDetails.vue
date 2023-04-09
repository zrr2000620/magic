<template>
  <PageWrapper>
    <template #headerContent>
      <div class="lg:flex" style="align-items: center; justify-content: space-between">
        <span style="font-size: 30px; font-weight: 500">{{ t($route.meta.title) }}</span>
        <div class="lg:flex" style="gap: 10px">
          <Button>{{ t('routes.order.back') }}</Button>
          <Button type="primary">{{ t('routes.order.remarks') }}</Button>
        </div>
      </div>
      <div class="lg:flex" style="flex-direction: row">
        <Descriptions :column="2" style="flex: 3">
          <DescriptionsItem :label="t('routes.order.orderDes.time')">
            2022/10/10 18:00:00</DescriptionsItem
          >
          <DescriptionsItem :label="t('routes.order.orderDes.merchant')">123</DescriptionsItem>
          <DescriptionsItem :label="t('routes.order.orderDes.date')"
            >2022/10/10 18:00:00</DescriptionsItem
          >
          <DescriptionsItem :label="t('routes.order.orderDes.subPlan')">123</DescriptionsItem>
          <DescriptionsItem :label="t('routes.order.orderDes.subType')">123</DescriptionsItem>
          <DescriptionsItem :label="t('routes.order.orderDes.subNote')">123</DescriptionsItem>
        </Descriptions>
        <div class="lg:flex" style="flex: 1; flex-direction: column; align-items: end">
          <span>{{ t('routes.order.table.payStatus') }}</span>
          <span style="font-size: 30px; font-weight: 500">Paid</span>
        </div>
        <div class="lg:flex" style="flex: 1; flex-direction: column; align-items: end">
          <span>{{ t('routes.order.table.amount') }}</span>
          <span style="font-size: 30px; font-weight: 500">$ 179.00</span>
        </div>
      </div>
    </template>
    <Card title="Information">
      <Descriptions :title="t('routes.order.orderDes.merInformation')">
        <DescriptionsItem :label="t('routes.order.orderDes.ID')">123</DescriptionsItem>
        <DescriptionsItem :label="t('routes.order.table.merchantName')">123</DescriptionsItem>
        <DescriptionsItem :label="t('routes.order.table.phone')">123</DescriptionsItem>
        <DescriptionsItem :label="t('routes.order.orderDes.owner')">123</DescriptionsItem>
        <DescriptionsItem :label="t('routes.order.orderDes.eMail')">123</DescriptionsItem>
      </Descriptions>
      <Descriptions :title="t('routes.order.orderDes.purInformation')">
        <DescriptionsItem :label="t('routes.order.table.orderNum')">123</DescriptionsItem>
        <DescriptionsItem :label="t('routes.order.table.location')">123</DescriptionsItem>
        <DescriptionsItem :label="t('routes.order.table.addOn')">123</DescriptionsItem>
        <DescriptionsItem :label="t('routes.order.table.amount')">123</DescriptionsItem>
        <DescriptionsItem :label="t('routes.order.table.payStatus')">123</DescriptionsItem>
        <DescriptionsItem :label="t('routes.order.table.expireDate')">123</DescriptionsItem>
        <DescriptionsItem :label="t('routes.order.table.payMethod')">123</DescriptionsItem>
      </Descriptions>
      <Descriptions :title="t('routes.order.orderDes.usage')">
        <DescriptionsItem>
          <div style="width: 50%">
            <div class="lg:flex" style="justify-content: space-between">
              <span>1000 text message credits </span>
              <span>50 / 1000 </span>
            </div>
            <Progress :percent="20" status="active" />
          </div>
        </DescriptionsItem>
      </Descriptions>
    </Card>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n';
  import { PageWrapper } from '/@/components/Page';
  import { Button, Descriptions, DescriptionsItem, Card, Progress } from 'ant-design-vue';
  const { t } = useI18n();
</script>
<style scoped></style>

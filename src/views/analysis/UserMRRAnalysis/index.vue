<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { BasicTitle } from '/@/components/Basic';
  import { Card, Col, Divider } from 'ant-design-vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { ref } from 'vue';
  import Chart from './Chart.vue';
  import Table from './Table.vue';

  const help = `
  Monthly recurring income (MRR) is the monthly value of the company's recurring (subscription) income. The MRR can be divided into five parts:

New MRR: filter out users who have not paid before the month of x. The total amount paid in the month of x

Retained MRR

Expansion MRR: Revenue in x month - revenue from non-new users in x-1 month, where revenue in x month is greater than revenue in x-1 month (0 if less than)

Resurrected MRR of old users: the revenue of Contacts who are not new users and have not paid in the x-1 month

Contract MRR: revenue from non-new users in x-1 month - revenue from non-new users in x-1 month (where the MRR revenue in x-1 month is less than the MRR revenue in x-1 month, and if it is greater, the statistics is 0)

Churn MRR: filter the revenue amount of users who have no revenue in x-1 month and have revenue in x-1 month
  `;

  const currentKey = ref('chart');

  const [registerForm] = useForm({
    schemas: [
      {
        label: '',
        field: '1',
        component: 'Select',
        componentProps: {
          placeholder: 'View by month',
        },
        colProps: {
          flex: '300px',
        },
      },
      {
        label: '',
        field: '2',
        component: 'Select',
        componentProps: {
          placeholder: 'From the first month',
        },
        colProps: {
          flex: '300px',
        },
      },
      {
        label: '',
        field: '3',
        component: 'Select',
        componentProps: {
          placeholder: 'Until the last full month',
        },
        colProps: {
          flex: '300px',
        },
      },
    ],
    showAdvancedButton: false,
    showActionButtonGroup: false,
    rowProps: {
      gutter: 30,
    },
  });
</script>

<template>
  <PageWrapper content-full-height dense>
    <Card>
      <BasicTitle :help-message="help" class="mb-5"> User MRR Analysis </BasicTitle>

      <BasicForm @register="registerForm">
        <template #formHeader>
          <Col :order="9" flex="auto">
            <div class="text-right text-base">
              <span
                class="hover:text-blue-400 cursor-pointer"
                :class="{ 'text-blue-400': currentKey === 'chart' }"
                @click="currentKey = 'chart'"
              >
                Chart
              </span>
              <Divider type="vertical" />
              <span
                class="hover:text-blue-400 cursor-pointer"
                :class="{ 'text-blue-400': currentKey === 'sheet' }"
                @click="currentKey = 'sheet'"
              >
                Sheet
              </span>
            </div>
          </Col>
        </template>
      </BasicForm>

      <template v-if="currentKey === 'chart'">
        <Chart />
      </template>
      <template v-else>
        <Table />
      </template>
    </Card>
  </PageWrapper>
</template>

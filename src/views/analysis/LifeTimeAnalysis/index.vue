<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { BasicTitle } from '/@/components/Basic';
  import { Card, Col, Divider } from 'ant-design-vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { ref } from 'vue';
  import Chart from './Chart.vue';
  import Table from './Table.vue';
  import { useI18n } from '/@/hooks/web/useI18n';

  const { t } = useI18n();
  const currentKey = ref('chart');

  const [registerForm] = useForm({
    schemas: [
      {
        label: '',
        field: '1',
        component: 'Select',
        componentProps: {
          placeholder: t('analysis.texts.viewMonthPlaceholder'),
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
          placeholder: t('analysis.texts.fromMonthPlaceholder'),
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
          placeholder: t('analysis.texts.untilMonthPlaceholder'),
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
  <PageWrapper content-full-height dense content-class="bg-[#fff]">
    <Card :bordered="false">
      <BasicTitle :help-message="t('analysis.texts.lifeTimeHelp')" class="mb-5"
        >{{ t('analysis.texts.lifetTimeTitle') }}
      </BasicTitle>

      <BasicForm @register="registerForm">
        <template #formHeader>
          <Col :order="9" flex="auto">
            <div class="text-right text-base">
              <span
                class="hover:text-blue-400 cursor-pointer"
                :class="{ 'text-blue-400': currentKey === 'chart' }"
                @click="currentKey = 'chart'"
              >
                {{ t('analysis.texts.chart') }}
              </span>
              <Divider type="vertical" />
              <span
                class="hover:text-blue-400 cursor-pointer"
                :class="{ 'text-blue-400': currentKey === 'sheet' }"
                @click="currentKey = 'sheet'"
              >
                {{ t('analysis.texts.sheet') }}
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

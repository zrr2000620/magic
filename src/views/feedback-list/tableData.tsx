import { FormProps } from 'ant-design-vue';
import { useI18n } from 'vue-i18n';

export function getFormConfig(): Partial<FormProps> {
  const { t } = useI18n();
  return {
    labelWidth: 130,
    schemas: [
      {
        field: `field111`,
        label: ``,
        component: 'Select',
        slot: 'custom',
        icon: '',
        colProps: {
          xl: 12,
          xxl: 5,
        },
      },
      ...[
        {
          field: `Reset Search  Feedback time：`,
          label: t('feedback.fedtim'),
          component: 'RangePicker',
          colProps: {
            xl: 20,
            xxl: 6,
          },
        },
        {
          field: `field1`,
          label: t('feedback.fedsta'),
          component: 'Select',
          colProps: {
            xl: 12,
            xxl: 6,
          },
        },
      ],
    ],
  };
}

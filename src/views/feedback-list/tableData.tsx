import { FormProps } from 'ant-design-vue';

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 130,
    schemas: [
      {
        field: `field11`,
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
          label: `Feedback time:`,
          component: 'RangePicker',
          colProps: {
            xl: 20,
            xxl: 6,
          },
        },
        {
          field: `field1`,
          label: `Feedback status:`,
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

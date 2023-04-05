import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();
export const cardList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 6; i++) {
    result.push({
      id: i,
      title: t('campaign.General'),
      extra: t('campaign.Edit'),
      icon: 'logos:vue',
      color: '#1890ff',
      author: 'Vben',
      percent: 20 * (i + 1),
    });
  }
  return result;
})();

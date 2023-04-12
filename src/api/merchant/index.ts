import { defHttp } from '/@/utils/http/axios';

export const getMerchantList = (data) =>
  defHttp.post({
    url: '/merchant/list ',
    data,
  });

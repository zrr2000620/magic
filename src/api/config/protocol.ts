import { defHttp } from '/@/utils/http/axios';

export const getProtocol = () =>
  defHttp.post({
    url: '/agree/detail',
  });

export const saveProtocol = (data: any) =>
  defHttp.post(
    {
      url: '/agree/save',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

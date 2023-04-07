import { defHttp } from '/@/utils/http/axios';

export const getMenuList = () =>
  defHttp.get({
    url: '/menu/list',
  });

export const delMenu = (data: any) =>
  defHttp.post(
    {
      url: '/menu/delete',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

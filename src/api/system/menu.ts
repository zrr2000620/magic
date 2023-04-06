import { defHttp } from '/@/utils/http/axios';

export const getMenuList = () =>
  defHttp.get({
    url: '/menu/list',
  });

export const addMenu = (data: any) =>
  defHttp.post(
    {
      url: '/menu/add',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

export const editMenu = (data: any) =>
  defHttp.post(
    {
      url: '/menu/update',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

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

import { defHttp } from '/@/utils/http/axios';

export const getAdminList = (data: any) =>
  defHttp.post({
    url: '/user/list',
    data,
  });

export const addAdmin = (data: any) =>
  defHttp.post(
    {
      url: '/user/add',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

export const editAdmin = (data: any) =>
  defHttp.post(
    {
      url: '/user/edit',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

export const delAdmin = (data: any) =>
  defHttp.post(
    {
      url: '/user/delete',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

export const getAdmin = (id: number) =>
  defHttp.get({
    url: '/user/getUserById',
    params: {
      id,
    },
  });

export const changeStatus = (data: any) =>
  defHttp.post(
    {
      url: '/user/bizStateUpdate',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

import { defHttp } from '/@/utils/http/axios';

export const getRoleList = () =>
  defHttp.get({
    url: '/role/getRoleList',
  });

export const addRole = (data: any) =>
  defHttp.post({
    url: '/role/add',
    data,
  });

export const editRole = (data: any) =>
  defHttp.post({
    url: '/role/update',
    data,
  });

export const delRole = (data: any) =>
  defHttp.post({
    url: '/role/delete',
    data,
  });

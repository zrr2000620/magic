import { defHttp } from '/@/utils/http/axios';

export const getCountryList = () =>
  defHttp.post({
    url: '/country/list',
  });

export const addCountry = (data: any) =>
  defHttp.post(
    {
      url: '/country/add',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

export const editCountry = (data: any) =>
  defHttp.post(
    {
      url: '/country/edit',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

export const delCountry = (data: any) =>
  defHttp.post(
    {
      url: '/country/delete',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

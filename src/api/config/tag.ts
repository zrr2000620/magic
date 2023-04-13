import { defHttp } from '/@/utils/http/axios';

export const getTagList = () =>
  defHttp.post({
    url: '/label/list',
  });

export const addTag = (data: any) =>
  defHttp.post(
    {
      url: '/label/add',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );
export const editTag = (data: any) =>
  defHttp.post(
    {
      url: '/label/edit',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

import { defHttp } from '/@/utils/http/axios';

export const getChannelList = () =>
  defHttp.get({
    url: '/magic-admin/channel/channels',
  });

export const changeChannel = (data) =>
  defHttp.post(
    {
      url: '/magic-admin/channel/isEnable',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

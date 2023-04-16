import { defHttp } from '/@/utils/http/axios';

export const getChannelList = () =>
  defHttp.get({
    url: '/channel/channels',
  });

export const changeChannel = (data) =>
  defHttp.post(
    {
      url: '/channel/isEnable',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

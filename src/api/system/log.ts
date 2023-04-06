import { defHttp } from '/@/utils/http/axios';

export const getLogList = (params: any) =>
  defHttp.get({
    url: '/operateLog/operateLogList',
    params,
  });

export const getOperateUserList = () =>
  defHttp.get({
    url: '/operateLog/operateUserList',
  });

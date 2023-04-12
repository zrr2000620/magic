import { defHttp } from '/@/utils/http/axios';
export const upload = (params) =>
  defHttp.uploadFile(
    {
      url: '/file/upload',
    },
    params,
  );

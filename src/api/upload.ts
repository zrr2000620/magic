import { defHttp } from '/@/utils/http/axios';
export const upload = (params, onUploadProgress) =>
  defHttp
    .uploadFile(
      {
        url: '/file/upload',
        onUploadProgress,
      },
      params,
    )
    .then((res) => ({ data: { ...res.data.data, name: res.data.data.fileName } }));

import { defHttp } from '/@/utils/http/axios';

export const getFeedbackList = (data: any) =>
  defHttp.post({
    url: '/merchantFeedback/feedbackList',
    data,
  });

export const handleFeedback = (data: any) =>
  defHttp.post(
    {
      url: '/merchantFeedback/edit',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

export const delFeedback = (data: any) =>
  defHttp.post(
    {
      url: '/merchantFeedback/delete',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

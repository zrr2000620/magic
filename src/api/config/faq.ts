import { defHttp } from '/@/utils/http/axios';

export const getFAQCategoryList = () =>
  defHttp.post({
    url: '/FAQClassify/list',
  });

export const addFAQCategory = (data: any) =>
  defHttp.post(
    {
      url: '/FAQClassify/add ',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

export const editFAQCategory = (data: any) =>
  defHttp.post(
    {
      url: '/FAQClassify/edit ',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

export const getFAQList = (data: any) =>
  defHttp.post({
    url: '/faq/faqList ',
    data,
  });

export const addFAQ = (data: any) =>
  defHttp.post(
    {
      url: '/faq/add',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

export const editFAQ = (data: any) =>
  defHttp.post(
    {
      url: '/faq/edit',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

export const delFAQ = (data: any) =>
  defHttp.post(
    {
      url: '/faq/delete',
      data,
    },
    {
      successMessageMode: 'message',
    },
  );

export const getFAQ = (id: number) =>
  defHttp.get({
    url: '/faq/info',
    params: {
      id,
    },
  });

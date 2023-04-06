import dayjs from 'dayjs';

export function searchDateTimeRangeCover(data: any, field: string) {
  const [startTime, endTime] = data[field] ?? [];
  if (data[field]) data[field] = undefined;
  return {
    ...data,
    startTime: startTime ? dayjs(startTime).format('YYYY-MM-DD') : startTime,
    endTime: endTime ? dayjs(endTime).format('YYYY-MM-DD') : endTime,
  };
}

export function searchFieldInputCover(data: any, type, valueField) {
  if (type) {
    data[type] = data[valueField];
  }
  return {
    ...data,
    [valueField]: undefined,
  };
}

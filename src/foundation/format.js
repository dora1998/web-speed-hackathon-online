import dayjs from './dayjs';

export const toISOString = (timeStr) =>
  dayjs(timeStr).format('YYYY-MM-DDTHH:mm:ss.SSSZ');

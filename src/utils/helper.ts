import moment from 'moment';

import { DateFormat } from './enums';

export const formattedDate = (
  date: string | Date | null | undefined,
  format: DateFormat = DateFormat.DEFAULT,
): string => {
  if (!date) return '';
  return moment(date).format(format);
};

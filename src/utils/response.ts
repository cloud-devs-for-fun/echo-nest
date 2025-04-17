import { STATUS_CODE_TYPE } from './constant';

export const jsonResponse = <T>(data: T, status: STATUS_CODE_TYPE): Response => {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
};

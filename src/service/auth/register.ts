import { STATUS_CODE_TYPE } from '@/utils/constant';
import { jsonResponse } from '@/utils/response';

export const register = async () => {
  return jsonResponse({ message: 'THIS IS REGISTER API' }, STATUS_CODE_TYPE.OK);
};

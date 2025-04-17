import pool from '@/libs/conn';
import { STATUS_CODE_TYPE } from '@/utils/constant';
import { jsonResponse } from '@/utils/response';

export const login = async () => {
  const db = `SELECT * FROM users`;

  const results = await pool.query(db);

  if (results.rows.length === 0)
    return jsonResponse({ message: 'No Available Users' }, STATUS_CODE_TYPE.OK);

  return jsonResponse(results.rows, STATUS_CODE_TYPE.OK);
};

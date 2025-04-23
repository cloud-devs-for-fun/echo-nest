import { NextRequest } from 'next/server';

import pool from '@/libs/conn';
import { STATUS_CODE_TYPE } from '@/utils/constant';
import { jsonResponse } from '@/utils/response';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const { userId, title, thread } = body;

    const postQuery = `
    INSERT INTO threads ("userId", title, thread)
    VALUES ($1, $2, $3)
    RETURNING *`;

    if (!userId || !title || !thread) {
      return jsonResponse({ message: 'All fields are required!' }, STATUS_CODE_TYPE.BAD_REQUEST);
    }

    const result = await pool.query(postQuery, [userId, title, thread]);

    return jsonResponse(result.rows[0], STATUS_CODE_TYPE.CREATED);
  } catch (error) {
    console.log(error);
    return jsonResponse({ message: 'Something wrong!' }, STATUS_CODE_TYPE.INTERNAL_SERVER_ERROR);
  }
};

export const GET = async () => {
  const getQuery = `SELECT id, title, thread, created_at FROM threads ORDER BY created_at DESC`;

  const result = await pool.query(getQuery);

  if (result.rows.length === 0)
    return jsonResponse({ threads: [], message: 'NO DATA AVAILABLE' }, STATUS_CODE_TYPE.OK);

  return jsonResponse(result.rows, STATUS_CODE_TYPE.OK);
};

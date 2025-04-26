import { auth } from '@/libs/auth';
import { STATUS_CODE_TYPE } from '@/utils/constant';
import { jsonResponse } from '@/utils/response';
import { NextRequest } from 'next/server';
import { ThreadsRepository } from '../repositories/threads';
import pool from '@/libs/conn';

export const ThreadsService = {
  postThread: async (req: NextRequest) => {
    try {
      const body = await req.json();

      const session = await auth();

      console.log('userId', session);

      if (!session || !session.user || !session.user.id) {
        return jsonResponse(
          { message: 'User is not authenticated' },
          STATUS_CODE_TYPE.UNAUTHORIZED,
        );
      }

      const { title, thread } = body;

      if (!title || !thread) {
        return jsonResponse({ message: 'All fields are required!' }, STATUS_CODE_TYPE.BAD_REQUEST);
      }

      const result = await pool.query(ThreadsRepository.postThread, [
        session.user.id,
        title,
        thread,
      ]);

      return jsonResponse(result.rows[0], STATUS_CODE_TYPE.CREATED);
    } catch (error) {
      console.log(error);
      return jsonResponse({ message: 'Something wrong!' }, STATUS_CODE_TYPE.INTERNAL_SERVER_ERROR);
    }
  },
};

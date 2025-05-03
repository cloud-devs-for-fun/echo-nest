import { NextRequest } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import pool from '@/libs/conn';
import { auth } from '@/libs/auth';

import { jsonResponse } from '@/utils/response';

import { ThreadsRepository } from '@/service/repositories/threads';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const session = await auth();

    console.log('userId', session);
    if (!session || !session.user || !session.user.id) {
      return jsonResponse({ message: 'User is not authenticated' }, StatusCodes.UNAUTHORIZED);
    }

    const { title, thread } = body;

    if (!title || !thread) {
      return jsonResponse({ message: 'All fields are required!' }, StatusCodes.BAD_REQUEST);
    }

    const result = await pool.query(ThreadsRepository.postThread, [session.user.id, title, thread]);

    return jsonResponse(
      { message: 'Thread created successfully', data: result.rows[0] },
      StatusCodes.CREATED,
    );
  } catch (error) {
    console.log(error);
    return jsonResponse({ message: 'Something wrong!' }, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const GET = async () => {
  const result = await pool.query(ThreadsRepository.allThreads);

  if (result.rows.length === 0)
    return jsonResponse({ threads: [], message: 'NO DATA AVAILABLE' }, StatusCodes.NO_CONTENT);

  return jsonResponse(result.rows, StatusCodes.OK);
};

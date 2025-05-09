import { NextRequest } from 'next/server';
import { StatusCodes } from 'http-status-codes';

import pool from '@/libs/conn';
import { auth } from '@/libs/auth';

import { jsonResponse } from '@/utils/response';

import { ThreadsRepository } from '@/service/repositories/threads';

export const GET = async () => {
  const result = await pool.query(ThreadsRepository.allThreads);

  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return jsonResponse({ message: 'User is not authenticated' }, StatusCodes.UNAUTHORIZED);
  }

  if (result.rows.length === 0)
    return jsonResponse({ threads: [], message: 'NO DATA AVAILABLE' }, StatusCodes.NO_CONTENT);

  return jsonResponse(result.rows, StatusCodes.OK);
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const session = await auth();

    if (!session || !session.user || !session.user.id) {
      return jsonResponse({ message: 'User is not authenticated' }, StatusCodes.UNAUTHORIZED);
    }

    const { title, thread } = body;

    if (!title || !thread) {
      return jsonResponse({ message: 'All fields are required!' }, StatusCodes.BAD_REQUEST);
    }

    const result = await pool.query(ThreadsRepository.postThread, [session.user.id, title, thread]);

    return jsonResponse(result.rows[0], StatusCodes.CREATED);
  } catch (error) {
    return jsonResponse({ message: error }, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get('id');

    const session = await auth();
    if (!session || !session.user || !session.user.id) {
      return jsonResponse({ message: 'User is not authenticated' }, StatusCodes.UNAUTHORIZED);
    }

    if (!id) {
      return jsonResponse({ message: 'Missing post ID' }, StatusCodes.BAD_REQUEST);
    }

    const result = await pool.query(ThreadsRepository.deleteThread, [id]);

    if (result.rowCount === 0) {
      return jsonResponse({ message: 'Post not found or already deleted' }, StatusCodes.NOT_FOUND);
    }

    return jsonResponse({ message: `Post ${id} deleted successfully` }, StatusCodes.OK);
  } catch (error) {
    return jsonResponse({ message: error }, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const id = req.nextUrl.searchParams.get('id');
    const body = await req.json();
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
      return jsonResponse({ message: 'User is not authenticated' }, StatusCodes.UNAUTHORIZED);
    }

    const { title, thread } = body;

    if (!title || !thread) {
      return jsonResponse({ message: 'All fields are required!' }, StatusCodes.BAD_REQUEST);
    }

    return jsonResponse({ id, body }, StatusCodes.CREATED);
  } catch (error) {
    return jsonResponse({ message: error }, StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

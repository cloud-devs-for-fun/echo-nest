import PostgresAdapter from '@auth/pg-adapter';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

import pool from './conn';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PostgresAdapter(pool),
  providers: [Google],
});
